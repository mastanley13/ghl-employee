// Generated TypeScript interfaces for companies

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface IOnboardingDto {
  pending: boolean;
  haveWebsite?: boolean;
  websiteUrl?: string;
  industryServed?: string;
  customerCount?: string;
  tools?: string[];
  location?: boolean;
  conversationDemo?: boolean;
  locationId?: string;
  snapshotId?: string;
}

export interface EndTrialDto {
  trial_end_req_by: string;
  trial_ended_on: string;
}

export interface AgencyProAddOnDto {
  is_active: boolean;
  agency_pro_addon_subscription_id: string;
  agency_pro_addon_active_plan: 'reviews_monthly_150' | 'listing_monthly_50' | 'conversations_monthly_100' | 'priority-support_monthly_300' | 'priority-support_annual_300' | 'priority-support_monthly_300_legacy' | 'priority-support_annual_300_legacy' | 'priority-support_monthly_240_july' | 'hipaa_monthly_297' | 'hipaa_annual_297' | 'hipaa_monthly_297_legacy' | 'agency-pro-plus_monthly_399' | 'agency-pro-plus_annual_399';
}

export interface ReactivationAttemptDto {
  attempted_on: string;
  attempted_by: string;
  invoice_id: string;
}

export interface DowngradeDto {
  attempted_on: string;
  attempted_by: string;
  previous_plan: string;
  current_plan: string;
  reason: string;
}

export interface PauseSubscriptionInfoDto {
  requested_on: string;
  req_by: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  processed_on: string;
}

export interface BillingInfoDto {
  first_trial_extension_processed_on?: string;
  first_trial_extension_reason?: string;
  second_trial_extension_processed_on?: string;
  second_trial_extension_reason?: string;
  pause_subscription_requested_on?: string;
  pause_subscription_reason?: string;
  pause_subscription_status?: 'pending' | 'approved' | 'rejected';
  pause_subscription_req_processed_on?: string;
  pause_subscription_req_by?: string;
  end_trial_early?: EndTrialDto;
  agency_pro_addon?: AgencyProAddOnDto;
  coupons_added?: string[];
  reactivation_attempt?: ReactivationAttemptDto;
  downgrade?: DowngradeDto;
  first_payment_date?: string;
  pause_subscription_info?: PauseSubscriptionInfoDto;
}

export interface GetCompanyByIdSchema {
  id?: string;
  name?: string;
  email?: string;
  logoUrl?: string;
  phone?: string;
  website?: string;
  domain?: string;
  spareDomain?: string;
  privacyPolicy?: string;
  termsConditions?: string;
  theme?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  state?: string;
  timezone?: string;
  relationshipNumber?: string;
  faviconUrl?: string;
  subdomain?: string;
  plan?: number;
  currency?: string;
  customerType?: string;
  termsOfServiceVersion?: string;
  termsOfServiceAcceptedBy?: string;
  twilioTrialMode?: boolean;
  twilioFreeCredits?: number;
  termsOfServiceAcceptedDate?: string;
  privacyPolicyVersion?: string;
  privacyPolicyAcceptedBy?: string;
  privacyPolicyAcceptedDate?: string;
  affiliatePolicyVersion?: string;
  affiliatePolicyAcceptedBy?: string;
  affiliatePolicyAcceptedDate?: string;
  isReselling?: boolean;
  onboardingInfo?: any;
  stripeId?: string;
  upgradeEnabledForClients?: boolean;
  cancelEnabledForClients?: boolean;
  autoSuspendEnabled?: boolean;
  saasSettings?: Record<string, any>;
  stripeActivePlan?: string;
  stripeConnectId?: string;
  enableDepreciatedFeatures?: boolean;
  premiumUpgraded?: boolean;
  status?: string;
  locationCount?: number;
  disableEmailService?: boolean;
  billingInfo?: BillingInfoDto;
}

export interface GetCompanyByIdSuccessfulResponseDto {
  company?: GetCompanyByIdSchema;
}

export interface Get_companyParams {
  Authorization: string;
  Version: string;
  companyId: string;
}

export type Get_companyResponse = GetCompanyByIdSuccessfulResponseDto;

