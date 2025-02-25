import { APIClient } from '../../utils/api-client';
// Import types
import {
Import_coursesParams,
Import_coursesRequestBody,
Import_coursesResponse
} from '../../types/generated/courses';

export class CoursesAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Import Courses
   * Import Courses through public channels
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async import_courses(params: Import_coursesParams, data: Import_coursesRequestBody): Promise<Import_coursesResponse> {
    return this.client.post<Import_coursesResponse>('/courses/courses-exporter/public/import', data);
  }
}
