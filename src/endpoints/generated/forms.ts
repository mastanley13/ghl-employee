import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_forms_submissionsParams,
Get_forms_submissionsResponse,
Upload_to_custom_fieldsParams,
Upload_to_custom_fieldsResponse,
Get_formsParams,
Get_formsResponse
} from '../../types/generated/forms';

export class FormsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Forms Submissions
   * Get Forms Submissions
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_forms_submissions(params: Get_forms_submissionsParams): Promise<Get_forms_submissionsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.formId !== undefined) queryParams.formId = params.formId;
    if (params.q !== undefined) queryParams.q = params.q;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    return this.client.get<Get_forms_submissionsResponse>('/forms/submissions', { params: queryParams });
  }

  /**
   * Upload files to custom fields
   * Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >". <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async upload_to_custom_fields(params: Upload_to_custom_fieldsParams): Promise<Upload_to_custom_fieldsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.contactId !== undefined) queryParams.contactId = params.contactId;
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.post<Upload_to_custom_fieldsResponse>('/forms/upload-custom-files', {}, { params: queryParams });
  }

  /**
   * Get Forms
   * Get Forms
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_forms(params: Get_formsParams): Promise<Get_formsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.type !== undefined) queryParams.type = params.type;
    return this.client.get<Get_formsResponse>('/forms/', { params: queryParams });
  }
}
