// Generated TypeScript interfaces for funnels

export interface CreateRedirectParams {
  locationId: string;
  domain: string;
  path: string;
  target: string;
  action: 'funnel' | 'website' | 'url' | 'all';
}

export interface RedirectResponseDTO {
  id: string;
  locationId: string;
  domain: string;
  path: string;
  pathLowercase: string;
  type: string;
  target: string;
  action: string;
}

export interface CreateRedirectResponseDTO {
  data: any;
}

export interface UpdateRedirectParams {
  target: string;
  action: 'funnel' | 'website' | 'url' | 'all';
  locationId: string;
}

export interface RedirectListResponseDTO {
  data: Record<string, any>;
}

export interface DeleteRedirectResponseDTO {
  data: Record<string, any>;
}

export interface UpdateRedirectResponseDTO {
  data: any;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface FunnelPageResponseDTO {
  _id: string;
  locationId: string;
  funnelId: string;
  name: string;
  stepId: string;
  deleted: string;
  updatedAt: string;
}

export interface FunnelPageCountResponseDTO {
  count: number;
}

export interface FunnelListResponseDTO {
  funnels: Record<string, any>;
  count: number;
  traceId: string;
}

export interface Create_redirectParams {
  Authorization: string;
  Version: string;
}

export type Create_redirectRequestBody = CreateRedirectParams;

export type Create_redirectResponse = CreateRedirectResponseDTO;

export interface Update_redirect_by_idParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Update_redirect_by_idRequestBody = UpdateRedirectParams;

export type Update_redirect_by_idResponse = UpdateRedirectResponseDTO;

export interface Delete_redirect_by_idParams {
  Authorization: string;
  Version: string;
  id: string;
  locationId: string;
}

export type Delete_redirect_by_idResponse = DeleteRedirectResponseDTO;

export interface Fetch_redirects_listParams {
  Authorization: string;
  Version: string;
  locationId: string;
  limit: number;
  offset: number;
  search?: string;
}

export type Fetch_redirects_listResponse = RedirectListResponseDTO;

export interface GetFunnelsParams {
  Authorization: string;
  locationId: string;
  type?: string;
  category?: string;
  offset?: string;
  limit?: string;
  parentId?: string;
  name?: string;
}

export type GetFunnelsResponse = FunnelListResponseDTO;

export interface GetPagesByFunnelIdParams {
  Authorization: string;
  locationId: string;
  funnelId: string;
  name?: string;
  limit: number;
  offset: number;
}

export type GetPagesByFunnelIdResponse = FunnelPageResponseDTO;

export interface GetPagesCountByFunnelIdParams {
  Authorization?: string;
  locationId: string;
  funnelId: string;
  name?: string;
}

export type GetPagesCountByFunnelIdResponse = FunnelPageCountResponseDTO;

