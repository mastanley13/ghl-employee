// Generated TypeScript interfaces for locations

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

export interface SettingsSchema {
  allowDuplicateContact?: boolean;
  allowDuplicateOpportunity?: boolean;
  allowFacebookNameMerge?: boolean;
  disableContactTimezone?: boolean;
}

export interface SocialSchema {
  facebookUrl?: string;
  googlePlus?: string;
  linkedIn?: string;
  foursquare?: string;
  twitter?: string;
  yelp?: string;
  instagram?: string;
  youtube?: string;
  pinterest?: string;
  blogRss?: string;
  googlePlacesId?: string;
}

export interface GetLocationSchema {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  settings?: any;
  social?: any;
}

export interface SearchSuccessfulResponseDto {
  locations?: GetLocationSchema[];
}

export interface BusinessSchema {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  logoUrl?: string;
}

export interface GetLocationByIdSchema {
  id?: string;
  companyId?: string;
  name?: string;
  domain?: string;
  address?: string;
  city?: string;
  state?: string;
  logoUrl?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  business?: BusinessSchema;
  social?: SocialSchema;
  settings?: SettingsSchema;
  reseller?: Record<string, any>;
}

export interface GetLocationByIdSuccessfulResponseDto {
  location?: GetLocationByIdSchema;
}

export interface ProspectInfoDto {
  firstName: string;
  lastName: string;
  email: string;
}

export interface TwilioSchema {
  sid: string;
  authToken: string;
}

export interface MailgunSchema {
  apiKey: string;
  domain: string;
}

export interface CreateLocationDto {
  name: string;
  phone?: string;
  companyId: string;
  address?: string;
  city?: string;
  state?: string;
  country?: 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'GB' | 'UA' | 'AE' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
  postalCode?: string;
  website?: string;
  timezone?: string;
  prospectInfo?: any;
  settings?: any;
  social?: any;
  twilio?: any;
  mailgun?: any;
  snapshotId?: string;
}

export interface CreateLocationSuccessfulResponseDto {
  id?: string;
  companyId?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  domain?: string;
  country?: 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'GB' | 'UA' | 'AE' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
  postalCode?: string;
  website?: string;
  timezone?: string;
  settings?: any;
  social?: any;
}

export interface SnapshotPutSchema {
  id: string;
  override?: boolean;
}

export interface UpdateLocationDto {
  name?: string;
  phone?: string;
  companyId: string;
  address?: string;
  city?: string;
  state?: string;
  country?: 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'GB' | 'UA' | 'AE' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
  postalCode?: string;
  website?: string;
  timezone?: string;
  prospectInfo?: any;
  settings?: any;
  social?: any;
  twilio?: any;
  mailgun?: any;
  snapshot?: any;
}

export interface LocationDeletedSuccessfulResponseDto {
  success: boolean;
  message: string;
}

export interface LocationTagsSchema {
  name?: string;
  locationId?: string;
  id?: string;
}

export interface LocationTagsSuccessfulResponseDto {
  tags?: LocationTagsSchema[];
}

export interface LocationTagSuccessfulResponseDto {
  tag?: LocationTagsSchema;
}

export interface tagBody {
  name: string;
}

export interface LocationTagDeleteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface TaskSearchParamsDto {
  contactId?: string[];
  completed?: boolean;
  assignedTo?: string[];
  query?: string;
  limit?: number;
  skip?: number;
  businessId?: string;
}

export interface LocationTaskListSuccessfulResponseDto {
  tasks?: Array[];
}

export interface CustomFieldSchema {
  id?: string;
  name?: string;
  fieldKey?: string;
  placeholder?: string;
  dataType?: string;
  position?: number;
  picklistOptions?: string[];
  picklistImageOptions?: string[];
  isAllowedCustomOption?: boolean;
  isMultiFileAllowed?: boolean;
  maxFileLimit?: number;
  locationId?: string;
  model?: 'contact' | 'opportunity';
}

export interface CustomFieldsListSuccessfulResponseDto {
  customFields?: CustomFieldSchema[];
}

export interface CustomFieldSuccessfulResponseDto {
  customField?: CustomFieldSchema;
}

export interface textBoxListOptionsSchema {
  label?: string;
  prefillValue?: string;
}

export interface CreateCustomFieldsDTO {
  name: string;
  dataType: string;
  placeholder?: string;
  acceptedFormat?: string[];
  isMultipleFile?: boolean;
  maxNumberOfFiles?: number;
  textBoxListOptions?: any[];
  position?: number;
  model?: 'contact' | 'opportunity';
}

export interface UpdateCustomFieldsDTO {
  name: string;
  placeholder?: string;
  acceptedFormat?: string[];
  isMultipleFile?: boolean;
  maxNumberOfFiles?: number;
  textBoxListOptions?: any[];
  position?: number;
  model?: 'contact' | 'opportunity';
}

export interface CustomFieldDeleteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface FileUploadBody {
  id?: string;
  maxFiles?: string;
}

export interface FileUploadResponseDto {
  uploadedFiles?: Record<string, any>;
  meta?: string[];
}

export interface CustomValueSchema {
  id?: string;
  name?: string;
  fieldKey?: string;
  value?: string;
  locationId?: string;
}

export interface CustomValuesListSuccessfulResponseDto {
  customValues?: CustomValueSchema[];
}

export interface CustomValueIdSuccessfulResponseDto {
  customValue?: CustomValueSchema;
}

export interface customValuesDTO {
  name: string;
  value: string;
}

export interface CustomValueDeleteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface SmsTemplateSchema {
  body?: string;
  attachments?: Array[];
}

export interface GetSmsTemplateResponseSchema {
  id?: string;
  name?: string;
  type?: string;
  template?: SmsTemplateSchema;
  dateAdded?: string;
  locationId?: string;
  urlAttachments?: string[];
}

export interface EmailTemplateSchema {
  subject?: string;
  attachments?: Array[];
  html?: string;
}

export interface GetEmailTemplateResponseSchema {
  id?: string;
  name?: string;
  type?: string;
  dateAdded?: string;
  template?: EmailTemplateSchema;
  locationId?: string;
}

export interface GetTemplatesSuccessfulResponseDto {
  templates?: any[];
  totalCount?: number;
}

export interface Search_locationsParams {
  Authorization: string;
  Version: string;
  companyId?: string;
  skip?: string;
  limit?: string;
  order?: string;
  email?: string;
}

export type Search_locationsResponse = SearchSuccessfulResponseDto;

export interface Get_locationParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_locationResponse = GetLocationByIdSuccessfulResponseDto;

export interface Put_locationParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Put_locationRequestBody = UpdateLocationDto;

export type Put_locationResponse = CreateLocationSuccessfulResponseDto;

export interface Delete_locationParams {
  Authorization: string;
  Version: string;
  locationId: string;
  deleteTwilioAccount: boolean;
}

export type Delete_locationResponse = LocationDeletedSuccessfulResponseDto;

export interface Get_location_tagsParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_location_tagsResponse = LocationTagsSuccessfulResponseDto;

export interface Create_tagParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_tagRequestBody = tagBody;

export type Create_tagResponse = LocationTagSuccessfulResponseDto;

export interface Get_tag_by_idParams {
  Authorization: string;
  Version: string;
  locationId: string;
  tagId: string;
}

export type Get_tag_by_idResponse = LocationTagSuccessfulResponseDto;

export interface Update_tagParams {
  Authorization: string;
  Version: string;
  locationId: string;
  tagId: string;
}

export type Update_tagRequestBody = tagBody;

export type Update_tagResponse = LocationTagSuccessfulResponseDto;

export interface Delete_tagParams {
  Authorization: string;
  Version: string;
  locationId: string;
  tagId: string;
}

export type Delete_tagResponse = LocationTagDeleteSuccessfulResponseDto;

export interface Task_searchParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Task_searchRequestBody = TaskSearchParamsDto;

export type Task_searchResponse = LocationTaskListSuccessfulResponseDto;

export interface Get_custom_fieldsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  model?: string;
}

export type Get_custom_fieldsResponse = CustomFieldsListSuccessfulResponseDto;

export interface Create_custom_fieldParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_custom_fieldRequestBody = CreateCustomFieldsDTO;

export type Create_custom_fieldResponse = CustomFieldSuccessfulResponseDto;

export interface Get_custom_fieldParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Get_custom_fieldResponse = CustomFieldSuccessfulResponseDto;

export interface Update_custom_fieldParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Update_custom_fieldRequestBody = UpdateCustomFieldsDTO;

export type Update_custom_fieldResponse = CustomFieldSuccessfulResponseDto;

export interface Delete_custom_fieldParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Delete_custom_fieldResponse = CustomFieldDeleteSuccessfulResponseDto;

export interface Upload_file_customFieldsParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Upload_file_customFieldsRequestBody = FileUploadBody;

export type Upload_file_customFieldsResponse = FileUploadResponseDto;

export interface Get_custom_valuesParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_custom_valuesResponse = CustomValuesListSuccessfulResponseDto;

export interface Create_custom_valueParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_custom_valueRequestBody = customValuesDTO;

export type Create_custom_valueResponse = CustomValueIdSuccessfulResponseDto;

export interface Get_custom_valueParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Get_custom_valueResponse = CustomValueIdSuccessfulResponseDto;

export interface Update_custom_valueParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Update_custom_valueRequestBody = customValuesDTO;

export type Update_custom_valueResponse = CustomValueIdSuccessfulResponseDto;

export interface Delete_custom_valueParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Delete_custom_valueResponse = CustomValueDeleteSuccessfulResponseDto;

export interface Get_timezonesParams {
  Authorization: string;
  Version: string;
}

export interface GET_all_or_email_sms_templatesParams {
  Authorization: string;
  Version: string;
  deleted?: boolean;
  skip?: string;
  limit?: string;
  type?: string;
  originId: string;
  locationId: string;
}

export type GET_all_or_email_sms_templatesResponse = GetTemplatesSuccessfulResponseDto;

export interface DELETE_an_email_sms_templateParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export interface Create_locationParams {
  Authorization: string;
  Version: string;
}

export type Create_locationRequestBody = CreateLocationDto;

export type Create_locationResponse = CreateLocationSuccessfulResponseDto;

