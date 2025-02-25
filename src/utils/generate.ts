import path from 'path';
import fs from 'fs';
import { generateAllTypes } from './schema-to-types';
import { generateAllApis } from './schema-to-api';

console.log("Starting code generation...");

// Generate types
const typesOutputDir = path.resolve(__dirname, '../types/generated');
const apisOutputDir = path.resolve(__dirname, '../endpoints/generated');

console.log("Types output directory:", typesOutputDir);
console.log("APIs output directory:", apisOutputDir);

// Create directories if they don't exist
if (!fs.existsSync(typesOutputDir)) {
  console.log("Creating types output directory:", typesOutputDir);
  fs.mkdirSync(typesOutputDir, { recursive: true });
}

if (!fs.existsSync(apisOutputDir)) {
  console.log("Creating APIs output directory:", apisOutputDir);
  fs.mkdirSync(apisOutputDir, { recursive: true });
}

// Generate TypeScript interfaces from OpenAPI schemas
console.log("Generating types...");
generateAllTypes(typesOutputDir);

// Generate API classes from OpenAPI schemas
console.log("Generating APIs...");
generateAllApis(apisOutputDir);

console.log("Code generation completed successfully."); 