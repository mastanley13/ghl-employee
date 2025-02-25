// Generated TypeScript interfaces for associations

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

export interface createRelationReqDto {
  locationId: string;
  associationId: string;
  firstRecordId: string;
  secondRecordId: string;
}

export interface GetPostSuccessfulResponseDto {
  locationId: string;
  id: string;
  key: string;
  firstObjectLabel: Record<string, any>;
  firstObjectKey: Record<string, any>;
  secondObjectLabel: Record<string, any>;
  secondObjectKey: Record<string, any>;
  associationType: Record<string, any>;
}

export interface createAssociationReqDto {
  locationId: string;
  key: string;
  firstObjectLabel: Record<string, any>;
  firstObjectKey: Record<string, any>;
  secondObjectLabel: Record<string, any>;
  secondObjectKey: Record<string, any>;
}

export interface UpdateAssociationReqDto {
  firstObjectLabel: Record<string, any>;
  secondObjectLabel: Record<string, any>;
}

export interface DeleteAssociationsResponseDTO {
  deleted: boolean;
  id: string;
  message: string;
}

export interface Create_relationParams {
  Authorization: string;
  Version: string;
}

export type Create_relationRequestBody = createRelationReqDto;

export type Create_relationResponse = GetPostSuccessfulResponseDto;

export interface Find_relationsParams {
  Authorization: string;
  Version: string;
  recordId: string;
  locationId: string;
  skip: number;
  limit: number;
  associationIds?: Array;
}

export type Find_relationsResponse = GetPostSuccessfulResponseDto;

export interface Delete_relationParams {
  Authorization: string;
  Version: string;
  relationId: string;
}

export type Delete_relationResponse = GetPostSuccessfulResponseDto;

export interface Get_association_key_by_key_nameParams {
  Authorization: string;
  Version: string;
  key_name: string;
  locationId: string;
}

export type Get_association_key_by_key_nameResponse = GetPostSuccessfulResponseDto;

export interface Get_association_by_object_keysParams {
  Authorization: string;
  Version: string;
  objectKey?: string;
  locationId?: string;
}

export type Get_association_by_object_keysResponse = GetPostSuccessfulResponseDto;

export interface Update_associationParams {
  Authorization: string;
  Version: string;
  associationId: string;
}

export type Update_associationRequestBody = UpdateAssociationReqDto;

export type Update_associationResponse = GetPostSuccessfulResponseDto;

export interface Delete_associationParams {
  Authorization: string;
  Version: string;
  associationId: string;
}

export type Delete_associationResponse = DeleteAssociationsResponseDTO;

export interface Get_association_by_IDParams {
  Authorization: string;
  Version: string;
  associationId: string;
}

export type Get_association_by_IDResponse = GetPostSuccessfulResponseDto;

export interface Create_associationParams {
  Authorization: string;
  Version: string;
}

export type Create_associationRequestBody = createAssociationReqDto;

export type Create_associationResponse = GetPostSuccessfulResponseDto;

export interface Find_associationsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  skip: number;
  limit: number;
}

export type Find_associationsResponse = GetPostSuccessfulResponseDto;

