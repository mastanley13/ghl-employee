import { APIClient } from '../../utils/api-client';
// Import types
import {
Create_redirectParams,
Create_redirectRequestBody,
Create_redirectResponse,
Update_redirect_by_idParams,
Update_redirect_by_idRequestBody,
Update_redirect_by_idResponse,
Delete_redirect_by_idParams,
Delete_redirect_by_idResponse,
Fetch_redirects_listParams,
Fetch_redirects_listResponse,
GetFunnelsParams,
GetFunnelsResponse,
GetPagesByFunnelIdParams,
GetPagesByFunnelIdResponse,
GetPagesCountByFunnelIdParams,
GetPagesCountByFunnelIdResponse
} from '../../types/generated/funnels';

export class FunnelsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Create Redirect
   * The "Create Redirect" API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_redirect(params: Create_redirectParams, data: Create_redirectRequestBody): Promise<Create_redirectResponse> {
    return this.client.post<Create_redirectResponse>('/funnels/lookup/redirect', data);
  }

  /**
   * Update Redirect By Id
   * The "Update Redirect By Id" API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_redirect_by_id(params: Update_redirect_by_idParams, data: Update_redirect_by_idRequestBody): Promise<Update_redirect_by_idResponse> {
    const url = `/funnels/lookup/redirect/${params.id}`;
    return this.client.patch<Update_redirect_by_idResponse>(url, data);
  }

  /**
   * Delete Redirect By Id
   * The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_redirect_by_id(params: Delete_redirect_by_idParams): Promise<Delete_redirect_by_idResponse> {
    const url = `/funnels/lookup/redirect/${params.id}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.delete<Delete_redirect_by_idResponse>(url, { params: queryParams });
  }

  /**
   * Fetch List of Redirects
   * Retrieves a list of all URL redirects based on the given query parameters.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async fetch_redirects_list(params: Fetch_redirects_listParams): Promise<Fetch_redirects_listResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.search !== undefined) queryParams.search = params.search;
    return this.client.get<Fetch_redirects_listResponse>('/funnels/lookup/redirect/list', { params: queryParams });
  }

  /**
   * Fetch List of Funnels
   * Retrieves a list of all funnels based on the given query parameters.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async getFunnels(params: GetFunnelsParams): Promise<GetFunnelsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.type !== undefined) queryParams.type = params.type;
    if (params.category !== undefined) queryParams.category = params.category;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.parentId !== undefined) queryParams.parentId = params.parentId;
    if (params.name !== undefined) queryParams.name = params.name;
    return this.client.get<GetFunnelsResponse>('/funnels/funnel/list', { params: queryParams });
  }

  /**
   * Fetch list of funnel pages
   * Retrieves a list of all funnel pages based on the given query parameters.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async getPagesByFunnelId(params: GetPagesByFunnelIdParams): Promise<GetPagesByFunnelIdResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.funnelId !== undefined) queryParams.funnelId = params.funnelId;
    if (params.name !== undefined) queryParams.name = params.name;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<GetPagesByFunnelIdResponse>('/funnels/page', { params: queryParams });
  }

  /**
   * Fetch count of funnel pages
   * Retrieves count of all funnel pages based on the given query parameters.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async getPagesCountByFunnelId(params: GetPagesCountByFunnelIdParams): Promise<GetPagesCountByFunnelIdResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.funnelId !== undefined) queryParams.funnelId = params.funnelId;
    if (params.name !== undefined) queryParams.name = params.name;
    return this.client.get<GetPagesCountByFunnelIdResponse>('/funnels/page/count', { params: queryParams });
  }
}
