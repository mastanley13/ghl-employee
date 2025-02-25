// Generated TypeScript interfaces for blogs

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface UrlSlugCheckResponseDTO {
  exists: boolean;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface UpdateBlogPostParams {
  title: string;
  locationId: string;
  blogId: string;
  imageUrl: string;
  description: string;
  rawHTML: string;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  imageAltText: string;
  categories: string[];
  tags?: string[];
  author: string;
  urlSlug: string;
  canonicalLink?: string;
  publishedAt: string;
}

export interface BlogPostUpdateResponseWrapperDTO {
  updatedBlogPost: BlogPostResponseDTO;
}

export interface CreateBlogPostParams {
  title: string;
  locationId: string;
  blogId: string;
  imageUrl: string;
  description: string;
  rawHTML: string;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  imageAltText: string;
  categories: string[];
  tags?: string[];
  author: string;
  urlSlug: string;
  canonicalLink?: string;
  publishedAt: string;
}

export interface BlogPostCreateResponseWrapperDTO {
  data: BlogPostResponseDTO;
}

export interface AuthorsResponseDTO {
  authors: AuthorResponseDTO[];
}

export interface AuthorResponseDTO {
  _id: string;
  name: string;
  locationId: string;
  updatedAt: string;
  canonicalLink: string;
}

export interface CategoriesResponseDTO {
  categories: CategoryResponseDTO[];
}

export interface CategoryResponseDTO {
  _id: string;
  label?: string;
  locationId: string;
  updatedAt: string;
  canonicalLink: string;
  urlSlug: string;
}

export interface BlogGetResponseWrapperDTO {
  data: BlogResponseDTO[];
}

export interface BlogResponseDTO {
  _id: string;
  name: string;
}

export interface BlogPostGetResponseWrapperDTO {
  blogs: BlogPostResponseDTO[];
}

export interface BlogPostResponseDTO {
  categories: string[];
  tags?: string[];
  archived: boolean;
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: string;
  imageAltText: string;
  urlSlug: string;
  canonicalLink?: string;
  author?: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Check_url_slug_existsParams {
  Authorization: string;
  Version: string;
  urlSlug: string;
  locationId: string;
  postId?: string;
}

export type Check_url_slug_existsResponse = UrlSlugCheckResponseDTO;

export interface Update_blog_postParams {
  Authorization: string;
  Version: string;
}

export type Update_blog_postRequestBody = UpdateBlogPostParams;

export type Update_blog_postResponse = BlogPostUpdateResponseWrapperDTO;

export interface Create_blog_postParams {
  Authorization: string;
  Version: string;
}

export type Create_blog_postRequestBody = CreateBlogPostParams;

export type Create_blog_postResponse = BlogPostCreateResponseWrapperDTO;

export interface Get_all_blog_authors_by_locationParams {
  Authorization: string;
  Version: string;
  locationId: string;
  limit: number;
  offset: number;
}

export type Get_all_blog_authors_by_locationResponse = AuthorsResponseDTO;

export interface Get_all_categories_by_locationParams {
  Authorization: string;
  Version: string;
  locationId: string;
  limit: number;
  offset: number;
}

export type Get_all_categories_by_locationResponse = CategoriesResponseDTO;

export interface Get_blog_postParams {
  Authorization: string;
  Version: string;
  locationId: string;
  blogId: string;
  limit: number;
  offset: number;
  searchTerm?: string;
  status?: string;
}

export type Get_blog_postResponse = BlogPostGetResponseWrapperDTO;

export interface Get_blogsParams {
  Authorization: string;
  Version: string;
  locationId: string;
  skip: number;
  limit: number;
  searchTerm?: string;
}

export type Get_blogsResponse = BlogGetResponseWrapperDTO;

