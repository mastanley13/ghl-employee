import { APIClient } from '../../utils/api-client';
// Import types
import {
Search_contacts_advancedParams,
Search_contacts_advancedRequestBody,
Search_contacts_advancedResponse,
Get_duplicate_contactParams,
Get_duplicate_contactResponse,
Get_all_tasksParams,
Get_all_tasksResponse,
Create_taskParams,
Create_taskRequestBody,
Create_taskResponse,
Get_taskParams,
Get_taskResponse,
Update_taskParams,
Update_taskRequestBody,
Update_taskResponse,
Delete_taskParams,
Delete_taskResponse,
Update_task_completedParams,
Update_task_completedRequestBody,
Update_task_completedResponse,
Get_appointments_for_contactParams,
Get_appointments_for_contactResponse,
Add_tagsParams,
Add_tagsRequestBody,
Add_tagsResponse,
Remove_tagsParams,
Remove_tagsRequestBody,
Remove_tagsResponse,
Get_all_notesParams,
Get_all_notesResponse,
Create_noteParams,
Create_noteRequestBody,
Create_noteResponse,
Get_noteParams,
Get_noteResponse,
Update_noteParams,
Update_noteRequestBody,
Update_noteResponse,
Delete_noteParams,
Delete_noteResponse,
Add_remove_contact_from_businessParams,
Add_remove_contact_from_businessRequestBody,
Add_remove_contact_from_businessResponse,
Get_contactParams,
Get_contactResponse,
Update_contactParams,
Update_contactRequestBody,
Update_contactResponse,
Delete_contactParams,
Delete_contactResponse,
Upsert_contactParams,
Upsert_contactRequestBody,
Upsert_contactResponse,
Get_contacts_by_businessIdParams,
Get_contacts_by_businessIdResponse,
Add_followers_contactParams,
Add_followers_contactRequestBody,
Add_followers_contactResponse,
Remove_followers_contactParams,
Remove_followers_contactRequestBody,
Remove_followers_contactResponse,
Add_contact_to_campaignParams,
Add_contact_to_campaignRequestBody,
Add_contact_to_campaignResponse,
Remove_contact_from_campaignParams,
Remove_contact_from_campaignResponse,
Remove_contact_from_every_campaignParams,
Remove_contact_from_every_campaignResponse,
Add_contact_to_workflowParams,
Add_contact_to_workflowRequestBody,
Add_contact_to_workflowResponse,
Delete_contact_to_workflowParams,
Delete_contact_to_workflowRequestBody,
Delete_contact_to_workflowResponse,
Create_contactParams,
Create_contactRequestBody,
Create_contactResponse,
Get_contactsParams,
Get_contactsResponse
} from '../../types/generated/contacts';

export class ContactsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Search Contacts
   * Search contacts based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async search_contacts_advanced(params: Search_contacts_advancedParams, data: Search_contacts_advancedRequestBody): Promise<Search_contacts_advancedResponse> {
    return this.client.post<Search_contacts_advancedResponse>('/contacts/search', data);
  }

  /**
   * Get Duplicate Contact
   * Get Duplicate Contact.<br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_duplicate_contact(params: Get_duplicate_contactParams): Promise<Get_duplicate_contactResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.number !== undefined) queryParams.number = params.number;
    if (params.email !== undefined) queryParams.email = params.email;
    return this.client.get<Get_duplicate_contactResponse>('/contacts/search/duplicate', { params: queryParams });
  }

  /**
   * Get all Tasks
   * Get all Tasks
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_all_tasks(params: Get_all_tasksParams): Promise<Get_all_tasksResponse> {
    const url = `/contacts/${params.contactId}/tasks`;
    return this.client.get<Get_all_tasksResponse>(url);
  }

  /**
   * Create Task
   * Create Task
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_task(params: Create_taskParams, data: Create_taskRequestBody): Promise<Create_taskResponse> {
    const url = `/contacts/${params.contactId}/tasks`;
    return this.client.post<Create_taskResponse>(url, data);
  }

  /**
   * Get Task
   * Get Task
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_task(params: Get_taskParams): Promise<Get_taskResponse> {
    const url = `/contacts/${params.contactId}/tasks/${params.taskId}`;
    return this.client.get<Get_taskResponse>(url);
  }

  /**
   * Update Task
   * Update Task
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_task(params: Update_taskParams, data: Update_taskRequestBody): Promise<Update_taskResponse> {
    const url = `/contacts/${params.contactId}/tasks/${params.taskId}`;
    return this.client.put<Update_taskResponse>(url, data);
  }

  /**
   * Delete Task
   * Delete Task
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_task(params: Delete_taskParams): Promise<Delete_taskResponse> {
    const url = `/contacts/${params.contactId}/tasks/${params.taskId}`;
    return this.client.delete<Delete_taskResponse>(url);
  }

  /**
   * Update Task Completed
   * Update Task Completed
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_task_completed(params: Update_task_completedParams, data: Update_task_completedRequestBody): Promise<Update_task_completedResponse> {
    const url = `/contacts/${params.contactId}/tasks/${params.taskId}/completed`;
    return this.client.put<Update_task_completedResponse>(url, data);
  }

  /**
   * Get Appointments for Contact
   * Get Appointments for Contact
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_appointments_for_contact(params: Get_appointments_for_contactParams): Promise<Get_appointments_for_contactResponse> {
    const url = `/contacts/${params.contactId}/appointments`;
    return this.client.get<Get_appointments_for_contactResponse>(url);
  }

  /**
   * Add Tags
   * Add Tags
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_tags(params: Add_tagsParams, data: Add_tagsRequestBody): Promise<Add_tagsResponse> {
    const url = `/contacts/${params.contactId}/tags`;
    return this.client.post<Add_tagsResponse>(url, data);
  }

  /**
   * Remove Tags
   * Remove Tags
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async remove_tags(params: Remove_tagsParams, data: Remove_tagsRequestBody): Promise<Remove_tagsResponse> {
    const url = `/contacts/${params.contactId}/tags`;
    return this.client.delete<Remove_tagsResponse>(url);
  }

  /**
   * Get All Notes
   * Get All Notes
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_all_notes(params: Get_all_notesParams): Promise<Get_all_notesResponse> {
    const url = `/contacts/${params.contactId}/notes`;
    return this.client.get<Get_all_notesResponse>(url);
  }

  /**
   * Create Note
   * Create Note
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_note(params: Create_noteParams, data: Create_noteRequestBody): Promise<Create_noteResponse> {
    const url = `/contacts/${params.contactId}/notes`;
    return this.client.post<Create_noteResponse>(url, data);
  }

  /**
   * Get Note
   * Get Note
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_note(params: Get_noteParams): Promise<Get_noteResponse> {
    const url = `/contacts/${params.contactId}/notes/${params.id}`;
    return this.client.get<Get_noteResponse>(url);
  }

  /**
   * Update Note
   * Update Note
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_note(params: Update_noteParams, data: Update_noteRequestBody): Promise<Update_noteResponse> {
    const url = `/contacts/${params.contactId}/notes/${params.id}`;
    return this.client.put<Update_noteResponse>(url, data);
  }

  /**
   * Delete Note
   * Delete Note
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_note(params: Delete_noteParams): Promise<Delete_noteResponse> {
    const url = `/contacts/${params.contactId}/notes/${params.id}`;
    return this.client.delete<Delete_noteResponse>(url);
  }

  /**
   * Add/Remove Contacts From Business
   * Add/Remove Contacts From Business
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_remove_contact_from_business(params: Add_remove_contact_from_businessParams, data: Add_remove_contact_from_businessRequestBody): Promise<Add_remove_contact_from_businessResponse> {
    return this.client.post<Add_remove_contact_from_businessResponse>('/contacts/bulk/business', data);
  }

  /**
   * Get Contact
   * Get Contact
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_contact(params: Get_contactParams): Promise<Get_contactResponse> {
    const url = `/contacts/${params.contactId}`;
    return this.client.get<Get_contactResponse>(url);
  }

  /**
   * Update Contact
   * Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_contact(params: Update_contactParams, data: Update_contactRequestBody): Promise<Update_contactResponse> {
    const url = `/contacts/${params.contactId}`;
    return this.client.put<Update_contactResponse>(url, data);
  }

  /**
   * Delete Contact
   * Delete Contact
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_contact(params: Delete_contactParams): Promise<Delete_contactResponse> {
    const url = `/contacts/${params.contactId}`;
    return this.client.delete<Delete_contactResponse>(url);
  }

  /**
   * Upsert Contact
   * Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a><br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for de-duplication. If the setting is enabled, a new contact will get created with the shared details.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async upsert_contact(params: Upsert_contactParams, data: Upsert_contactRequestBody): Promise<Upsert_contactResponse> {
    return this.client.post<Upsert_contactResponse>('/contacts/upsert', data);
  }

  /**
   * Get Contacts By BusinessId
   * Get Contacts By BusinessId
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_contacts_by_businessId(params: Get_contacts_by_businessIdParams): Promise<Get_contacts_by_businessIdResponse> {
    const url = `/contacts/business/${params.businessId}`;
    const queryParams: Record<string, any> = {};
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.query !== undefined) queryParams.query = params.query;
    return this.client.get<Get_contacts_by_businessIdResponse>(url, { params: queryParams });
  }

  /**
   * Add Followers
   * Add Followers
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_followers_contact(params: Add_followers_contactParams, data: Add_followers_contactRequestBody): Promise<Add_followers_contactResponse> {
    const url = `/contacts/${params.contactId}/followers`;
    return this.client.post<Add_followers_contactResponse>(url, data);
  }

  /**
   * Remove Followers
   * Remove Followers
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async remove_followers_contact(params: Remove_followers_contactParams, data: Remove_followers_contactRequestBody): Promise<Remove_followers_contactResponse> {
    const url = `/contacts/${params.contactId}/followers`;
    return this.client.delete<Remove_followers_contactResponse>(url);
  }

  /**
   * Add Contact to Campaign
   * Add contact to Campaign
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_contact_to_campaign(params: Add_contact_to_campaignParams, data: Add_contact_to_campaignRequestBody): Promise<Add_contact_to_campaignResponse> {
    const url = `/contacts/${params.contactId}/campaigns/${params.campaignId}`;
    return this.client.post<Add_contact_to_campaignResponse>(url, data);
  }

  /**
   * Remove Contact From Campaign
   * Remove Contact From Campaign
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async remove_contact_from_campaign(params: Remove_contact_from_campaignParams): Promise<Remove_contact_from_campaignResponse> {
    const url = `/contacts/${params.contactId}/campaigns/${params.campaignId}`;
    return this.client.delete<Remove_contact_from_campaignResponse>(url);
  }

  /**
   * Remove Contact From Every Campaign
   * Remove Contact From Every Campaign
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async remove_contact_from_every_campaign(params: Remove_contact_from_every_campaignParams): Promise<Remove_contact_from_every_campaignResponse> {
    const url = `/contacts/${params.contactId}/campaigns/removeAll`;
    return this.client.delete<Remove_contact_from_every_campaignResponse>(url);
  }

  /**
   * Add Contact to Workflow
   * Add Contact to Workflow
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async add_contact_to_workflow(params: Add_contact_to_workflowParams, data: Add_contact_to_workflowRequestBody): Promise<Add_contact_to_workflowResponse> {
    const url = `/contacts/${params.contactId}/workflow/${params.workflowId}`;
    return this.client.post<Add_contact_to_workflowResponse>(url, data);
  }

  /**
   * Delete Contact to Workflow
   * Delete Contact to Workflow
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async delete_contact_to_workflow(params: Delete_contact_to_workflowParams, data: Delete_contact_to_workflowRequestBody): Promise<Delete_contact_to_workflowResponse> {
    const url = `/contacts/${params.contactId}/workflow/${params.workflowId}`;
    return this.client.delete<Delete_contact_to_workflowResponse>(url);
  }

  /**
   * Create Contact
   * Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_contact(params: Create_contactParams, data: Create_contactRequestBody): Promise<Create_contactResponse> {
    return this.client.post<Create_contactResponse>('/contacts/', data);
  }

  /**
   * Get Contacts
   * Get Contacts

 **Note:** This API endpoint is deprecated. Please use the [Search Contacts](https://highlevel.stoplight.io/docs/integrations/dbe4f3a00a106-search-contacts) endpoint instead.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_contacts(params: Get_contactsParams): Promise<Get_contactsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.startAfterId !== undefined) queryParams.startAfterId = params.startAfterId;
    if (params.startAfter !== undefined) queryParams.startAfter = params.startAfter;
    if (params.query !== undefined) queryParams.query = params.query;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    return this.client.get<Get_contactsResponse>('/contacts/', { params: queryParams });
  }
}
