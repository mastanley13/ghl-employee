// Generated TypeScript interfaces for invoices

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface AddressDto {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  countryCode?: string;
  postalCode?: string;
}

export interface BusinessDetailsDto {
  logoUrl?: string;
  name?: string;
  phoneNo?: string;
  address?: any;
  website?: string;
  customValues?: string[];
}

export interface ItemTaxDto {
  _id: string;
  name: string;
  rate: number;
  calculation: 'exclusive';
  description?: string;
  taxId?: string;
}

export interface InvoiceItemDto {
  name: string;
  description?: string;
  productId?: string;
  priceId?: string;
  currency: string;
  amount: number;
  qty: number;
  taxes?: ItemTaxDto[];
}

export interface DiscountDto {
  value?: number;
  type: 'percentage' | 'fixed';
}

export interface CreateInvoiceTemplateDto {
  altId: string;
  altType: 'location';
  internal?: boolean;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount?: DiscountDto;
  termsNotes?: string;
  title?: string;
}

export interface CreateInvoiceTemplateResponseDto {
  _id: string;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  currency: string;
  discount?: any;
  items: string[];
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface GetTemplateResponseDto {
  _id: string;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  currency: string;
  discount?: any;
  items: string[];
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface ListTemplatesResponseDto {
  data: GetTemplateResponseDto[];
  totalCount: number;
}

export interface UpdateInvoiceTemplateDto {
  altId: string;
  altType: 'location';
  internal?: boolean;
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount?: DiscountDto;
  termsNotes?: string;
  title?: string;
}

export interface UpdateInvoiceTemplateResponseDto {
  _id: string;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  currency: string;
  discount?: any;
  items: string[];
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteInvoiceTemplateResponseDto {
  success: boolean;
}

export interface AdditionalEmailsDto {
  email: string;
}

export interface ContactDetailsDto {
  id: string;
  name: string;
  phoneNo?: string;
  email?: string;
  additionalEmails?: AdditionalEmailsDto[];
  companyName?: string;
  address?: AddressDto;
  customFields?: string[];
}

export interface CustomRRuleOptionsDto {
  intervalType: 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'minutely' | 'secondly';
  interval: number;
  startDate: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  dayOfMonth?: number;
  dayOfWeek?: 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su';
  numOfWeek?: number;
  monthOfYear?: 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec';
  count?: number;
  daysBefore?: number;
}

export interface ScheduleOptionsDto {
  executeAt?: string;
  rrule?: CustomRRuleOptionsDto;
}

export interface CreateInvoiceScheduleDto {
  altId: string;
  altType: 'location';
  name: string;
  contactDetails: ContactDetailsDto;
  schedule: ScheduleOptionsDto;
  liveMode: boolean;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
}

export interface DefaultInvoiceResponseDto {
  _id: string;
  status: 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInvoiceScheduleResponseDto {
  _id: string;
  status: Record<string, any>;
  liveMode: boolean;
  altId: string;
  altType: 'location';
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetScheduleResponseDto {
  _id: string;
  status: Record<string, any>;
  liveMode: boolean;
  altId: string;
  altType: 'location';
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListSchedulesResponseDto {
  schedules: GetScheduleResponseDto[];
  total: number;
}

export interface UpdateInvoiceScheduleDto {
  altId: string;
  altType: 'location';
  name: string;
  contactDetails: ContactDetailsDto;
  schedule: ScheduleOptionsDto;
  liveMode: boolean;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
}

export interface UpdateInvoiceScheduleResponseDto {
  _id: string;
  status: Record<string, any>;
  liveMode: boolean;
  altId: string;
  altType: 'location';
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteInvoiceScheduleResponseDto {
  success: boolean;
}

export interface CardDto {
  brand: string;
  last4: string;
}

export interface USBankAccountDto {
  bank_name: string;
  last4: string;
}

export interface AutoPaymentDetailsDto {
  enable: boolean;
  type?: string;
  paymentMethodId?: string;
  customerId?: string;
  card?: CardDto;
  usBankAccount?: USBankAccountDto;
}

export interface ScheduleInvoiceScheduleDto {
  altId: string;
  altType: 'location';
  liveMode: boolean;
  autoPayment?: any;
}

export interface ScheduleInvoiceScheduleResponseDto {
  _id: string;
  status: Record<string, any>;
  liveMode: boolean;
  altId: string;
  altType: 'location';
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface AutoPaymentScheduleDto {
  altId: string;
  altType: 'location';
  id: string;
  autoPayment: any;
}

export interface AutoPaymentInvoiceScheduleResponseDto {
  _id: string;
  status: Record<string, any>;
  liveMode: boolean;
  altId: string;
  altType: 'location';
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface CancelInvoiceScheduleDto {
  altId: string;
  altType: 'location';
}

export interface CancelInvoiceScheduleResponseDto {
  _id: string;
  status: Record<string, any>;
  liveMode: boolean;
  altId: string;
  altType: 'location';
  name: string;
  schedule?: ScheduleOptionsDto;
  invoices: DefaultInvoiceResponseDto[];
  businessDetails: any;
  currency: string;
  contactDetails: any;
  discount?: any;
  items: string[];
  total: number;
  title: string;
  termsNotes: string;
  compiledTermsNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface SentToDto {
  email: string[];
  emailCc?: string[];
  emailBcc?: string[];
  phoneNo?: string[];
}

export interface Text2PayDto {
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  termsNotes?: string;
  title?: string;
  contactDetails: any;
  invoiceNumber?: string;
  issueDate: string;
  dueDate?: string;
  sentTo: SentToDto;
  liveMode: boolean;
  id?: string;
  includeTermsNote?: boolean;
  action: 'draft' | 'send';
  userId: string;
  discount?: DiscountDto;
}

export interface Text2PayInvoiceResponseDto {
  invoice: DefaultInvoiceResponseDto;
  invoiceUrl: string;
}

export interface GenerateInvoiceNumberResponseDto {
  invoiceNumber?: number;
}

export interface CreateInvoiceDto {
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: BusinessDetailsDto;
  currency: string;
  items: InvoiceItemDto[];
  discount: DiscountDto;
  termsNotes?: string;
  title?: string;
  contactDetails: any;
  invoiceNumber?: string;
  issueDate: string;
  dueDate?: string;
  sentTo: SentToDto;
  liveMode: boolean;
}

export interface OldCreateInvoiceDTO {

}

export interface CreateInvoiceResponseDto {
  _id: string;
  status: 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
}

export interface TotalSummaryDto {
  subTotal: number;
  discount: number;
}

export interface GetInvoiceResponseDto {
  _id: string;
  status: 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  totalSummary: TotalSummaryDto;
}

export interface ListInvoicesResponseDto {
  invoices: GetInvoiceResponseDto[];
  total: number;
}

export interface UpdateInvoiceDto {
  altId: string;
  altType: 'location';
  name: string;
  title?: string;
  currency: string;
  description?: string;
  businessDetails?: any;
  invoiceNumber?: string;
  contactId?: string;
  contactDetails?: ContactDetailsDto;
  termsNotes?: string;
  discount?: DiscountDto;
  invoiceItems: InvoiceItemDto[];
  liveMode?: boolean;
  issueDate: string;
  dueDate: string;
}

export interface UpdateInvoiceResponseDto {
  _id: string;
  status: 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteInvoiceResponseDto {
  _id: string;
  status: 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
}

export interface VoidInvoiceDto {
  altId: string;
  altType: 'location';
}

export interface VoidInvoiceResponseDto {
  _id: string;
  status: 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: 'location';
  name: string;
  businessDetails: any;
  invoiceNumber: number;
  currency: string;
  contactDetails: any;
  issueDate: string;
  dueDate: string;
  discount?: any;
  invoiceItems: string[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
}

export interface InvoiceSettingsSenderConfigurationDto {
  fromName?: string;
  fromEmail?: string;
}

export interface SendInvoiceDto {
  altId: string;
  altType: 'location';
  userId: string;
  action: 'sms_and_email' | 'send_manually' | 'email' | 'sms';
  liveMode: boolean;
  sentFrom?: any;
}

export interface SendInvoicesResponseDto {
  invoice: DefaultInvoiceResponseDto;
  smsData: Record<string, any>;
  emailData: Record<string, any>;
}

export interface ChequeDto {
  number: string;
}

export interface RecordPaymentDto {
  altId: string;
  altType: 'location';
  mode: 'cash' | 'card' | 'cheque' | 'bank_transfer' | 'other';
  card: CardDto;
  cheque: ChequeDto;
  notes: string;
  amount?: number;
}

export interface RecordPaymentResponseDto {
  success: boolean;
  invoice: DefaultInvoiceResponseDto;
}

export interface Create_invoice_templateParams {
  Authorization: string;
  Version: string;
}

export type Create_invoice_templateRequestBody = CreateInvoiceTemplateDto;

export type Create_invoice_templateResponse = CreateInvoiceTemplateResponseDto;

export interface List_invoice_templatesParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
  status?: string;
  startAt?: string;
  endAt?: string;
  search?: string;
  paymentMode?: string;
  limit: string;
  offset: string;
}

export type List_invoice_templatesResponse = ListTemplatesResponseDto;

export interface Get_invoice_templateParams {
  Authorization: string;
  Version: string;
  templateId: string;
  altId: string;
  altType: string;
}

export type Get_invoice_templateResponse = GetTemplateResponseDto;

export interface Update_invoice_templateParams {
  Authorization: string;
  Version: string;
  templateId: string;
}

export type Update_invoice_templateRequestBody = UpdateInvoiceTemplateDto;

export type Update_invoice_templateResponse = UpdateInvoiceTemplateResponseDto;

export interface Delete_invoice_templateParams {
  Authorization: string;
  Version: string;
  templateId: string;
  altId: string;
  altType: string;
}

export type Delete_invoice_templateResponse = DeleteInvoiceTemplateResponseDto;

export interface Create_invoice_scheduleParams {
  Authorization: string;
  Version: string;
}

export type Create_invoice_scheduleRequestBody = CreateInvoiceScheduleDto;

export type Create_invoice_scheduleResponse = CreateInvoiceScheduleResponseDto;

export interface List_invoice_schedulesParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
  status?: string;
  startAt?: string;
  endAt?: string;
  search?: string;
  paymentMode?: string;
  limit: string;
  offset: string;
}

export type List_invoice_schedulesResponse = ListSchedulesResponseDto;

export interface Get_invoice_scheduleParams {
  Authorization: string;
  Version: string;
  scheduleId: string;
  altId: string;
  altType: string;
}

export type Get_invoice_scheduleResponse = GetScheduleResponseDto;

export interface Update_invoice_scheduleParams {
  Authorization: string;
  Version: string;
  scheduleId: string;
}

export type Update_invoice_scheduleRequestBody = UpdateInvoiceScheduleDto;

export type Update_invoice_scheduleResponse = UpdateInvoiceScheduleResponseDto;

export interface Delete_invoice_scheduleParams {
  Authorization: string;
  Version: string;
  scheduleId: string;
  altId: string;
  altType: string;
}

export type Delete_invoice_scheduleResponse = DeleteInvoiceScheduleResponseDto;

export interface Schedule_invoice_scheduleParams {
  Authorization: string;
  Version: string;
  scheduleId: string;
}

export type Schedule_invoice_scheduleRequestBody = ScheduleInvoiceScheduleDto;

export type Schedule_invoice_scheduleResponse = ScheduleInvoiceScheduleResponseDto;

export interface Auto_payment_invoice_scheduleParams {
  Authorization: string;
  Version: string;
  scheduleId: string;
}

export type Auto_payment_invoice_scheduleRequestBody = AutoPaymentScheduleDto;

export type Auto_payment_invoice_scheduleResponse = AutoPaymentInvoiceScheduleResponseDto;

export interface Cancel_invoice_scheduleParams {
  Authorization: string;
  Version: string;
  scheduleId: string;
}

export type Cancel_invoice_scheduleRequestBody = CancelInvoiceScheduleDto;

export type Cancel_invoice_scheduleResponse = CancelInvoiceScheduleResponseDto;

export interface Text2pay_invoiceParams {
  Authorization: string;
  Version: string;
}

export type Text2pay_invoiceRequestBody = Text2PayDto;

export type Text2pay_invoiceResponse = Text2PayInvoiceResponseDto;

export interface Generate_invoice_numberParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
}

export type Generate_invoice_numberResponse = GenerateInvoiceNumberResponseDto;

export interface Get_invoiceParams {
  Authorization: string;
  Version: string;
  invoiceId: string;
  altId: string;
  altType: string;
}

export type Get_invoiceResponse = GetInvoiceResponseDto;

export interface Update_invoiceParams {
  Authorization: string;
  Version: string;
  invoiceId: string;
}

export type Update_invoiceRequestBody = UpdateInvoiceDto;

export type Update_invoiceResponse = UpdateInvoiceResponseDto;

export interface Delete_invoiceParams {
  Authorization: string;
  Version: string;
  invoiceId: string;
  altId: string;
  altType: string;
}

export type Delete_invoiceResponse = DeleteInvoiceResponseDto;

export interface Void_invoiceParams {
  Authorization: string;
  Version: string;
  invoiceId: string;
}

export type Void_invoiceRequestBody = VoidInvoiceDto;

export type Void_invoiceResponse = VoidInvoiceResponseDto;

export interface Send_invoiceParams {
  Authorization: string;
  Version: string;
  invoiceId: string;
}

export type Send_invoiceRequestBody = SendInvoiceDto;

export type Send_invoiceResponse = SendInvoicesResponseDto;

export interface Record_invoiceParams {
  Authorization: string;
  Version: string;
  invoiceId: string;
}

export type Record_invoiceRequestBody = RecordPaymentDto;

export type Record_invoiceResponse = RecordPaymentResponseDto;

export interface Create_invoiceParams {
  Authorization: string;
  Version: string;
}

export type Create_invoiceRequestBody = CreateInvoiceDto;

export type Create_invoiceResponse = CreateInvoiceResponseDto;

export interface List_invoicesParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
  status?: string;
  startAt?: string;
  endAt?: string;
  search?: string;
  paymentMode?: string;
  contactId?: string;
  limit: string;
  offset: string;
}

export type List_invoicesResponse = ListInvoicesResponseDto;

