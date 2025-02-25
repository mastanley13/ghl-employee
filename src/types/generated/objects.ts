// Generated TypeScript interfaces for objects

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

export interface CustomObjectLabelDto {
  singular: string;
  plural: string;
}

export interface ICustomObjectSchema {
  id: string;
  standard: boolean;
  key: string;
  labels: any;
  description?: string;
  locationId: string;
  primaryDisplayProperty: string;
  dateAdded: string;
  dateUpdated: string;
  type?: Record<string, any>;
}

export interface OptionDTO {
  key: string;
  label: string;
  url?: string;
}

export interface ICustomField {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: OptionDTO[];
  acceptedFormats?: '.pdf' | '.docx' | '.doc' | '.jpg' | '.jpeg' | '.png' | '.gif' | '.csv' | '.xlsx' | '.xls' | 'all';
  id: string;
  objectKey: string;
  dataType: 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'PHONE' | 'MONETORY' | 'CHECKBOX' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS' | 'DATE' | 'TEXTBOX_LIST' | 'FILE_UPLOAD' | 'RADIO';
  parentId: string;
  fieldKey: string;
  allowCustomOption?: boolean;
  maxFileLimit?: number;
  dateAdded: string;
  dateUpdated: string;
}

export interface CustomObjectByIdResponseDTO {
  object?: ICustomObjectSchema;
  cache: boolean;
  fields?: ICustomField[];
}

export interface CustomObjectListResponseDTO {
  objects?: ICustomObjectSchema[];
}

export interface CustomObjectDisplayPropertyDetails {
  key: string;
  name: string;
  dataType: string;
}

export interface CreateCustomObjectSchemaDTO {
  labels: any;
  key: string;
  description?: string;
  locationId: string;
  primaryDisplayPropertyDetails: any;
}

export interface CustomObjectResponseDTO {
  object?: ICustomObjectSchema;
}

export interface CustomObjectLabelUpdateDto {
  singular?: string;
  plural?: string;
}

export interface UpdateCustomObjectSchemaDTO {
  labels?: any;
  description?: string;
  locationId: string;
  searchableProperties: string[];
}

export interface IRecordSchema {
  id: string;
  owner: string[];
  followers: string[];
  properties: string;
  dateAdded: string;
  dateUpdated: string;
}

export interface RecordByIdResponseDTO {
  record?: IRecordSchema;
}

export interface CreateCustomObjectRecordDto {

}

export interface UpdateCustomObjectRecordDto {

}

export interface ObjectRecordDeleteResponseDTO {
  id?: string;
  success?: boolean;
}

export interface SearchRecordsBody {
  locationId: string;
  page: number;
  pageLimit: number;
  query: string;
  searchAfter: string[];
}

export interface CreatedByResponseDTO {
  channel: string;
  createdAt: string;
  source: string;
  sourceId: string;
}

export interface RecordResponseDTO {
  id: string;
  owner: string[];
  followers: string[];
  properties: string;
  createdAt: string;
  updatedAt: string;
  locationId: string;
  objectId: string;
  objectKey: string;
  createdBy: any;
  lastUpdatedBy: any;
  searchAfter: number[];
}

export interface SearchRecordResponseDTO {
  records?: RecordResponseDTO[];
  total: number;
}

export interface Get_object_schema_by_keyParams {
  Authorization: string;
  Version: string;
  key: string;
  locationId: string;
  fetchProperties?: string;
}

export type Get_object_schema_by_keyResponse = CustomObjectByIdResponseDTO;

export interface Update_custom_objectParams {
  Authorization: string;
  Version: string;
  key: string;
}

export type Update_custom_objectRequestBody = UpdateCustomObjectSchemaDTO;

export type Update_custom_objectResponse = CustomObjectResponseDTO;

export interface Get_record_by_idParams {
  Authorization: string;
  Version: string;
  schemaKey: string;
  id: string;
}

export type Get_record_by_idResponse = RecordByIdResponseDTO;

export interface Update_object_recordParams {
  Authorization: string;
  Version: string;
  schemaKey: string;
  id: string;
  locationId: string;
}

export type Update_object_recordRequestBody = UpdateCustomObjectRecordDto;

export type Update_object_recordResponse = RecordByIdResponseDTO;

export interface Delete_object_recordParams {
  Authorization: string;
  Version: string;
  schemaKey: string;
  id: string;
}

export type Delete_object_recordResponse = ObjectRecordDeleteResponseDTO;

export interface Create_object_recordParams {
  Authorization: string;
  Version: string;
  schemaKey: string;
}

export type Create_object_recordRequestBody = CreateCustomObjectRecordDto;

export type Create_object_recordResponse = RecordByIdResponseDTO;

export interface Search_object_recordsParams {
  Authorization: string;
  Version: string;
  schemaKey?: string;
}

export type Search_object_recordsRequestBody = SearchRecordsBody;

export type Search_object_recordsResponse = SearchRecordResponseDTO;

export interface Get_object_by_location_idParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_object_by_location_idResponse = CustomObjectListResponseDTO;

export interface Create_custom_object_schemaParams {
  Authorization: string;
  Version: string;
}

export type Create_custom_object_schemaRequestBody = CreateCustomObjectSchemaDTO;

export type Create_custom_object_schemaResponse = CustomObjectResponseDTO;

