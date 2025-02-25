// Generated TypeScript interfaces for payments

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface CreateWhiteLabelIntegrationProviderDto {
  altId: string;
  altType: 'location';
  uniqueName: string;
  title: string;
  provider: 'authorize-net' | 'nmi';
  description: string;
  imageUrl: string;
}

export interface CreateWhitelabelIntegrationResponseDto {
  _id: string;
  altId: string;
  altType: string;
  title: string;
  route: string;
  provider: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface IntegrationProviderSchema {
  _id: string;
  altId: string;
  altType: string;
  title: string;
  route: string;
  provider: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListWhitelabelIntegrationProviderResponseDto {
  providers: any;
}

export interface OrderResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  contactName?: string;
  contactEmail?: string;
  currency?: string;
  amount?: number;
  subtotal?: number;
  discount?: number;
  status: string;
  liveMode?: boolean;
  totalProducts?: number;
  sourceType: string;
  sourceName?: string;
  sourceId?: string;
  sourceMeta?: Record<string, any>;
  couponCode?: string;
  createdAt: string;
  updatedAt: string;
  sourceSubType?: string;
  fulfillmentStatus?: string;
  onetimeProducts?: number;
  recurringProducts?: number;
}

export interface ListOrdersResponseDto {
  data: OrderResponseSchema[];
  totalCount: number;
}

export interface AmountSummary {
  subtotal: number;
  discount?: number;
}

export interface OrderSource {
  type: 'funnel' | 'website' | 'invoice' | 'calendar' | 'text2Pay' | 'document_contracts' | 'membership' | 'mobile_app' | 'communities' | 'point_of_sale' | 'manual' | 'form' | 'survey' | 'payment_link' | 'external';
  subType?: 'one_step_order_form' | 'two_step_order_form' | 'upsell' | 'tap_to_pay' | 'card_payment' | 'store' | 'contact_view' | 'email_campaign' | 'payments_dashboard' | 'shopify';
  id: string;
  name?: string;
  meta?: Record<string, any>;
}

export interface GetOrderResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  currency?: string;
  amount?: number;
  status: string;
  liveMode?: boolean;
  createdAt: string;
  updatedAt: string;
  fulfillmentStatus?: string;
  contactSnapshot?: Record<string, any>;
  amountSummary?: any;
  source?: any;
  items?: string[];
  coupon?: Record<string, any>;
  trackingId?: string;
  fingerprint?: string;
  meta?: Record<string, any>;
  markAsTest?: boolean;
  traceId?: string;
}

export interface FulfillmentTracking {
  trackingNumber?: string;
  shippingCarrier?: string;
  trackingUrl?: string;
}

export interface FulfillmentItems {
  priceId: string;
  qty: number;
}

export interface CreateFulfillmentDto {
  altId: string;
  altType: 'location';
  trackings: FulfillmentTracking[];
  items: FulfillmentItems[];
  notifyCustomer: boolean;
}

export interface ProductVariantOptionDto {
  id: string;
  name: string;
}

export interface ProductVariantDto {
  id: string;
  name: string;
  options: ProductVariantOptionDto[];
}

export interface ProductMediaDto {
  id: string;
  title?: string;
  url: string;
  type: 'image' | 'video';
  isFeatured?: boolean;
  priceIds?: Array[];
}

export interface ProductLabelDto {
  title: string;
  startDate?: string;
  endDate?: string;
}

export interface ProductSEODto {
  title?: string;
  description?: string;
}

export interface DefaultProductResponseDto {
  _id: string;
  description?: string;
  variants?: ProductVariantDto[];
  medias?: ProductMediaDto[];
  locationId: string;
  name: string;
  productType: string;
  availableInStore?: boolean;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  statementDescriptor?: string;
  image?: string;
  collectionIds?: string[];
  isTaxesEnabled?: boolean;
  taxes?: string[];
  isLabelEnabled?: boolean;
  label?: any;
  slug?: string;
  seo?: any;
}

export interface MembershipOfferDto {
  label: string;
  value: string;
  _id: string;
}

export interface RecurringDto {
  interval: 'day' | 'month' | 'week' | 'year';
  intervalCount: number;
}

export interface DefaultPriceResponseDto {
  _id: string;
  membershipOffers?: MembershipOfferDto[];
  variantOptionIds?: string[];
  locationId?: string;
  product?: string;
  userId?: string;
  name: string;
  type: 'one_time' | 'recurring';
  currency: string;
  amount: number;
  recurring?: any;
  createdAt?: string;
  updatedAt?: string;
  compareAtPrice?: number;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface FulfilledItem {
  _id: string;
  name: string;
  product: any;
  price: any;
  qty: number;
}

export interface FulfillmentSchema {
  altId: string;
  altType: 'location';
  trackings: FulfillmentTracking[];
  _id: string;
  items: FulfilledItem[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateFulfillmentResponseDto {
  status: boolean;
  data: any;
}

export interface ListFulfillmentResponseDto {
  status: boolean;
  data: FulfillmentSchema[];
}

export interface TxnResponseSchema {
  _id: string;
  altId: string;
  altType: string;
  contactId?: string;
  contactName?: string;
  contactEmail?: string;
  currency?: string;
  amount?: number;
  status: Record<string, any>;
  liveMode?: boolean;
  entityType?: string;
  entityId?: string;
  entitySourceType: string;
  entitySourceSubType?: string;
  entitySourceName?: string;
  entitySourceId?: string;
  entitySourceMeta?: Record<string, any>;
  subscriptionId?: string;
  chargeId?: string;
  chargeSnapshot?: Record<string, any>;
  paymentProviderType?: string;
  paymentProviderConnectedAccount?: string;
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
  amountRefunded?: number;
  paymentMethod?: Record<string, any>;
}

export interface ListTxnsResponseDto {
  data: TxnResponseSchema[];
  totalCount: number;
}

export interface GetTxnResponseSchema {
  _id: string;
  altType: string;
  altId: string;
  contactId?: string;
  contactSnapshot?: Record<string, any>;
  currency?: string;
  amount?: number;
  status?: Record<string, any>;
  liveMode?: boolean;
  createdAt: string;
  updatedAt: string;
  entityType?: string;
  entityId?: string;
  entitySource?: any;
  chargeId?: string;
  chargeSnapshot?: Record<string, any>;
  invoiceId?: string;
  subscriptionId?: string;
  paymentProvider?: Record<string, any>;
  ipAddress?: string;
  meta?: Record<string, any>;
  markAsTest?: boolean;
  isParent?: boolean;
  amountRefunded?: number;
  receiptId?: string;
  qboSynced?: boolean;
  qboResponse?: Record<string, any>;
  traceId?: string;
}

export interface SubscriptionResponseSchema {
  _id: string;
  altId: string;
  altType: 'location';
  contactId?: string;
  contactName?: string;
  contactEmail?: string;
  currency?: string;
  amount?: number;
  status: Record<string, any>;
  liveMode?: boolean;
  entityType?: string;
  entityId?: string;
  entitySourceType: string;
  entitySourceName?: string;
  entitySourceId?: string;
  entitySourceMeta?: Record<string, any>;
  subscriptionId?: string;
  subscriptionSnapshot?: Record<string, any>;
  paymentProviderType?: string;
  paymentProviderConnectedAccount?: string;
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListSubscriptionResponseDto {
  data: SubscriptionResponseSchema[];
  totalCount: number;
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

export interface GetSubscriptionResponseSchema {
  _id: string;
  altType: Record<string, any>;
  altId: string;
  contactId?: string;
  contactSnapshot?: Record<string, any>;
  coupon?: Record<string, any>;
  currency?: string;
  amount?: number;
  status?: Record<string, any>;
  liveMode?: boolean;
  entityType?: string;
  entityId?: string;
  entitySource?: any;
  subscriptionId?: string;
  subscriptionSnapshot?: Record<string, any>;
  paymentProvider?: Record<string, any>;
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
  meta?: Record<string, any>;
  markAsTest?: boolean;
  schedule?: any;
  autoPayment?: Record<string, any>;
  recurringProduct?: Record<string, any>;
  canceledAt?: string;
  canceledBy?: string;
  traceId?: string;
}

export interface CreateCustomProvidersDto {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
}

export interface CreateCustomProvidersResponseSchema {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: Record<string, any>;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
}

export interface DeleteCustomProvidersResponseSchema {
  success: boolean;
}

export interface GetCustomProvidersResponseSchema {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: Record<string, any>;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
}

export interface CustomProviderKeys {
  apiKey: string;
  publishableKey: string;
}

export interface ConnectCustomProvidersConfigDto {
  live: any;
  test: any;
}

export interface ConnectCustomProvidersResponseSchema {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: Record<string, any>;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
}

export interface DeleteCustomProvidersConfigDto {
  liveMode: boolean;
}

export interface DisconnectCustomProvidersResponseSchema {
  success: boolean;
}

export interface Create_integration providerParams {
  Authorization: string;
  Version: string;
}

export type Create_integration providerRequestBody = CreateWhiteLabelIntegrationProviderDto;

export type Create_integration providerResponse = CreateWhitelabelIntegrationResponseDto;

export interface List_integration_providersParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
  limit?: number;
  offset?: number;
}

export type List_integration_providersResponse = ListWhitelabelIntegrationProviderResponseDto;

export interface List_ordersParams {
  Authorization: string;
  Version: string;
  locationId?: string;
  altId: string;
  altType: string;
  status?: string;
  paymentMode?: string;
  startAt?: string;
  endAt?: string;
  search?: string;
  contactId?: string;
  funnelProductIds?: string;
  limit?: number;
  offset?: number;
}

export type List_ordersResponse = ListOrdersResponseDto;

export interface Get_order_by_idParams {
  Authorization: string;
  Version: string;
  orderId: string;
  locationId?: string;
  altId: string;
  altType: string;
}

export type Get_order_by_idResponse = GetOrderResponseSchema;

export interface Create_order_fulfillmentParams {
  Authorization: string;
  Version: string;
  orderId: string;
}

export type Create_order_fulfillmentRequestBody = CreateFulfillmentDto;

export type Create_order_fulfillmentResponse = CreateFulfillmentResponseDto;

export interface List_order_fulfillmentParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
  orderId: string;
}

export type List_order_fulfillmentResponse = ListFulfillmentResponseDto;

export interface List_transactionsParams {
  Authorization: string;
  Version: string;
  locationId?: string;
  altId: string;
  altType: string;
  paymentMode?: string;
  startAt?: string;
  endAt?: string;
  entitySourceType?: string;
  entitySourceSubType?: string;
  search?: string;
  subscriptionId?: string;
  entityId?: string;
  contactId?: string;
  limit?: number;
  offset?: number;
}

export type List_transactionsResponse = ListTxnsResponseDto;

export interface Get_transaction_by_idParams {
  Authorization: string;
  Version: string;
  transactionId: string;
  locationId?: string;
  altId: string;
  altType: string;
}

export type Get_transaction_by_idResponse = GetTxnResponseSchema;

export interface List_subscriptionsParams {
  Authorization: string;
  Version: string;
  altId: string;
  altType: string;
  entityId?: string;
  paymentMode?: string;
  startAt?: string;
  endAt?: string;
  entitySourceType?: string;
  search?: string;
  contactId?: string;
  id?: string;
  limit?: number;
  offset?: number;
}

export type List_subscriptionsResponse = ListSubscriptionResponseDto;

export interface Get_subscription_by_idParams {
  Authorization: string;
  Version: string;
  subscriptionId: string;
  altId: string;
  altType: string;
}

export type Get_subscription_by_idResponse = GetSubscriptionResponseSchema;

export interface Create_integrationParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_integrationRequestBody = CreateCustomProvidersDto;

export type Create_integrationResponse = CreateCustomProvidersResponseSchema;

export interface Create_integrationParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_integrationResponse = DeleteCustomProvidersResponseSchema;

export interface Fetch_configParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Fetch_configResponse = GetCustomProvidersResponseSchema;

export interface Create_configParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_configRequestBody = ConnectCustomProvidersConfigDto;

export type Create_configResponse = ConnectCustomProvidersResponseSchema;

export interface Disconnect_configParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Disconnect_configRequestBody = DeleteCustomProvidersConfigDto;

export type Disconnect_configResponse = DisconnectCustomProvidersResponseSchema;

