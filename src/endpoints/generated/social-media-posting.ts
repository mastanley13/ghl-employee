import { APIClient } from '../../utils/api-client';
// Import types
import {
Start_google_oauthParams,
Start_google_oauthResponse,
Get_google_locationsParams,
Get_google_locationsResponse,
Set_google_locationsParams,
Set_google_locationsRequestBody,
Set_google_locationsResponse,
Get_postsParams,
Get_postsRequestBody,
Get_postsResponse,
Create_postParams,
Create_postRequestBody,
Create_postResponse,
Get_postParams,
Get_postResponse,
Edit_postParams,
Edit_postRequestBody,
Edit_postResponse,
Delete_postParams,
Delete_postResponse,
Bulk_delete_social_planner_postsParams,
Bulk_delete_social_planner_postsRequestBody,
Bulk_delete_social_planner_postsResponse,
Get_accountParams,
Get_accountResponse,
Delete_accountParams,
Delete_accountResponse,
Start_facebook_oauthParams,
Start_facebook_oauthResponse,
Get_facebook_page_groupParams,
Get_facebook_page_groupResponse,
Attach_facebook_page_groupParams,
Attach_facebook_page_groupRequestBody,
Attach_facebook_page_groupResponse,
Start_instagram_oauthParams,
Start_instagram_oauthResponse,
Get_instagram_page_groupParams,
Get_instagram_page_groupResponse,
Attach_instagram_page_groupParams,
Attach_instagram_page_groupRequestBody,
Attach_instagram_page_groupResponse,
Start_linkedin_oauthParams,
Start_linkedin_oauthResponse,
Get_linkedin_page_profileParams,
Get_linkedin_page_profileResponse,
Attach_linkedin_page_profileParams,
Attach_linkedin_page_profileRequestBody,
Attach_linkedin_page_profileResponse,
Start_twitter_oauthParams,
Start_twitter_oauthResponse,
Get_twitter_profileParams,
Get_twitter_profileResponse,
Attach_twitter_profileParams,
Attach_twitter_profileRequestBody,
Attach_twitter_profileResponse,
Upload_csvParams,
Upload_csvRequestBody,
Upload_csvResponse,
Get_upload_statusParams,
Get_upload_statusResponse,
Set_accountsParams,
Set_accountsRequestBody,
Set_accountsResponse,
Get_csv_postParams,
Get_csv_postResponse,
Start_csv_finalizeParams,
Start_csv_finalizeRequestBody,
Start_csv_finalizeResponse,
Delete_csvParams,
Delete_csvResponse,
Delete_csv_postParams,
Delete_csv_postResponse,
Start_tiktok_oauthParams,
Start_tiktok_oauthResponse,
Get_tiktok_profileParams,
Get_tiktok_profileResponse,
Attach_tiktok_profileParams,
Attach_tiktok_profileRequestBody,
Attach_tiktok_profileResponse,
Start_tiktok_business_oauthParams,
Start_tiktok_business_oauthResponse,
Get_tiktok_business_profileParams,
Get_tiktok_business_profileResponse,
Get_categories_location_idParams,
Get_categories_location_idResponse,
Get_categories_idParams,
Get_categories_idResponse,
Get_tags_location_idParams,
Get_tags_location_idResponse,
Get_tags_by_idsParams,
Get_tags_by_idsRequestBody,
Get_tags_by_idsResponse
} from '../../types/generated/social-media-posting';

export class Social-media-postingAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Starts OAuth For Google Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Google login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "google" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Google account details using below API -
  API: '/social-media-posting/oauth/google/accounts/:accountId' 

  Method: GET
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_google_oauth(params: Start_google_oauthParams): Promise<Start_google_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_google_oauthResponse>('/social-media-posting/oauth/google/start', { params: queryParams });
  }

  /**
   * Get google business locations
   * Get google business locations
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_google_locations(params: Get_google_locationsParams): Promise<Get_google_locationsResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/google/locations/${params.accountId}`;
    return this.client.get<Get_google_locationsResponse>(url);
  }

  /**
   * Set google business locations
   * Set google business locations
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async set_google_locations(params: Set_google_locationsParams, data: Set_google_locationsRequestBody): Promise<Set_google_locationsResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/google/locations/${params.accountId}`;
    return this.client.post<Set_google_locationsResponse>(url, data);
  }

  /**
   * Get posts
   * Get Posts
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async get_posts(params: Get_postsParams, data: Get_postsRequestBody): Promise<Get_postsResponse> {
    const url = `/social-media-posting/${params.locationId}/posts/list`;
    return this.client.post<Get_postsResponse>(url, data);
  }

  /**
   * Create post
   * Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_post(params: Create_postParams, data: Create_postRequestBody): Promise<Create_postResponse> {
    const url = `/social-media-posting/${params.locationId}/posts`;
    return this.client.post<Create_postResponse>(url, data);
  }

  /**
   * Get post
   * Get post
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_post(params: Get_postParams): Promise<Get_postResponse> {
    const url = `/social-media-posting/${params.locationId}/posts/${params.id}`;
    return this.client.get<Get_postResponse>(url);
  }

  /**
   * Edit post
   * Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async edit_post(params: Edit_postParams, data: Edit_postRequestBody): Promise<Edit_postResponse> {
    const url = `/social-media-posting/${params.locationId}/posts/${params.id}`;
    return this.client.put<Edit_postResponse>(url, data);
  }

  /**
   * Delete Post
   * Delete Post
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_post(params: Delete_postParams): Promise<Delete_postResponse> {
    const url = `/social-media-posting/${params.locationId}/posts/${params.id}`;
    return this.client.delete<Delete_postResponse>(url);
  }

  /**
   * Bulk Delete Social Planner Posts
   * Deletes multiple posts based on the provided list of post IDs. 
                  This operation is useful for clearing up large numbers of posts efficiently. 
                  
Note: 
                  
1.The maximum number of posts that can be deleted in a single request is '50'.
                  
2.However, It will only get deleted in Highlevel database but still
                   it is recommended to be cautious of this operation.
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async bulk_delete_social_planner_posts(params: Bulk_delete_social_planner_postsParams, data: Bulk_delete_social_planner_postsRequestBody): Promise<Bulk_delete_social_planner_postsResponse> {
    const url = `/social-media-posting/${params.locationId}/posts/bulk-delete`;
    return this.client.post<Bulk_delete_social_planner_postsResponse>(url, data);
  }

  /**
   * Get Accounts
   * Get list of accounts and groups
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_account(params: Get_accountParams): Promise<Get_accountResponse> {
    const url = `/social-media-posting/${params.locationId}/accounts`;
    return this.client.get<Get_accountResponse>(url);
  }

  /**
   * Delete Account
   * Delete account and account from group
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_account(params: Delete_accountParams): Promise<Delete_accountResponse> {
    const url = `/social-media-posting/${params.locationId}/accounts/${params.id}`;
    const queryParams: Record<string, any> = {};
    if (params.companyId !== undefined) queryParams.companyId = params.companyId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    return this.client.delete<Delete_accountResponse>(url, { params: queryParams });
  }

  /**
   * Starts OAuth For Facebook Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Facebook login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "facebook" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Facebook account details using below API -
  API: '/social-media-posting/oauth/facebook/accounts/:accountId' 

  Method: GET
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_facebook_oauth(params: Start_facebook_oauthParams): Promise<Start_facebook_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_facebook_oauthResponse>('/social-media-posting/oauth/facebook/start', { params: queryParams });
  }

  /**
   * Get facebook pages
   * Get facebook pages
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_facebook_page_group(params: Get_facebook_page_groupParams): Promise<Get_facebook_page_groupResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/facebook/accounts/${params.accountId}`;
    return this.client.get<Get_facebook_page_groupResponse>(url);
  }

  /**
   * Attach facebook pages
   * Attach facebook pages
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async attach_facebook_page_group(params: Attach_facebook_page_groupParams, data: Attach_facebook_page_groupRequestBody): Promise<Attach_facebook_page_groupResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/facebook/accounts/${params.accountId}`;
    return this.client.post<Attach_facebook_page_groupResponse>(url, data);
  }

  /**
   * Starts OAuth For Instagram Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Instagram login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "instagram" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Instagram account details using below API -
  API: '/social-media-posting/oauth/instagram/accounts/:accountId' 

  Method: GET
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_instagram_oauth(params: Start_instagram_oauthParams): Promise<Start_instagram_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_instagram_oauthResponse>('/social-media-posting/oauth/instagram/start', { params: queryParams });
  }

  /**
   * Get Instagram Professional Accounts
   * Get Instagram Professional Accounts
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_instagram_page_group(params: Get_instagram_page_groupParams): Promise<Get_instagram_page_groupResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/instagram/accounts/${params.accountId}`;
    return this.client.get<Get_instagram_page_groupResponse>(url);
  }

  /**
   * Attach Instagram Professional Accounts
   * Attach Instagram Professional Accounts
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async attach_instagram_page_group(params: Attach_instagram_page_groupParams, data: Attach_instagram_page_groupRequestBody): Promise<Attach_instagram_page_groupResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/instagram/accounts/${params.accountId}`;
    return this.client.post<Attach_instagram_page_groupResponse>(url, data);
  }

  /**
   * Starts OAuth For LinkedIn Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to LinkedIn login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "linkedin" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch LinkedIn account details using below API -
  API: '/social-media-posting/oauth/linkedin/accounts/:accountId' 

  Method: GET
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_linkedin_oauth(params: Start_linkedin_oauthParams): Promise<Start_linkedin_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_linkedin_oauthResponse>('/social-media-posting/oauth/linkedin/start', { params: queryParams });
  }

  /**
   * Get Linkedin pages and profile
   * Get Linkedin pages and profile
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_linkedin_page_profile(params: Get_linkedin_page_profileParams): Promise<Get_linkedin_page_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/linkedin/accounts/${params.accountId}`;
    return this.client.get<Get_linkedin_page_profileResponse>(url);
  }

  /**
   * Attach linkedin pages and profile
   * Attach linkedin pages and profile
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async attach_linkedin_page_profile(params: Attach_linkedin_page_profileParams, data: Attach_linkedin_page_profileRequestBody): Promise<Attach_linkedin_page_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/linkedin/accounts/${params.accountId}`;
    return this.client.post<Attach_linkedin_page_profileResponse>(url, data);
  }

  /**
   * Starts OAuth For Twitter Account
   * <div><div>
  <span style= "display: inline-block;
    width: 25px; height: 25px;
    background-color: red;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border: 2px solid black;
    border-radius: 20%;
    margin-right: 10px;">
    !
  </span>
  <span><strong>As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.</strong></span>
</div></div>
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_twitter_oauth(params: Start_twitter_oauthParams): Promise<Start_twitter_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_twitter_oauthResponse>('/social-media-posting/oauth/twitter/start', { params: queryParams });
  }

  /**
   * Get Twitter profile
   * <div><div>
  <span style= "display: inline-block;
    width: 25px; height: 25px;
    background-color: red;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border: 2px solid black;
    border-radius: 20%;
    margin-right: 10px;">
    !
  </span>
  <span><strong>As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.</strong></span>
</div></div>
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_twitter_profile(params: Get_twitter_profileParams): Promise<Get_twitter_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/twitter/accounts/${params.accountId}`;
    return this.client.get<Get_twitter_profileResponse>(url);
  }

  /**
   * Attach Twitter profile
   * <div><div>
  <span style= "display: inline-block;
    width: 25px; height: 25px;
    background-color: red;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border: 2px solid black;
    border-radius: 20%;
    margin-right: 10px;">
    !
  </span>
  <span><strong>As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.</strong></span>
</div></div>
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async attach_twitter_profile(params: Attach_twitter_profileParams, data: Attach_twitter_profileRequestBody): Promise<Attach_twitter_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/twitter/accounts/${params.accountId}`;
    return this.client.post<Attach_twitter_profileResponse>(url, data);
  }

  /**
   * Upload CSV
   * 
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async upload_csv(params: Upload_csvParams, data: Upload_csvRequestBody): Promise<Upload_csvResponse> {
    const url = `/social-media-posting/${params.locationId}/csv`;
    return this.client.post<Upload_csvResponse>(url, data);
  }

  /**
   * Get Upload Status
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_upload_status(params: Get_upload_statusParams): Promise<Get_upload_statusResponse> {
    const url = `/social-media-posting/${params.locationId}/csv`;
    const queryParams: Record<string, any> = {};
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.includeUsers !== undefined) queryParams.includeUsers = params.includeUsers;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    return this.client.get<Get_upload_statusResponse>(url, { params: queryParams });
  }

  /**
   * Set Accounts
   * 
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async set_accounts(params: Set_accountsParams, data: Set_accountsRequestBody): Promise<Set_accountsResponse> {
    const url = `/social-media-posting/${params.locationId}/set-accounts`;
    return this.client.post<Set_accountsResponse>(url, data);
  }

  /**
   * Get CSV Post
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_csv_post(params: Get_csv_postParams): Promise<Get_csv_postResponse> {
    const url = `/social-media-posting/${params.locationId}/csv/${params.id}`;
    const queryParams: Record<string, any> = {};
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    return this.client.get<Get_csv_postResponse>(url, { params: queryParams });
  }

  /**
   * Start CSV Finalize
   * 
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async start_csv_finalize(params: Start_csv_finalizeParams, data: Start_csv_finalizeRequestBody): Promise<Start_csv_finalizeResponse> {
    const url = `/social-media-posting/${params.locationId}/csv/${params.id}`;
    return this.client.patch<Start_csv_finalizeResponse>(url, data);
  }

  /**
   * Delete CSV
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_csv(params: Delete_csvParams): Promise<Delete_csvResponse> {
    const url = `/social-media-posting/${params.locationId}/csv/${params.id}`;
    return this.client.delete<Delete_csvResponse>(url);
  }

  /**
   * Delete CSV Post
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async delete_csv_post(params: Delete_csv_postParams): Promise<Delete_csv_postResponse> {
    const url = `/social-media-posting/${params.locationId}/csv/${params.csvId}/post/${params.postId}`;
    return this.client.delete<Delete_csv_postResponse>(url);
  }

  /**
   * Starts OAuth For Tiktok Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "tiktok" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Tiktok account details using below API -
  API: '/social-media-posting/oauth/tiktok/accounts/:accountId' 

  Method: GET
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_tiktok_oauth(params: Start_tiktok_oauthParams): Promise<Start_tiktok_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_tiktok_oauthResponse>('/social-media-posting/oauth/tiktok/start', { params: queryParams });
  }

  /**
   * Get Tiktok profile
   * Get Tiktok profile
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_tiktok_profile(params: Get_tiktok_profileParams): Promise<Get_tiktok_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/tiktok/accounts/${params.accountId}`;
    return this.client.get<Get_tiktok_profileResponse>(url);
  }

  /**
   * Attach Tiktok profile
   * Attach Tiktok profile
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async attach_tiktok_profile(params: Attach_tiktok_profileParams, data: Attach_tiktok_profileRequestBody): Promise<Attach_tiktok_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/tiktok/accounts/${params.accountId}`;
    return this.client.post<Attach_tiktok_profileResponse>(url, data);
  }

  /**
   * Starts OAuth For Tiktok Business Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok-Business login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener('message', 
      function(e) {
        if (e.data && e.data.page === 'social_media_posting') {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: "close" 
      page: string,                  Ex: "social-media-posting" 
      platform: string,              Ex: "tiktok-business" 
      placement: string,             Ex: "placement" 
      accountId: string,             Ex: "658a9b6833b91e0ecb8f3958" 
      reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"] 
    }
  ### The accountId retrieved from above data can be used to fetch Tiktok-Business account details using below API -
  API: '/social-media-posting/oauth/tiktok-business/accounts/:accountId' 

  Method: GET
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async start_tiktok_business_oauth(params: Start_tiktok_business_oauthParams): Promise<Start_tiktok_business_oauthResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.userId !== undefined) queryParams.userId = params.userId;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.reconnect !== undefined) queryParams.reconnect = params.reconnect;
    return this.client.get<Start_tiktok_business_oauthResponse>('/social-media-posting/oauth/tiktok-business/start', { params: queryParams });
  }

  /**
   * Get Tiktok Business profile
   * Get Tiktok Business profile
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_tiktok_business_profile(params: Get_tiktok_business_profileParams): Promise<Get_tiktok_business_profileResponse> {
    const url = `/social-media-posting/oauth/${params.locationId}/tiktok-business/accounts/${params.accountId}`;
    return this.client.get<Get_tiktok_business_profileResponse>(url);
  }

  /**
   * Get categories by location id
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_categories_location_id(params: Get_categories_location_idParams): Promise<Get_categories_location_idResponse> {
    const url = `/social-media-posting/${params.locationId}/categories`;
    const queryParams: Record<string, any> = {};
    if (params.searchText !== undefined) queryParams.searchText = params.searchText;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    return this.client.get<Get_categories_location_idResponse>(url, { params: queryParams });
  }

  /**
   * Get categories by id
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_categories_id(params: Get_categories_idParams): Promise<Get_categories_idResponse> {
    const url = `/social-media-posting/${params.locationId}/categories/${params.id}`;
    return this.client.get<Get_categories_idResponse>(url);
  }

  /**
   * Get tags by location id
   * 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_tags_location_id(params: Get_tags_location_idParams): Promise<Get_tags_location_idResponse> {
    const url = `/social-media-posting/${params.locationId}/tags`;
    const queryParams: Record<string, any> = {};
    if (params.searchText !== undefined) queryParams.searchText = params.searchText;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    return this.client.get<Get_tags_location_idResponse>(url, { params: queryParams });
  }

  /**
   * Get tags by ids
   * 
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async get_tags_by_ids(params: Get_tags_by_idsParams, data: Get_tags_by_idsRequestBody): Promise<Get_tags_by_idsResponse> {
    const url = `/social-media-posting/${params.locationId}/tags/details`;
    return this.client.post<Get_tags_by_idsResponse>(url, data);
  }
}
