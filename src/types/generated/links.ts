// Generated TypeScript interfaces for links

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface LinkSchema {
  id?: string;
  name?: string;
  redirectTo?: string;
  fieldKey?: string;
  locationId?: string;
}

export interface GetLinksSuccessfulResponseDto {
  links?: LinkSchema[];
}

export interface LinksDto {
  locationId: string;
  name: string;
  redirectTo: string;
}

export interface GetLinkSuccessfulResponseDto {
  link?: LinkSchema;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface LinkUpdateDto {
  name: string;
  redirectTo: string;
}

export interface DeleteLinksSuccessfulResponseDto {
  succeded?: boolean;
}

export interface Update_linkParams {
  Authorization: string;
  Version: string;
  linkId: string;
}

export type Update_linkRequestBody = LinkUpdateDto;

export type Update_linkResponse = GetLinkSuccessfulResponseDto;

export interface Delete_linkParams {
  Authorization: string;
  Version: string;
  linkId: string;
}

export type Delete_linkResponse = DeleteLinksSuccessfulResponseDto;

export interface Get_linksParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_linksResponse = GetLinksSuccessfulResponseDto;

export interface Create_linkParams {
  Authorization: string;
  Version: string;
}

export type Create_linkRequestBody = LinksDto;

export type Create_linkResponse = GetLinkSuccessfulResponseDto;

