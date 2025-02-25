require('dotenv').config();
const { GHLClient } = require('../dist');

// Initialize the client with your API key
// You can either pass it directly or set it in your .env file
const apiKey = process.env.GHL_API_KEY;
const ghlClient = new GHLClient(apiKey);

// Example: Get free slots for a calendar
async function getFreeSlots() {
  try {
    const freeSlots = await ghlClient.calendars.getFreeSlots({
      calendarId: 'your_calendar_id', // Replace with your actual calendar ID
      startDate: '1548086400000', // Example timestamp
      endDate: '1601856000000' // Example timestamp
    });
    console.log('Free slots:', freeSlots);
  } catch (error) {
    console.error('Error getting free slots:', error);
  }
}

// Example: Get all calendars
async function getCalendars() {
  try {
    const calendars = await ghlClient.calendars.getCalendars({
      limit: 10,
      page: 1
    });
    console.log('Calendars:', calendars);
  } catch (error) {
    console.error('Error getting calendars:', error);
  }
}

// Example: Create a new calendar
async function createCalendar() {
  try {
    const newCalendar = await ghlClient.calendars.createCalendar({
      name: 'My New Calendar',
      description: 'A calendar created via the API',
      timezone: 'America/New_York'
    });
    console.log('New calendar created:', newCalendar);
    return newCalendar.id;
  } catch (error) {
    console.error('Error creating calendar:', error);
  }
}

// Example: Update a calendar
async function updateCalendar(calendarId) {
  try {
    const updatedCalendar = await ghlClient.calendars.updateCalendar({
      calendarId,
      name: 'Updated Calendar Name',
      description: 'This calendar was updated via the API'
    });
    console.log('Calendar updated:', updatedCalendar);
  } catch (error) {
    console.error('Error updating calendar:', error);
  }
}

// Example: Delete a calendar
async function deleteCalendar(calendarId) {
  try {
    const result = await ghlClient.calendars.deleteCalendar({
      calendarId
    });
    console.log('Calendar deleted:', result);
  } catch (error) {
    console.error('Error deleting calendar:', error);
  }
}

// Run the examples
async function runExamples() {
  console.log('Running calendar API examples...');
  
  // Get all calendars
  await getCalendars();
  
  // Create a new calendar
  const newCalendarId = await createCalendar();
  
  if (newCalendarId) {
    // Update the calendar
    await updateCalendar(newCalendarId);
    
    // Get free slots for the calendar
    await getFreeSlots();
    
    // Delete the calendar
    await deleteCalendar(newCalendarId);
  }
}

runExamples(); 