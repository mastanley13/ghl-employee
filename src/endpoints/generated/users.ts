import { APIClient } from '../../utils/api-client';
// Import types
import {
Search_usersParams,
Search_usersResponse,
Get_userParams,
Get_userResponse,
Update_userParams,
Update_userRequestBody,
Update_userResponse,
Delete_userParams,
Delete_userResponse,
Get_user_by_locationParams,
Get_user_by_locationResponse,
Create_userParams,
Create_userRequestBody,
Create_userResponse
} from '../../types/generated/users';

export class UsersAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Search Users
   * Search Users
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async search_users(params: Search_usersParams): Promise<Search_usersResponse> {
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    if (params.query !== undefined) queryParams.query = params.query;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.type !== undefined) queryParams.type = params.type;
    if (params.role !== undefined) queryParams.role = params.role;
    if (params.ids !== undefined) queryParams.ids = params.ids;
    if (params.sort !== undefined) queryParams.sort = params.sort;
    if (params.sortDirection !== undefined) queryParams.sortDirection = params.sortDirection;
    if (params.enabled2waySync !== undefined) queryParams.enabled2waySync = params.enabled2waySync;
    return this.client.get<Search_usersResponse>('/users/search', { params: queryParams });
  }

  /**
   * Get User
   * Get User
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_user(params: Get_userParams): Promise<Get_userResponse> {
    const url = `/users/${params.userId}`;
    return this.client.get<Get_userResponse>(url);
  }

  /**
   * Update User
   * Update User
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_user(params: Update_userParams, data: Update_userRequestBody): Promise<Update_userResponse> {
    const url = `/users/${params.userId}`;
    return this.client.put<Update_userResponse>(url, data);
  }

  /**
   * Delete User
   * Delete User
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_user(params: Delete_userParams): Promise<Delete_userResponse> {
    const url = `/users/${params.userId}`;
    return this.client.delete<Delete_userResponse>(url);
  }

  /**
   * Get User by Location
   * Get User by Location
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_user_by_location(params: Get_user_by_locationParams): Promise<Get_user_by_locationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_user_by_locationResponse>('/users/', { params: queryParams });
  }

  /**
   * Create User
   * Create User
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_user(params: Create_userParams, data: Create_userRequestBody): Promise<Create_userResponse> {
    return this.client.post<Create_userResponse>('/users/', data);
  }
}
