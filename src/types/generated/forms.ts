// Generated TypeScript interfaces for forms

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface PageDetailsSchema {
  url?: string;
  title?: string;
}

export interface ContactSessionIds {
  ids?: string[];
}

export interface EventDataSchema {
  fbc?: string;
  fbp?: string;
  page?: PageDetailsSchema;
  type?: string;
  domain?: string;
  medium?: string;
  source?: string;
  version?: string;
  adSource?: string;
  mediumId?: string;
  parentId?: string;
  referrer?: string;
  fbEventId?: string;
  timestamp?: number;
  parentName?: string;
  fingerprint?: string;
  pageVisitType?: string;
  contactSessionIds?: any;
}

export interface othersSchema {
  __submissions_other_field__?: string;
  __custom_field_id__?: string;
  eventData?: EventDataSchema;
  fieldsOriSequance?: string[];
}

export interface FormsSubmissionsSubmissionsSchema {
  id?: string;
  contactId?: string;
  createdAt?: string;
  formId?: string;
  name?: string;
  email?: string;
  others?: othersSchema;
}

export interface metaSchema {
  total?: number;
  currentPage?: number;
  nextPage?: number;
  prevPage?: number;
}

export interface FormsSubmissionsSuccessfulResponseDto {
  submissions?: FormsSubmissionsSubmissionsSchema[];
  meta?: metaSchema;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface FormsParams {
  id?: string;
  name?: string;
  locationId?: string;
}

export interface FormsSuccessfulResponseDto {
  forms?: FormsParams[];
  total?: number;
}

export interface Get_forms_submissionsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  page?: number;
  limit?: number;
  formId?: string;
  q?: string;
  startAt?: string;
  endAt?: string;
}

export type Get_forms_submissionsResponse = FormsSubmissionsSuccessfulResponseDto;

export interface Upload_to_custom_fieldsParams {
  Authorization: string;
  Version: string;
  contactId: string;
  locationId: string;
}

export interface Get_formsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  skip?: number;
  limit?: number;
  type?: string;
}

export type Get_formsResponse = FormsSuccessfulResponseDto;

