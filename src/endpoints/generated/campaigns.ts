import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_campaignsParams,
Get_campaignsResponse
} from '../../types/generated/campaigns';

export class CampaignsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Campaigns
   * Get Campaigns
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_campaigns(params: Get_campaignsParams): Promise<Get_campaignsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.status !== undefined) queryParams.status = params.status;
    return this.client.get<Get_campaignsResponse>('/campaigns/', { params: queryParams });
  }
}
