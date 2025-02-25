import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_groupsParams,
Get_groupsResponse,
Create_calendar_groupParams,
Create_calendar_groupRequestBody,
Create_calendar_groupResponse,
Validate_groups_slugParams,
Validate_groups_slugRequestBody,
Validate_groups_slugResponse,
Delete_groupParams,
Delete_groupResponse,
Edit_groupParams,
Edit_groupRequestBody,
Edit_groupResponse,
Disable_groupParams,
Disable_groupRequestBody,
Disable_groupResponse,
Get_calendar_eventsParams,
Get_calendar_eventsResponse,
Get_blocked_slotsParams,
Get_blocked_slotsResponse,
Get_slotsParams,
Get_slotsResponse,
Update_calendarParams,
Update_calendarRequestBody,
Update_calendarResponse,
Get_calendarParams,
Get_calendarResponse,
Delete_calendarParams,
Delete_calendarResponse,
Get_appointmentParams,
Get_appointmentResponse,
Edit_appointmentParams,
Edit_appointmentRequestBody,
Edit_appointmentResponse,
Create_appointmentParams,
Create_appointmentRequestBody,
Create_appointmentResponse,
Create_block_slotParams,
Create_block_slotRequestBody,
Create_block_slotResponse,
Edit_block_slotParams,
Edit_block_slotRequestBody,
Edit_block_slotResponse,
Delete_eventParams,
Delete_eventRequestBody,
Delete_eventResponse,
Get_appointment_notesParams,
Get_appointment_notesResponse,
Create_appointment_noteParams,
Create_appointment_noteRequestBody,
Create_appointment_noteResponse,
Update_appointment_noteParams,
Update_appointment_noteRequestBody,
Update_appointment_noteResponse,
Delete_appointment_noteParams,
Delete_appointment_noteResponse,
Get_calendar_resourceParams,
Get_calendar_resourceResponse,
Update_calendar_resourceParams,
Update_calendar_resourceRequestBody,
Update_calendar_resourceResponse,
Delete_calendar_resourceParams,
Delete_calendar_resourceResponse,
Fetch_calendar_resourcesParams,
Fetch_calendar_resourcesResponse,
Create_calendar_resourceParams,
Create_calendar_resourceRequestBody,
Create_calendar_resourceResponse,
Create_event_notificationParams,
Create_event_notificationRequestBody,
Create_event_notificationResponse,
Get_event_notificationParams,
Get_event_notificationResponse,
Find_event_notificationParams,
Find_event_notificationResponse,
Delete_event_notificationParams,
Delete_event_notificationResponse,
Update_event_notificationParams,
Update_event_notificationRequestBody,
Update_event_notificationResponse,
Get_calendarsParams,
Get_calendarsResponse,
Create_calendarParams,
Create_calendarRequestBody,
Create_calendarResponse
} from '../../types/generated/calendars';

export class CalendarsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Groups
   * Get all calendar groups in a location.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_groups(params: Get_groupsParams): Promise<Get_groupsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_groupsResponse>('/calendars/groups', { params: queryParams });
  }

  /**
   * Create Calendar Group
   * Create Calendar Group
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_calendar_group(params: Create_calendar_groupParams, data: Create_calendar_groupRequestBody): Promise<Create_calendar_groupResponse> {
    return this.client.post<Create_calendar_groupResponse>('/calendars/groups', data);
  }

  /**
   * Validate group slug
   * Validate if group slug is available or not.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async validate_groups_slug(params: Validate_groups_slugParams, data: Validate_groups_slugRequestBody): Promise<Validate_groups_slugResponse> {
    return this.client.post<Validate_groups_slugResponse>('/calendars/groups/validate-slug', data);
  }

  /**
   * Delete Group
   * Delete Group
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_group(params: Delete_groupParams): Promise<Delete_groupResponse> {
    const url = `/calendars/groups/${params.groupId}`;
    return this.client.delete<Delete_groupResponse>(url);
  }

  /**
   * Update Group
   * Update Group by group ID
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async edit_group(params: Edit_groupParams, data: Edit_groupRequestBody): Promise<Edit_groupResponse> {
    const url = `/calendars/groups/${params.groupId}`;
    return this.client.put<Edit_groupResponse>(url, data);
  }

  /**
   * Disable Group
   * Disable Group
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async disable_group(params: Disable_groupParams, data: Disable_groupRequestBody): Promise<Disable_groupResponse> {
    const url = `/calendars/groups/${params.groupId}/status`;
    return this.client.put<Disable_groupResponse>(url, data);
  }

  /**
   * Get Calendar Events
   * Get Calendar Events
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_calendar_events(params: Get_calendar_eventsParams): Promise<Get_calendar_eventsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.calendarId !== undefined) queryParams.calendarId = params.calendarId;
    if (params.groupId !== undefined) queryParams.groupId = params.groupId;
    if (params.startTime !== undefined) queryParams.startTime = params.startTime;
    if (params.endTime !== undefined) queryParams.endTime = params.endTime;
    return this.client.get<Get_calendar_eventsResponse>('/calendars/events', { params: queryParams });
  }

  /**
   * Get Blocked Slots
   * Get Blocked Slots
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_blocked_slots(params: Get_blocked_slotsParams): Promise<Get_blocked_slotsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.calendarId !== undefined) queryParams.calendarId = params.calendarId;
    if (params.groupId !== undefined) queryParams.groupId = params.groupId;
    if (params.startTime !== undefined) queryParams.startTime = params.startTime;
    if (params.endTime !== undefined) queryParams.endTime = params.endTime;
    return this.client.get<Get_blocked_slotsResponse>('/calendars/blocked-slots', { params: queryParams });
  }

  /**
   * Get Free Slots
   * Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_slots(params: Get_slotsParams): Promise<Get_slotsResponse> {
    const url = `/calendars/${params.calendarId}/free-slots`;
    const queryParams: Record<string, any> = {};
    if (params.startDate !== undefined) queryParams.startDate = params.startDate;
    if (params.endDate !== undefined) queryParams.endDate = params.endDate;
    if (params.timezone !== undefined) queryParams.timezone = params.timezone;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.userIds !== undefined) queryParams.userIds = params.userIds;
    if (params.enableLookBusy !== undefined) queryParams.enableLookBusy = params.enableLookBusy;
    return this.client.get<Get_slotsResponse>(url, { params: queryParams });
  }

  /**
   * Update Calendar
   * Update calendar by ID.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_calendar(params: Update_calendarParams, data: Update_calendarRequestBody): Promise<Update_calendarResponse> {
    const url = `/calendars/${params.calendarId}`;
    return this.client.put<Update_calendarResponse>(url, data);
  }

  /**
   * Get Calendar
   * Get calendar by ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_calendar(params: Get_calendarParams): Promise<Get_calendarResponse> {
    const url = `/calendars/${params.calendarId}`;
    return this.client.get<Get_calendarResponse>(url);
  }

  /**
   * Delete Calendar
   * Delete calendar by ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_calendar(params: Delete_calendarParams): Promise<Delete_calendarResponse> {
    const url = `/calendars/${params.calendarId}`;
    return this.client.delete<Delete_calendarResponse>(url);
  }

  /**
   * Get Appointment
   * Get appointment by ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_appointment(params: Get_appointmentParams): Promise<Get_appointmentResponse> {
    const url = `/calendars/events/appointments/${params.eventId}`;
    return this.client.get<Get_appointmentResponse>(url);
  }

  /**
   * Update Appointment
   * Update appointment by ID
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async edit_appointment(params: Edit_appointmentParams, data: Edit_appointmentRequestBody): Promise<Edit_appointmentResponse> {
    const url = `/calendars/events/appointments/${params.eventId}`;
    return this.client.put<Edit_appointmentResponse>(url, data);
  }

  /**
   * Create Appointment
   * Create appointment
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_appointment(params: Create_appointmentParams, data: Create_appointmentRequestBody): Promise<Create_appointmentResponse> {
    return this.client.post<Create_appointmentResponse>('/calendars/events/appointments', data);
  }

  /**
   * Create Block Slot
   * Create block slot
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_block_slot(params: Create_block_slotParams, data: Create_block_slotRequestBody): Promise<Create_block_slotResponse> {
    return this.client.post<Create_block_slotResponse>('/calendars/events/block-slots', data);
  }

  /**
   * Update Block Slot
   * Update block slot by ID
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async edit_block_slot(params: Edit_block_slotParams, data: Edit_block_slotRequestBody): Promise<Edit_block_slotResponse> {
    const url = `/calendars/events/block-slots/${params.eventId}`;
    return this.client.put<Edit_block_slotResponse>(url, data);
  }

  /**
   * Delete Event
   * Delete event by ID
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async delete_event(params: Delete_eventParams, data: Delete_eventRequestBody): Promise<Delete_eventResponse> {
    const url = `/calendars/events/${params.eventId}`;
    return this.client.delete<Delete_eventResponse>(url);
  }

  /**
   * Get Notes
   * Get Appointment Notes
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_appointment_notes(params: Get_appointment_notesParams): Promise<Get_appointment_notesResponse> {
    const url = `/calendars/appointments/${params.appointmentId}/notes`;
    const queryParams: Record<string, any> = {};
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<Get_appointment_notesResponse>(url, { params: queryParams });
  }

  /**
   * Create Note
   * Create Note
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_appointment_note(params: Create_appointment_noteParams, data: Create_appointment_noteRequestBody): Promise<Create_appointment_noteResponse> {
    const url = `/calendars/appointments/${params.appointmentId}/notes`;
    return this.client.post<Create_appointment_noteResponse>(url, data);
  }

  /**
   * Update Note
   * Update Note
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_appointment_note(params: Update_appointment_noteParams, data: Update_appointment_noteRequestBody): Promise<Update_appointment_noteResponse> {
    const url = `/calendars/appointments/${params.appointmentId}/notes/${params.noteId}`;
    return this.client.put<Update_appointment_noteResponse>(url, data);
  }

  /**
   * Delete Note
   * Delete Note
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_appointment_note(params: Delete_appointment_noteParams): Promise<Delete_appointment_noteResponse> {
    const url = `/calendars/appointments/${params.appointmentId}/notes/${params.noteId}`;
    return this.client.delete<Delete_appointment_noteResponse>(url);
  }

  /**
   * Get Calendar Resource
   * Get calendar resource by ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_calendar_resource(params: Get_calendar_resourceParams): Promise<Get_calendar_resourceResponse> {
    const url = `/calendars/resources/${params.resourceType}/${params.id}`;
    return this.client.get<Get_calendar_resourceResponse>(url);
  }

  /**
   * Update Calendar Resource
   * Update calendar resource by ID
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_calendar_resource(params: Update_calendar_resourceParams, data: Update_calendar_resourceRequestBody): Promise<Update_calendar_resourceResponse> {
    const url = `/calendars/resources/${params.resourceType}/${params.id}`;
    return this.client.put<Update_calendar_resourceResponse>(url, data);
  }

  /**
   * Delete Calendar Resource
   * Delete calendar resource by ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_calendar_resource(params: Delete_calendar_resourceParams): Promise<Delete_calendar_resourceResponse> {
    const url = `/calendars/resources/${params.resourceType}/${params.id}`;
    return this.client.delete<Delete_calendar_resourceResponse>(url);
  }

  /**
   * List Calendar Resources
   * List calendar resources by resource type and location ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async fetch_calendar_resources(params: Fetch_calendar_resourcesParams): Promise<Fetch_calendar_resourcesResponse> {
    const url = `/calendars/resources/${params.resourceType}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    return this.client.get<Fetch_calendar_resourcesResponse>(url, { params: queryParams });
  }

  /**
   * Create Calendar Resource
   * Create calendar resource by resource type
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_calendar_resource(params: Create_calendar_resourceParams, data: Create_calendar_resourceRequestBody): Promise<Create_calendar_resourceResponse> {
    const url = `/calendars/resources/${params.resourceType}`;
    return this.client.post<Create_calendar_resourceResponse>(url, data);
  }

  /**
   * Create notification
   * Create Calendar Event notifications, either one or multiple. All notification settings must be for single calendar only
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_event_notification(params: Create_event_notificationParams, data: Create_event_notificationRequestBody): Promise<Create_event_notificationResponse> {
    return this.client.post<Create_event_notificationResponse>('/calendars/event-notifications', data);
  }

  /**
   * Get notifications
   * Get Event notifications based on query
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_event_notification(params: Get_event_notificationParams): Promise<Get_event_notificationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.isActive !== undefined) queryParams.isActive = params.isActive;
    if (params.deleted !== undefined) queryParams.deleted = params.deleted;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    return this.client.get<Get_event_notificationResponse>('/calendars/event-notifications/list', { params: queryParams });
  }

  /**
   * Get notification
   * Find Event notification by id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async find_event_notification(params: Find_event_notificationParams): Promise<Find_event_notificationResponse> {
    const url = `/calendars/event-notifications/${params.id}`;
    return this.client.get<Find_event_notificationResponse>(url);
  }

  /**
   * delete_event_notification
   * Delete notification
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_event_notification(params: Delete_event_notificationParams): Promise<Delete_event_notificationResponse> {
    const url = `/calendars/event-notifications/${params.id}`;
    return this.client.delete<Delete_event_notificationResponse>(url);
  }

  /**
   * Update notification
   * Update Event notification by id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_event_notification(params: Update_event_notificationParams, data: Update_event_notificationRequestBody): Promise<Update_event_notificationResponse> {
    const url = `/calendars/event-notifications/update/${params.id}`;
    return this.client.put<Update_event_notificationResponse>(url, data);
  }

  /**
   * Get Calendars
   * Get all calendars in a location.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_calendars(params: Get_calendarsParams): Promise<Get_calendarsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.groupId !== undefined) queryParams.groupId = params.groupId;
    if (params.showDrafted !== undefined) queryParams.showDrafted = params.showDrafted;
    return this.client.get<Get_calendarsResponse>('/calendars/', { params: queryParams });
  }

  /**
   * Create Calendar
   * Create calendar in a location.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_calendar(params: Create_calendarParams, data: Create_calendarRequestBody): Promise<Create_calendarResponse> {
    return this.client.post<Create_calendarResponse>('/calendars/', data);
  }
}
