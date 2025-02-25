// Generated TypeScript interfaces for medias

export interface GetFilesResponseDTO {
  files: string[];
}

export interface UploadFileResponseDTO {
  fileId: string;
}

export interface Fetch_media_contentParams {
  Authorization: string;
  Version: string;
  offset?: string;
  limit?: string;
  sortBy: string;
  sortOrder: string;
  type?: string;
  query?: string;
  altType: string;
  altId: string;
  parentId?: string;
}

export type Fetch_media_contentResponse = GetFilesResponseDTO;

export interface Upload_media_contentParams {
  Authorization: string;
  Version: string;
}

export interface Upload_media_contentRequestBody {
  file?: string;
  hosted?: boolean;
  fileUrl?: string;
  name?: string;
  parentId?: string;
}

export type Upload_media_contentResponse = UploadFileResponseDTO;

export interface Delete_media_contentParams {
  Authorization: string;
  Version: string;
  id: string;
  altType: string;
  altId: string;
}

