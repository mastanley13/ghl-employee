import { APIClient } from '../../utils/api-client';
// Import types
import {
Verify_emailParams,
Verify_emailRequestBody,
Verify_emailResponse
} from '../../types/generated/email-isv';

export class Email-isvAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Email Verification
   * Verify Email
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async verify_email(params: Verify_emailParams, data: Verify_emailRequestBody): Promise<Verify_emailResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.post<Verify_emailResponse>('/email/verify', data, { params: queryParams });
  }
}
