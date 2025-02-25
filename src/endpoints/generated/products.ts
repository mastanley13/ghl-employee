import { APIClient } from '../../utils/api-client';
// Import types
import {
Create_price_for_productParams,
Create_price_for_productRequestBody,
Create_price_for_productResponse,
List_prices_for_productParams,
List_prices_for_productResponse,
Get_price_by_id_for_productParams,
Get_price_by_id_for_productResponse,
Update_price_by_id_for_productParams,
Update_price_by_id_for_productRequestBody,
Update_price_by_id_for_productResponse,
Delete_price_by_id_for_productParams,
Delete_price_by_id_for_productResponse,
Get_product_by_idParams,
Get_product_by_idResponse,
Delete_product_by_idParams,
Delete_product_by_idResponse,
Update_product_by_idParams,
Update_product_by_idRequestBody,
Update_product_by_idResponse,
Create_productParams,
Create_productRequestBody,
Create_productResponse,
List_invoicesParams,
List_invoicesResponse
} from '../../types/generated/products';

export class ProductsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Create Price for a Product
   * The "Create Price for a Product" API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_price_for_product(params: Create_price_for_productParams, data: Create_price_for_productRequestBody): Promise<Create_price_for_productResponse> {
    const url = `/products/${params.productId}/price`;
    return this.client.post<Create_price_for_productResponse>(url, data);
  }

  /**
   * List Prices for a Product
   * The "List Prices for a Product" API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_prices_for_product(params: List_prices_for_productParams): Promise<List_prices_for_productResponse> {
    const url = `/products/${params.productId}/price`;
    const queryParams: Record<string, any> = {};
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.ids !== undefined) queryParams.ids = params.ids;
    return this.client.get<List_prices_for_productResponse>(url, { params: queryParams });
  }

  /**
   * Get Price by ID for a Product
   * The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_price_by_id_for_product(params: Get_price_by_id_for_productParams): Promise<Get_price_by_id_for_productResponse> {
    const url = `/products/${params.productId}/price/${params.priceId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_price_by_id_for_productResponse>(url, { params: queryParams });
  }

  /**
   * Update Price by ID for a Product
   * The "Update Price by ID for a Product" API allows modifying information for a specific price associated with a particular product using its unique identifier. Use this endpoint to update details for a single price based on the provided price ID and product ID.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_price_by_id_for_product(params: Update_price_by_id_for_productParams, data: Update_price_by_id_for_productRequestBody): Promise<Update_price_by_id_for_productResponse> {
    const url = `/products/${params.productId}/price/${params.priceId}`;
    return this.client.put<Update_price_by_id_for_productResponse>(url, data);
  }

  /**
   * Delete Price by ID for a Product
   * The "Delete Price by ID for a Product" API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_price_by_id_for_product(params: Delete_price_by_id_for_productParams): Promise<Delete_price_by_id_for_productResponse> {
    const url = `/products/${params.productId}/price/${params.priceId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.delete<Delete_price_by_id_for_productResponse>(url, { params: queryParams });
  }

  /**
   * Get Product by ID
   * The "Get Product by ID" API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_product_by_id(params: Get_product_by_idParams): Promise<Get_product_by_idResponse> {
    const url = `/products/${params.productId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.get<Get_product_by_idResponse>(url, { params: queryParams });
  }

  /**
   * Delete Product by ID
   * The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_product_by_id(params: Delete_product_by_idParams): Promise<Delete_product_by_idResponse> {
    const url = `/products/${params.productId}`;
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    return this.client.delete<Delete_product_by_idResponse>(url, { params: queryParams });
  }

  /**
   * Update Product by ID
   * The "Update Product by ID" API allows modifying information for a specific product using its unique identifier. Use this endpoint to update details for a single product based on the provided product ID.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_product_by_id(params: Update_product_by_idParams, data: Update_product_by_idRequestBody): Promise<Update_product_by_idResponse> {
    const url = `/products/${params.productId}`;
    return this.client.put<Update_product_by_idResponse>(url, data);
  }

  /**
   * Create Product
   * The "Create Product" API allows adding a new product to the system. Use this endpoint to create a product with the specified details. Ensure that the required information is provided in the request payload.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_product(params: Create_productParams, data: Create_productRequestBody): Promise<Create_productResponse> {
    return this.client.post<Create_productResponse>('/products/', data);
  }

  /**
   * List Products
   * The "List Products" API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async list_invoices(params: List_invoicesParams): Promise<List_invoicesResponse> {
    const queryParams: Record<string, any> = {};
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.search !== undefined) queryParams.search = params.search;
    return this.client.get<List_invoicesResponse>('/products/', { params: queryParams });
  }
}
