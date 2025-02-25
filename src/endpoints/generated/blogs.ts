import { APIClient } from '../../utils/api-client';
// Import types
import {
Check_url_slug_existsParams,
Check_url_slug_existsResponse,
Update_blog_postParams,
Update_blog_postRequestBody,
Update_blog_postResponse,
Create_blog_postParams,
Create_blog_postRequestBody,
Create_blog_postResponse,
Get_all_blog_authors_by_locationParams,
Get_all_blog_authors_by_locationResponse,
Get_all_categories_by_locationParams,
Get_all_categories_by_locationResponse,
Get_blog_postParams,
Get_blog_postResponse,
Get_blogsParams,
Get_blogsResponse
} from '../../types/generated/blogs';

export class BlogsAPI {
  private client: APIClient;

  constructor(apiKey: string) {
    this.client = new APIClient(apiKey);
  }

  /**
   * Check url slug
   * The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async check_url_slug_exists(params: Check_url_slug_existsParams): Promise<Check_url_slug_existsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.urlSlug !== undefined) queryParams.urlSlug = params.urlSlug;
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.postId !== undefined) queryParams.postId = params.postId;
    return this.client.get<Check_url_slug_existsResponse>('/blogs/posts/url-slug-exists', { params: queryParams });
  }

  /**
   * Update Blog Post
   * The "Update Blog Post" API allows you update blog post for any given blog site. Please use blogs/post-update.write
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async update_blog_post(params: Update_blog_postParams, data: Update_blog_postRequestBody): Promise<Update_blog_postResponse> {
    const url = `/blogs/posts/${params.postId}`;
    return this.client.put<Update_blog_postResponse>(url, data);
  }

  /**
   * Create Blog Post
   * The "Create Blog Post" API allows you create blog post for any given blog site. Please use blogs/post.write
   * @param params The request parameters
   * @param data The request body
   * @returns Promise with the response data
   */
  async create_blog_post(params: Create_blog_postParams, data: Create_blog_postRequestBody): Promise<Create_blog_postResponse> {
    return this.client.post<Create_blog_postResponse>('/blogs/posts', data);
  }

  /**
   * Get all authors
   * The "Get all authors" Api return the blog authors for a given location ID. Please use "blogs/author.readonly" 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_all_blog_authors_by_location(params: Get_all_blog_authors_by_locationParams): Promise<Get_all_blog_authors_by_locationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<Get_all_blog_authors_by_locationResponse>('/blogs/authors', { params: queryParams });
  }

  /**
   * Get all categories
   * The "Get all categories" Api return the blog categoies for a given location ID. Please use "blogs/category.readonly" 
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_all_categories_by_location(params: Get_all_categories_by_locationParams): Promise<Get_all_categories_by_locationResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    return this.client.get<Get_all_categories_by_locationResponse>('/blogs/categories', { params: queryParams });
  }

  /**
   * Get Blog posts by Blog ID
   * The "Get Blog posts by Blog ID" API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_blog_post(params: Get_blog_postParams): Promise<Get_blog_postResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.blogId !== undefined) queryParams.blogId = params.blogId;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.offset !== undefined) queryParams.offset = params.offset;
    if (params.searchTerm !== undefined) queryParams.searchTerm = params.searchTerm;
    if (params.status !== undefined) queryParams.status = params.status;
    return this.client.get<Get_blog_postResponse>('/blogs/posts/all', { params: queryParams });
  }

  /**
   * Get Blogs by Location ID
   * The "Get Blogs by Location ID" API allows you get blogs using Location ID.Please use blogs/list.readonly
   * @param params The request parameters
   * @returns Promise with the response data
   */
  async get_blogs(params: Get_blogsParams): Promise<Get_blogsResponse> {
    const queryParams: Record<string, any> = {};
    if (params.locationId !== undefined) queryParams.locationId = params.locationId;
    if (params.skip !== undefined) queryParams.skip = params.skip;
    if (params.limit !== undefined) queryParams.limit = params.limit;
    if (params.searchTerm !== undefined) queryParams.searchTerm = params.searchTerm;
    return this.client.get<Get_blogsResponse>('/blogs/site/all', { params: queryParams });
  }
}
