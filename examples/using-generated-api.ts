// Example of using the generated GoHighLevel API
import dotenv from 'dotenv';
import { GHLClient } from '../src';

// Load environment variables from .env file
dotenv.config();

// Get API key from environment variables or specify directly
const apiKey = process.env.GHL_API_KEY;

if (!apiKey) {
  console.error('API key is required. Set GHL_API_KEY in your .env file');
  process.exit(1);
}

// Create a new instance of the GHLClient
const client = new GHLClient(apiKey);

async function main() {
  try {
    // Example 1: Get calendar groups
    console.log('Example 1: Getting calendar groups');
    const locationId = 'your-location-id'; // Replace with your actual location ID
    const groups = await client.calendars.get_groups({
      Authorization: 'Bearer ' + apiKey,
      Version: '2021-07-28',
      locationId
    });
    console.log('Calendar groups:', groups);
    
    // Example 2: Get contacts
    console.log('\nExample 2: Getting contacts');
    const contacts = await client.contacts.get_contacts({
      Authorization: 'Bearer ' + apiKey,
      Version: '2021-07-28',
      locationId,
      limit: 10
    });
    console.log('Contacts:', contacts);
    
    // Example 3: Get locations
    console.log('\nExample 3: Getting locations');
    const locations = await client.locations.get_locations({
      Authorization: 'Bearer ' + apiKey,
      Version: '2021-07-28'
    });
    console.log('Locations:', locations);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the examples
main(); 