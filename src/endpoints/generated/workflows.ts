import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_workflowParams,
Get_workflowResponse
} from '../../types/generated/workflows';

export class WorkflowsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Workflow
   * Get Workflow
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_workflow(params: Get_workflowParams): Promise<Get_workflowResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_workflowResponse>('/workflows/', { params: queryParams });
  }
}
