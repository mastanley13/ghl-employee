// Generated TypeScript interfaces for contacts

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface SearchBodyV2DTO {

}

export interface ContactOpportunity {
  id: string;
  pipeline_id: string;
  pipeline_stage_id: string;
  monetary_value: number;
  status: string;
}

export interface Contact {
  id?: string;
  phoneLabel?: string;
  country?: string;
  address?: string;
  source?: string;
  type?: string;
  locationId?: string;
  dnd?: boolean;
  state?: string;
  businessName?: string;
  customFields?: CustomFieldSchema[];
  tags?: string[];
  dateAdded?: string;
  additionalEmails?: string[];
  phone?: string;
  companyName?: string;
  additionalPhones?: string[];
  dateUpdated?: string;
  city?: string;
  dateOfBirth?: string;
  firstNameLowerCase?: string;
  lastNameLowerCase?: string;
  email?: string;
  assignedTo?: string;
  followers?: string[];
  validEmail?: boolean;
  dndSettings?: DndSettingsSchema;
  opportunities?: ContactOpportunity[];
  postalCode?: string;
  businessId?: string;
  searchAfter?: string[];
}

export interface SearchContactSuccessResponseDto {
  contacts: Contact[];
  total: number;
}

export interface TaskSchema {
  id?: string;
  title?: string;
  body?: string;
  assignedTo?: string;
  dueDate?: string;
  completed?: boolean;
  contactId?: string;
}

export interface TasksListSuccessfulResponseDto {
  tasks?: TaskSchema[];
}

export interface TaskByIsSuccessfulResponseDto {
  task?: TaskSchema;
}

export interface CreateTaskParams {
  title: string;
  body?: string;
  dueDate: string;
  completed: boolean;
  assignedTo?: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface UpdateTaskBody {
  title?: string;
  body?: string;
  dueDate?: string;
  completed?: boolean;
  assignedTo?: string;
}

export interface UpdateTaskStatusParams {
  completed: boolean;
}

export interface DeleteTaskSuccessfulResponseDto {
  succeded?: boolean;
}

export interface GetEventSchema {
  id?: string;
  calendarId?: string;
  status?: string;
  title?: string;
  appoinmentStatus?: string;
  assignedUserId?: string;
  notes?: string;
  startTime?: string;
  endTime?: string;
  address?: string;
  locationId?: string;
  contactId?: string;
  groupId?: string;
  appointmentStatus?: string;
  users?: string[];
  dateAdded?: string;
  dateUpdated?: string;
  assignedResources?: string[];
}

export interface GetEventsSuccessfulResponseDto {
  events?: GetEventSchema[];
}

export interface TagsDTO {
  tags: string[];
}

export interface CreateAddTagSuccessfulResponseDto {
  tags?: string[];
}

export interface CreateDeleteTagSuccessfulResponseDto {
  tags?: string[];
}

export interface GetNoteSchema {
  id?: string;
  body?: string;
  userId?: string;
  dateAdded?: string;
  contactId?: string;
}

export interface GetNotesListSuccessfulResponseDto {
  notes?: GetNoteSchema[];
}

export interface NotesDTO {
  userId?: string;
  body: string;
}

export interface GetCreateUpdateNoteSuccessfulResponseDto {
  note?: GetNoteSchema;
}

export interface DeleteNoteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface ContactsBusinessUpdate {
  locationId: string;
  ids: string[];
  businessId: string;
}

export interface ContactsBulkUpateResponse {
  success: boolean;
  ids: string[];
}

export interface DndSettingSchema {
  status: 'active' | 'inactive' | 'permanent';
  message?: string;
  code?: string;
}

export interface DndSettingsSchema {
  Call?: DndSettingSchema;
  Email?: DndSettingSchema;
  SMS?: DndSettingSchema;
  WhatsApp?: DndSettingSchema;
  GMB?: DndSettingSchema;
  FB?: DndSettingSchema;
}

export interface CustomFieldSchema {
  id?: string;
  value?: string;
}

export interface AttributionSource {
  url: string;
  campaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmContent?: string;
  referrer?: string;
  campaignId?: string;
  fbclid?: string;
  gclid?: string;
  msclikid?: string;
  dclid?: string;
  fbc?: string;
  fbp?: string;
  fbEventId?: string;
  userAgent?: string;
  ip?: string;
  medium?: string;
  mediumId?: string;
}

export interface GetContectByIdSchema {
  id?: string;
  name?: string;
  locationId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailLowerCase?: string;
  timezone?: string;
  companyName?: string;
  phone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  type?: string;
  source?: string;
  assignedTo?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  tags?: string[];
  dateOfBirth?: string;
  dateAdded?: string;
  dateUpdated?: string;
  attachments?: string;
  ssn?: string;
  keyword?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastNameLowerCase?: string;
  lastActivity?: string;
  customFields?: CustomFieldSchema[];
  businessId?: string;
  attributionSource?: AttributionSource;
  lastAttributionSource?: AttributionSource;
}

export interface ContactsByIdSuccessfulResponseDto {
  contact?: GetContectByIdSchema;
}

export interface customFieldsInputArraySchema {
  id: string;
  key?: string;
  field_value?: string[];
}

export interface customFieldsInputObjectSchema {
  id: string;
  key?: string;
  field_value?: Record<string, any>;
}

export interface customFieldsInputStringSchema {
  id?: string;
  key?: string;
  field_value?: string;
}

export interface InboundDndSettingSchema {
  status: 'active' | 'inactive';
  message?: string;
}

export interface InboundDndSettingsSchema {
  all?: InboundDndSettingSchema;
}

export interface CreateContactDto {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  locationId: string;
  gender?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  tags?: string[];
  customFields?: any[];
  source?: string;
  country?: string;
  companyName?: string;
  assignedTo?: string;
}

export interface CreateContactSchema {
  id?: string;
  dateAdded?: string;
  dateUpdated?: string;
  deleted?: boolean;
  tags?: string[];
  type?: string;
  customFields?: CustomFieldSchema[];
  locationId?: string;
  firstName?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastName?: string;
  lastNameLowerCase?: string;
  email?: string;
  emailLowerCase?: string;
  bounceEmail?: boolean;
  unsubscribeEmail?: boolean;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  source?: string;
  companyName?: string;
  dateOfBirth?: string;
  birthMonth?: number;
  birthDay?: number;
  lastSessionActivityAt?: string;
  offers?: string[];
  products?: string[];
  businessId?: string;
  assignedTo?: string;
}

export interface CreateContactsSuccessfulResponseDto {
  contact?: CreateContactSchema;
}

export interface UpdateContactDto {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  tags?: string[];
  customFields?: any[];
  source?: string;
  country?: string;
  assignedTo?: string;
}

export interface UpdateContactsSuccessfulResponseDto {
  succeded?: boolean;
  contact?: GetContectByIdSchema;
}

export interface UpsertContactDto {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  locationId: string;
  gender?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  tags?: string[];
  customFields?: any[];
  source?: string;
  country?: string;
  companyName?: string;
  assignedTo?: string;
}

export interface UpsertContactsSuccessfulResponseDto {
  new?: boolean;
  contact?: GetContectByIdSchema;
  traceId?: string;
}

export interface DeleteContactsSuccessfulResponseDto {
  succeded?: boolean;
}

export interface ContactsSearchSchema {
  id?: string;
  locationId?: string;
  email?: string;
  timezone?: string;
  country?: string;
  source?: string;
  dateAdded?: string;
  customFields?: CustomFieldSchema[];
  tags?: string[];
  businessId?: string;
  attributions?: AttributionSource[];
  followers?: string[];
}

export interface ContactsMetaSchema {
  total?: number;
  nextPageUrl?: string;
  startAfterId?: string;
  startAfter?: number;
  currentPage?: number;
  nextPage?: number;
  prevPage?: number;
}

export interface ContactsSearchSuccessfulResponseDto {
  contacts?: ContactsSearchSchema[];
  count?: number;
}

export interface FollowersDTO {
  followers: string[];
}

export interface CreateAddFollowersSuccessfulResponseDto {
  followers?: string[];
  followersAdded?: string[];
}

export interface DeleteFollowersSuccessfulResponseDto {
  followers?: string[];
  followersRemoved?: string[];
}

export interface AddContactToCampaignDto {

}

export interface CreateDeleteCantactsCampaignsSuccessfulResponseDto {
  succeded?: boolean;
}

export interface CreateWorkflowDto {
  eventStartTime?: string;
}

export interface ContactsWorkflowSuccessfulResponseDto {
  succeded?: boolean;
}

export interface Search_contacts_advancedParams {
  Authorization: string;
  Version: string;
}

export type Search_contacts_advancedRequestBody = SearchBodyV2DTO;

export type Search_contacts_advancedResponse = SearchContactSuccessResponseDto;

export interface Get_duplicate_contactParams {
  Authorization: string;
  Version: string;
  locationId: string;
  number?: string;
  email?: string;
}

export interface Get_all_tasksParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Get_all_tasksResponse = TasksListSuccessfulResponseDto;

export interface Create_taskParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Create_taskRequestBody = CreateTaskParams;

export type Create_taskResponse = TaskByIsSuccessfulResponseDto;

export interface Get_taskParams {
  Authorization: string;
  Version: string;
  contactId: string;
  taskId: string;
}

export type Get_taskResponse = TaskByIsSuccessfulResponseDto;

export interface Update_taskParams {
  Authorization: string;
  Version: string;
  contactId: string;
  taskId: string;
}

export type Update_taskRequestBody = UpdateTaskBody;

export type Update_taskResponse = TaskByIsSuccessfulResponseDto;

export interface Delete_taskParams {
  Authorization: string;
  Version: string;
  contactId: string;
  taskId: string;
}

export type Delete_taskResponse = DeleteTaskSuccessfulResponseDto;

export interface Update_task_completedParams {
  Authorization: string;
  Version: string;
  contactId: string;
  taskId: string;
}

export type Update_task_completedRequestBody = UpdateTaskStatusParams;

export type Update_task_completedResponse = TaskByIsSuccessfulResponseDto;

export interface Get_appointments_for_contactParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Get_appointments_for_contactResponse = GetEventsSuccessfulResponseDto;

export interface Add_tagsParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Add_tagsRequestBody = TagsDTO;

export type Add_tagsResponse = CreateAddTagSuccessfulResponseDto;

export interface Remove_tagsParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Remove_tagsRequestBody = TagsDTO;

export type Remove_tagsResponse = CreateDeleteTagSuccessfulResponseDto;

export interface Get_all_notesParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Get_all_notesResponse = GetNotesListSuccessfulResponseDto;

export interface Create_noteParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Create_noteRequestBody = NotesDTO;

export type Create_noteResponse = GetCreateUpdateNoteSuccessfulResponseDto;

export interface Get_noteParams {
  Authorization: string;
  Version: string;
  contactId: string;
  id: string;
}

export type Get_noteResponse = GetCreateUpdateNoteSuccessfulResponseDto;

export interface Update_noteParams {
  Authorization: string;
  Version: string;
  contactId: string;
  id: string;
}

export type Update_noteRequestBody = NotesDTO;

export type Update_noteResponse = GetCreateUpdateNoteSuccessfulResponseDto;

export interface Delete_noteParams {
  Authorization: string;
  Version: string;
  contactId: string;
  id: string;
}

export type Delete_noteResponse = DeleteNoteSuccessfulResponseDto;

export interface Add_remove_contact_from_businessParams {
  Authorization: string;
  Version: string;
}

export type Add_remove_contact_from_businessRequestBody = ContactsBusinessUpdate;

export type Add_remove_contact_from_businessResponse = ContactsBulkUpateResponse;

export interface Get_contactParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Get_contactResponse = ContactsByIdSuccessfulResponseDto;

export interface Update_contactParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Update_contactRequestBody = UpdateContactDto;

export type Update_contactResponse = UpdateContactsSuccessfulResponseDto;

export interface Delete_contactParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Delete_contactResponse = DeleteContactsSuccessfulResponseDto;

export interface Upsert_contactParams {
  Authorization: string;
  Version: string;
}

export type Upsert_contactRequestBody = UpsertContactDto;

export type Upsert_contactResponse = UpsertContactsSuccessfulResponseDto;

export interface Get_contacts_by_businessIdParams {
  Authorization: string;
  Version: string;
  businessId: string;
  limit?: string;
  locationId: string;
  skip?: string;
  query?: string;
}

export type Get_contacts_by_businessIdResponse = ContactsSearchSuccessfulResponseDto;

export interface Add_followers_contactParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Add_followers_contactRequestBody = FollowersDTO;

export type Add_followers_contactResponse = CreateAddFollowersSuccessfulResponseDto;

export interface Remove_followers_contactParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Remove_followers_contactRequestBody = FollowersDTO;

export type Remove_followers_contactResponse = DeleteFollowersSuccessfulResponseDto;

export interface Add_contact_to_campaignParams {
  Authorization: string;
  Version: string;
  contactId: string;
  campaignId: string;
}

export type Add_contact_to_campaignRequestBody = AddContactToCampaignDto;

export type Add_contact_to_campaignResponse = CreateDeleteCantactsCampaignsSuccessfulResponseDto;

export interface Remove_contact_from_campaignParams {
  Authorization: string;
  Version: string;
  contactId: string;
  campaignId: string;
}

export type Remove_contact_from_campaignResponse = CreateDeleteCantactsCampaignsSuccessfulResponseDto;

export interface Remove_contact_from_every_campaignParams {
  Authorization: string;
  Version: string;
  contactId: string;
}

export type Remove_contact_from_every_campaignResponse = CreateDeleteCantactsCampaignsSuccessfulResponseDto;

export interface Add_contact_to_workflowParams {
  Authorization: string;
  Version: string;
  contactId: string;
  workflowId: string;
}

export type Add_contact_to_workflowRequestBody = CreateWorkflowDto;

export type Add_contact_to_workflowResponse = ContactsWorkflowSuccessfulResponseDto;

export interface Delete_contact_to_workflowParams {
  Authorization: string;
  Version: string;
  contactId: string;
  workflowId: string;
}

export type Delete_contact_to_workflowRequestBody = CreateWorkflowDto;

export type Delete_contact_to_workflowResponse = ContactsWorkflowSuccessfulResponseDto;

export interface Create_contactParams {
  Authorization: string;
  Version: string;
}

export type Create_contactRequestBody = CreateContactDto;

export type Create_contactResponse = CreateContactsSuccessfulResponseDto;

export interface Get_contactsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  startAfterId?: string;
  startAfter?: number;
  query?: string;
  limit?: number;
}

export type Get_contactsResponse = ContactsSearchSuccessfulResponseDto;

