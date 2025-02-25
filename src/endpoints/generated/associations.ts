import { APIClient } from '../../utils/api-client';
// Import types
import {
Create_relationParams,
Create_relationRequestBody,
Create_relationResponse,
Find_relationsParams,
Find_relationsResponse,
Delete_relationParams,
Delete_relationResponse,
Get_association_key_by_key_nameParams,
Get_association_key_by_key_nameResponse,
Get_association_by_object_keysParams,
Get_association_by_object_keysResponse,
Update_associationParams,
Update_associationRequestBody,
Update_associationResponse,
Delete_associationParams,
Delete_associationResponse,
Get_association_by_IDParams,
Get_association_by_IDResponse,
Create_associationParams,
Create_associationRequestBody,
Create_associationResponse,
Find_associationsParams,
Find_associationsResponse
} from '../../types/generated/associations';

export class AssociationsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Create Relation for you associated entities.
   * Create Relation.Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_relation(params: Create_relationParams, data: Create_relationRequestBody): Promise<Create_relationResponse> {
    return this.client.post<Create_relationResponse>('/associations/relations', data);
  }

  /**
   * Find Relations
   * Find Relations
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async find_relations(params: Find_relationsParams): Promise<Find_relationsResponse> {
    const url = `/associations/relations/${params.recordId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.associationIds !== undefined) queryParams.associationIds = params.associationIds;
    return this.client.get<Find_relationsResponse>(url, { params: queryParams });
  }

  /**
   * Delete Relation
   * Delete Relation
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_relation(params: Delete_relationParams): Promise<Delete_relationResponse> {
    const url = `/associations/relations/${params.relationId}`;
    return this.client.delete<Delete_relationResponse>(url);
  }

  /**
   * Get association key by key name
   * Using this api you can get standard / user defined association by key
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_association_key_by_key_name(params: Get_association_key_by_key_nameParams): Promise<Get_association_key_by_key_nameResponse> {
    const url = `/associations/key/${params.key_name}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_association_key_by_key_nameResponse>(url, { params: queryParams });
  }

  /**
   * Get association by object keys
   * Get association by object keys like contacts, custom objects and opportunities. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_association_by_object_keys(params: Get_association_by_object_keysParams): Promise<Get_association_by_object_keysResponse> {
    const url = `/associations/objectKey/${params.objectKey}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_association_by_object_keysResponse>(url, { params: queryParams });
  }

  /**
   * Update Association By Id
   * Update Association , Allows you to update labels of an associations. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_association(params: Update_associationParams, data: Update_associationRequestBody): Promise<Update_associationResponse> {
    const url = `/associations/${params.associationId}`;
    return this.client.put<Update_associationResponse>(url, data);
  }

  /**
   * Delete Association
   * Delete USER_DEFINED Association By Id, deleting an association will also all the relations for that association
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_association(params: Delete_associationParams): Promise<Delete_associationResponse> {
    const url = `/associations/${params.associationId}`;
    return this.client.delete<Delete_associationResponse>(url);
  }

  /**
   * Get association by ID
   * Using this api you can get SYSTEM_DEFINED / USER_DEFINED association by id 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_association_by_ID(params: Get_association_by_IDParams): Promise<Get_association_by_IDResponse> {
    const url = `/associations/${params.associationId}`;
    return this.client.get<Get_association_by_IDResponse>(url);
  }

  /**
   * Create Association
   * Allow you to create contact - contact , contact - custom objects associations, will add more in the future.Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_association(params: Create_associationParams, data: Create_associationRequestBody): Promise<Create_associationResponse> {
    return this.client.post<Create_associationResponse>('/associations/', data);
  }

  /**
   * Get all associations for a sub-account / location
   * Get all Associations
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async find_associations(params: Find_associationsParams): Promise<Find_associationsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    return this.client.get<Find_associationsResponse>('/associations/', { params: queryParams });
  }
}
