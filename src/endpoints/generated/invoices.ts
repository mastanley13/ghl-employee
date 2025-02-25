import { APIClient } from '../../utils/api-client';
// Import types
import {
Create_invoice_templateParams,
Create_invoice_templateRequestBody,
Create_invoice_templateResponse,
List_invoice_templatesParams,
List_invoice_templatesResponse,
Get_invoice_templateParams,
Get_invoice_templateResponse,
Update_invoice_templateParams,
Update_invoice_templateRequestBody,
Update_invoice_templateResponse,
Delete_invoice_templateParams,
Delete_invoice_templateResponse,
Create_invoice_scheduleParams,
Create_invoice_scheduleRequestBody,
Create_invoice_scheduleResponse,
List_invoice_schedulesParams,
List_invoice_schedulesResponse,
Get_invoice_scheduleParams,
Get_invoice_scheduleResponse,
Update_invoice_scheduleParams,
Update_invoice_scheduleRequestBody,
Update_invoice_scheduleResponse,
Delete_invoice_scheduleParams,
Delete_invoice_scheduleResponse,
Schedule_invoice_scheduleParams,
Schedule_invoice_scheduleRequestBody,
Schedule_invoice_scheduleResponse,
Auto_payment_invoice_scheduleParams,
Auto_payment_invoice_scheduleRequestBody,
Auto_payment_invoice_scheduleResponse,
Cancel_invoice_scheduleParams,
Cancel_invoice_scheduleRequestBody,
Cancel_invoice_scheduleResponse,
Text2pay_invoiceParams,
Text2pay_invoiceRequestBody,
Text2pay_invoiceResponse,
Generate_invoice_numberParams,
Generate_invoice_numberResponse,
Get_invoiceParams,
Get_invoiceResponse,
Update_invoiceParams,
Update_invoiceRequestBody,
Update_invoiceResponse,
Delete_invoiceParams,
Delete_invoiceResponse,
Void_invoiceParams,
Void_invoiceRequestBody,
Void_invoiceResponse,
Send_invoiceParams,
Send_invoiceRequestBody,
Send_invoiceResponse,
Record_invoiceParams,
Record_invoiceRequestBody,
Record_invoiceResponse,
Create_invoiceParams,
Create_invoiceRequestBody,
Create_invoiceResponse,
List_invoicesParams,
List_invoicesResponse
} from '../../types/generated/invoices';

export class InvoicesAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Create template
   * API to create a template
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_invoice_template(params: Create_invoice_templateParams, data: Create_invoice_templateRequestBody): Promise<Create_invoice_templateResponse> {
    return this.client.post<Create_invoice_templateResponse>('/invoices/template', data);
  }

  /**
   * List templates
   * API to get list of templates
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_invoice_templates(params: List_invoice_templatesParams): Promise<List_invoice_templatesResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.status !== undefined) queryParams.status = params.status;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    if (params.search !== undefined) queryParams.search = params.search;
    if (params.paymentMode !== undefined) queryParams.paymentMode = params.paymentMode;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_invoice_templatesResponse>('/invoices/template', { params: queryParams });
  }

  /**
   * Get an template
   * API to get an template by template id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_invoice_template(params: Get_invoice_templateParams): Promise<Get_invoice_templateResponse> {
    const url = `/invoices/template/${params.templateId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Get_invoice_templateResponse>(url, { params: queryParams });
  }

  /**
   * Update template
   * API to update an template by template id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_invoice_template(params: Update_invoice_templateParams, data: Update_invoice_templateRequestBody): Promise<Update_invoice_templateResponse> {
    const url = `/invoices/template/${params.templateId}`;
    return this.client.put<Update_invoice_templateResponse>(url, data);
  }

  /**
   * Delete template
   * API to update an template by template id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_invoice_template(params: Delete_invoice_templateParams): Promise<Delete_invoice_templateResponse> {
    const url = `/invoices/template/${params.templateId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.delete<Delete_invoice_templateResponse>(url, { params: queryParams });
  }

  /**
   * Create Invoice Schedule
   * API to create an invoice Schedule
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_invoice_schedule(params: Create_invoice_scheduleParams, data: Create_invoice_scheduleRequestBody): Promise<Create_invoice_scheduleResponse> {
    return this.client.post<Create_invoice_scheduleResponse>('/invoices/schedule', data);
  }

  /**
   * List schedules
   * API to get list of schedules
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_invoice_schedules(params: List_invoice_schedulesParams): Promise<List_invoice_schedulesResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.status !== undefined) queryParams.status = params.status;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    if (params.search !== undefined) queryParams.search = params.search;
    if (params.paymentMode !== undefined) queryParams.paymentMode = params.paymentMode;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_invoice_schedulesResponse>('/invoices/schedule', { params: queryParams });
  }

  /**
   * Get an schedule
   * API to get an schedule by schedule id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_invoice_schedule(params: Get_invoice_scheduleParams): Promise<Get_invoice_scheduleResponse> {
    const url = `/invoices/schedule/${params.scheduleId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Get_invoice_scheduleResponse>(url, { params: queryParams });
  }

  /**
   * Update schedule
   * API to update an schedule by schedule id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_invoice_schedule(params: Update_invoice_scheduleParams, data: Update_invoice_scheduleRequestBody): Promise<Update_invoice_scheduleResponse> {
    const url = `/invoices/schedule/${params.scheduleId}`;
    return this.client.put<Update_invoice_scheduleResponse>(url, data);
  }

  /**
   * Delete schedule
   * API to delete an schedule by schedule id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_invoice_schedule(params: Delete_invoice_scheduleParams): Promise<Delete_invoice_scheduleResponse> {
    const url = `/invoices/schedule/${params.scheduleId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.delete<Delete_invoice_scheduleResponse>(url, { params: queryParams });
  }

  /**
   * Schedule an schedule invoice
   * API to schedule an schedule invoice to start sending to the customer
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async schedule_invoice_schedule(params: Schedule_invoice_scheduleParams, data: Schedule_invoice_scheduleRequestBody): Promise<Schedule_invoice_scheduleResponse> {
    const url = `/invoices/schedule/${params.scheduleId}/schedule`;
    return this.client.post<Schedule_invoice_scheduleResponse>(url, data);
  }

  /**
   * Manage Auto payment for an schedule invoice
   * API to manage auto payment for a schedule
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async auto_payment_invoice_schedule(params: Auto_payment_invoice_scheduleParams, data: Auto_payment_invoice_scheduleRequestBody): Promise<Auto_payment_invoice_scheduleResponse> {
    const url = `/invoices/schedule/${params.scheduleId}/auto-payment`;
    return this.client.post<Auto_payment_invoice_scheduleResponse>(url, data);
  }

  /**
   * Cancel an scheduled invoice
   * API to cancel a scheduled invoice by schedule id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async cancel_invoice_schedule(params: Cancel_invoice_scheduleParams, data: Cancel_invoice_scheduleRequestBody): Promise<Cancel_invoice_scheduleResponse> {
    const url = `/invoices/schedule/${params.scheduleId}/cancel`;
    return this.client.post<Cancel_invoice_scheduleResponse>(url, data);
  }

  /**
   * Create & Send
   * API to create or update a text2pay invoice
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async text2pay_invoice(params: Text2pay_invoiceParams, data: Text2pay_invoiceRequestBody): Promise<Text2pay_invoiceResponse> {
    return this.client.post<Text2pay_invoiceResponse>('/invoices/text2pay', data);
  }

  /**
   * Generate Invoice Number
   * Get the next invoice number for the given location
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async generate_invoice_number(params: Generate_invoice_numberParams): Promise<Generate_invoice_numberResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Generate_invoice_numberResponse>('/invoices/generate-invoice-number', { params: queryParams });
  }

  /**
   * Get invoice
   * API to get invoice by invoice id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_invoice(params: Get_invoiceParams): Promise<Get_invoiceResponse> {
    const url = `/invoices/${params.invoiceId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Get_invoiceResponse>(url, { params: queryParams });
  }

  /**
   * Update invoice
   * API to update invoice by invoice id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_invoice(params: Update_invoiceParams, data: Update_invoiceRequestBody): Promise<Update_invoiceResponse> {
    const url = `/invoices/${params.invoiceId}`;
    return this.client.put<Update_invoiceResponse>(url, data);
  }

  /**
   * Delete invoice
   * API to delete invoice by invoice id
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_invoice(params: Delete_invoiceParams): Promise<Delete_invoiceResponse> {
    const url = `/invoices/${params.invoiceId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.delete<Delete_invoiceResponse>(url, { params: queryParams });
  }

  /**
   * Void invoice
   * API to delete invoice by invoice id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async void_invoice(params: Void_invoiceParams, data: Void_invoiceRequestBody): Promise<Void_invoiceResponse> {
    const url = `/invoices/${params.invoiceId}/void`;
    return this.client.post<Void_invoiceResponse>(url, data);
  }

  /**
   * Send invoice
   * API to send invoice by invoice id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async send_invoice(params: Send_invoiceParams, data: Send_invoiceRequestBody): Promise<Send_invoiceResponse> {
    const url = `/invoices/${params.invoiceId}/send`;
    return this.client.post<Send_invoiceResponse>(url, data);
  }

  /**
   * Record a manual payment for an invoice
   * API to record manual payment for an invoice by invoice id
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async record_invoice(params: Record_invoiceParams, data: Record_invoiceRequestBody): Promise<Record_invoiceResponse> {
    const url = `/invoices/${params.invoiceId}/record-payment`;
    return this.client.post<Record_invoiceResponse>(url, data);
  }

  /**
   * Create Invoice
   * API to create an invoice
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_invoice(params: Create_invoiceParams, data: Create_invoiceRequestBody): Promise<Create_invoiceResponse> {
    return this.client.post<Create_invoiceResponse>('/invoices/', data);
  }

  /**
   * List invoices
   * API to get list of invoices
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_invoices(params: List_invoicesParams): Promise<List_invoicesResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.status !== undefined) queryParams.status = params.status;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    if (params.search !== undefined) queryParams.search = params.search;
    if (params.paymentMode !== undefined) queryParams.paymentMode = params.paymentMode;
    if (params.contactId !== undefined) queryParams.contactId = params.contactId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_invoicesResponse>('/invoices/', { params: queryParams });
  }
}
