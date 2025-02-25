import { APIClient } from '../../utils/api-client';
// Import types
import {
LocationsParams,
LocationsResponse,
Generate_payment_linkParams,
Generate_payment_linkRequestBody,
Generate_payment_linkResponse,
Bulk_disable_saasParams,
Bulk_disable_saasRequestBody,
Bulk_disable_saasResponse,
Enable_saasParams,
Enable_saasRequestBody,
Enable_saasResponse,
Pause_locationParams,
Pause_locationRequestBody,
Pause_locationResponse,
Update_rebillingParams,
Update_rebillingRequestBody,
Update_rebillingResponse
} from '../../types/generated/saas-api';

export class Saas-apiAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get locations by stripeId with companyId
   * Get locations by stripeCustomerId or stripeSubscriptionId with companyId
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async locations(params: LocationsParams): Promise<LocationsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.customerId !== undefined) queryParams.customerId = params.customerId;
    if (params.subscriptionId !== undefined) queryParams.subscriptionId = params.subscriptionId;
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    return this.client.get<LocationsResponse>('/saas-api/public-api/locations', { params: queryParams });
  }

  /**
   * Update SaaS subscription
   * Update SaaS subscription for given locationId and customerId
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async generate_payment_link(params: Generate_payment_linkParams, data: Generate_payment_linkRequestBody): Promise<Generate_payment_linkResponse> {
    const url = `/saas-api/public-api/update-saas-subscription/${params.locationId}`;
    return this.client.put<Generate_payment_linkResponse>(url, data);
  }

  /**
   * Disable SaaS for locations
   * Disable SaaS for locations for given locationIds
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async bulk_disable_saas(params: Bulk_disable_saasParams, data: Bulk_disable_saasRequestBody): Promise<Bulk_disable_saasResponse> {
    const url = `/saas-api/public-api/bulk-disable-saas/${params.companyId}`;
    return this.client.post<Bulk_disable_saasResponse>(url, data);
  }

  /**
   * Enable SaaS for location
   * Enable SaaS for given locationIds
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async enable_saas(params: Enable_saasParams, data: Enable_saasRequestBody): Promise<Enable_saasResponse> {
    const url = `/saas-api/public-api/enable-saas/${params.locationId}`;
    return this.client.post<Enable_saasResponse>(url, data);
  }

  /**
   * Pause location
   * Pause Sub account for given locationId
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async pause_location(params: Pause_locationParams, data: Pause_locationRequestBody): Promise<Pause_locationResponse> {
    const url = `/saas-api/public-api/pause/${params.locationId}`;
    return this.client.post<Pause_locationResponse>(url, data);
  }

  /**
   * Update Rebilling
   * Bulk update rebilling for given locationIds
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_rebilling(params: Update_rebillingParams, data: Update_rebillingRequestBody): Promise<Update_rebillingResponse> {
    const url = `/saas-api/public-api/update-rebilling/${params.companyId}`;
    return this.client.post<Update_rebillingResponse>(url, data);
  }
}
