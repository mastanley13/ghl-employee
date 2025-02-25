// Generated TypeScript interfaces for products

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface RecurringDto {
  interval: 'day' | 'month' | 'week' | 'year';
  intervalCount: number;
}

export interface MembershipOfferDto {
  label: string;
  value: string;
  _id: string;
}

export interface PriceMetaDto {
  source: 'stripe';
  stripePriceId: string;
  internalSource: 'agency_plan' | 'funnel' | 'membership';
}

export interface CreatePriceDto {
  name: string;
  type: 'one_time' | 'recurring';
  currency: string;
  amount: number;
  recurring?: any;
  description?: string;
  membershipOffers?: MembershipOfferDto[];
  trialPeriod?: number;
  totalCycles?: number;
  setupFee?: number;
  variantOptionIds?: string[];
  compareAtPrice?: number;
  locationId: string;
  userId?: string;
  meta?: any;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface CreatePriceResponseDto {
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

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
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

export interface ListPricesResponseDto {
  prices: DefaultPriceResponseDto[];
  total: number;
}

export interface GetPriceResponseDto {
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

export interface UpdatePriceDto {
  name: string;
  type: 'one_time' | 'recurring';
  currency: string;
  amount: number;
  recurring?: any;
  description?: string;
  membershipOffers?: MembershipOfferDto[];
  trialPeriod?: number;
  totalCycles?: number;
  setupFee?: number;
  variantOptionIds?: string[];
  compareAtPrice?: number;
  locationId: string;
  userId?: string;
  meta?: any;
  trackInventory?: boolean;
  availableQuantity?: number;
  allowOutOfStockPurchases?: boolean;
}

export interface UpdatePriceResponseDto {
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

export interface DeletePriceResponseDto {
  status: boolean;
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
}

export interface GetProductResponseDto {
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
}

export interface DeleteProductResponseDto {
  status: boolean;
}

export interface CreateProductDto {
  name: string;
  locationId: string;
  description?: string;
  productType: 'DIGITAL' | 'PHYSICAL' | 'SERVICE';
  image?: string;
  statementDescriptor?: string;
  availableInStore?: boolean;
  medias?: ProductMediaDto[];
  variants?: ProductVariantDto[];
}

export interface CreateProductResponseDto {
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
}

export interface UpdateProductDto {
  name: string;
  locationId: string;
  description?: string;
  productType: 'DIGITAL' | 'PHYSICAL' | 'SERVICE';
  image?: string;
  statementDescriptor?: string;
  availableInStore?: boolean;
  medias?: ProductMediaDto[];
  variants?: ProductVariantDto[];
}

export interface UpdateProductResponseDto {
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
}

export interface ListProductsStats {
  total: number;
}

export interface ListProductsResponseDto {
  products: DefaultProductResponseDto[];
  total: ListProductsStats[];
}

export interface Create_price_for_productParams {
  Authorization: string;
  Version: string;
  productId: string;
}

export type Create_price_for_productRequestBody = CreatePriceDto;

export type Create_price_for_productResponse = CreatePriceResponseDto;

export interface List_prices_for_productParams {
  Authorization: string;
  Version: string;
  productId: string;
  limit?: number;
  offset?: number;
  locationId: string;
  ids?: string;
}

export type List_prices_for_productResponse = ListPricesResponseDto;

export interface Get_price_by_id_for_productParams {
  Authorization: string;
  Version: string;
  productId: string;
  priceId: string;
  locationId: string;
}

export type Get_price_by_id_for_productResponse = GetPriceResponseDto;

export interface Update_price_by_id_for_productParams {
  Authorization: string;
  Version: string;
  productId: string;
  priceId: string;
}

export type Update_price_by_id_for_productRequestBody = UpdatePriceDto;

export type Update_price_by_id_for_productResponse = UpdatePriceResponseDto;

export interface Delete_price_by_id_for_productParams {
  Authorization: string;
  Version: string;
  productId: string;
  priceId: string;
  locationId: string;
}

export type Delete_price_by_id_for_productResponse = DeletePriceResponseDto;

export interface Get_product_by_idParams {
  Authorization: string;
  Version: string;
  productId: string;
  locationId: string;
}

export type Get_product_by_idResponse = GetProductResponseDto;

export interface Delete_product_by_idParams {
  Authorization: string;
  Version: string;
  productId: string;
  locationId: string;
}

export type Delete_product_by_idResponse = DeleteProductResponseDto;

export interface Update_product_by_idParams {
  Authorization: string;
  Version: string;
  productId: string;
}

export type Update_product_by_idRequestBody = UpdateProductDto;

export type Update_product_by_idResponse = UpdateProductResponseDto;

export interface Create_productParams {
  Authorization: string;
  Version: string;
}

export type Create_productRequestBody = CreateProductDto;

export type Create_productResponse = CreateProductResponseDto;

export interface List_invoicesParams {
  Authorization: string;
  Version: string;
  limit?: number;
  offset?: number;
  locationId: string;
  search?: string;
}

export type List_invoicesResponse = ListProductsResponseDto;

