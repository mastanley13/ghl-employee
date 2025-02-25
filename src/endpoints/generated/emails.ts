import { APIClient } from '../../utils/api-client';
// Import types
import {
Create_templateParams,
Create_templateRequestBody,
Create_templateResponse,
Fetch_templateParams,
Fetch_templateResponse,
Delete_templateParams,
Delete_templateResponse,
Update_templateParams,
Update_templateRequestBody,
Update_templateResponse
} from '../../types/generated/emails';

export class EmailsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Create a new template
   * Create a new template
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_template(params: Create_templateParams, data: Create_templateRequestBody): Promise<Create_templateResponse> {
    return this.client.post<Create_templateResponse>('/emails/builder', data);
  }

  /**
   * Fetch email templates
   * Fetch email templates by location id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async fetch_template(params: Fetch_templateParams): Promise<Fetch_templateResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.sortByDate !== undefined) queryParams.sortByDate = params.sortByDate;
    if (params.archived !== undefined) queryParams.archived = params.archived;
    if (params.builderVersion !== undefined) queryParams.builderVersion = params.builderVersion;
    if (params.name !== undefined) queryParams.name = params.name;
    if (params.parentId !== undefined) queryParams.parentId = params.parentId;
    if (params.templatesOnly !== undefined) queryParams.templatesOnly = params.templatesOnly;
    return this.client.get<Fetch_templateResponse>('/emails/builder', { params: queryParams });
  }

  /**
   * Delete a template
   * Delete a template
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_template(params: Delete_templateParams): Promise<Delete_templateResponse> {
    const url = `/emails/builder/${params.locationId}/${params.templateId}`;
    return this.client.delete<Delete_templateResponse>(url);
  }

  /**
   * Update a template
   * Update a template
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_template(params: Update_templateParams, data: Update_templateRequestBody): Promise<Update_templateResponse> {
    return this.client.post<Update_templateResponse>('/emails/builder/data', data);
  }
}
