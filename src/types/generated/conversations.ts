// Generated TypeScript interfaces for conversations

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface StartAfterNumberSchema {
  startAfterDate?: number;
}

export interface StartAfterArrayNumberSchema {
  startAfterDate?: string[];
}

export interface ConversationSchema {
  id: string;
  contactId: string;
  locationId: string;
  lastMessageBody: string;
  lastMessageType: 'TYPE_CALL' | 'TYPE_SMS' | 'TYPE_EMAIL' | 'TYPE_SMS_REVIEW_REQUEST' | 'TYPE_WEBCHAT' | 'TYPE_SMS_NO_SHOW_REQUEST' | 'TYPE_CAMPAIGN_SMS' | 'TYPE_CAMPAIGN_CALL' | 'TYPE_CAMPAIGN_EMAIL' | 'TYPE_CAMPAIGN_VOICEMAIL' | 'TYPE_FACEBOOK' | 'TYPE_CAMPAIGN_FACEBOOK' | 'TYPE_CAMPAIGN_MANUAL_CALL' | 'TYPE_CAMPAIGN_MANUAL_SMS' | 'TYPE_GMB' | 'TYPE_CAMPAIGN_GMB' | 'TYPE_REVIEW' | 'TYPE_INSTAGRAM' | 'TYPE_WHATSAPP' | 'TYPE_CUSTOM_SMS' | 'TYPE_CUSTOM_EMAIL' | 'TYPE_CUSTOM_PROVIDER_SMS' | 'TYPE_CUSTOM_PROVIDER_EMAIL' | 'TYPE_IVR_CALL' | 'TYPE_ACTIVITY_CONTACT' | 'TYPE_ACTIVITY_INVOICE' | 'TYPE_ACTIVITY_PAYMENT' | 'TYPE_ACTIVITY_OPPORTUNITY' | 'TYPE_LIVE_CHAT' | 'TYPE_LIVE_CHAT_INFO_MESSAGE' | 'TYPE_ACTIVITY_APPOINTMENT' | 'TYPE_FACEBOOK_COMMENT' | 'TYPE_INSTAGRAM_COMMENT' | 'TYPE_ACTIVITY';
  type: 'TYPE_PHONE' | 'TYPE_EMAIL' | 'TYPE_FB_MESSENGER' | 'TYPE_REVIEW';
  unreadCount: number;
  fullName: string;
  contactName: string;
  email: string;
  phone: string;
}

export interface SendConversationResponseDto {
  conversations: ConversationSchema[];
  total: number;
}

export interface CreateConversationDto {
  locationId: string;
  contactId: string;
}

export interface ConversationDto {
  id?: string;
  locationId: string;
  contactId: string;
  assignedTo?: string;
  userId?: string;
  lastMessageBody?: string;
  lastMessageDate?: string;
  lastMessageType?: 'TYPE_CALL' | 'TYPE_SMS' | 'TYPE_EMAIL' | 'TYPE_SMS_REVIEW_REQUEST' | 'TYPE_WEBCHAT' | 'TYPE_SMS_NO_SHOW_REQUEST' | 'TYPE_CAMPAIGN_SMS' | 'TYPE_CAMPAIGN_CALL' | 'TYPE_CAMPAIGN_EMAIL' | 'TYPE_CAMPAIGN_VOICEMAIL' | 'TYPE_FACEBOOK' | 'TYPE_CAMPAIGN_FACEBOOK' | 'TYPE_CAMPAIGN_MANUAL_CALL' | 'TYPE_CAMPAIGN_MANUAL_SMS' | 'TYPE_GMB' | 'TYPE_CAMPAIGN_GMB' | 'TYPE_REVIEW' | 'TYPE_INSTAGRAM' | 'TYPE_WHATSAPP' | 'TYPE_CUSTOM_SMS' | 'TYPE_CUSTOM_EMAIL' | 'TYPE_CUSTOM_PROVIDER_SMS' | 'TYPE_CUSTOM_PROVIDER_EMAIL' | 'TYPE_IVR_CALL' | 'TYPE_ACTIVITY_CONTACT' | 'TYPE_ACTIVITY_INVOICE' | 'TYPE_ACTIVITY_PAYMENT' | 'TYPE_ACTIVITY_OPPORTUNITY' | 'TYPE_LIVE_CHAT' | 'TYPE_LIVE_CHAT_INFO_MESSAGE' | 'TYPE_ACTIVITY_APPOINTMENT' | 'TYPE_FACEBOOK_COMMENT' | 'TYPE_INSTAGRAM_COMMENT' | 'TYPE_ACTIVITY';
  unreadCount?: number;
  inbox?: boolean;
  starred?: boolean;
  deleted: boolean;
}

export interface GetConversationSuccessfulResponse {
  success: boolean;
  conversation: any;
}

export interface GetConversationByIdResponse {
  contactId: string;
  locationId: string;
  deleted: boolean;
  inbox: boolean;
  type: number;
  unreadCount: number;
  assignedTo: string;
  id: string;
  starred?: boolean;
}

export interface UpdateConversationDto {
  locationId: string;
  unreadCount?: number;
  starred?: boolean;
  feedback?: Record<string, any>;
}

export interface DeleteConversationSuccessfulResponse {
  success: boolean;
}

export interface GetEmailMessageResponseDto {
  id: string;
  altId?: string;
  threadId: string;
  locationId: string;
  contactId: string;
  conversationId: string;
  dateAdded: string;
  subject?: string;
  body: string;
  direction: 'inbound' | 'outbound';
  status?: 'pending' | 'scheduled' | 'sent' | 'delivered' | 'read' | 'undelivered' | 'connected' | 'failed' | 'opened';
  contentType: string;
  attachments?: string[];
  provider?: string;
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  replyToMessageId?: string;
  source?: 'workflow' | 'bulk_actions' | 'campaign' | 'api' | 'app';
}

export interface CancelScheduledResponseDto {
  status: number;
  message: string;
}

export interface GetMessageResponseDto {
  id: string;
  type: number;
  messageType: 'TYPE_CALL' | 'TYPE_SMS' | 'TYPE_EMAIL' | 'TYPE_SMS_REVIEW_REQUEST' | 'TYPE_WEBCHAT' | 'TYPE_SMS_NO_SHOW_REQUEST' | 'TYPE_CAMPAIGN_SMS' | 'TYPE_CAMPAIGN_CALL' | 'TYPE_CAMPAIGN_EMAIL' | 'TYPE_CAMPAIGN_VOICEMAIL' | 'TYPE_FACEBOOK' | 'TYPE_CAMPAIGN_FACEBOOK' | 'TYPE_CAMPAIGN_MANUAL_CALL' | 'TYPE_CAMPAIGN_MANUAL_SMS' | 'TYPE_GMB' | 'TYPE_CAMPAIGN_GMB' | 'TYPE_REVIEW' | 'TYPE_INSTAGRAM' | 'TYPE_WHATSAPP' | 'TYPE_CUSTOM_SMS' | 'TYPE_CUSTOM_EMAIL' | 'TYPE_CUSTOM_PROVIDER_SMS' | 'TYPE_CUSTOM_PROVIDER_EMAIL' | 'TYPE_IVR_CALL' | 'TYPE_ACTIVITY_CONTACT' | 'TYPE_ACTIVITY_INVOICE' | 'TYPE_ACTIVITY_PAYMENT' | 'TYPE_ACTIVITY_OPPORTUNITY' | 'TYPE_LIVE_CHAT' | 'TYPE_LIVE_CHAT_INFO_MESSAGE' | 'TYPE_ACTIVITY_APPOINTMENT' | 'TYPE_FACEBOOK_COMMENT' | 'TYPE_INSTAGRAM_COMMENT' | 'TYPE_CUSTOM_CALL' | 'TYPE_ACTIVITY';
  locationId: string;
  contactId: string;
  conversationId: string;
  dateAdded: string;
  body?: string;
  direction: 'inbound' | 'outbound';
  status?: 'pending' | 'scheduled' | 'sent' | 'delivered' | 'read' | 'undelivered' | 'connected' | 'failed' | 'opened';
  contentType: string;
  attachments?: string[];
  meta?: Record<string, any>;
  source?: 'workflow' | 'bulk_actions' | 'campaign' | 'api' | 'app';
  userId?: string;
}

export interface GetMessagesByConversationResponseDto {
  lastMessageId: string;
  nextPage: boolean;
  messages: GetMessageResponseDto[];
}

export interface SendMessageBodyDto {
  type: 'SMS' | 'Email' | 'WhatsApp' | 'GMB' | 'IG' | 'FB' | 'Custom' | 'Live_Chat';
  contactId: string;
  appointmentId?: string;
  attachments?: string[];
  emailFrom?: string;
  emailCc?: string[];
  emailBcc?: string[];
  html?: string;
  message?: string;
  subject?: string;
  replyMessageId?: string;
  templateId?: string;
  scheduledTimestamp?: number;
  conversationProviderId?: string;
  emailTo?: string;
  emailReplyMode?: 'reply' | 'reply_all';
  fromNumber?: string;
  toNumber?: string;
}

export interface SendMessageResponseDto {
  conversationId: string;
  emailMessageId?: string;
  messageId: string;
  messageIds?: string[];
  msg?: string;
}

export interface ProcessMessageBodyDto {
  type: 'SMS' | 'Email' | 'WhatsApp' | 'GMB' | 'IG' | 'FB' | 'Custom' | 'WebChat' | 'Live_Chat' | 'Call';
  attachments?: string[];
  message?: string;
  conversationId: string;
  conversationProviderId: string;
  html?: string;
  subject?: string;
  emailFrom?: string;
  emailTo?: string;
  emailCc?: string[];
  emailBcc?: string[];
  emailMessageId?: string;
  altId?: string;
  direction?: Record<string, any>;
  date?: string;
  call?: any;
}

export interface CallDataDTO {
  to?: string;
  from?: string;
  status?: 'pending' | 'completed' | 'answered' | 'busy' | 'no-answer' | 'failed' | 'canceled' | 'voicemail';
}

export interface ProcessMessageResponseDto {
  success: boolean;
  conversationId: string;
  messageId: string;
  message: string;
  contactId?: string;
  dateAdded?: string;
  emailMessageId?: string;
}

export interface ProcessOutboundMessageBodyDto {
  type: 'Call';
  attachments?: string[];
  conversationId: string;
  conversationProviderId: string;
  altId?: string;
  date?: string;
  call?: any;
}

export interface UploadFilesDto {
  conversationId: string;
  locationId: string;
  attachmentUrls: string[];
}

export interface UploadFilesResponseDto {
  uploadedFiles: Record<string, any>;
}

export interface UploadFilesErrorResponseDto {
  status: 400 | 413 | 415;
  message: string;
}

export interface ErrorDto {
  code: string;
  type: string;
  message: string;
}

export interface UpdateMessageStatusDto {
  status: 'read' | 'pending' | 'delivered' | 'failed';
  error?: any;
  emailMessageId?: string;
  recipients?: string[];
}

export interface GetMessageTranscriptionResponseDto {
  mediaChannel: number;
  sentenceIndex: number;
  startTime: number;
  endTime: number;
  transcript: string;
  confidence: number;
}

export interface UserTypingBody {
  locationId: string;
  isTyping: string;
  visitorId: string;
  conversationId: string;
}

export interface CreateLiveChatMessageFeedbackResponse {
  success: boolean;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface Search_conversationParams {
  Authorization: string;
  Version: string;
  locationId: string;
  contactId?: string;
  assignedTo?: string;
  followers?: string;
  query?: string;
  sort?: string;
  startAfterDate?: any;
  id?: string;
  limit?: number;
  lastMessageType?: string;
  lastMessageAction?: string;
  lastMessageDirection?: string;
  status?: string;
  sortBy?: string;
  sortScoreProfile?: string;
  scoreProfile?: string;
  scoreProfileMin?: number;
  scoreProfileMax?: number;
}

export type Search_conversationResponse = SendConversationResponseDto;

export interface Get_conversationParams {
  Authorization: string;
  Version: string;
  conversationId: string;
}

export type Get_conversationResponse = GetConversationByIdResponse;

export interface Update_conversationParams {
  Authorization: string;
  Version: string;
  conversationId: string;
}

export type Update_conversationRequestBody = UpdateConversationDto;

export type Update_conversationResponse = GetConversationSuccessfulResponse;

export interface Delete_conversationParams {
  Authorization: string;
  Version: string;
  conversationId: string;
}

export type Delete_conversationResponse = DeleteConversationSuccessfulResponse;

export interface Get_email_by_idParams {
  Authorization: string;
}

export type Get_email_by_idResponse = GetEmailMessageResponseDto;

export interface Cancel_scheduled_email_messageParams {
  Authorization: string;
  emailMessageId: string;
}

export type Cancel_scheduled_email_messageResponse = CancelScheduledResponseDto;

export interface Get_messageParams {
  Authorization: string;
  Version: string;
}

export type Get_messageResponse = GetMessageResponseDto;

export interface Get_messagesParams {
  Authorization: string;
  Version: string;
  conversationId: string;
  lastMessageId?: string;
  limit?: number;
  type?: string;
}

export type Get_messagesResponse = GetMessagesByConversationResponseDto;

export interface Send_a_new_messageParams {
  Authorization: string;
  Version: string;
}

export type Send_a_new_messageRequestBody = SendMessageBodyDto;

export type Send_a_new_messageResponse = SendMessageResponseDto;

export interface Add_an_inbound_messageParams {
  Authorization: string;
  Version: string;
}

export type Add_an_inbound_messageRequestBody = ProcessMessageBodyDto;

export type Add_an_inbound_messageResponse = ProcessMessageResponseDto;

export interface Add_an_outbound_messageParams {
  Authorization: string;
  Version: string;
}

export type Add_an_outbound_messageRequestBody = ProcessOutboundMessageBodyDto;

export type Add_an_outbound_messageResponse = ProcessMessageResponseDto;

export interface Cancel_scheduled_messageParams {
  Authorization: string;
  Version: string;
  messageId: string;
}

export type Cancel_scheduled_messageResponse = CancelScheduledResponseDto;

export interface Upload_file_attachmentsParams {
  Authorization: string;
  Version: string;
}

export type Upload_file_attachmentsRequestBody = UploadFilesDto;

export type Upload_file_attachmentsResponse = UploadFilesResponseDto;

export interface Update_message_statusParams {
  Authorization: string;
  Version: string;
  messageId: string;
}

export type Update_message_statusRequestBody = UpdateMessageStatusDto;

export type Update_message_statusResponse = SendMessageResponseDto;

export interface Get_message_recordingParams {
  Authorization: string;
  Version: string;
  locationId: string;
  messageId: string;
}

export interface Get_message_transcriptionParams {
  Authorization: string;
  Version: string;
  locationId: string;
  messageId: string;
}

export type Get_message_transcriptionResponse = GetMessageTranscriptionResponseDto;

export interface Download_message_transcriptionParams {
  Authorization: string;
  Version: string;
  locationId: string;
  messageId: string;
}

export type Download_message_transcriptionResponse = ;

export interface Live_chat_agent_typingParams {
  Authorization: string;
  Version: string;
}

export type Live_chat_agent_typingRequestBody = UserTypingBody;

export type Live_chat_agent_typingResponse = CreateLiveChatMessageFeedbackResponse;

export interface Create_conversationParams {
  Authorization: string;
  Version: string;
}

export type Create_conversationRequestBody = CreateConversationDto;

export type Create_conversationResponse = GetConversationSuccessfulResponse;

