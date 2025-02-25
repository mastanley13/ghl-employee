import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_custom_field_by_idParams,
Get_custom_field_by_idResponse,
Update_custom_fieldParams,
Update_custom_fieldRequestBody,
Update_custom_fieldResponse,
Delete_custom_fieldParams,
Delete_custom_fieldResponse,
Get_custom_fields_by_object_keyParams,
Get_custom_fields_by_object_keyResponse,
Create_custom_field_folderParams,
Create_custom_field_folderRequestBody,
Create_custom_field_folderResponse,
Update_custom_field_folderParams,
Update_custom_field_folderRequestBody,
Update_custom_field_folderResponse,
Delete_custom_field_folderParams,
Delete_custom_field_folderResponse,
Create_custom_fieldParams,
Create_custom_fieldRequestBody,
Create_custom_fieldResponse
} from '../../types/generated/custom-fields';

export class Custom-fieldsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Custom Field / Folder By Id
   * <div>
                  <p> Get Custom Field / Folder By Id.</p> 
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
                        Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
                        </strong>
                      </span>
                  </div>
                </div>
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_field_by_id(params: Get_custom_field_by_idParams): Promise<Get_custom_field_by_idResponse> {
    const url = `/custom-fields/${params.id}`;
    return this.client.get<Get_custom_field_by_idResponse>(url);
  }

  /**
   * Update Custom Field By Id
   * <div>
    <p> Update Custom Field By Id </p> 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          </strong>
        </span>
    </div>
  </div>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_custom_field(params: Update_custom_fieldParams, data: Update_custom_fieldRequestBody): Promise<Update_custom_fieldResponse> {
    const url = `/custom-fields/${params.id}`;
    return this.client.put<Update_custom_fieldResponse>(url, data);
  }

  /**
   * Delete Custom Field By Id
   * <div>
    <p> Delete Custom Field By Id </p> 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          </strong>
        </span>
    </div>
  </div>
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_custom_field(params: Delete_custom_fieldParams): Promise<Delete_custom_fieldResponse> {
    const url = `/custom-fields/${params.id}`;
    return this.client.delete<Delete_custom_fieldResponse>(url);
  }

  /**
   * Get Custom Fields By Object Key
   * <div>
                  <p> Get Custom Fields By Object Key</p> 
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
                        Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
                        </strong>
                      </span>
                  </div>
                </div>
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_fields_by_object_key(params: Get_custom_fields_by_object_keyParams): Promise<Get_custom_fields_by_object_keyResponse> {
    const url = `/custom-fields/object-key/${params.objectKey}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_custom_fields_by_object_keyResponse>(url, { params: queryParams });
  }

  /**
   * Create Custom Field Folder
   * <div>
    <p> Create Custom Field Folder </p> 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          </strong>
        </span>
    </div>
  </div>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_custom_field_folder(params: Create_custom_field_folderParams, data: Create_custom_field_folderRequestBody): Promise<Create_custom_field_folderResponse> {
    return this.client.post<Create_custom_field_folderResponse>('/custom-fields/folder', data);
  }

  /**
   * Update Custom Field Folder Name
   * <div>
    <p> Create Custom Field Folder </p> 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          </strong>
        </span>
    </div>
  </div>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_custom_field_folder(params: Update_custom_field_folderParams, data: Update_custom_field_folderRequestBody): Promise<Update_custom_field_folderResponse> {
    const url = `/custom-fields/folder/${params.id}`;
    return this.client.put<Update_custom_field_folderResponse>(url, data);
  }

  /**
   * Delete Custom Field Folder
   * <div>
    <p> Create Custom Field Folder </p> 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          </strong>
        </span>
    </div>
  </div>
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_custom_field_folder(params: Delete_custom_field_folderParams): Promise<Delete_custom_field_folderResponse> {
    const url = `/custom-fields/folder/${params.id}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.delete<Delete_custom_field_folderResponse>(url, { params: queryParams });
  }

  /**
   * Create Custom Field
   * <div>
                  <p> Create Custom Field </p> 
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
                        Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
                        </strong>
                      </span>
                  </div>
                </div>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_custom_field(params: Create_custom_fieldParams, data: Create_custom_fieldRequestBody): Promise<Create_custom_fieldResponse> {
    return this.client.post<Create_custom_fieldResponse>('/custom-fields/', data);
  }
}
