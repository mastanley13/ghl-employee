// Generated TypeScript interfaces for snapshots

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface SnapshotsSchema {
  id?: string;
  name?: string;
  type?: string;
}

export interface GetSnapshotsSuccessfulResponseDto {
  snapshots?: SnapshotsSchema[];
}

export interface CreateSnapshotShareLinkRequestDTO {
  snapshot_id: string;
  share_type: 'link' | 'permanent_link' | 'agency_link' | 'location_link';
  relationship_number?: string;
  share_location_id?: string;
}

export interface CreateSnapshotShareLinkSuccessfulResponseDTO {
  id?: string;
  shareLink?: string;
}

export interface SnapshotStatusSchema {
  id?: string;
  locationId?: string;
  status?: string;
  dateAdded?: string;
}

export interface GetSnapshotPushStatusSuccessfulResponseDTO {
  data?: SnapshotStatusSchema[];
}

export interface SnapshotStatusSchemaWithAssets {
  id?: string;
  locationId?: string;
  status?: string;
  completed?: string[];
  pending?: string[];
}

export interface GetLatestSnapshotPushStatusSuccessfulResponseDTO {
  data?: SnapshotStatusSchemaWithAssets;
}

export interface Get_custom_snapshotsParams {
  Authorization: string;
  Version: string;
  companyId: string;
}

export type Get_custom_snapshotsResponse = GetSnapshotsSuccessfulResponseDto;

export interface Create_snapshot_share_linkParams {
  Authorization: string;
  companyId: string;
  Version: string;
}

export type Create_snapshot_share_linkRequestBody = CreateSnapshotShareLinkRequestDTO;

export type Create_snapshot_share_linkResponse = CreateSnapshotShareLinkSuccessfulResponseDTO;

export interface Get_snapshot_pushParams {
  Authorization: string;
  snapshotId: string;
  companyId: string;
  from: string;
  to: string;
  lastDoc: string;
  limit: string;
  Version: string;
}

export type Get_snapshot_pushResponse = GetSnapshotPushStatusSuccessfulResponseDTO;

export interface Get_latest_snapshot_pushParams {
  Authorization: string;
  companyId: string;
  snapshotId: string;
  locationId: string;
  Version: string;
}

export type Get_latest_snapshot_pushResponse = GetLatestSnapshotPushStatusSuccessfulResponseDTO;

