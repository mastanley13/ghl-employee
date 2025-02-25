// Generated TypeScript interfaces for campaigns

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

export interface campaignsSchema {
  id?: string;
  name?: string;
  status?: string;
  locationId?: string;
}

export interface CampaignsSuccessfulResponseDto {
  campaigns?: campaignsSchema[];
}

export interface Get_campaignsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  status?: string;
}

export type Get_campaignsResponse = CampaignsSuccessfulResponseDto;

