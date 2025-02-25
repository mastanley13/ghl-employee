import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_companyParams,
Get_companyResponse
} from '../../types/generated/companies';

export class CompaniesAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Company
   * Get Comapny
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_company(params: Get_companyParams): Promise<Get_companyResponse> {
    const url = `/companies/${params.companyId}`;
    return this.client.get<Get_companyResponse>(url);
  }
}
