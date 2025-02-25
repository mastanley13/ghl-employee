import { APIClient } from '../../utils/api-client';
// Import types
import {
Update_linkParams,
Update_linkRequestBody,
Update_linkResponse,
Delete_linkParams,
Delete_linkResponse,
Get_linksParams,
Get_linksResponse,
Create_linkParams,
Create_linkRequestBody,
Create_linkResponse
} from '../../types/generated/links';

export class LinksAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Update Link
   * Update Link
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_link(params: Update_linkParams, data: Update_linkRequestBody): Promise<Update_linkResponse> {
    const url = `/links/${params.linkId}`;
    return this.client.put<Update_linkResponse>(url, data);
  }

  /**
   * Delete Link
   * Delete Link
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_link(params: Delete_linkParams): Promise<Delete_linkResponse> {
    const url = `/links/${params.linkId}`;
    return this.client.delete<Delete_linkResponse>(url);
  }

  /**
   * Get Links
   * Get Links
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_links(params: Get_linksParams): Promise<Get_linksResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_linksResponse>('/links/', { params: queryParams });
  }

  /**
   * Create Link
   * Create Link
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_link(params: Create_linkParams, data: Create_linkRequestBody): Promise<Create_linkResponse> {
    return this.client.post<Create_linkResponse>('/links/', data);
  }
}
