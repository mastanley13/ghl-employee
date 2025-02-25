import { loadSchema, getSchemas, getPaths } from './schema-loader';
import fs from 'fs';
import path from 'path';

// OpenAPI to TypeScript type mappings
const typeMapping: Record<string, string> = {
  string: 'string',
  number: 'number',
  integer: 'number',
  boolean: 'boolean',
  array: 'Array',
  object: 'Record<string, any>',
  null: 'null',
  any: 'any'
};

/**
 * Converts an OpenAPI property to a TypeScript property definition
 * @param propertyName The name of the property
 * @param property The OpenAPI property definition
 * @returns TypeScript property definition
 */
function convertProperty(propertyName: string, property: any): string {
  let tsType: string;
  const isRequired = property.required === true;
  
  if (property.$ref) {
    // Handle reference to another schema
    const refName = property.$ref.split('/').pop();
    tsType = refName;
  } else if (property.type === 'array' && property.items) {
    // Handle array type
    if (property.items.$ref) {
      const refName = property.items.$ref.split('/').pop();
      tsType = `${refName}[]`;
    } else {
      tsType = `${typeMapping[property.items.type] || 'any'}[]`;
    }
  } else if (property.type === 'object' && property.properties) {
    // Handle nested object
    tsType = '{ ' + 
      Object.entries(property.properties)
        .map(([name, prop]: [string, any]) => 
          `${name}${prop.required ? '' : '?'}: ${convertProperty(name, prop).split(':')[1].trim()}`)
        .join('; ') + 
      ' }';
  } else if (property.enum) {
    // Handle enum
    tsType = property.enum.map((e: any) => typeof e === 'string' ? `'${e}'` : e).join(' | ');
  } else {
    // Handle primitive type
    tsType = typeMapping[property.type] || 'any';
  }
  
  return `${propertyName}${isRequired ? '' : '?'}: ${tsType}`;
}

/**
 * Converts an OpenAPI schema to a TypeScript interface
 * @param schemaName The name of the schema
 * @param schema The OpenAPI schema definition
 * @returns TypeScript interface definition
 */
function convertSchema(schemaName: string, schema: any): string {
  if (!schema.properties && !schema.type) {
    return `export type ${schemaName} = any;`;
  }
  
  if (schema.type === 'array' && schema.items) {
    if (schema.items.$ref) {
      const refName = schema.items.$ref.split('/').pop();
      return `export type ${schemaName} = ${refName}[];`;
    }
    return `export type ${schemaName} = ${typeMapping[schema.items.type] || 'any'}[];`;
  }
  
  if (schema.type && schema.type !== 'object') {
    return `export type ${schemaName} = ${typeMapping[schema.type] || 'any'};`;
  }
  
  const properties = schema.properties || {};
  const requiredProps = schema.required || [];
  
  // Mark required properties
  Object.keys(properties).forEach(propName => {
    properties[propName].required = requiredProps.includes(propName);
  });
  
  const propDefinitions = Object.entries(properties)
    .map(([propName, propSchema]: [string, any]) => {
      return `  ${convertProperty(propName, propSchema)};`;
    })
    .join('\n');
  
  return `export interface ${schemaName} {\n${propDefinitions}\n}`;
}

/**
 * Generates TypeScript type definitions for a schema
 * @param schemaName The name of the schema file without .json extension
 * @param outputPath The path to write the output TypeScript file
 */
export function generateTypes(schemaName: string, outputPath: string): void {
  try {
    const schema = loadSchema(schemaName);
    const schemas = getSchemas(schema);
    
    if (Object.keys(schemas).length === 0) {
      console.warn(`No schemas found in ${schemaName}`);
      return;
    }
    
    let output = `// Generated TypeScript interfaces for ${schemaName}\n\n`;
    
    // Generate interfaces for all schemas
    Object.entries(schemas).forEach(([name, definition]) => {
      output += convertSchema(name, definition) + '\n\n';
    });
    
    // Generate request and response types for API endpoints
    const paths = getPaths(schema);
    Object.entries(paths).forEach(([path, methods]: [string, any]) => {
      Object.entries(methods).forEach(([method, endpoint]: [string, any]) => {
        const operationId = endpoint.operationId || `${method}${path.replace(/[^a-zA-Z0-9]/g, '')}`;
        
        // Convert hyphens to underscores in type names
        const sanitizedOperationId = operationId.replace(/-/g, '_');
        
        // Generate request parameter type
        if (endpoint.parameters && endpoint.parameters.length > 0) {
          const params = endpoint.parameters
            .map((param: any) => {
              const isRequired = param.required === true;
              const type = param.schema?.type || 'any';
              return `  ${param.name}${isRequired ? '' : '?'}: ${typeMapping[type] || 'any'};`;
            })
            .join('\n');
          
          output += `export interface ${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}Params {\n${params}\n}\n\n`;
        }
        
        // Generate request body type
        if (endpoint.requestBody) {
          const contentType = Object.keys(endpoint.requestBody.content || {})[0] || 'application/json';
          const schema = endpoint.requestBody.content?.[contentType]?.schema;
          
          if (schema) {
            if (schema.$ref) {
              const refName = schema.$ref.split('/').pop();
              output += `export type ${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}RequestBody = ${refName};\n\n`;
            } else {
              output += convertSchema(`${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}RequestBody`, schema) + '\n\n';
            }
          }
        }
        
        // Generate response type
        const successResponse = endpoint.responses?.['200'] || endpoint.responses?.['201'];
        if (successResponse) {
          const contentType = Object.keys(successResponse.content || {})[0] || 'application/json';
          const schema = successResponse.content?.[contentType]?.schema;
          
          if (schema) {
            if (schema.$ref) {
              const refName = schema.$ref.split('/').pop();
              output += `export type ${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}Response = ${refName};\n\n`;
            } else {
              output += convertSchema(`${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}Response`, schema) + '\n\n';
            }
          }
        }
      });
    });
    
    fs.writeFileSync(outputPath, output);
    console.log(`Generated types for ${schemaName} at ${outputPath}`);
  } catch (error) {
    console.error(`Error generating types for ${schemaName}:`, error);
  }
}

/**
 * Generates TypeScript type definitions for all available schemas
 * @param outputDir The directory to write the output TypeScript files
 */
export function generateAllTypes(outputDir: string): void {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Get list of all schema files in the jsonLibrary directory
    const libraryPath = path.resolve(__dirname, '../../GHL-API-Library/jsonLibrary');
    const files = fs.readdirSync(libraryPath);
    
    // Generate types for each schema
    files
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        const schemaName = file.replace('.json', '');
        const outputPath = path.join(outputDir, `${schemaName}.ts`);
        generateTypes(schemaName, outputPath);
      });
    
    // Generate index.ts file to export all types
    const exportStatements = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const schemaName = file.replace('.json', '');
        return `export * from './${schemaName}';`;
      })
      .join('\n');
    
    fs.writeFileSync(path.join(outputDir, 'index.ts'), exportStatements);
    console.log(`Generated index.ts with exports for all schema types`);
  } catch (error) {
    console.error('Error generating all types:', error);
  }
} 