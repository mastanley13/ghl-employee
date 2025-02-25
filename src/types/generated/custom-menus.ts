// Generated TypeScript interfaces for custom-menus

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

export interface IconSchemaOptional {
  name?: string;
  fontFamily?: 'fab' | 'fas' | 'far';
}

export interface CustomMenuSchema {
  id?: string;
  icon?: any;
  title?: string;
  url?: string;
  order?: number;
  showOnCompany?: boolean;
  showOnLocation?: boolean;
  showToAllLocations?: boolean;
  locations?: string[];
  openMode?: 'iframe' | 'new_tab' | 'current_tab';
  userRole?: 'all' | 'admin' | 'user';
  allowCamera?: boolean;
  allowMicrophone?: boolean;
}

export interface GetCustomMenusResponseDTO {
  customMenus?: CustomMenuSchema[];
  totalLinks?: number;
}

export interface GetSingleCustomMenusSuccessfulResponseDTO {
  customMenu?: any;
}

export interface DeleteCustomMenuSuccessfulResponseDTO {
  success?: boolean;
  message?: string;
  deletedMenuId?: string;
  deletedAt?: string;
}

export interface IconSchema {
  name: string;
  fontFamily: 'fab' | 'fas' | 'far';
}

export interface CreateCustomMenuDTO {
  title: string;
  url: string;
  icon: any;
  showOnCompany: boolean;
  showOnLocation: boolean;
  showToAllLocations: boolean;
  openMode: 'iframe' | 'new_tab' | 'current_tab';
  locations: string[];
  userRole: 'all' | 'admin' | 'user';
  allowCamera?: boolean;
  allowMicrophone?: boolean;
}

export interface UpdateCustomMenuDTO {
  title?: string;
  url?: string;
  icon?: any;
  showOnCompany?: boolean;
  showOnLocation?: boolean;
  showToAllLocations?: boolean;
  openMode?: 'iframe' | 'new_tab' | 'current_tab';
  locations?: string[];
  userRole?: 'all' | 'admin' | 'user';
  allowCamera?: boolean;
  allowMicrophone?: boolean;
}

export interface UpdateCustomMenuLinkResponseDTO {
  success?: boolean;
  customMenu?: any;
}

export interface Get_custom_menu_by_idParams {
  Authorization: string;
  Version: string;
  customMenuId: string;
}

export type Get_custom_menu_by_idResponse = GetSingleCustomMenusSuccessfulResponseDTO;

export interface Delete_custom_menuParams {
  Authorization: string;
  Version: string;
  customMenuId: string;
}

export type Delete_custom_menuResponse = DeleteCustomMenuSuccessfulResponseDTO;

export interface Update_custom_menuParams {
  Authorization: string;
  Version: string;
  customMenuId: string;
}

export type Update_custom_menuRequestBody = UpdateCustomMenuDTO;

export type Update_custom_menuResponse = UpdateCustomMenuLinkResponseDTO;

export interface Get_custom_menusParams {
  Authorization: string;
  Version: string;
  locationId?: string;
  skip?: number;
  limit?: number;
  query?: string;
  showOnCompany?: boolean;
}

export type Get_custom_menusResponse = GetCustomMenusResponseDTO;

export interface Create_custom_menuParams {
  Authorization: string;
  Version: string;
}

export type Create_custom_menuRequestBody = CreateCustomMenuDTO;

export type Create_custom_menuResponse = GetSingleCustomMenusSuccessfulResponseDTO;

