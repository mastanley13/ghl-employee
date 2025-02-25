// Generated TypeScript interfaces for saas-api

export interface UpdateSubscriptionDto {
  subscriptionId: string;
  customerId: string;
  companyId: string;
}

export interface BulkDisableSaasDto {
  locationIds: string[];
}

export interface EnableSaasDto {
  stripeAccountId: string;
  name: string;
  email: string;
  stripeCustomerId: string;
  companyId: string;
}

export interface PauseLocationDto {
  paused: boolean;
  companyId: string;
}

export interface UpdateRebillingDto {
  product: 'contentAI' | 'workflow_premium_actions' | 'workflow_ai' | 'conversationAI' | 'whatsApp' | 'reviewsAI' | 'Phone' | 'Email';
  locationIds: string[];
  config: { optIn?: boolean; enabled?: boolean; markup?: number };
}

export interface LocationsParams {
  Authorization: string;
  Version: string;
  channel: string;
  source: string;
  customerId: string;
  subscriptionId: string;
  companyId: string;
}

export interface Generate_payment_linkParams {
  Authorization: string;
  Version: string;
  channel: string;
  source: string;
  locationId: string;
}

export type Generate_payment_linkRequestBody = UpdateSubscriptionDto;

export interface Bulk_disable_saasParams {
  Authorization: string;
  Version: string;
  channel: string;
  source: string;
  companyId: string;
}

export type Bulk_disable_saasRequestBody = BulkDisableSaasDto;

export interface Enable_saasParams {
  Authorization: string;
  Version: string;
  channel: string;
  source: string;
  locationId: string;
}

export type Enable_saasRequestBody = EnableSaasDto;

export interface Pause_locationParams {
  Authorization: string;
  Version: string;
  channel: string;
  source: string;
  locationId: string;
}

export type Pause_locationRequestBody = PauseLocationDto;

export interface Update_rebillingParams {
  Authorization: string;
  Version: string;
  channel: string;
  source: string;
  companyId: string;
}

export type Update_rebillingRequestBody = UpdateRebillingDto;

