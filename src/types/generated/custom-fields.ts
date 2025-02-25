// Generated TypeScript interfaces for custom-fields

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
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

export interface CustomFieldSuccessfulResponseDto {
  field?: ICustomField;
}

export interface CustomFieldsResponseDTO {
  fields?: ICustomField[];
  folders?: ICustomField[];
}

export interface CreateCustomFieldsDTO {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: OptionDTO[];
  acceptedFormats?: '.pdf' | '.docx' | '.doc' | '.jpg' | '.jpeg' | '.png' | '.gif' | '.csv' | '.xlsx' | '.xls' | 'all';
  dataType: 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'PHONE' | 'MONETORY' | 'CHECKBOX' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS' | 'DATE' | 'TEXTBOX_LIST' | 'FILE_UPLOAD' | 'RADIO' | 'EMAIL';
  fieldKey: string;
  objectKey: string;
  maxFileLimit?: number;
  allowCustomOption?: boolean;
  parentId: string;
}

export interface CreateFolder {
  objectKey: string;
  name: string;
  locationId: string;
}

export interface ICustomFieldFolder {
  id: string;
  objectKey: string;
  locationId: string;
  name: string;
}

export interface UpdateFolder {
  name: string;
  locationId: string;
}

export interface CustomFolderDeleteResponseDto {
  succeded: boolean;
  id: string;
  key: string;
}

export interface UpdateCustomFieldsDTO {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: OptionDTO[];
  acceptedFormats?: '.pdf' | '.docx' | '.doc' | '.jpg' | '.jpeg' | '.png' | '.gif' | '.csv' | '.xlsx' | '.xls' | 'all';
  maxFileLimit?: number;
}

export interface Get_custom_field_by_idParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Get_custom_field_by_idResponse = CustomFieldSuccessfulResponseDto;

export interface Update_custom_fieldParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Update_custom_fieldRequestBody = UpdateCustomFieldsDTO;

export type Update_custom_fieldResponse = CustomFieldSuccessfulResponseDto;

export interface Delete_custom_fieldParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Delete_custom_fieldResponse = CustomFolderDeleteResponseDto;

export interface Get_custom_fields_by_object_keyParams {
  Authorization: string;
  Version: string;
  objectKey: string;
  locationId: string;
}

export type Get_custom_fields_by_object_keyResponse = CustomFieldsResponseDTO;

export interface Create_custom_field_folderParams {
  Authorization: string;
  Version: string;
}

export type Create_custom_field_folderRequestBody = CreateFolder;

export type Create_custom_field_folderResponse = ICustomFieldFolder;

export interface Update_custom_field_folderParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Update_custom_field_folderRequestBody = UpdateFolder;

export type Update_custom_field_folderResponse = ICustomFieldFolder;

export interface Delete_custom_field_folderParams {
  Authorization: string;
  Version: string;
  id: string;
  locationId: string;
}

export type Delete_custom_field_folderResponse = CustomFolderDeleteResponseDto;

export interface Create_custom_fieldParams {
  Authorization: string;
  Version: string;
}

export type Create_custom_fieldRequestBody = CreateCustomFieldsDTO;

export type Create_custom_fieldResponse = CustomFieldSuccessfulResponseDto;

