// Generated TypeScript interfaces for workflows

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

export interface WorkflowSchema {
  id?: string;
  name?: string;
  status?: string;
  version?: number;
  createdAt?: string;
  updatedAt?: string;
  locationId?: string;
}

export interface GetWorkflowSuccessfulResponseDto {
  workflows?: WorkflowSchema[];
}

export interface Get_workflowParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_workflowResponse = GetWorkflowSuccessfulResponseDto;

