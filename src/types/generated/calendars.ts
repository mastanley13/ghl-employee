// Generated TypeScript interfaces for calendars

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface GroupDTO {
  locationId: string;
  name: string;
  description: string;
  slug: string;
  isActive?: boolean;
  id?: string;
}

export interface AllGroupsSuccessfulResponseDTO {
  groups?: GroupDTO[];
}

export interface ValidateGroupSlugPostBody {
  locationId: string;
  slug: string;
}

export interface ValidateGroupSlugSuccessResponseDTO {
  available: boolean;
}

export interface GroupCreateDTO {
  locationId: string;
  name: string;
  description: string;
  slug: string;
  isActive?: boolean;
}

export interface GroupCreateSuccessfulResponseDTO {
  group?: GroupDTO;
}

export interface GroupSuccessfulResponseDTO {
  success?: boolean;
}

export interface GroupStatusUpdateParams {
  isActive: boolean;
}

export interface GroupUpdateDTO {
  name: string;
  description: string;
  slug: string;
}

export interface CalendarEventDTO {
  id: string;
  address?: string;
  title: string;
  calendarId: string;
  locationId: string;
  contactId: string;
  groupId: string;
  appointmentStatus: string;
  assignedUserId: string;
  users: string[];
  notes?: string;
  isRecurring?: boolean;
  rrule?: string;
  startTime: Record<string, any>;
  endTime: Record<string, any>;
  dateAdded: Record<string, any>;
  dateUpdated: Record<string, any>;
  assignedResources?: string[];
  createdBy?: Record<string, any>;
  masterEventId?: string;
}

export interface GetCalendarEventsSuccessfulResponseDTO {
  events?: CalendarEventDTO[];
}

export interface SlotsSchema {
  slots: string[];
}

export interface GetSlotsSuccessfulResponseDto {
  _dates_: SlotsSchema;
}

export interface CalendarNotification {
  type?: 'email';
  shouldSendToContact: boolean;
  shouldSendToGuest: boolean;
  shouldSendToUser: boolean;
  shouldSendToSelectedUsers: boolean;
  selectedUsers: string;
}

export interface TeamMember {
  userId: string;
  priority?: 0 | 0.5 | 1;
  meetingLocationType?: 'custom' | 'zoom' | 'gmeet' | 'phone' | 'address' | 'teams' | 'booker';
  meetingLocation?: string;
  isPrimary?: boolean;
}

export interface Hour {
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
}

export interface OpenHour {
  daysOfTheWeek: number[];
  hours: Hour[];
}

export interface Recurring {
  freq?: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  count?: number;
  bookingOption?: 'skip' | 'continue' | 'book_next';
  bookingOverlapDefaultStatus?: 'confirmed' | 'new';
}

export interface Availability {
  date: string;
  hours: Hour[];
  deleted?: boolean;
}

export interface LookBusyConfiguration {
  enabled: boolean;
  LookBusyPercentage: number;
}

export interface CalendarDTO {
  isActive?: boolean;
  notifications?: CalendarNotification[];
  locationId: string;
  groupId?: string;
  teamMembers?: TeamMember[];
  eventType?: 'RoundRobin_OptimizeForAvailability' | 'RoundRobin_OptimizeForEqualDistribution';
  name: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  calendarType?: 'round_robin' | 'event' | 'class_booking' | 'collective' | 'service_booking' | 'personal';
  widgetType?: 'default' | 'classic';
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  slotDuration?: number;
  slotDurationUnit?: 'mins' | 'hours';
  slotInterval?: number;
  slotIntervalUnit?: 'mins' | 'hours';
  slotBuffer?: number;
  slotBufferUnit?: 'mins' | 'hours';
  preBuffer?: number;
  preBufferUnit?: 'mins' | 'hours';
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  allowBookingAfter?: number;
  allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months';
  allowBookingFor?: number;
  allowBookingForUnit?: 'days' | 'weeks' | 'months';
  openHours?: OpenHour[];
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: 'RedirectURL' | 'ThankYouMessage';
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: 0 | 1;
  availabilities?: Availability[];
  guestType?: 'count_only' | 'collect_detail';
  consentLabel?: string;
  calendarCoverImage?: string;
  lookBusyConfig?: any;
  id: string;
}

export interface CalendarsGetSuccessfulResponseDTO {
  calendars?: CalendarDTO[];
}

export interface CalendarCreateDTO {
  isActive?: boolean;
  notifications?: CalendarNotification[];
  locationId: string;
  groupId?: string;
  teamMembers?: TeamMember[];
  eventType?: 'RoundRobin_OptimizeForAvailability' | 'RoundRobin_OptimizeForEqualDistribution';
  name: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  calendarType?: 'round_robin' | 'event' | 'class_booking' | 'collective' | 'service_booking' | 'personal';
  widgetType?: 'default' | 'classic';
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  slotDuration?: number;
  slotDurationUnit?: 'mins' | 'hours';
  slotInterval?: number;
  slotIntervalUnit?: 'mins' | 'hours';
  slotBuffer?: number;
  slotBufferUnit?: 'mins' | 'hours';
  preBuffer?: number;
  preBufferUnit?: 'mins' | 'hours';
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  allowBookingAfter?: number;
  allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months';
  allowBookingFor?: number;
  allowBookingForUnit?: 'days' | 'weeks' | 'months';
  openHours?: OpenHour[];
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: 'RedirectURL' | 'ThankYouMessage';
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: 0 | 1;
  availabilities?: Availability[];
  guestType?: 'count_only' | 'collect_detail';
  consentLabel?: string;
  calendarCoverImage?: string;
  lookBusyConfig?: any;
}

export interface CalendarByIdSuccessfulResponseDTO {
  calendar: CalendarDTO;
}

export interface UpdateAvailability {
  date: string;
  hours: Hour[];
  deleted?: boolean;
  id?: string;
}

export interface CalendarUpdateDTO {
  notifications?: CalendarNotification[];
  groupId?: string;
  teamMembers?: TeamMember[];
  eventType?: 'RoundRobin_OptimizeForAvailability' | 'RoundRobin_OptimizeForEqualDistribution';
  name?: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  widgetType?: 'default' | 'classic';
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  slotDuration?: number;
  slotDurationUnit?: 'mins' | 'hours';
  preBufferUnit?: 'mins' | 'hours';
  slotInterval?: number;
  slotIntervalUnit?: 'mins' | 'hours';
  slotBuffer?: number;
  preBuffer?: number;
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  allowBookingAfter?: number;
  allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months';
  allowBookingFor?: number;
  allowBookingForUnit?: 'days' | 'weeks' | 'months';
  openHours?: OpenHour[];
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: 'RedirectURL' | 'ThankYouMessage';
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: 0 | 1;
  availabilities?: UpdateAvailability[];
  guestType?: 'count_only' | 'collect_detail';
  consentLabel?: string;
  calendarCoverImage?: string;
  lookBusyConfig?: any;
  isActive?: boolean;
}

export interface CalendarDeleteSuccessfulResponseDTO {
  success: boolean;
}

export interface GetCalendarEventSuccessfulResponseDTO {
  event?: CalendarEventDTO;
}

export interface AppointmentCreateSchema {
  calendarId: string;
  locationId: string;
  contactId: string;
  startTime: string;
  endTime?: string;
  title?: string;
  meetingLocationType?: 'default' | 'custom';
  appointmentStatus?: 'new' | 'confirmed' | 'cancelled' | 'showed' | 'noshow' | 'invalid';
  assignedUserId?: string;
  address?: string;
  ignoreDateRange?: boolean;
  toNotify?: boolean;
  ignoreFreeSlotValidation?: boolean;
  rrule?: string;
}

export interface AppointmentSchemaResponse {
  calendarId: string;
  locationId: string;
  contactId: string;
  startTime?: string;
  endTime?: string;
  title?: string;
  appointmentStatus?: 'new' | 'confirmed' | 'cancelled' | 'showed' | 'noshow' | 'invalid';
  assignedUserId?: string;
  address?: string;
  isRecurring?: boolean;
  rrule?: string;
  id: string;
}

export interface AppointmentEditSchema {
  calendarId?: string;
  startTime?: string;
  endTime?: string;
  title?: string;
  meetingLocationType?: 'default' | 'custom';
  appointmentStatus?: 'new' | 'confirmed' | 'cancelled' | 'showed' | 'noshow' | 'invalid';
  assignedUserId?: string;
  address?: string;
  ignoreDateRange?: boolean;
  toNotify?: boolean;
  ignoreFreeSlotValidation?: boolean;
  rrule?: string;
}

export interface BlockSlotCreateSchema {
  calendarId?: string;
  locationId: string;
  startTime: string;
  endTime: string;
  title?: string;
  assignedUserId?: string;
}

export interface CreateBookedSlotSuccessfulResponseDto {
  id: string;
  locationId: string;
  title: string;
  startTime: string;
  endTime: string;
  calendarId?: string;
  assignedUserId?: string;
}

export interface BlockSlotEditSchema {
  calendarId?: string;
  startTime?: string;
  endTime?: string;
  title?: string;
  assignedUserId?: string;
}

export interface DeleteAppointmentSchema {

}

export interface DeleteEventSuccessfulResponseDto {
  succeeded?: boolean;
}

export interface NoteCreatedBySchema {
  id?: string;
  name?: string;
}

export interface GetNoteSchema {
  id?: string;
  body?: string;
  userId?: string;
  dateAdded?: string;
  contactId?: string;
  createdBy?: NoteCreatedBySchema;
}

export interface GetNotesListSuccessfulResponseDto {
  notes?: GetNoteSchema[];
  hasMore?: boolean;
}

export interface NotesDTO {
  userId?: string;
  body: string;
}

export interface GetCreateUpdateNoteSuccessfulResponseDto {
  note?: GetNoteSchema;
}

export interface DeleteNoteSuccessfulResponseDto {
  success?: boolean;
}

export interface CalendarResourceByIdResponseDTO {
  locationId: string;
  name: string;
  resourceType: 'equipments' | 'rooms';
  isActive: boolean;
  description?: string;
  quantity?: number;
  outOfService?: number;
  capacity?: number;
  calendarIds: string[];
}

export interface UpdateCalendarResourceDTO {
  locationId?: string;
  name?: string;
  description?: string;
  quantity?: number;
  outOfService?: number;
  capacity?: number;
  calendarIds?: string[];
  isActive?: boolean;
}

export interface CalendarResourceResponseDTO {
  locationId: string;
  name: string;
  resourceType: 'equipments' | 'rooms';
  isActive: boolean;
  description?: string;
  quantity?: number;
  outOfService?: number;
  capacity?: number;
}

export interface ResourceDeleteResponseDTO {
  success?: boolean;
}

export interface CreateCalendarResourceDTO {
  locationId: string;
  name: string;
  description: string;
  quantity: number;
  outOfService: number;
  capacity: number;
  calendarIds: string[];
}

export interface SchedulesDTO {
  timeOffset?: number;
  unit?: string;
}

export interface CreateCalendarNotificationDTO {
  altType: 'calendar';
  altId: string;
  receiverType: 'contact' | 'guest' | 'assignedUser' | 'emails';
  channel: 'email' | 'inApp';
  notificationType: 'booked' | 'confirmation' | 'cancellation' | 'reminder' | 'followup' | 'reschedule';
  isActive?: boolean;
  templateId?: string;
  body?: string;
  subject?: string;
  afterTime?: SchedulesDTO[];
  beforeTime?: SchedulesDTO[];
  additionalEmailIds?: string[];
  selectedUsers?: string[];
  fromAddress?: string;
  fromName?: string;
}

export interface CalendarNotificationResponseDTO {
  _id?: string;
  altType?: 'calendar';
  calendarId?: string;
  receiverType?: 'contact' | 'guest' | 'assignedUser' | 'emails';
  receiverEmailIds?: string[];
  channel?: 'email' | 'inApp';
  notificationType?: 'booked' | 'confirmation' | 'cancellation' | 'reminder' | 'followup' | 'reschedule';
  isActive?: boolean;
  templateId?: string;
  body?: string;
  subject?: string;
  afterTime?: SchedulesDTO[];
  beforeTime?: SchedulesDTO[];
  selectedUsers?: string[];
  deleted?: boolean;
}

export interface UpdateCalendarNotificationsDTO {
  altType?: 'calendar';
  altId?: string;
  receiverType?: 'contact' | 'guest' | 'assignedUser' | 'emails';
  additionalEmailIds?: string[];
  channel?: 'email' | 'inApp';
  notificationType?: 'booked' | 'confirmation' | 'cancellation' | 'reminder' | 'followup' | 'reschedule';
  isActive?: boolean;
  deleted?: boolean;
  templateId?: string;
  body?: string;
  subject?: string;
  afterTime?: SchedulesDTO[];
  beforeTime?: SchedulesDTO[];
  fromAddress?: string;
  fromName?: string;
}

export interface CalendarNotificationDeleteResponseDTO {
  message: string;
}

export interface Get_groupsParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_groupsResponse = AllGroupsSuccessfulResponseDTO;

export interface Create_calendar_groupParams {
  Authorization: string;
  Version: string;
}

export type Create_calendar_groupRequestBody = GroupCreateDTO;

export type Create_calendar_groupResponse = GroupCreateSuccessfulResponseDTO;

export interface Validate_groups_slugParams {
  Authorization: string;
  Version: string;
}

export type Validate_groups_slugRequestBody = ValidateGroupSlugPostBody;

export type Validate_groups_slugResponse = ValidateGroupSlugSuccessResponseDTO;

export interface Delete_groupParams {
  Authorization: string;
  Version: string;
  groupId: string;
}

export type Delete_groupResponse = GroupSuccessfulResponseDTO;

export interface Edit_groupParams {
  Authorization: string;
  Version: string;
  groupId: string;
}

export type Edit_groupRequestBody = GroupUpdateDTO;

export type Edit_groupResponse = GroupCreateSuccessfulResponseDTO;

export interface Disable_groupParams {
  Authorization: string;
  Version: string;
  groupId: string;
}

export type Disable_groupRequestBody = GroupStatusUpdateParams;

export type Disable_groupResponse = GroupSuccessfulResponseDTO;

export interface Get_calendar_eventsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId?: string;
  calendarId?: string;
  groupId?: string;
  startTime: string;
  endTime: string;
}

export type Get_calendar_eventsResponse = GetCalendarEventsSuccessfulResponseDTO;

export interface Get_blocked_slotsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId?: string;
  calendarId?: string;
  groupId?: string;
  startTime: string;
  endTime: string;
}

export type Get_blocked_slotsResponse = GetCalendarEventsSuccessfulResponseDTO;

export interface Get_slotsParams {
  Authorization: string;
  Version: string;
  calendarId: string;
  startDate: number;
  endDate: number;
  timezone?: string;
  userId?: string;
  userIds?: Array;
  enableLookBusy?: boolean;
}

export type Get_slotsResponse = GetSlotsSuccessfulResponseDto;

export interface Update_calendarParams {
  Authorization: string;
  Version: string;
  calendarId: string;
}

export type Update_calendarRequestBody = CalendarUpdateDTO;

export type Update_calendarResponse = CalendarByIdSuccessfulResponseDTO;

export interface Get_calendarParams {
  Authorization: string;
  Version: string;
  calendarId: string;
}

export type Get_calendarResponse = CalendarByIdSuccessfulResponseDTO;

export interface Delete_calendarParams {
  Authorization: string;
  Version: string;
  calendarId: string;
}

export type Delete_calendarResponse = CalendarDeleteSuccessfulResponseDTO;

export interface Get_appointmentParams {
  Authorization: string;
  Version: string;
  eventId: string;
}

export type Get_appointmentResponse = GetCalendarEventSuccessfulResponseDTO;

export interface Edit_appointmentParams {
  Authorization: string;
  Version: string;
  eventId: string;
}

export type Edit_appointmentRequestBody = AppointmentEditSchema;

export type Edit_appointmentResponse = AppointmentSchemaResponse;

export interface Create_appointmentParams {
  Authorization: string;
  Version: string;
}

export type Create_appointmentRequestBody = AppointmentCreateSchema;

export type Create_appointmentResponse = AppointmentSchemaResponse;

export interface Create_block_slotParams {
  Authorization: string;
  Version: string;
}

export type Create_block_slotRequestBody = BlockSlotCreateSchema;

export type Create_block_slotResponse = CreateBookedSlotSuccessfulResponseDto;

export interface Edit_block_slotParams {
  Authorization: string;
  Version: string;
  eventId: string;
}

export type Edit_block_slotRequestBody = BlockSlotEditSchema;

export type Edit_block_slotResponse = CreateBookedSlotSuccessfulResponseDto;

export interface Delete_eventParams {
  Authorization: string;
  Version: string;
  eventId: string;
}

export type Delete_eventRequestBody = DeleteAppointmentSchema;

export type Delete_eventResponse = DeleteEventSuccessfulResponseDto;

export interface Get_appointment_notesParams {
  Authorization: string;
  Version: string;
  limit: number;
  offset: number;
  appointmentId: string;
}

export type Get_appointment_notesResponse = GetNotesListSuccessfulResponseDto;

export interface Create_appointment_noteParams {
  Authorization: string;
  Version: string;
  appointmentId: string;
}

export type Create_appointment_noteRequestBody = NotesDTO;

export type Create_appointment_noteResponse = GetCreateUpdateNoteSuccessfulResponseDto;

export interface Update_appointment_noteParams {
  Authorization: string;
  Version: string;
  appointmentId: string;
}

export type Update_appointment_noteRequestBody = NotesDTO;

export type Update_appointment_noteResponse = GetCreateUpdateNoteSuccessfulResponseDto;

export interface Delete_appointment_noteParams {
  Authorization: string;
  Version: string;
  appointmentId: string;
}

export type Delete_appointment_noteResponse = DeleteNoteSuccessfulResponseDto;

export interface Get_calendar_resourceParams {
  Authorization: string;
  Version: string;
  resourceType: string;
  id: string;
}

export type Get_calendar_resourceResponse = CalendarResourceByIdResponseDTO;

export interface Update_calendar_resourceParams {
  Authorization: string;
  Version: string;
  resourceType: string;
  id: string;
}

export type Update_calendar_resourceRequestBody = UpdateCalendarResourceDTO;

export type Update_calendar_resourceResponse = CalendarResourceResponseDTO;

export interface Delete_calendar_resourceParams {
  Authorization: string;
  Version: string;
  resourceType: string;
  id: string;
}

export type Delete_calendar_resourceResponse = ResourceDeleteResponseDTO;

export interface Fetch_calendar_resourcesParams {
  Authorization: string;
  Version: string;
  resourceType: string;
  locationId: string;
  limit: number;
  skip: number;
}

export type Fetch_calendar_resourcesResponse = CalendarResourceByIdResponseDTO[];

export interface Create_calendar_resourceParams {
  Authorization: string;
  Version: string;
  resourceType: string;
}

export type Create_calendar_resourceRequestBody = CreateCalendarResourceDTO;

export type Create_calendar_resourceResponse = CalendarResourceByIdResponseDTO;

export interface Create_event_notificationParams {
  Authorization: string;
  Version: string;
}

export type Create_event_notificationRequestBody = CreateCalendarNotificationDTO[];

export type Create_event_notificationResponse = CalendarNotificationResponseDTO[];

export interface Get_event_notificationParams {
  Authorization: string;
  Version: string;
  altType?: string;
  altId?: string;
  isActive?: boolean;
  deleted?: boolean;
  limit?: number;
  skip?: number;
}

export type Get_event_notificationResponse = CalendarNotificationResponseDTO[];

export interface Find_event_notificationParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Find_event_notificationResponse = CalendarNotificationResponseDTO;

export interface Delete_event_notificationParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Delete_event_notificationResponse = CalendarNotificationDeleteResponseDTO;

export interface Update_event_notificationParams {
  Authorization: string;
  Version: string;
  id: string;
}

export type Update_event_notificationRequestBody = UpdateCalendarNotificationsDTO;

export type Update_event_notificationResponse = CalendarNotificationDeleteResponseDTO;

export interface Get_calendarsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  groupId?: string;
  showDrafted?: boolean;
}

export type Get_calendarsResponse = CalendarsGetSuccessfulResponseDTO;

export interface Create_calendarParams {
  Authorization: string;
  Version: string;
}

export type Create_calendarRequestBody = CalendarCreateDTO;

export type Create_calendarResponse = CalendarByIdSuccessfulResponseDTO;

