import { APIClient } from '../../utils/api-client';
// Import types
import {
Create_integration providerParams,
Create_integration providerRequestBody,
Create_integration providerResponse,
List_integration_providersParams,
List_integration_providersResponse,
List_ordersParams,
List_ordersResponse,
Get_order_by_idParams,
Get_order_by_idResponse,
Create_order_fulfillmentParams,
Create_order_fulfillmentRequestBody,
Create_order_fulfillmentResponse,
List_order_fulfillmentParams,
List_order_fulfillmentResponse,
List_transactionsParams,
List_transactionsResponse,
Get_transaction_by_idParams,
Get_transaction_by_idResponse,
List_subscriptionsParams,
List_subscriptionsResponse,
Get_subscription_by_idParams,
Get_subscription_by_idResponse,
Create_integrationParams,
Create_integrationRequestBody,
Create_integrationResponse,
Fetch_configParams,
Fetch_configResponse,
Create_configParams,
Create_configRequestBody,
Create_configResponse,
Disconnect_configParams,
Disconnect_configRequestBody,
Disconnect_configResponse
} from '../../types/generated/payments';

export class PaymentsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Create White-label Integration Provider
   * The "Create White-label Integration Provider" API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_integration provider(params: Create_integration providerParams, data: Create_integration providerRequestBody): Promise<Create_integration providerResponse> {
    return this.client.post<Create_integration providerResponse>('/payments/integrations/provider/whitelabel', data);
  }

  /**
   * List White-label Integration Providers
   * The "List White-label Integration Providers" API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_integration_providers(params: List_integration_providersParams): Promise<List_integration_providersResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_integration_providersResponse>('/payments/integrations/provider/whitelabel', { params: queryParams });
  }

  /**
   * List Orders
   * The "List Orders" API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_orders(params: List_ordersParams): Promise<List_ordersResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.status !== undefined) queryParams.status = params.status;
    if (params.paymentMode !== undefined) queryParams.paymentMode = params.paymentMode;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    if (params.search !== undefined) queryParams.search = params.search;
    if (params.contactId !== undefined) queryParams.contactId = params.contactId;
    if (params.funnelProductIds !== undefined) queryParams.funnelProductIds = params.funnelProductIds;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_ordersResponse>('/payments/orders', { params: queryParams });
  }

  /**
   * Get Order by ID
   * The "Get Order by ID" API allows to retrieve information for a specific order using its unique identifier. Use this endpoint to fetch details for a single order based on the provided order ID.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_order_by_id(params: Get_order_by_idParams): Promise<Get_order_by_idResponse> {
    const url = `/payments/orders/${params.orderId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Get_order_by_idResponse>(url, { params: queryParams });
  }

  /**
   * Create order fulfillment
   * The "Order Fulfillment" API facilitates the process of fulfilling an order.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_order_fulfillment(params: Create_order_fulfillmentParams, data: Create_order_fulfillmentRequestBody): Promise<Create_order_fulfillmentResponse> {
    const url = `/payments/orders/${params.orderId}/fulfillments`;
    return this.client.post<Create_order_fulfillmentResponse>(url, data);
  }

  /**
   * List fulfillment
   * List all fulfillment history of an order
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_order_fulfillment(params: List_order_fulfillmentParams): Promise<List_order_fulfillmentResponse> {
    const url = `/payments/orders/${params.orderId}/fulfillments`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<List_order_fulfillmentResponse>(url, { params: queryParams });
  }

  /**
   * List Transactions
   * The "List Transactions" API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_transactions(params: List_transactionsParams): Promise<List_transactionsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.paymentMode !== undefined) queryParams.paymentMode = params.paymentMode;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    if (params.entitySourceType !== undefined) queryParams.entitySourceType = params.entitySourceType;
    if (params.entitySourceSubType !== undefined) queryParams.entitySourceSubType = params.entitySourceSubType;
    if (params.search !== undefined) queryParams.search = params.search;
    if (params.subscriptionId !== undefined) queryParams.subscriptionId = params.subscriptionId;
    if (params.entityId !== undefined) queryParams.entityId = params.entityId;
    if (params.contactId !== undefined) queryParams.contactId = params.contactId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_transactionsResponse>('/payments/transactions', { params: queryParams });
  }

  /**
   * Get Transaction by ID
   * The "Get Transaction by ID" API allows to retrieve information for a specific transaction using its unique identifier. Use this endpoint to fetch details for a single transaction based on the provided transaction ID.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_transaction_by_id(params: Get_transaction_by_idParams): Promise<Get_transaction_by_idResponse> {
    const url = `/payments/transactions/${params.transactionId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Get_transaction_by_idResponse>(url, { params: queryParams });
  }

  /**
   * List Subscriptions
   * The "List Subscriptions" API allows to retrieve a paginated list of subscriptions. Customize your results by filtering subscriptions based on name, alt type, subscription status, payment mode, date range, type of source, contact, subscription id, entity id, contact or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve subscription information.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_subscriptions(params: List_subscriptionsParams): Promise<List_subscriptionsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    if (params.entityId !== undefined) queryParams.entityId = params.entityId;
    if (params.paymentMode !== undefined) queryParams.paymentMode = params.paymentMode;
    if (params.startAt !== undefined) queryParams.startAt = params.startAt;
    if (params.endAt !== undefined) queryParams.endAt = params.endAt;
    if (params.entitySourceType !== undefined) queryParams.entitySourceType = params.entitySourceType;
    if (params.search !== undefined) queryParams.search = params.search;
    if (params.contactId !== undefined) queryParams.contactId = params.contactId;
    if (params.id !== undefined) queryParams.id = params.id;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<List_subscriptionsResponse>('/payments/subscriptions', { params: queryParams });
  }

  /**
   * Get Subscription by ID
   * The "Get Subscription by ID" API allows to retrieve information for a specific subscription using its unique identifier. Use this endpoint to fetch details for a single subscription based on the provided subscription ID.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_subscription_by_id(params: Get_subscription_by_idParams): Promise<Get_subscription_by_idResponse> {
    const url = `/payments/subscriptions/${params.subscriptionId}`;
    const queryParams: Record<string, any> = {};
    if (params.altId !== undefined) queryParams.altId = params.altId;
    if (params.altType !== undefined) queryParams.altType = params.altType;
    return this.client.get<Get_subscription_by_idResponse>(url, { params: queryParams });
  }

  /**
   * Create new integration
   * API to create a new association for an app and location
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_integration(params: Create_integrationParams, data: Create_integrationRequestBody): Promise<Create_integrationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.post<Create_integrationResponse>('/payments/custom-provider/provider', data, { params: queryParams });
  }

  /**
   * Deleting an existing integration
   * API to delete an association for an app and location
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async create_integration(params: Create_integrationParams): Promise<Create_integrationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.delete<Create_integrationResponse>('/payments/custom-provider/provider', { params: queryParams });
  }

  /**
   * Fetch given provider config
   * API for fetching an existing payment config for given location
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async fetch_config(params: Fetch_configParams): Promise<Fetch_configResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Fetch_configResponse>('/payments/custom-provider/connect', { params: queryParams });
  }

  /**
   * Create new provider config
   * API to create a new payment config for given location
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_config(params: Create_configParams, data: Create_configRequestBody): Promise<Create_configResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.post<Create_configResponse>('/payments/custom-provider/connect', data, { params: queryParams });
  }

  /**
   * Disconnect existing provider config
   * API to disconnect an existing payment config for given location
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async disconnect_config(params: Disconnect_configParams, data: Disconnect_configRequestBody): Promise<Disconnect_configResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.post<Disconnect_configResponse>('/payments/custom-provider/disconnect', data, { params: queryParams });
  }
}
