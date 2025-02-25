// Generated TypeScript interfaces for emails

export interface CreateBuilderDto {
  locationId: string;
  title?: string;
  type: 'html' | 'folder' | 'import' | 'builder';
  updatedBy?: string;
  builderVersion?: '1' | '2';
  parentId?: string;
  importProvider: 'mailchimp' | 'active_campaign';
  importURL?: string;
  isPlainText?: boolean;
}

export interface CreateBuilderSuccesfulResponseDto {
  id: string;
  traceId: string;
  status: string;
  redirect: string;
}

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface FetchBuilderSuccesfulResponseDto {
  name?: string;
  updatedBy?: string;
  isPlainText?: boolean;
  lastUpdated?: string;
  dateAdded?: string;
  previewUrl?: string;
  id?: string;
  version?: string;
  templateType?: string;
}

export interface DeleteBuilderSuccesfulResponseDto {
  ok?: string;
  traceId?: string;
}

export interface SaveBuilderDataDto {
  locationId: string;
  templateId: string;
  updatedBy: string;
  html: string;
  editorType: 'html';
}

export interface BuilderUpdateSuccessfulDTO {
  ok?: string;
  traceId?: string;
  previewUrl?: string;
  templateDownloadUrl?: string;
  id?: string;
}

export interface Create_templateParams {
  Authorization: string;
  Version: string;
}

export type Create_templateRequestBody = CreateBuilderDto;

export type Create_templateResponse = CreateBuilderSuccesfulResponseDto;

export interface Fetch_templateParams {
  Authorization: string;
  locationId: string;
  limit?: string;
  offset?: string;
  sortByDate?: string;
  archived?: string;
  builderVersion?: string;
  name?: string;
  parentId?: string;
  templatesOnly?: string;
  Version: string;
}

export type Fetch_templateResponse = FetchBuilderSuccesfulResponseDto;

export interface Delete_templateParams {
  Authorization: string;
  locationId: string;
  templateId: string;
  Version: string;
}

export type Delete_templateResponse = DeleteBuilderSuccesfulResponseDto;

export interface Update_templateParams {
  Authorization: string;
  Version: string;
}

export type Update_templateRequestBody = SaveBuilderDataDto;

export type Update_templateResponse = BuilderUpdateSuccessfulDTO;

