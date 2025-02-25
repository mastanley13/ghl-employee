// Generated TypeScript interfaces for social-media-posting

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

export interface GoogleLocationSchema {
  name?: string;
  storeCode?: string;
  title?: string;
  metadata?: Record<string, any>;
  storefrontAddress?: Record<string, any>;
  relationshipData?: Record<string, any>;
  maxLocation?: boolean;
  isVerified?: boolean;
  isConnected?: boolean;
}

export interface GoogleAccountsSchema {
  name?: string;
  accountName?: string;
  type?: string;
  verificationState?: string;
  vettedState?: string;
}

export interface GetGoogleLocationSchema {
  location?: any;
  account?: any;
}

export interface GetGoogleLocationAccountSchema {
  locations?: any;
}

export interface GetGoogleLocationResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface AttachGMBLocationDTO {
  location?: Record<string, any>;
  account?: Record<string, any>;
  companyId?: string;
}

export interface SocialGoogleMediaAccountSchema {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialMediaGmbAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface SearchPostDTO {
  type?: string;
  accounts?: string;
  skip: string;
  limit: string;
  fromDate: string;
  toDate: string;
  includeUsers: string;
  postType?: Record<string, any>;
}

export interface PostMediaSchema {
  url: string;
  caption?: string;
  type?: string;
  thumbnail?: string;
  defaultThumb?: string;
  id?: string;
}

export interface OgTagsSchema {
  metaImage?: string;
  metaLink?: string;
}

export interface PostUserSchema {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  phone: string;
  email: string;
}

export interface FormatedApprovalDetails {
  approver?: string;
  requesterNote?: string;
  approverNote?: string;
  approvalStatus?: Record<string, any>;
  approverUser?: any;
}

export interface TiktokPostSchema {
  privacyLevel?: Record<string, any>;
  promoteOtherBrand?: boolean;
  enableComment?: boolean;
  enableDuet?: boolean;
  enableStitch?: boolean;
  videoDisclosure?: boolean;
  promoteYourBrand?: boolean;
}

export interface DateSchema {
  year: number;
  month: number;
  day: number;
}

export interface TimeSchema {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface StartDateSchema {
  startDate?: any;
  startTime?: any;
}

export interface EndDateSchema {
  endDate?: any;
  endTime?: any;
}

export interface GMBPostSchema {
  gmbEventType?: string;
  title?: string;
  offerTitle?: string;
  startDate?: any;
  endDate?: any;
  termsConditions?: string;
  url?: string;
  couponCode?: string;
  redeemOnlineUrl?: string;
  actionType?: Record<string, any>;
}

export interface GetPostFormattedSchema {
  _id?: string;
  source?: 'composer' | 'csv' | 'recurring' | 'review' | 'rss';
  locationId: string;
  platform?: string;
  displayDate?: string;
  createdAt?: string;
  updatedAt?: string;
  accountId?: string;
  error: string;
  postId?: string;
  publishedAt?: string;
  accountIds?: string[];
  summary?: string;
  media?: PostMediaSchema[];
  status?: Record<string, any>;
  createdBy?: string;
  type: Record<string, any>;
  tags?: string[];
  ogTagsDetails?: any;
  postApprovalDetails?: any;
  tiktokPostDetails?: any;
  gmbPostDetails?: any;
  user?: any;
}

export interface PostSuccessfulResponseSchema {
  posts?: GetPostFormattedSchema[];
  count?: number;
}

export interface PostSuccessfulResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface PostApprovalSchema {
  approver?: string;
  requesterNote?: string;
  approverNote?: string;
  approvalStatus?: Record<string, any>;
}

export interface CreatePostDTO {
  accountIds?: string[];
  summary?: string;
  media?: PostMediaSchema[];
  status?: Record<string, any>;
  scheduleDate?: string;
  createdBy?: string;
  followUpComment?: string;
  ogTagsDetails?: any;
  type: Record<string, any>;
  postApprovalDetails?: any;
  scheduleTimeUpdated?: boolean;
  tags?: string[];
  categoryId?: string;
  tiktokPostDetails?: any;
  gmbPostDetails?: any;
  userId?: string;
}

export interface CreatePostSuccessfulResponseSchema {
  post?: any;
}

export interface CreatePostSuccessfulResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface GetPostSuccessfulResponseSchema {
  post?: any;
}

export interface GetPostSuccessfulResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface PostCreateRequest {
  accountIds?: string[];
  summary?: string;
  media?: PostMediaSchema[];
  status?: Record<string, any>;
  scheduleDate?: string;
  createdBy?: string;
  followUpComment?: string;
  ogTagsDetails?: any;
  type: Record<string, any>;
  postApprovalDetails?: any;
  scheduleTimeUpdated?: boolean;
  tags?: string[];
  categoryId?: string;
  tiktokPostDetails?: any;
  gmbPostDetails?: any;
  userId?: string;
}

export interface UpdatePostSuccessfulResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface DeletePostSuccessfulResponseSchema {
  postId?: string;
}

export interface DeletePostSuccessfulResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface GetAccountSchema {
  id?: string;
  oauthId?: string;
  profileId?: string;
  name?: string;
  platform?: string;
  type?: string;
  expire?: string;
  isExpired?: boolean;
  meta?: Record<string, any>;
}

export interface GetGroupSchema {
  id: string;
  name: string;
  accountIds: string[];
}

export interface AccountsListResponseSchema {
  accounts?: GetAccountSchema[];
  groups?: GetGroupSchema[];
}

export interface AccountsListResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface DeleteAccountResponseSchema {
  locationId?: string;
  id?: string;
}

export interface LocationAndAccountDeleteResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface FacebookPageSchema {
  id?: string;
  name?: string;
  avatar?: string;
  isOwned?: boolean;
  isConnected?: boolean;
}

export interface GetFacebookAccountsSchema {
  pages?: FacebookPageSchema[];
}

export interface GetFacebookAccountsResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface AttachFBAccountDTO {
  type?: Record<string, any>;
  originId?: string;
  name?: string;
  avatar?: string;
  companyId?: string;
}

export interface SocialMediaFacebookAccountSchema {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialMediaFBAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface InstagramAccountSchema {
  id?: string;
  name?: string;
  avatar?: string;
  pageId?: string;
  isConnected?: boolean;
}

export interface GetInstagramAccountsSchema {
  accounts?: InstagramAccountSchema[];
}

export interface GetInstagramAccountsResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface AttachIGAccountDTO {
  originId?: string;
  name?: string;
  avatar?: string;
  pageId: string;
  companyId?: string;
}

export interface SocialMediaInstagramAccountSchema {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialMediaInstagramAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface LinkedInPageSchema {
  id?: string;
  name?: string;
  avatar?: string;
  urn?: string;
  isConnected?: boolean;
}

export interface LinkedInProfileSchema {
  id?: string;
  name?: string;
  avatar?: string;
  urn?: string;
  isConnected?: boolean;
}

export interface GetLinkedInAccountSchema {
  pages?: LinkedInPageSchema[];
  profile?: LinkedInProfileSchema[];
}

export interface GetLinkedInAccountsResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface AttachLinkedinAccountDTO {
  type?: 'page' | 'group' | 'profile' | 'location' | 'business';
  originId?: string;
  name?: string;
  avatar?: string;
  urn?: string;
  companyId?: string;
}

export interface SocialMediaLinkedInAccountSchema {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialMediaLinkedInAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface TwitterProfileSchema {
  id?: string;
  name?: string;
  username?: string;
  avatar?: string;
  protected?: boolean;
  verified?: boolean;
  isConnected?: boolean;
}

export interface GetTwitterAccountsSchema {
  profile?: TwitterProfileSchema[];
}

export interface GetTwitterAccountsResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface AttachTwitterAccountDTO {
  originId?: string;
  name?: string;
  username?: string;
  avatar?: string;
  protected?: boolean;
  verified?: boolean;
  companyId?: string;
}

export interface SocialMediaTwitterAccountSchema {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialMediaTwitterAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface UploadCSVDTO {
  file?: string;
}

export interface UploadFileResponseSchema {
  filePath?: string;
  rowsCount?: number;
  fileName?: string;
}

export interface UploadFileResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface SetAccountsDTO {
  accountIds: string[];
  filePath: string;
  rowsCount: number;
  fileName: string;
  approver?: string;
  userId?: string;
}

export interface SetAccountsResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface CSVImportSchema {
  _id: string;
  locationId?: string;
  fileName?: string;
  accountIds?: string[];
  file?: string;
  status?: string;
  count?: number;
  createdBy?: string;
  traceId?: string;
  originId?: string;
  approver?: string;
  createdAt?: string;
}

export interface GetUploadStatusResponseSchema {
  csvs: any;
  count: number;
}

export interface GetUploadStatusResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface OgImageSchema {
  url?: string;
  width?: number;
  height?: number;
  type?: string;
}

export interface IOgTagsSchema {
  url?: string;
  ogDescription?: string;
  ogImage?: any;
  ogTitle?: string;
  ogUrl?: string;
  ogSiteName?: string;
  error?: string;
}

export interface CSVMediaResponseSchema {
  url?: string;
  type?: string;
  size?: number;
  width?: number;
  height?: number;
  aspectRatio?: number;
  duration?: number;
  format?: string;
  videoCodecName?: string;
  frameRate?: number;
  audioCodecName?: string;
  audioChannels?: number;
  displayAspectRatio?: string;
  frames?: string[];
  selectedPoster?: number;
  error?: string;
  instagramError?: string;
  gmbError?: string;
  facebookError?: string;
  linkedinError?: string;
  twitterError?: string;
  tiktokError?: string;
  tiktokBusinessError?: string;
  invalidError?: string;
}

export interface CSVPostSchema {
  accountIds?: string[];
  link?: any;
  medias?: CSVMediaResponseSchema[];
  scheduleDate?: string;
  summary?: string;
  followUpComment?: string;
  type?: Record<string, any>;
  tiktokPostDetails?: any;
  gmbPostDetails?: any;
  errorMessage?: string;
}

export interface GetCsvPostResponseSchema {
  csv?: any;
  count?: number;
  posts?: CSVPostSchema[];
}

export interface GetCsvPostResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface CSVDefaultDTO {
  userId?: string;
}

export interface CsvPostStatusResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface CsvResponse {
  locationId?: string;
  fileName?: string;
  accountIds?: string[];
  file?: string;
  status?: Record<string, any>;
  count?: number;
  createdBy?: string;
  traceId?: string;
  originId?: string;
  approver?: string;
}

export interface CSVResponseSchema {
  csv?: any;
}

export interface DeleteCsvResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface DeletePostResponseSchema {
  postId: string;
}

export interface DeletePostResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface TiktokProfileSchema {
  id?: string;
  name?: string;
  username?: string;
  avatar?: string;
  verified?: boolean;
  isConnected?: boolean;
  type?: Record<string, any>;
}

export interface GetTiktokAccountSchema {
  profile?: TiktokProfileSchema[];
}

export interface GetTiktokAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface AttachTiktokAccountDTO {
  type?: 'page' | 'group' | 'profile' | 'location' | 'business';
  originId?: string;
  name?: string;
  avatar?: string;
  verified?: boolean;
  username?: string;
  companyId?: string;
}

export interface SocialMediaTiktokAccountSchema {
  _id?: string;
  oAuthId?: string;
  oldId?: string;
  locationId?: string;
  originId?: string;
  platform?: Record<string, any>;
  type?: Record<string, any>;
  name?: string;
  avatar?: string;
  meta?: Record<string, any>;
  active?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialMediaTiktokAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface GetTiktokBusinessAccountSchema {
  profile?: TiktokProfileSchema[];
}

export interface GetTiktokBusinessAccountResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface CategorySchema {
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
  locationId?: string;
  _id?: string;
  createdBy?: string;
  deleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetByLocationIdResponseSchema {
  count: number;
  categories: CategorySchema[];
}

export interface GetByLocationIdResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface GetByIdResponseSchema {
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
  locationId?: string;
  _id?: string;
  createdBy?: string;
  deleted: boolean;
  message?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetCategorySchema {
  category?: any;
}

export interface GetByIdResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface SocialMediaTagSchema {
  tag?: string;
  locationId?: string;
  _id?: string;
  createdBy?: string;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetTagsByLocationIdResponseSchema {
  tags?: SocialMediaTagSchema[];
  count?: number;
}

export interface GetTagsByLocationIdResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface UpdateTagDTO {
  tagIds: string[];
}

export interface GetTagsByIdResponseSchema {
  tags: SocialMediaTagSchema[];
  count?: number;
}

export interface GetTagsByIdResponseDTO {
  success: boolean;
  statusCode: number;
  message: string;
  results?: any;
}

export interface DeletePostsDto {
  postIds?: string[];
}

export interface BulkDeletePostSuccessfulResponseSchema {
  deletedCount?: number;
}

export interface BulkDeleteResponseDto {
  success: boolean;
  statusCode: number;
  message: string;
  results: any;
}

export interface Start_google_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_google_locationsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_google_locationsResponse = GetGoogleLocationResponseDTO;

export interface Set_google_locationsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Set_google_locationsRequestBody = AttachGMBLocationDTO;

export type Set_google_locationsResponse = SocialMediaGmbAccountResponseDTO;

export interface Get_postsParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_postsRequestBody = SearchPostDTO;

export type Get_postsResponse = PostSuccessfulResponseDTO;

export interface Create_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Create_postRequestBody = CreatePostDTO;

export type Create_postResponse = CreatePostSuccessfulResponseDTO;

export interface Get_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Get_postResponse = GetPostSuccessfulResponseDTO;

export interface Edit_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Edit_postRequestBody = PostCreateRequest;

export type Edit_postResponse = UpdatePostSuccessfulResponseDTO;

export interface Delete_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Delete_postResponse = DeletePostSuccessfulResponseDTO;

export interface Bulk_delete_social_planner_postsParams {
  Authorization: string;
  Version: string;
}

export type Bulk_delete_social_planner_postsRequestBody = DeletePostsDto;

export type Bulk_delete_social_planner_postsResponse = BulkDeleteResponseDto;

export interface Get_accountParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_accountResponse = AccountsListResponseDTO;

export interface Delete_accountParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
  companyId?: string;
  userId?: string;
}

export type Delete_accountResponse = LocationAndAccountDeleteResponseDTO;

export interface Start_facebook_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_facebook_page_groupParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_facebook_page_groupResponse = GetFacebookAccountsResponseDTO;

export interface Attach_facebook_page_groupParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Attach_facebook_page_groupRequestBody = AttachFBAccountDTO;

export type Attach_facebook_page_groupResponse = SocialMediaFBAccountResponseDTO;

export interface Start_instagram_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_instagram_page_groupParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_instagram_page_groupResponse = GetInstagramAccountsResponseDTO;

export interface Attach_instagram_page_groupParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Attach_instagram_page_groupRequestBody = AttachIGAccountDTO;

export type Attach_instagram_page_groupResponse = SocialMediaInstagramAccountResponseDTO;

export interface Start_linkedin_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_linkedin_page_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_linkedin_page_profileResponse = GetLinkedInAccountsResponseDTO;

export interface Attach_linkedin_page_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Attach_linkedin_page_profileRequestBody = AttachLinkedinAccountDTO;

export type Attach_linkedin_page_profileResponse = SocialMediaLinkedInAccountResponseDTO;

export interface Start_twitter_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_twitter_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_twitter_profileResponse = GetTwitterAccountsResponseDTO;

export interface Attach_twitter_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Attach_twitter_profileRequestBody = AttachTwitterAccountDTO;

export type Attach_twitter_profileResponse = SocialMediaTwitterAccountResponseDTO;

export interface Upload_csvParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Upload_csvRequestBody = UploadCSVDTO;

export type Upload_csvResponse = UploadFileResponseDTO;

export interface Get_upload_statusParams {
  Authorization: string;
  Version: string;
  locationId: string;
  skip?: string;
  limit?: string;
  includeUsers?: string;
  userId?: string;
}

export type Get_upload_statusResponse = GetUploadStatusResponseDTO;

export interface Set_accountsParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Set_accountsRequestBody = SetAccountsDTO;

export type Set_accountsResponse = SetAccountsResponseDTO;

export interface Get_csv_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
  skip?: string;
  limit?: string;
}

export type Get_csv_postResponse = GetCsvPostResponseDTO;

export interface Start_csv_finalizeParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Start_csv_finalizeRequestBody = CSVDefaultDTO;

export type Start_csv_finalizeResponse = CsvPostStatusResponseDTO;

export interface Delete_csvParams {
  Authorization: string;
  Version: string;
  locationId: string;
  id: string;
}

export type Delete_csvResponse = DeleteCsvResponseDTO;

export interface Delete_csv_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
  postId: string;
  csvId: string;
}

export type Delete_csv_postResponse = DeletePostResponseDTO;

export interface Start_tiktok_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_tiktok_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_tiktok_profileResponse = GetTiktokAccountResponseDTO;

export interface Attach_tiktok_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Attach_tiktok_profileRequestBody = AttachTiktokAccountDTO;

export type Attach_tiktok_profileResponse = SocialMediaTiktokAccountResponseDTO;

export interface Start_tiktok_business_oauthParams {
  Authorization: string;
  Version: string;
  locationId: string;
  userId: string;
  page?: string;
  reconnect?: string;
}

export interface Get_tiktok_business_profileParams {
  Authorization: string;
  Version: string;
  locationId: string;
  accountId: string;
}

export type Get_tiktok_business_profileResponse = GetTiktokBusinessAccountResponseDTO;

export interface Get_categories_location_idParams {
  Authorization: string;
  Version: string;
  locationId: string;
  searchText?: string;
  limit?: string;
  skip?: string;
}

export type Get_categories_location_idResponse = GetByLocationIdResponseDTO;

export interface Get_categories_idParams {
  Authorization: string;
  Version: string;
  id: string;
  locationId: string;
}

export type Get_categories_idResponse = GetByIdResponseDTO;

export interface Get_tags_location_idParams {
  Authorization: string;
  Version: string;
  locationId: string;
  searchText?: string;
  limit?: string;
  skip?: string;
}

export type Get_tags_location_idResponse = GetTagsByLocationIdResponseDTO;

export interface Get_tags_by_idsParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Get_tags_by_idsRequestBody = UpdateTagDTO;

export type Get_tags_by_idsResponse = GetTagsByIdResponseDTO;

