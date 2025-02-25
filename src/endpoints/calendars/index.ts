import { APIClient } from '../../utils/api-client';
import {
  GetFreeSlotsParams,
  GetFreeSlotsResponse,
  UpdateCalendarParams,
  UpdateCalendarResponse,
  GetCalendarParams,
  GetCalendarResponse,
  DeleteCalendarParams,
  DeleteCalendarResponse,
  CreateBlockSlotParams,
  CreateBlockSlotResponse,
  GetCalendarsParams,
  GetCalendarsResponse,
  CreateCalendarParams,
  CreateCalendarResponse
} from '../../types/calendars';

export class CalendarsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get free slots for a calendar
   * @param params Parameters for getting free slots
   * @returns Promise with free slots data
   */
  async getFreeSlots(params: GetFreeSlotsParams): Promise<GetFreeSlotsResponse> {
    const { calendarId, ...queryParams } = params;
    return this.client.get<GetFreeSlotsResponse>(`/calendars/${calendarId}/free-slots`, {
      params: queryParams
    });
  }

  /**
   * Update a calendar
   * @param params Parameters for updating a calendar
   * @returns Promise with updated calendar data
   */
  async updateCalendar(params: UpdateCalendarParams): Promise<UpdateCalendarResponse> {
    const { calendarId, ...data } = params;
    return this.client.put<UpdateCalendarResponse>(`/calendars/${calendarId}`, data);
  }

  /**
   * Get a calendar by ID
   * @param params Parameters for getting a calendar
   * @returns Promise with calendar data
   */
  async getCalendar(params: GetCalendarParams): Promise<GetCalendarResponse> {
    const { calendarId } = params;
    return this.client.get<GetCalendarResponse>(`/calendars/${calendarId}`);
  }

  /**
   * Delete a calendar
   * @param params Parameters for deleting a calendar
   * @returns Promise with deletion result
   */
  async deleteCalendar(params: DeleteCalendarParams): Promise<DeleteCalendarResponse> {
    const { calendarId } = params;
    return this.client.delete<DeleteCalendarResponse>(`/calendars/${calendarId}`);
  }

  /**
   * Create a block slot in a calendar
   * @param params Parameters for creating a block slot
   * @returns Promise with created block slot data
   */
  async createBlockSlot(params: CreateBlockSlotParams): Promise<CreateBlockSlotResponse> {
    const { calendarId, ...data } = params;
    return this.client.post<CreateBlockSlotResponse>(`/calendars/${calendarId}/block-slot`, data);
  }

  /**
   * Get all calendars
   * @param params Parameters for getting calendars
   * @returns Promise with calendars data
   */
  async getCalendars(params?: GetCalendarsParams): Promise<GetCalendarsResponse> {
    return this.client.get<GetCalendarsResponse>('/calendars', {
      params
    });
  }

  /**
   * Create a new calendar
   * @param params Parameters for creating a calendar
   * @returns Promise with created calendar data
   */
  async createCalendar(params: CreateCalendarParams): Promise<CreateCalendarResponse> {
    return this.client.post<CreateCalendarResponse>('/calendars', params);
  }
} 