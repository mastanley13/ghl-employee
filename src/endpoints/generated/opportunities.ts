import { APIClient } from '../../utils/api-client';
// Import types
import {
Search_opportunityParams,
Search_opportunityResponse,
Get_pipelinesParams,
Get_pipelinesResponse,
Get_opportunityParams,
Get_opportunityResponse,
Delete_opportunityParams,
Delete_opportunityResponse,
Update_opportunityParams,
Update_opportunityRequestBody,
Update_opportunityResponse,
Update_opportunity_statusParams,
Update_opportunity_statusRequestBody,
Update_opportunity_statusResponse,
Upsert_opportunityParams,
Upsert_opportunityRequestBody,
Upsert_opportunityResponse,
Add_followers_opportunityParams,
Add_followers_opportunityRequestBody,
Add_followers_opportunityResponse,
Remove_followers_opportunityParams,
Remove_followers_opportunityRequestBody,
Remove_followers_opportunityResponse,
Create_opportunityParams,
Create_opportunityRequestBody,
Create_opportunityResponse
} from '../../types/generated/opportunities';

export class OpportunitiesAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Search Opportunity
   * Search Opportunity
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async search_opportunity(params: Search_opportunityParams): Promise<Search_opportunityResponse> {
    const queryParams: Record<string, any> = {};
    if (params.q !== undefined) queryParams.q = params.q;
    if (params.location_id !== undefined) queryParams.location_id = params.location_id;
    if (params.pipeline_id !== undefined) queryParams.pipeline_id = params.pipeline_id;
    if (params.pipeline_stage_id !== undefined) queryParams.pipeline_stage_id = params.pipeline_stage_id;
    if (params.contact_id !== undefined) queryParams.contact_id = params.contact_id;
    if (params.status !== undefined) queryParams.status = params.status;
    if (params.assigned_to !== undefined) queryParams.assigned_to = params.assigned_to;
    if (params.campaignId !== undefined) queryParams.campaignId = params.campaignId;
    if (params.id !== undefined) queryParams.id = params.id;
    if (params.order !== undefined) queryParams.order = params.order;
    if (params.endDate !== undefined) queryParams.endDate = params.endDate;
    if (params.startAfter !== undefined) queryParams.startAfter = params.startAfter;
    if (params.startAfterId !== undefined) queryParams.startAfterId = params.startAfterId;
    if (params.date !== undefined) queryParams.date = params.date;
    if (params.country !== undefined) queryParams.country = params.country;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.getTasks !== undefined) queryParams.getTasks = params.getTasks;
    if (params.getNotes !== undefined) queryParams.getNotes = params.getNotes;
    if (params.getCalendarEvents !== undefined) queryParams.getCalendarEvents = params.getCalendarEvents;
    return this.client.get<Search_opportunityResponse>('/opportunities/search', { params: queryParams });
  }

  /**
   * Get Pipelines
   * Get Pipelines
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_pipelines(params: Get_pipelinesParams): Promise<Get_pipelinesResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_pipelinesResponse>('/opportunities/pipelines', { params: queryParams });
  }

  /**
   * Get Opportunity
   * Get Opportunity
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_opportunity(params: Get_opportunityParams): Promise<Get_opportunityResponse> {
    const url = `/opportunities/${params.id}`;
    return this.client.get<Get_opportunityResponse>(url);
  }

  /**
   * Delete Opportunity
   * Delete Opportunity
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_opportunity(params: Delete_opportunityParams): Promise<Delete_opportunityResponse> {
    const url = `/opportunities/${params.id}`;
    return this.client.delete<Delete_opportunityResponse>(url);
  }

  /**
   * Update Opportunity
   * Update Opportunity
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_opportunity(params: Update_opportunityParams, data: Update_opportunityRequestBody): Promise<Update_opportunityResponse> {
    const url = `/opportunities/${params.id}`;
    return this.client.put<Update_opportunityResponse>(url, data);
  }

  /**
   * Update Opportunity Status
   * Update Opportunity Status
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_opportunity_status(params: Update_opportunity_statusParams, data: Update_opportunity_statusRequestBody): Promise<Update_opportunity_statusResponse> {
    const url = `/opportunities/${params.id}/status`;
    return this.client.put<Update_opportunity_statusResponse>(url, data);
  }

  /**
   * Upsert Opportunity
   * Upsert Opportunity
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async Upsert_opportunity(params: Upsert_opportunityParams, data: Upsert_opportunityRequestBody): Promise<Upsert_opportunityResponse> {
    return this.client.post<Upsert_opportunityResponse>('/opportunities/upsert', data);
  }

  /**
   * Add Followers
   * Add Followers
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_followers_opportunity(params: Add_followers_opportunityParams, data: Add_followers_opportunityRequestBody): Promise<Add_followers_opportunityResponse> {
    const url = `/opportunities/${params.id}/followers`;
    return this.client.post<Add_followers_opportunityResponse>(url, data);
  }

  /**
   * Remove Followers
   * Remove Followers
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async remove_followers_opportunity(params: Remove_followers_opportunityParams, data: Remove_followers_opportunityRequestBody): Promise<Remove_followers_opportunityResponse> {
    const url = `/opportunities/${params.id}/followers`;
    return this.client.delete<Remove_followers_opportunityResponse>(url);
  }

  /**
   * Create Opportunity
   * Create Opportunity
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_opportunity(params: Create_opportunityParams, data: Create_opportunityRequestBody): Promise<Create_opportunityResponse> {
    return this.client.post<Create_opportunityResponse>('/opportunities/', data);
  }
}
