// Generated TypeScript interfaces for opportunities

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

export interface SearchOpportunitiesContactResponseSchema {
  id?: string;
  name?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

export interface CustomFieldResponseSchema {
  id: string;
  fieldValue: any;
}

export interface SearchOpportunitiesResponseSchema {
  id?: string;
  name?: string;
  monetaryValue?: number;
  pipelineId?: string;
  pipelineStageId?: string;
  assignedTo?: string;
  status?: string;
  source?: string;
  lastStatusChangeAt?: string;
  lastStageChangeAt?: string;
  lastActionDate?: string;
  indexVersion?: string;
  createdAt?: string;
  updatedAt?: string;
  contactId?: string;
  locationId?: string;
  contact?: SearchOpportunitiesContactResponseSchema;
  notes?: string[];
  tasks?: string[];
  calendarEvents?: string[];
  customFields?: CustomFieldResponseSchema[];
  followers?: Array[];
}

export interface SearchMetaResponseSchema {
  total?: number;
  nextPageUrl?: string;
  startAfterId?: string;
  startAfter?: number;
  currentPage?: number;
  nextPage?: number;
  prevPage?: number;
}

export interface SearchSuccessfulResponseDto {
  opportunities?: SearchOpportunitiesResponseSchema[];
  meta?: SearchMetaResponseSchema;
  aggregations?: Record<string, any>;
}

export interface PipelinesResponseSchema {
  id?: string;
  name?: string;
  stages?: Array[];
  showInFunnel?: boolean;
  showInPieChart?: boolean;
  locationId?: string;
}

export interface GetPipelinesSuccessfulResponseDto {
  pipelines?: PipelinesResponseSchema[];
}

export interface GetPostOpportunitySuccessfulResponseDto {
  opportunity?: SearchOpportunitiesResponseSchema;
}

export interface DeleteUpdateOpportunitySuccessfulResponseDto {
  succeded?: boolean;
}

export interface UpdateStatusDto {
  status: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
}

export interface customFieldsInputArraySchema {
  id: string;
  key?: string;
  field_value?: string[];
}

export interface customFieldsInputObjectSchema {
  id: string;
  key?: string;
  field_value?: Record<string, any>;
}

export interface customFieldsInputStringSchema {
  id?: string;
  key?: string;
  field_value?: string;
}

export interface CreateDto {
  pipelineId: string;
  locationId: string;
  name: string;
  pipelineStageId?: string;
  status: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
  contactId: string;
  monetaryValue?: number;
  assignedTo?: string;
  customFields?: any[];
}

export interface UpdateOpportunityDto {
  pipelineId?: string;
  name?: string;
  pipelineStageId?: string;
  status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
  monetaryValue?: number;
  assignedTo?: string;
  customFields?: any[];
}

export interface UpsertOpportunityDto {
  pipelineId: string;
  locationId: string;
  contactId: string;
  name?: string;
  status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
  pipelineStageId?: string;
  monetaryValue?: number;
  assignedTo?: string;
}

export interface UpsertOpportunitySuccessfulResponseDto {
  opportunity: Record<string, any>;
  new: boolean;
}

export interface FollowersDTO {
  followers: string[];
}

export interface CreateAddFollowersSuccessfulResponseDto {
  followers?: string[];
  followersAdded?: string[];
}

export interface DeleteFollowersSuccessfulResponseDto {
  followers?: string[];
  followersRemoved?: string[];
}

export interface Search_opportunityParams {
  Authorization: string;
  Version: string;
  q?: string;
  location_id: string;
  pipeline_id?: string;
  pipeline_stage_id?: string;
  contact_id?: string;
  status?: string;
  assigned_to?: string;
  campaignId?: string;
  id?: string;
  order?: string;
  endDate?: string;
  startAfter?: string;
  startAfterId?: string;
  date?: string;
  country?: string;
  page?: number;
  limit?: number;
  getTasks?: boolean;
  getNotes?: boolean;
  getCalendarEvents?: boolean;
}

export type Search_opportunityResponse = SearchSuccessfulResponseDto;

export interface Get_pipelinesParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_pipelinesResponse = GetPipelinesSuccessfulResponseDto;

export interface Get_opportunityParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Get_opportunityResponse = GetPostOpportunitySuccessfulResponseDto;

export interface Delete_opportunityParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Delete_opportunityResponse = DeleteUpdateOpportunitySuccessfulResponseDto;

export interface Update_opportunityParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Update_opportunityRequestBody = UpdateOpportunityDto;

export type Update_opportunityResponse = GetPostOpportunitySuccessfulResponseDto;

export interface Update_opportunity_statusParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Update_opportunity_statusRequestBody = UpdateStatusDto;

export type Update_opportunity_statusResponse = DeleteUpdateOpportunitySuccessfulResponseDto;

export interface Upsert_opportunityParams {
  Authorization: string;
  Version: string;
}

export type Upsert_opportunityRequestBody = UpsertOpportunityDto;

export type Upsert_opportunityResponse = UpsertOpportunitySuccessfulResponseDto;

export interface Add_followers_opportunityParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Add_followers_opportunityRequestBody = FollowersDTO;

export type Add_followers_opportunityResponse = CreateAddFollowersSuccessfulResponseDto;

export interface Remove_followers_opportunityParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Remove_followers_opportunityRequestBody = FollowersDTO;

export type Remove_followers_opportunityResponse = DeleteFollowersSuccessfulResponseDto;

export interface Create_opportunityParams {
  Authorization: string;
  Version: string;
}

export type Create_opportunityRequestBody = CreateDto;

export type Create_opportunityResponse = GetPostOpportunitySuccessfulResponseDto;

