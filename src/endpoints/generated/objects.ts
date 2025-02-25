import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_object_schema_by_keyParams,
Get_object_schema_by_keyResponse,
Update_custom_objectParams,
Update_custom_objectRequestBody,
Update_custom_objectResponse,
Get_record_by_idParams,
Get_record_by_idResponse,
Update_object_recordParams,
Update_object_recordRequestBody,
Update_object_recordResponse,
Delete_object_recordParams,
Delete_object_recordResponse,
Create_object_recordParams,
Create_object_recordRequestBody,
Create_object_recordResponse,
Search_object_recordsParams,
Search_object_recordsRequestBody,
Search_object_recordsResponse,
Get_object_by_location_idParams,
Get_object_by_location_idResponse,
Create_custom_object_schemaParams,
Create_custom_object_schemaRequestBody,
Create_custom_object_schemaResponse
} from '../../types/generated/objects';

export class ObjectsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Object Schema by key / id
   * Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_object_schema_by_key(params: Get_object_schema_by_keyParams): Promise<Get_object_schema_by_keyResponse> {
    const url = `/objects/${params.key}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.fetchProperties !== undefined) queryParams.fetchProperties = params.fetchProperties;
    return this.client.get<Get_object_schema_by_keyResponse>(url, { params: queryParams });
  }

  /**
   * Update Object Schema By Key / Id
   * Update Custom Object Schema  or standard object's like contact, opportunity, business searchable fields. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_custom_object(params: Update_custom_objectParams, data: Update_custom_objectRequestBody): Promise<Update_custom_objectResponse> {
    const url = `/objects/${params.key}`;
    return this.client.put<Update_custom_objectResponse>(url, data);
  }

  /**
   * Get Record By Id
   * Allows you to get a Standard Object like business and custom object record by Id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_record_by_id(params: Get_record_by_idParams): Promise<Get_record_by_idResponse> {
    const url = `/objects/${params.schemaKey}/records/${params.id}`;
    return this.client.get<Get_record_by_idResponse>(url);
  }

  /**
   * Update Record
   * Update a Custom Object Record by Id. Supported Objects are business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_object_record(params: Update_object_recordParams, data: Update_object_recordRequestBody): Promise<Update_object_recordResponse> {
    const url = `/objects/${params.schemaKey}/records/${params.id}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.put<Update_object_recordResponse>(url, data, { params: queryParams });
  }

  /**
   * Delete Record
   * Delete Record By Id . Supported Objects are business and custom objects.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_object_record(params: Delete_object_recordParams): Promise<Delete_object_recordResponse> {
    const url = `/objects/${params.schemaKey}/records/${params.id}`;
    return this.client.delete<Delete_object_recordResponse>(url);
  }

  /**
   * Create Record
   * Create a Custom Object Record. Supported Objects business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_object_record(params: Create_object_recordParams, data: Create_object_recordRequestBody): Promise<Create_object_recordResponse> {
    const url = `/objects/${params.schemaKey}/records`;
    return this.client.post<Create_object_recordResponse>(url, data);
  }

  /**
   * Search Object Records
   * Supported Objects are custom objects and standard objects like "business". Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async search_object_records(params: Search_object_recordsParams, data: Search_object_recordsRequestBody): Promise<Search_object_recordsResponse> {
    const url = `/objects/${params.schemaKey}/records/search`;
    return this.client.post<Search_object_recordsResponse>(url, data);
  }

  /**
   * Get all objects for a location
   * Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_object_by_location_id(params: Get_object_by_location_idParams): Promise<Get_object_by_location_idResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_object_by_location_idResponse>('/objects/', { params: queryParams });
  }

  /**
   * Create Custom Object
   * Allows you to create a custom object schema. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_custom_object_schema(params: Create_custom_object_schemaParams, data: Create_custom_object_schemaRequestBody): Promise<Create_custom_object_schemaResponse> {
    return this.client.post<Create_custom_object_schemaResponse>('/objects/', data);
  }
}
