import { APIClient } from '../../utils/api-client';
// Import types
import {
Get_custom_snapshotsParams,
Get_custom_snapshotsResponse,
Create_snapshot_share_linkParams,
Create_snapshot_share_linkRequestBody,
Create_snapshot_share_linkResponse,
Get_snapshot_pushParams,
Get_snapshot_pushResponse,
Get_latest_snapshot_pushParams,
Get_latest_snapshot_pushResponse
} from '../../types/generated/snapshots';

export class SnapshotsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Get Snapshots
   * Get a list of all own and imported Snapshots
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_custom_snapshots(params: Get_custom_snapshotsParams): Promise<Get_custom_snapshotsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    return this.client.get<Get_custom_snapshotsResponse>('/snapshots/', { params: queryParams });
  }

  /**
   * Create Snapshot Share Link
   * Create a share link for snapshot
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_snapshot_share_link(params: Create_snapshot_share_linkParams, data: Create_snapshot_share_linkRequestBody): Promise<Create_snapshot_share_linkResponse> {
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    return this.client.post<Create_snapshot_share_linkResponse>('/snapshots/share/link', data, { params: queryParams });
  }

  /**
   * Get Snapshot Push between Dates
   * Get list of sub-accounts snapshot pushed in time period
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_snapshot_push(params: Get_snapshot_pushParams): Promise<Get_snapshot_pushResponse> {
    const url = `/snapshots/snapshot-status/${params.snapshotId}`;
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    if (params.from !== undefined) queryParams.from = params.from;
    if (params.to !== undefined) queryParams.to = params.to;
    if (params.lastDoc !== undefined) queryParams.lastDoc = params.lastDoc;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    return this.client.get<Get_snapshot_pushResponse>(url, { params: queryParams });
  }

  /**
   * Get Last Snapshot Push
   * Get Latest Snapshot Push Status for a location id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_latest_snapshot_push(params: Get_latest_snapshot_pushParams): Promise<Get_latest_snapshot_pushResponse> {
    const url = `/snapshots/snapshot-status/${params.snapshotId}/location/${params.locationId}`;
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    return this.client.get<Get_latest_snapshot_pushResponse>(url, { params: queryParams });
  }
}
