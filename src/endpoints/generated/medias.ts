import { APIClient } from '../../utils/api-client';
// Import types
import {
Fetch_media_contentParams,
Fetch_media_contentResponse,
Upload_media_contentParams,
Upload_media_contentRequestBody,
Upload_media_contentResponse,
Delete_media_contentParams,
Delete_media_contentResponse
} from '../../types/generated/medias';

export class MediasAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get List of Files
   * Fetches list of files and folders from the media library
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async fetch_media_content(params: Fetch_media_contentParams): Promise<Fetch_media_contentResponse> {
    const queryParams: Record<string, any> = {};
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.sortBy !== undefined) queryParams.sortBy = params.sortBy;
    if (params.sortOrder !== undefined) queryParams.sortOrder = params.sortOrder;
    if (params.type !== undefined) queryParams.type = params.type;
    if (params.query !== undefined) queryParams.query = params.query;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.parentId !== undefined) queryParams.parentId = params.parentId;
    return this.client.get<Fetch_media_contentResponse>('/medias/files', { params: queryParams });
  }

  /**
   * Upload File into Media Library
   * If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async upload_media_content(params: Upload_media_contentParams, data: Upload_media_contentRequestBody): Promise<Upload_media_contentResponse> {
    return this.client.post<Upload_media_contentResponse>('/medias/upload-file', data);
  }

  /**
   * Delete File or Folder
   * Deletes specific file or folder from the media library
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_media_content(params: Delete_media_contentParams): Promise<Delete_media_contentResponse> {
    const url = `/medias/${params.id}`;
    const queryParams: Record<string, any> = {};
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    return this.client.delete<Delete_media_contentResponse>(url, { params: queryParams });
  }
}
