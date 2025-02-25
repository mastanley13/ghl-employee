import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_surveys_submissionsParams,
Get_surveys_submissionsResponse,
Get_surveysParams,
Get_surveysResponse
} from '../../types/generated/surveys';

export class SurveysAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Surveys Submissions
   * Get Surveys Submissions
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_surveys_submissions(params: Get_surveys_submissionsParams): Promise<Get_surveys_submissionsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.surveyId !== undefined) queryParams.surveyId = params.surveyId;
    if (params.q !== undefined) queryParams.q = params.q;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    return this.client.get<Get_surveys_submissionsResponse>('/surveys/submissions', { params: queryParams });
  }

  /**
   * Get Surveys
   * Get Surveys
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_surveys(params: Get_surveysParams): Promise<Get_surveysResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.type !== undefined) queryParams.type = params.type;
    return this.client.get<Get_surveysResponse>('/surveys/', { params: queryParams });
  }
}
