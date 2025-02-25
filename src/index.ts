import dotenv from 'dotenv';
import { CalendarsAPI } from './endpoints/calendars';
// Import generated API modules
import * as GeneratedAPIs from './endpoints/generated';
// Import other endpoint modules as they are created

// Load environment variables
dotenv.config();

export class GHLClient {
  public calendars: CalendarsAPI;
  // Add generated API properties
  
  // Dynamic properties for all generated APIs
  [key: string]: any;

  constructor(apiKey?: string) {
    const key = apiKey || process.env.GHL_API_KEY;
    
    if (!key) {
      throw new Error('API key is required. Provide it as a constructor parameter or set GHL_API_KEY in your environment variables.');
    }

    // Initialize endpoint modules
    this.calendars = new CalendarsAPI(key);
    
    // Initialize all generated API modules
    this.initializeGeneratedAPIs(key);
  }
  
  private initializeGeneratedAPIs(apiKey: string): void {
    // For each API class in GeneratedAPIs, initialize it and add it to this instance
    for (const apiName in GeneratedAPIs) {
      if (Object.prototype.hasOwnProperty.call(GeneratedAPIs, apiName)) {
        const ApiClass = (GeneratedAPIs as any)[apiName];
        if (typeof ApiClass === 'function') {
          // Convert CalendarsAPI to calendars
          const propertyName = apiName.replace(/API$/, '').toLowerCase();
          this[propertyName] = new ApiClass(apiKey);
        }
      }
    }
  }
}

// Export types
export * from './types';
export * from './types/generated';

// Export individual API modules for direct use if needed
export { CalendarsAPI } from './endpoints/calendars';
// Export generated API modules
export * from './endpoints/generated';
// Export other endpoint modules as they are created 