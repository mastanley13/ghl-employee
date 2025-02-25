// Generated TypeScript interfaces for email-isv

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface EmailNotVerifiedResponseDto {
  verified: boolean;
  message?: string;
  address?: string;
}

export interface LeadConnectorRecomandationDto {
  isEmailValid?: boolean;
}

export interface EmailVerifiedResponseDto {
  reason?: string[];
  result: 'deliverable' | 'undeliverable' | 'do_not_send' | 'unknown' | 'catch_all';
  risk: 'high' | 'low' | 'medium' | 'unknown';
  address: string;
  leadconnectorRecomendation: any;
}

export interface VerificationBodyDto {
  type: 'email' | 'contact';
  verify: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface Verify_emailParams {
  Authorization: string;
  Version: string;
  locationId: string;
}

export type Verify_emailRequestBody = VerificationBodyDto;

export type Verify_emailResponse = any;

