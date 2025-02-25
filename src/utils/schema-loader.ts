import fs from 'fs';
import path from 'path';

/**
 * Loads and parses an OpenAPI schema JSON file
 * @param schemaName The name of the schema file without the .json extension
 * @returns The parsed OpenAPI schema object
 */
export function loadSchema(schemaName: string): any {
  try {
    const schemaPath = path.resolve(__dirname, `../../GHL-API-Library/jsonLibrary/${schemaName}.json`);
    console.log(`Looking for schema at: ${schemaPath}`);
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    return JSON.parse(schemaContent);
  } catch (error) {
    console.error(`Error loading schema ${schemaName}:`, error);
    throw new Error(`Failed to load schema ${schemaName}`);
  }
}

/**
 * Gets all available schema names from the jsonLibrary directory
 * @returns Array of schema names without the .json extension
 */
export function getAvailableSchemas(): string[] {
  try {
    const libraryPath = path.resolve(__dirname, '../../GHL-API-Library/jsonLibrary');
    console.log(`Looking for schemas in directory: ${libraryPath}`);
    const files = fs.readdirSync(libraryPath);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error getting available schemas:', error);
    return [];
  }
}

/**
 * Gets all paths from an OpenAPI schema
 * @param schema The OpenAPI schema object
 * @returns An object with all paths and their methods
 */
export function getPaths(schema: any): Record<string, any> {
  if (!schema || !schema.paths) {
    return {};
  }
  return schema.paths;
}

/**
 * Gets all components/schemas from an OpenAPI schema
 * @param schema The OpenAPI schema object
 * @returns An object with all schema components
 */
export function getSchemas(schema: any): Record<string, any> {
  if (!schema || !schema.components || !schema.components.schemas) {
    return {};
  }
  return schema.components.schemas;
} 