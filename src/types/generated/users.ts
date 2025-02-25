// Generated TypeScript interfaces for users

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface PermissionsDto {
  campaignsEnabled?: boolean;
  campaignsReadOnly?: boolean;
  contactsEnabled?: boolean;
  workflowsEnabled?: boolean;
  workflowsReadOnly?: boolean;
  triggersEnabled?: boolean;
  funnelsEnabled?: boolean;
  websitesEnabled?: boolean;
  opportunitiesEnabled?: boolean;
  dashboardStatsEnabled?: boolean;
  bulkRequestsEnabled?: boolean;
  appointmentsEnabled?: boolean;
  reviewsEnabled?: boolean;
  onlineListingsEnabled?: boolean;
  phoneCallEnabled?: boolean;
  conversationsEnabled?: boolean;
  assignedDataOnly?: boolean;
  adwordsReportingEnabled?: boolean;
  membershipEnabled?: boolean;
  facebookAdsReportingEnabled?: boolean;
  attributionsReportingEnabled?: boolean;
  settingsEnabled?: boolean;
  tagsEnabled?: boolean;
  leadValueEnabled?: boolean;
  marketingEnabled?: boolean;
  agentReportingEnabled?: boolean;
  botService?: boolean;
  socialPlanner?: boolean;
  bloggingEnabled?: boolean;
  invoiceEnabled?: boolean;
  affiliateManagerEnabled?: boolean;
  contentAiEnabled?: boolean;
  refundsEnabled?: boolean;
  recordPaymentEnabled?: boolean;
  cancelSubscriptionEnabled?: boolean;
  paymentsEnabled?: boolean;
  communitiesEnabled?: boolean;
  exportPaymentsEnabled?: boolean;
}

export interface RoleSchema {
  type?: string;
  role?: string;
  locationIds?: string[];
  restrictSubAccount?: boolean;
}

export interface UserSchema {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  extension?: string;
  permissions?: PermissionsDto;
  scopes?: 'campaigns.readonly' | 'campaigns.write' | 'calendars/events.write' | 'calendars/events.readonly' | 'contacts.write' | 'contacts/bulkActions.write' | 'workflows.readonly' | 'workflows.write' | 'triggers.write' | 'funnels.write' | 'websites.write' | 'medias.write' | 'medias.readonly' | 'opportunities.write' | 'opportunities/leadValue.readonly' | 'opportunities/bulkActions.write' | 'reporting/phone.readonly' | 'reporting/adwords.readonly' | 'reporting/facebookAds.readonly' | 'reporting/attributions.readonly' | 'reporting/agent.readonly' | 'reporting/reports.write' | 'reporting/reports.readonly' | 'payments.write' | 'payments/refunds.write' | 'payments/records.write' | 'payments/exports.write' | 'payments/subscriptionsCancel.write' | 'invoices.write' | 'invoices.readonly' | 'invoices/schedule.readonly' | 'invoices/schedule.write' | 'invoices/template.readonly' | 'invoices/template.write' | 'reputation/review.write' | 'reputation/listing.write' | 'conversations.write' | 'conversations.readonly' | 'conversations/message.readonly' | 'conversations/message.write' | 'contentAI.write' | 'dashboard/stats.readonly' | 'locations/tags.write' | 'locations/tags.readonly' | 'marketing.write' | 'eliza.write' | 'settings.write' | 'socialplanner/post.write' | 'socialplanner/account.readonly' | 'socialplanner/account.write' | 'socialplanner/category.readonly' | 'socialplanner/category.write' | 'socialplanner/csv.readonly' | 'socialplanner/csv.write' | 'socialplanner/group.write' | 'socialplanner/hashtag.readonly' | 'socialplanner/hashtag.write' | 'socialplanner/oauth.readonly' | 'socialplanner/oauth.write' | 'socialplanner/post.readonly' | 'socialplanner/recurring.readonly' | 'socialplanner/recurring.write' | 'socialplanner/review.readonly' | 'socialplanner/review.write' | 'socialplanner/rss.readonly' | 'socialplanner/rss.write' | 'socialplanner/search.readonly' | 'socialplanner/setting.readonly' | 'socialplanner/setting.write' | 'socialplanner/stat.readonly' | 'socialplanner/tag.readonly' | 'socialplanner/tag.write' | 'socialplanner/filters.readonly' | 'socialplanner/medias.readonly' | 'socialplanner/medias.write' | 'socialplanner/watermarks.readonly' | 'socialplanner/watermarks.write' | 'socialplanner/metatag.readonly' | 'socialplanner/facebook.readonly' | 'socialplanner/linkedin.readonly' | 'socialplanner/twitter.readonly' | 'socialplanner/notification.readonly' | 'socialplanner/notification.write' | 'socialplanner/snapshot.readonly' | 'socialplanner/snapshot.write' | 'marketing/affiliate.write' | 'blogs.write' | 'membership.write' | 'communities.write' | 'certificates.write' | 'certificates.readonly' | 'adPublishing.write' | 'adPublishing.readonly' | 'prospecting.write' | 'prospecting.readonly' | 'prospecting/reports.readonly' | 'private-integration-location.readonly' | 'private-integration-location.write' | 'private-integration-company.readonly' | 'private-integration-company.write' | 'native-integrations.readonly' | 'native-integrations.write' | 'wordpress.write' | 'wordpress.read' | 'custom-menu-link.write' | 'users/team-management.write' | 'users/team-management.readonly';
  roles?: RoleSchema;
  deleted?: boolean;
  lcPhone?: Record<string, any>;
}

export interface SearchUserSuccessfulResponseDto {
  users?: UserSchema[];
  count?: number;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface LocationSuccessfulResponseDto {
  users?: UserSchema[];
}

export interface UserSuccessfulResponseDto {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  extension?: string;
  permissions?: PermissionsDto;
  scopes?: 'campaigns.readonly' | 'campaigns.write' | 'calendars/events.write' | 'calendars/events.readonly' | 'contacts.write' | 'contacts/bulkActions.write' | 'workflows.readonly' | 'workflows.write' | 'triggers.write' | 'funnels.write' | 'websites.write' | 'medias.write' | 'medias.readonly' | 'opportunities.write' | 'opportunities/leadValue.readonly' | 'opportunities/bulkActions.write' | 'reporting/phone.readonly' | 'reporting/adwords.readonly' | 'reporting/facebookAds.readonly' | 'reporting/attributions.readonly' | 'reporting/agent.readonly' | 'reporting/reports.write' | 'reporting/reports.readonly' | 'payments.write' | 'payments/refunds.write' | 'payments/records.write' | 'payments/exports.write' | 'payments/subscriptionsCancel.write' | 'invoices.write' | 'invoices.readonly' | 'invoices/schedule.readonly' | 'invoices/schedule.write' | 'invoices/template.readonly' | 'invoices/template.write' | 'reputation/review.write' | 'reputation/listing.write' | 'conversations.write' | 'conversations.readonly' | 'conversations/message.readonly' | 'conversations/message.write' | 'contentAI.write' | 'dashboard/stats.readonly' | 'locations/tags.write' | 'locations/tags.readonly' | 'marketing.write' | 'eliza.write' | 'settings.write' | 'socialplanner/post.write' | 'socialplanner/account.readonly' | 'socialplanner/account.write' | 'socialplanner/category.readonly' | 'socialplanner/category.write' | 'socialplanner/csv.readonly' | 'socialplanner/csv.write' | 'socialplanner/group.write' | 'socialplanner/hashtag.readonly' | 'socialplanner/hashtag.write' | 'socialplanner/oauth.readonly' | 'socialplanner/oauth.write' | 'socialplanner/post.readonly' | 'socialplanner/recurring.readonly' | 'socialplanner/recurring.write' | 'socialplanner/review.readonly' | 'socialplanner/review.write' | 'socialplanner/rss.readonly' | 'socialplanner/rss.write' | 'socialplanner/search.readonly' | 'socialplanner/setting.readonly' | 'socialplanner/setting.write' | 'socialplanner/stat.readonly' | 'socialplanner/tag.readonly' | 'socialplanner/tag.write' | 'socialplanner/filters.readonly' | 'socialplanner/medias.readonly' | 'socialplanner/medias.write' | 'socialplanner/watermarks.readonly' | 'socialplanner/watermarks.write' | 'socialplanner/metatag.readonly' | 'socialplanner/facebook.readonly' | 'socialplanner/linkedin.readonly' | 'socialplanner/twitter.readonly' | 'socialplanner/notification.readonly' | 'socialplanner/notification.write' | 'socialplanner/snapshot.readonly' | 'socialplanner/snapshot.write' | 'marketing/affiliate.write' | 'blogs.write' | 'membership.write' | 'communities.write' | 'certificates.write' | 'certificates.readonly' | 'adPublishing.write' | 'adPublishing.readonly' | 'prospecting.write' | 'prospecting.readonly' | 'prospecting/reports.readonly' | 'private-integration-location.readonly' | 'private-integration-location.write' | 'private-integration-company.readonly' | 'private-integration-company.write' | 'native-integrations.readonly' | 'native-integrations.write' | 'wordpress.write' | 'wordpress.read' | 'custom-menu-link.write' | 'users/team-management.write' | 'users/team-management.readonly';
  roles?: RoleSchema;
  lcPhone?: Record<string, any>;
}

export interface CreateUserDto {
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  type: string;
  role: string;
  locationIds: string[];
  permissions?: PermissionsDto;
  scopes?: string[];
  scopesAssignedToOnly?: string[];
  profilePhoto?: string;
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  emailChangeOTP?: string;
  password?: string;
  phone?: string;
  isEjectedUser: boolean;
  type?: string;
  role?: string;
  companyId?: string;
  locationIds?: string[];
  permissions?: PermissionsDto;
  scopes?: string[];
  scopesAssignedToOnly?: string[];
  profilePhoto?: string;
}

export interface DeleteUserSuccessfulResponseDto {
  succeded?: boolean;
  message?: string;
}

export interface Search_usersParams {
  Authorization: string;
  Version: string;
  companyId: string;
  query?: string;
  skip?: string;
  limit?: string;
  locationId?: string;
  type?: string;
  role?: string;
  ids?: string;
  sort?: string;
  sortDirection?: string;
  enabled2waySync?: boolean;
}

export type Search_usersResponse = SearchUserSuccessfulResponseDto;

export interface Get_userParams {
  Authorization: string;
  Version: string;
}

export type Get_userResponse = UserSuccessfulResponseDto;

export interface Update_userParams {
  Authorization: string;
  Version: string;
}

export type Update_userRequestBody = UpdateUserDto;

export type Update_userResponse = UserSuccessfulResponseDto;

export interface Delete_userParams {
  Authorization: string;
  Version: string;
}

export type Delete_userResponse = DeleteUserSuccessfulResponseDto;

export interface Get_user_by_locationParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_user_by_locationResponse = LocationSuccessfulResponseDto;

export interface Create_userParams {
  Authorization: string;
  Version: string;
}

export type Create_userRequestBody = CreateUserDto;

export type Create_userResponse = UserSuccessfulResponseDto;

