// Generated TypeScript interfaces for surveys

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface GetSurveysSchema {
  id?: string;
  name?: string;
  locationId?: string;
}

export interface GetSurveysSuccessfulResponseDto {
  surveys?: GetSurveysSchema[];
  total?: number;
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

export interface SubmissionSchema {
  id?: string;
  contactId?: string;
  createdAt?: string;
  surveyId?: string;
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

export interface GetSurveysSubmissionSuccessfulResponseDto {
  submissions?: SubmissionSchema[];
  meta?: metaSchema;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface Get_surveys_submissionsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  page?: number;
  limit?: number;
  surveyId?: string;
  q?: string;
  startAt?: string;
  endAt?: string;
}

export type Get_surveys_submissionsResponse = GetSurveysSubmissionSuccessfulResponseDto;

export interface Get_surveysParams {
  Authorization: string;
  Version: string;
  locationId: string;
  skip?: number;
  limit?: number;
  type?: string;
}

export type Get_surveysResponse = GetSurveysSuccessfulResponseDto;

