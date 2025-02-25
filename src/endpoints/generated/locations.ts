import { APIClient } from '../../utils/api-client';
// Import types
import {
Search_locationsParams,
Search_locationsResponse,
Get_locationParams,
Get_locationResponse,
Put_locationParams,
Put_locationRequestBody,
Put_locationResponse,
Delete_locationParams,
Delete_locationResponse,
Get_location_tagsParams,
Get_location_tagsResponse,
Create_tagParams,
Create_tagRequestBody,
Create_tagResponse,
Get_tag_by_idParams,
Get_tag_by_idResponse,
Update_tagParams,
Update_tagRequestBody,
Update_tagResponse,
Delete_tagParams,
Delete_tagResponse,
Task_searchParams,
Task_searchRequestBody,
Task_searchResponse,
Get_custom_fieldsParams,
Get_custom_fieldsResponse,
Create_custom_fieldParams,
Create_custom_fieldRequestBody,
Create_custom_fieldResponse,
Get_custom_fieldParams,
Get_custom_fieldResponse,
Update_custom_fieldParams,
Update_custom_fieldRequestBody,
Update_custom_fieldResponse,
Delete_custom_fieldParams,
Delete_custom_fieldResponse,
Upload_file_customFieldsParams,
Upload_file_customFieldsRequestBody,
Upload_file_customFieldsResponse,
Get_custom_valuesParams,
Get_custom_valuesResponse,
Create_custom_valueParams,
Create_custom_valueRequestBody,
Create_custom_valueResponse,
Get_custom_valueParams,
Get_custom_valueResponse,
Update_custom_valueParams,
Update_custom_valueRequestBody,
Update_custom_valueResponse,
Delete_custom_valueParams,
Delete_custom_valueResponse,
Get_timezonesParams,
Get_timezonesResponse,
GET_all_or_email_sms_templatesParams,
GET_all_or_email_sms_templatesResponse,
DELETE_an_email_sms_templateParams,
DELETE_an_email_sms_templateResponse,
Create_locationParams,
Create_locationRequestBody,
Create_locationResponse
} from '../../types/generated/locations';

export class LocationsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Search
   * Search Sub-Account (Formerly Location)
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async search_locations(params: Search_locationsParams): Promise<Search_locationsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.order !== undefined) queryParams.order = params.order;
    if (params.email !== undefined) queryParams.email = params.email;
    return this.client.get<Search_locationsResponse>('/locations/search', { params: queryParams });
  }

  /**
   * Get Sub-Account (Formerly Location)
   * Get details of a Sub-Account (Formerly Location) by passing the sub-account id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_location(params: Get_locationParams): Promise<Get_locationResponse> {
    const url = `/locations/${params.locationId}`;
    return this.client.get<Get_locationResponse>(url);
  }

  /**
   * Put Sub-Account (Formerly Location)
   * Update a Sub-Account (Formerly Location) based on the data provided
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async put_location(params: Put_locationParams, data: Put_locationRequestBody): Promise<Put_locationResponse> {
    const url = `/locations/${params.locationId}`;
    return this.client.put<Put_locationResponse>(url, data);
  }

  /**
   * Delete Sub-Account (Formerly Location)
   * Delete a Sub-Account (Formerly Location) from the Agency
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_location(params: Delete_locationParams): Promise<Delete_locationResponse> {
    const url = `/locations/${params.locationId}`;
    const queryParams: Record<string, any> = {};
    if (params.deleteTwilioAccount !== undefined) queryParams.deleteTwilioAccount = params.deleteTwilioAccount;
    return this.client.delete<Delete_locationResponse>(url, { params: queryParams });
  }

  /**
   * Get Tags
   * Get Sub-Account (Formerly Location) Tags
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_location_tags(params: Get_location_tagsParams): Promise<Get_location_tagsResponse> {
    const url = `/locations/${params.locationId}/tags`;
    return this.client.get<Get_location_tagsResponse>(url);
  }

  /**
   * Create Tag
   * Create tag
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_tag(params: Create_tagParams, data: Create_tagRequestBody): Promise<Create_tagResponse> {
    const url = `/locations/${params.locationId}/tags`;
    return this.client.post<Create_tagResponse>(url, data);
  }

  /**
   * Get tag by id
   * Get tag by id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_tag_by_id(params: Get_tag_by_idParams): Promise<Get_tag_by_idResponse> {
    const url = `/locations/${params.locationId}/tags/${params.tagId}`;
    return this.client.get<Get_tag_by_idResponse>(url);
  }

  /**
   * Update tag
   * Update tag
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_tag(params: Update_tagParams, data: Update_tagRequestBody): Promise<Update_tagResponse> {
    const url = `/locations/${params.locationId}/tags/${params.tagId}`;
    return this.client.put<Update_tagResponse>(url, data);
  }

  /**
   * Delete tag
   * Delete tag
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_tag(params: Delete_tagParams): Promise<Delete_tagResponse> {
    const url = `/locations/${params.locationId}/tags/${params.tagId}`;
    return this.client.delete<Delete_tagResponse>(url);
  }

  /**
   * Task Search Filter
   * Task Search
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async task_search(params: Task_searchParams, data: Task_searchRequestBody): Promise<Task_searchResponse> {
    const url = `/locations/${params.locationId}/tasks/search`;
    return this.client.post<Task_searchResponse>(url, data);
  }

  /**
   * Get Custom Fields
   * Get Custom Fields
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_fields(params: Get_custom_fieldsParams): Promise<Get_custom_fieldsResponse> {
    const url = `/locations/${params.locationId}/customFields`;
    const queryParams: Record<string, any> = {};
    if (params.model !== undefined) queryParams.model = params.model;
    return this.client.get<Get_custom_fieldsResponse>(url, { params: queryParams });
  }

  /**
   * Create Custom Field
   * Create Custom Field
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_custom_field(params: Create_custom_fieldParams, data: Create_custom_fieldRequestBody): Promise<Create_custom_fieldResponse> {
    const url = `/locations/${params.locationId}/customFields`;
    return this.client.post<Create_custom_fieldResponse>(url, data);
  }

  /**
   * Get Custom Field
   * Get Custom Field
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_field(params: Get_custom_fieldParams): Promise<Get_custom_fieldResponse> {
    const url = `/locations/${params.locationId}/customFields/${params.id}`;
    return this.client.get<Get_custom_fieldResponse>(url);
  }

  /**
   * Update Custom Field
   * Update Custom Field
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_custom_field(params: Update_custom_fieldParams, data: Update_custom_fieldRequestBody): Promise<Update_custom_fieldResponse> {
    const url = `/locations/${params.locationId}/customFields/${params.id}`;
    return this.client.put<Update_custom_fieldResponse>(url, data);
  }

  /**
   * Delete Custom Field
   * Delete Custom Field
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_custom_field(params: Delete_custom_fieldParams): Promise<Delete_custom_fieldResponse> {
    const url = `/locations/${params.locationId}/customFields/${params.id}`;
    return this.client.delete<Delete_custom_fieldResponse>(url);
  }

  /**
   * Uploads File to customFields
   * Uploads File to customFields
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async upload_file_customFields(params: Upload_file_customFieldsParams, data: Upload_file_customFieldsRequestBody): Promise<Upload_file_customFieldsResponse> {
    const url = `/locations/${params.locationId}/customFields/upload`;
    return this.client.post<Upload_file_customFieldsResponse>(url, data);
  }

  /**
   * Get Custom Values
   * Get Custom Values
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_values(params: Get_custom_valuesParams): Promise<Get_custom_valuesResponse> {
    const url = `/locations/${params.locationId}/customValues`;
    return this.client.get<Get_custom_valuesResponse>(url);
  }

  /**
   * Create Custom Value
   * Create Custom Value
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_custom_value(params: Create_custom_valueParams, data: Create_custom_valueRequestBody): Promise<Create_custom_valueResponse> {
    const url = `/locations/${params.locationId}/customValues`;
    return this.client.post<Create_custom_valueResponse>(url, data);
  }

  /**
   * Get Custom Value
   * Get Custom Value
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_value(params: Get_custom_valueParams): Promise<Get_custom_valueResponse> {
    const url = `/locations/${params.locationId}/customValues/${params.id}`;
    return this.client.get<Get_custom_valueResponse>(url);
  }

  /**
   * Update Custom Value
   * Update Custom Value
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_custom_value(params: Update_custom_valueParams, data: Update_custom_valueRequestBody): Promise<Update_custom_valueResponse> {
    const url = `/locations/${params.locationId}/customValues/${params.id}`;
    return this.client.put<Update_custom_valueResponse>(url, data);
  }

  /**
   * Delete Custom Value
   * Delete Custom Value
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_custom_value(params: Delete_custom_valueParams): Promise<Delete_custom_valueResponse> {
    const url = `/locations/${params.locationId}/customValues/${params.id}`;
    return this.client.delete<Delete_custom_valueResponse>(url);
  }

  /**
   * Fetch Timezones
   * Fetch the available timezones
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_timezones(params: Get_timezonesParams): Promise<Get_timezonesResponse> {
    const url = `/locations/${params.locationId}/timezones`;
    return this.client.get<Get_timezonesResponse>(url);
  }

  /**
   * GET all or email/sms templates
   * GET all or email/sms templates
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async GET_all_or_email_sms_templates(params: GET_all_or_email_sms_templatesParams): Promise<GET_all_or_email_sms_templatesResponse> {
    const url = `/locations/${params.locationId}/templates`;
    const queryParams: Record<string, any> = {};
    if (params.deleted !== undefined) queryParams.deleted = params.deleted;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.type !== undefined) queryParams.type = params.type;
    if (params.originId !== undefined) queryParams.originId = params.originId;
    return this.client.get<GET_all_or_email_sms_templatesResponse>(url, { params: queryParams });
  }

  /**
   * DELETE an email/sms template
   * DELETE an email/sms template
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async DELETE_an_email_sms_template(params: DELETE_an_email_sms_templateParams): Promise<DELETE_an_email_sms_templateResponse> {
    const url = `/locations/${params.locationId}/templates/${params.id}`;
    return this.client.delete<DELETE_an_email_sms_templateResponse>(url);
  }

  /**
   * Create Sub-Account (Formerly Location)
   * <div>
                  <p>Create a new Sub-Account (Formerly Location) based on the data provided</p> 
                  <div>
                    <span style= "display: inline-block;
                                width: 25px; height: 25px;
                                background-color: yellow;
                                color: black;
                                font-weight: bold;
                                font-size: 24px;
                                text-align: center;
                                line-height: 22px;
                                border: 2px solid black;
                                border-radius: 10%;
                                margin-right: 10px;">
                                !
                      </span>
                      <span>
                        <strong>
                          This feature is only available on Agency Pro ($497) plan.
                        </strong>
                      </span>
                  </div>
                </div>
    
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_location(params: Create_locationParams, data: Create_locationRequestBody): Promise<Create_locationResponse> {
    return this.client.post<Create_locationResponse>('/locations/', data);
  }
}
