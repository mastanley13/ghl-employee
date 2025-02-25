// Types for Calendar endpoints

// Get Free Slots
export interface GetFreeSlotsParams {
  calendarId: string;
  startDate: string; // timestamp in milliseconds
  endDate: string; // timestamp in milliseconds
  timezone?: string;
  userId?: string;
  userIds?: string[];
  enableLockBusy?: boolean;
}

export interface FreeSlot {
  start: string;
  end: string;
}

export interface GetFreeSlotsResponse {
  slots: FreeSlot[];
}

// Update Calendar
export interface UpdateCalendarParams {
  calendarId: string;
  name?: string;
  description?: string;
  timezone?: string;
  // Add other calendar properties as needed
}

export interface UpdateCalendarResponse {
  id: string;
  name: string;
  description: string;
  timezone: string;
  // Add other calendar properties as needed
}

// Get Calendar
export interface GetCalendarParams {
  calendarId: string;
}

export interface GetCalendarResponse {
  id: string;
  name: string;
  description: string;
  timezone: string;
  // Add other calendar properties as needed
}

// Delete Calendar
export interface DeleteCalendarParams {
  calendarId: string;
}

export interface DeleteCalendarResponse {
  success: boolean;
  message: string;
}

// Create Block Slot
export interface CreateBlockSlotParams {
  calendarId: string;
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  title?: string;
  description?: string;
}

export interface CreateBlockSlotResponse {
  id: string;
  calendarId: string;
  startTime: string;
  endTime: string;
  title: string;
  description: string;
}

// Get Calendars
export interface GetCalendarsParams {
  limit?: number;
  page?: number;
}

export interface Calendar {
  id: string;
  name: string;
  description: string;
  timezone: string;
  // Add other calendar properties as needed
}

export interface GetCalendarsResponse {
  calendars: Calendar[];
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
}

// Create Calendar
export interface CreateCalendarParams {
  name: string;
  description?: string;
  timezone?: string;
  // Add other calendar properties as needed
}

export interface CreateCalendarResponse {
  id: string;
  name: string;
  description: string;
  timezone: string;
  // Add other calendar properties as needed
} 