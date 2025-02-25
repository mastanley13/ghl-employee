import { APIClient } from '../../utils/api-client';
// Import types
import {
Search_conversationParams,
Search_conversationResponse,
Get_conversationParams,
Get_conversationResponse,
Update_conversationParams,
Update_conversationRequestBody,
Update_conversationResponse,
Delete_conversationParams,
Delete_conversationResponse,
Get_email_by_idParams,
Get_email_by_idResponse,
Cancel_scheduled_email_messageParams,
Cancel_scheduled_email_messageResponse,
Get_messageParams,
Get_messageResponse,
Get_messagesParams,
Get_messagesResponse,
Send_a_new_messageParams,
Send_a_new_messageRequestBody,
Send_a_new_messageResponse,
Add_an_inbound_messageParams,
Add_an_inbound_messageRequestBody,
Add_an_inbound_messageResponse,
Add_an_outbound_messageParams,
Add_an_outbound_messageRequestBody,
Add_an_outbound_messageResponse,
Cancel_scheduled_messageParams,
Cancel_scheduled_messageResponse,
Upload_file_attachmentsParams,
Upload_file_attachmentsRequestBody,
Upload_file_attachmentsResponse,
Update_message_statusParams,
Update_message_statusRequestBody,
Update_message_statusResponse,
Get_message_recordingParams,
Get_message_recordingResponse,
Get_message_transcriptionParams,
Get_message_transcriptionResponse,
Download_message_transcriptionParams,
Download_message_transcriptionResponse,
Live_chat_agent_typingParams,
Live_chat_agent_typingRequestBody,
Live_chat_agent_typingResponse,
Create_conversationParams,
Create_conversationRequestBody,
Create_conversationResponse
} from '../../types/generated/conversations';

export class ConversationsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Search Conversations
   * Returns a list of all conversations matching the search criteria along with the sort and filter options selected.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async search_conversation(params: Search_conversationParams): Promise<Search_conversationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.contactId !== undefined) queryParams.contactId = params.contactId;
    if (params.assignedTo !== undefined) queryParams.assignedTo = params.assignedTo;
    if (params.followers !== undefined) queryParams.followers = params.followers;
    if (params.query !== undefined) queryParams.query = params.query;
    if (params.sort !== undefined) queryParams.sort = params.sort;
    if (params.startAfterDate !== undefined) queryParams.startAfterDate = params.startAfterDate;
    if (params.id !== undefined) queryParams.id = params.id;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.lastMessageType !== undefined) queryParams.lastMessageType = params.lastMessageType;
    if (params.lastMessageAction !== undefined) queryParams.lastMessageAction = params.lastMessageAction;
    if (params.lastMessageDirection !== undefined) queryParams.lastMessageDirection = params.lastMessageDirection;
    if (params.status !== undefined) queryParams.status = params.status;
    if (params.sortBy !== undefined) queryParams.sortBy = params.sortBy;
    if (params.sortScoreProfile !== undefined) queryParams.sortScoreProfile = params.sortScoreProfile;
    if (params.scoreProfile !== undefined) queryParams.scoreProfile = params.scoreProfile;
    if (params.scoreProfileMin !== undefined) queryParams.scoreProfileMin = params.scoreProfileMin;
    if (params.scoreProfileMax !== undefined) queryParams.scoreProfileMax = params.scoreProfileMax;
    return this.client.get<Search_conversationResponse>('/conversations/search', { params: queryParams });
  }

  /**
   * Get Conversation
   * Get the conversation details based on the conversation ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_conversation(params: Get_conversationParams): Promise<Get_conversationResponse> {
    const url = `/conversations/${params.conversationId}`;
    return this.client.get<Get_conversationResponse>(url);
  }

  /**
   * Update Conversation
   * Update the conversation details based on the conversation ID
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_conversation(params: Update_conversationParams, data: Update_conversationRequestBody): Promise<Update_conversationResponse> {
    const url = `/conversations/${params.conversationId}`;
    return this.client.put<Update_conversationResponse>(url, data);
  }

  /**
   * Delete Conversation
   * Delete the conversation details based on the conversation ID
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_conversation(params: Delete_conversationParams): Promise<Delete_conversationResponse> {
    const url = `/conversations/${params.conversationId}`;
    return this.client.delete<Delete_conversationResponse>(url);
  }

  /**
   * Get email by Id
   * Get email by Id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_email_by_id(params: Get_email_by_idParams): Promise<Get_email_by_idResponse> {
    const url = `/conversations/messages/email/${params.id}`;
    return this.client.get<Get_email_by_idResponse>(url);
  }

  /**
   * Cancel a scheduled email message.
   * Post the messageId for the API to delete a scheduled email message. <br />
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async cancel_scheduled_email_message(params: Cancel_scheduled_email_messageParams): Promise<Cancel_scheduled_email_messageResponse> {
    const url = `/conversations/messages/email/${params.emailMessageId}/schedule`;
    return this.client.delete<Cancel_scheduled_email_messageResponse>(url);
  }

  /**
   * Get message by message id
   * Get message by message id.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_message(params: Get_messageParams): Promise<Get_messageResponse> {
    const url = `/conversations/messages/${params.id}`;
    return this.client.get<Get_messageResponse>(url);
  }

  /**
   * Get messages by conversation id
   * Get messages by conversation id.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_messages(params: Get_messagesParams): Promise<Get_messagesResponse> {
    const url = `/conversations/${params.conversationId}/messages`;
    const queryParams: Record<string, any> = {};
    if (params.lastMessageId !== undefined) queryParams.lastMessageId = params.lastMessageId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.type !== undefined) queryParams.type = params.type;
    return this.client.get<Get_messagesResponse>(url, { params: queryParams });
  }

  /**
   * Send a new message
   * Post the necessary fields for the API to send a new message.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async send_a_new_message(params: Send_a_new_messageParams, data: Send_a_new_messageRequestBody): Promise<Send_a_new_messageResponse> {
    return this.client.post<Send_a_new_messageResponse>('/conversations/messages', data);
  }

  /**
   * Add an inbound message
   * Post the necessary fields for the API to add a new inbound message. <br />
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_an_inbound_message(params: Add_an_inbound_messageParams, data: Add_an_inbound_messageRequestBody): Promise<Add_an_inbound_messageResponse> {
    return this.client.post<Add_an_inbound_messageResponse>('/conversations/messages/inbound', data);
  }

  /**
   * Add an external outbound call
   * Post the necessary fields for the API to add a new outbound call.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_an_outbound_message(params: Add_an_outbound_messageParams, data: Add_an_outbound_messageRequestBody): Promise<Add_an_outbound_messageResponse> {
    return this.client.post<Add_an_outbound_messageResponse>('/conversations/messages/outbound', data);
  }

  /**
   * Cancel a scheduled message.
   * Post the messageId for the API to delete a scheduled message. <br />
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async cancel_scheduled_message(params: Cancel_scheduled_messageParams): Promise<Cancel_scheduled_messageResponse> {
    const url = `/conversations/messages/${params.messageId}/schedule`;
    return this.client.delete<Cancel_scheduled_messageResponse>(url);
  }

  /**
   * Upload file attachments
   * Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment". <br /><br /> The allowed file types are: <br> <ul><li>JPG</li><li>JPEG</li><li>PNG</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>PDF</li><li>DOC</li><li>DOCX</li><li>TXT</li></ul> <br /><br /> The API will return an object with the URLs
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async upload_file_attachments(params: Upload_file_attachmentsParams, data: Upload_file_attachmentsRequestBody): Promise<Upload_file_attachmentsResponse> {
    return this.client.post<Upload_file_attachmentsResponse>('/conversations/messages/upload', data);
  }

  /**
   * Update message status
   * Post the necessary fields for the API to update message status.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_message_status(params: Update_message_statusParams, data: Update_message_statusRequestBody): Promise<Update_message_statusResponse> {
    const url = `/conversations/messages/${params.messageId}/status`;
    return this.client.put<Update_message_statusResponse>(url, data);
  }

  /**
   * Get Recording by Message ID
   * Get the recording for a message by passing the message id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_message_recording(params: Get_message_recordingParams): Promise<Get_message_recordingResponse> {
    const url = `/conversations/messages/${params.messageId}/locations/${params.locationId}/recording`;
    return this.client.get<Get_message_recordingResponse>(url);
  }

  /**
   * Get transcription by Message ID
   * Get the recording transcription for a message by passing the message id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_message_transcription(params: Get_message_transcriptionParams): Promise<Get_message_transcriptionResponse> {
    const url = `/conversations/locations/${params.locationId}/messages/${params.messageId}/transcription`;
    return this.client.get<Get_message_transcriptionResponse>(url);
  }

  /**
   * Download transcription by Message ID
   * Download the recording transcription for a message by passing the message id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async download_message_transcription(params: Download_message_transcriptionParams): Promise<Download_message_transcriptionResponse> {
    const url = `/conversations/locations/${params.locationId}/messages/${params.messageId}/transcription/download`;
    return this.client.get<Download_message_transcriptionResponse>(url);
  }

  /**
   * Agent/Ai-Bot is typing a message indicator for live chat
   * Agent/AI-Bot will call this when they are typing a message in live chat message
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async live_chat_agent_typing(params: Live_chat_agent_typingParams, data: Live_chat_agent_typingRequestBody): Promise<Live_chat_agent_typingResponse> {
    return this.client.post<Live_chat_agent_typingResponse>('/conversations/providers/live-chat/typing', data);
  }

  /**
   * Create Conversation
   * Creates a new conversation with the data provided
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_conversation(params: Create_conversationParams, data: Create_conversationRequestBody): Promise<Create_conversationResponse> {
    return this.client.post<Create_conversationResponse>('/conversations/', data);
  }
}
