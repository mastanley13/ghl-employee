import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_custom_menu_by_idParams,
Get_custom_menu_by_idResponse,
Delete_custom_menuParams,
Delete_custom_menuResponse,
Update_custom_menuParams,
Update_custom_menuRequestBody,
Update_custom_menuResponse,
Get_custom_menusParams,
Get_custom_menusResponse,
Create_custom_menuParams,
Create_custom_menuRequestBody,
Create_custom_menuResponse
} from '../../types/generated/custom-menus';

export class Custom-menusAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Custom Menu Link
   * Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_menu_by_id(params: Get_custom_menu_by_idParams): Promise<Get_custom_menu_by_idResponse> {
    const url = `/custom-menus/${params.customMenuId}`;
    return this.client.get<Get_custom_menu_by_idResponse>(url);
  }

  /**
   * Delete Custom Menu Link
   * Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_custom_menu(params: Delete_custom_menuParams): Promise<Delete_custom_menuResponse> {
    const url = `/custom-menus/${params.customMenuId}`;
    return this.client.delete<Delete_custom_menuResponse>(url);
  }

  /**
   * Update Custom Menu Link
   * Updates an existing custom menu for a given company. Requires authentication and proper permissions.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_custom_menu(params: Update_custom_menuParams, data: Update_custom_menuRequestBody): Promise<Update_custom_menuResponse> {
    const url = `/custom-menus/${params.customMenuId}`;
    return this.client.put<Update_custom_menuResponse>(url, data);
  }

  /**
   * Get Custom Menu Links
   * Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_menus(params: Get_custom_menusParams): Promise<Get_custom_menusResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.query !== undefined) queryParams.query = params.query;
    if (params.showOnCompany !== undefined) queryParams.showOnCompany = params.showOnCompany;
    return this.client.get<Get_custom_menusResponse>('/custom-menus/', { params: queryParams });
  }

  /**
   * Create Custom Menu Link
   * Creates a new custom menu for a company. Requires authentication and proper permissions. For Icon Usage Details please refer to  https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_custom_menu(params: Create_custom_menuParams, data: Create_custom_menuRequestBody): Promise<Create_custom_menuResponse> {
    return this.client.post<Create_custom_menuResponse>('/custom-menus/', data);
  }
}
