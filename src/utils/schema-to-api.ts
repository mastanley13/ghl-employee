import { loadSchema, getPaths } from './schema-loader';
import fs from 'fs';
import path from 'path';

/**
 * Converts an HTTP method to its corresponding function name
 * @param method The HTTP method
 * @returns The function name
 */
function methodToFunctionName(method: string): string {
  switch (method.toLowerCase()) {
    case 'get': return 'get';
    case 'post': return 'post';
    case 'put': return 'put';
    case 'delete': return 'delete';
    case 'patch': return 'patch';
    default: return method.toLowerCase();
  }
}

/**
 * Converts a path parameter format from {param} to ${param}
 * @param path The API path
 * @returns The converted path for template literals
 */
function convertPathParams(path: string): string {
  return path.replace(/{([^}]+)}/g, '${params.$1}');
}

/**
 * Sanitizes an operationId by replacing hyphens with underscores
 * @param operationId The operation ID to sanitize
 * @returns The sanitized operation ID
 */
function sanitizeOperationId(operationId: string): string {
  return operationId.replace(/-/g, '_');
}

/**
 * Generates an API class for a schema
 * @param schemaName The name of the schema file without .json extension
 * @param outputPath The path to write the output TypeScript file
 */
export function generateApi(schemaName: string, outputPath: string): void {
  try {
    const schema = loadSchema(schemaName);
    const paths = getPaths(schema);
    
    if (Object.keys(paths).length === 0) {
      console.warn(`No paths found in ${schemaName}`);
      return;
    }
    
    const className = `${schemaName.charAt(0).toUpperCase() + schemaName.slice(1)}API`;
    let output = `import { APIClient } from '../../utils/api-client';\n`;
    output += `// Import types\n`;
    output += `import {\n`;
    
    // Collect type names for imports
    const typeNames: Set<string> = new Set();
    
    // Generate method for each endpoint
    const methods: string[] = [];
    
    Object.entries(paths).forEach(([path, methodsObj]: [string, any]) => {
      Object.entries(methodsObj).forEach(([method, endpoint]: [string, any]) => {
        const operationId = endpoint.operationId || 
          `${method.toLowerCase()}${path.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}`;
        
        // Sanitize operation ID
        const sanitizedOperationId = sanitizeOperationId(operationId);
        
        // Add parameter and response types to imports
        const responseTypeName = `${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}Response`;
        const paramsTypeName = `${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}Params`;
        const requestBodyTypeName = `${sanitizedOperationId.charAt(0).toUpperCase() + sanitizedOperationId.slice(1)}RequestBody`;
        
        if (endpoint.parameters && endpoint.parameters.length > 0) {
          typeNames.add(paramsTypeName);
        }
        
        if (endpoint.requestBody) {
          typeNames.add(requestBodyTypeName);
        }
        
        if (endpoint.responses && (endpoint.responses['200'] || endpoint.responses['201'])) {
          typeNames.add(responseTypeName);
        }
        
        // Generate method
        let methodCode = `  /**\n`;
        methodCode += `   * ${endpoint.summary || sanitizedOperationId}\n`;
        methodCode += `   * ${endpoint.description || ''}\n`;
        
        if (endpoint.parameters && endpoint.parameters.length > 0) {
          methodCode += `   * @param params The request parameters\n`;
        }
        
        if (endpoint.requestBody) {
          methodCode += `   * @param data The request body\n`;
        }
        
        methodCode += `   * @returns Promise with the response data\n`;
        methodCode += `   */\n`;
        
        // Method signature
        if (endpoint.parameters && endpoint.parameters.length > 0) {
          if (endpoint.requestBody) {
            methodCode += `  async ${sanitizedOperationId}(params: ${paramsTypeName}, data: ${requestBodyTypeName}): Promise<${responseTypeName}> {\n`;
          } else {
            methodCode += `  async ${sanitizedOperationId}(params: ${paramsTypeName}): Promise<${responseTypeName}> {\n`;
          }
        } else if (endpoint.requestBody) {
          methodCode += `  async ${sanitizedOperationId}(data: ${requestBodyTypeName}): Promise<${responseTypeName}> {\n`;
        } else {
          methodCode += `  async ${sanitizedOperationId}(): Promise<${responseTypeName}> {\n`;
        }
        
        // Extract path parameters
        const pathParams = path.match(/{([^}]+)}/g) || [];
        
        // Method implementation
        if (pathParams.length > 0) {
          const apiPath = convertPathParams(path);
          methodCode += `    const url = \`${apiPath}\`;\n`;
          
          // Extract query parameters
          if (endpoint.parameters) {
            const queryParams = endpoint.parameters.filter((p: any) => p.in === 'query').map((p: any) => p.name);
            
            if (queryParams.length > 0) {
              methodCode += `    const queryParams: Record<string, any> = {};\n`;
              
              queryParams.forEach((param: string) => {
                methodCode += `    if (params.${param} !== undefined) queryParams.${param} = params.${param};\n`;
              });
              
              if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, { params: queryParams });\n`;
              } else if (endpoint.requestBody) {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, data, { params: queryParams });\n`;
              } else {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, {}, { params: queryParams });\n`;
              }
            } else {
              if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url);\n`;
              } else if (endpoint.requestBody) {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, data);\n`;
              } else {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, {});\n`;
              }
            }
          } else {
            if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
              methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url);\n`;
            } else if (endpoint.requestBody) {
              methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, data);\n`;
            } else {
              methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>(url, {});\n`;
            }
          }
        } else {
          if (endpoint.parameters) {
            const queryParams = endpoint.parameters.filter((p: any) => p.in === 'query').map((p: any) => p.name);
            
            if (queryParams.length > 0) {
              methodCode += `    const queryParams: Record<string, any> = {};\n`;
              
              queryParams.forEach((param: string) => {
                methodCode += `    if (params.${param} !== undefined) queryParams.${param} = params.${param};\n`;
              });
              
              if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', { params: queryParams });\n`;
              } else if (endpoint.requestBody) {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', data, { params: queryParams });\n`;
              } else {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', {}, { params: queryParams });\n`;
              }
            } else {
              if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}');\n`;
              } else if (endpoint.requestBody) {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', data);\n`;
              } else {
                methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', {});\n`;
              }
            }
          } else {
            if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
              methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}');\n`;
            } else if (endpoint.requestBody) {
              methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', data);\n`;
            } else {
              methodCode += `    return this.client.${methodToFunctionName(method)}<${responseTypeName}>('${path}', {});\n`;
            }
          }
        }
        
        methodCode += `  }\n`;
        methods.push(methodCode);
      });
    });
    
    // Complete imports
    output += Array.from(typeNames).join(',\n') + '\n';
    output += `} from '../../types/generated/${schemaName}';\n\n`;
    
    // Generate class
    output += `export class ${className} {\n`;
    output += `  private client: APIClient;\n\n`;
    output += `  constructor(apiKey: string) {\n`;
    output += `    this.client = new APIClient(apiKey);\n`;
    output += `  }\n\n`;
    
    // Add all methods
    output += methods.join('\n');
    
    output += `}\n`;
    
    fs.writeFileSync(outputPath, output);
    console.log(`Generated API for ${schemaName} at ${outputPath}`);
  } catch (error) {
    console.error(`Error generating API for ${schemaName}:`, error);
  }
}

/**
 * Generates API classes for all available schemas
 * @param outputDir The directory to write the output TypeScript files
 */
export function generateAllApis(outputDir: string): void {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Get list of all schema files in the jsonLibrary directory
    const libraryPath = path.resolve(__dirname, '../../GHL-API-Library/jsonLibrary');
    const files = fs.readdirSync(libraryPath);
    
    // Generate API for each schema
    files
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        const schemaName = file.replace('.json', '');
        const outputPath = path.join(outputDir, `${schemaName}.ts`);
        generateApi(schemaName, outputPath);
      });
    
    // Generate index.ts file to export all APIs
    const exportStatements = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const schemaName = file.replace('.json', '');
        const className = `${schemaName.charAt(0).toUpperCase() + schemaName.slice(1)}API`;
        return `export { ${className} } from './${schemaName}';`;
      })
      .join('\n');
    
    fs.writeFileSync(path.join(outputDir, 'index.ts'), exportStatements);
    console.log(`Generated index.ts with exports for all API classes`);
  } catch (error) {
    console.error('Error generating all APIs:', error);
  }
} 