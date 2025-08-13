/**
 * Secure error message mapping for AWS Cognito errors
 * Maps internal Cognito error codes to user-friendly, secure messages
 * that don't expose sensitive system information
 */

export interface AuthError {
  code: string;
  message: string;
  userMessage: string;
}

const ERROR_MESSAGES: Record<string, string> = {
  // Sign In Errors
  'NotAuthorizedException': 'Invalid email or password. Please try again.',
  'UserNotConfirmedException': 'Please verify your email address before signing in.',
  'UserNotFoundException': 'Invalid email or password. Please try again.',
  'PasswordResetRequiredException': 'Password reset is required. Please check your email.',
  'TooManyRequestsException': 'Too many attempts. Please try again later.',
  'TooManyFailedAttemptsException': 'Account temporarily locked due to too many failed attempts.',
  
  // Sign Up Errors
  'UsernameExistsException': 'An account with this email already exists.',
  'InvalidPasswordException': 'Password does not meet requirements. Please use at least 8 characters.',
  'InvalidParameterException': 'Please check your information and try again.',
  'CodeDeliveryFailureException': 'Unable to send verification email. Please try again.',
  
  // General Errors
  'NetworkError': 'Connection error. Please check your internet connection.',
  'InternalErrorException': 'Something went wrong. Please try again.',
  'ServiceUnavailableException': 'Service temporarily unavailable. Please try again later.',
  'ThrottlingException': 'Too many requests. Please wait a moment and try again.',
  
  // Default fallback
  'UnknownError': 'Something went wrong. Please try again.',
};

/**
 * Sanitizes AWS Cognito error messages to prevent information disclosure
 * @param error - The error object from AWS Cognito
 * @returns A user-friendly, secure error message
 */
export function sanitizeAuthError(error: any): string {
  // Handle different error object structures
  const errorCode = error?.code || error?.name || error?.__type || 'UnknownError';
  const errorMessage = error?.message || '';
  
  // Log the actual error for debugging (server-side only)
  if (typeof window === 'undefined') {
    console.error('Auth Error:', {
      code: errorCode,
      message: errorMessage,
      timestamp: new Date().toISOString(),
    });
  }
  
  // Return sanitized message
  const sanitizedMessage = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES['UnknownError'];
  
  // Additional security: never expose internal error details to client
  return sanitizedMessage;
}

/**
 * Validates if an error should be shown to the user
 * Some errors should be handled silently for security
 */
export function shouldShowError(error: any): boolean {
  const errorCode = error?.code || error?.name || error?.__type;
  
  // Don't show user enumeration errors that could help attackers
  const silentErrors = [
    'UserNotFoundException', // Don't confirm if user exists
  ];
  
  return !silentErrors.includes(errorCode);
}

/**
 * Enhanced error handler for authentication operations
 */
export function handleAuthError(error: any): {
  message: string;
  shouldShow: boolean;
  isRetryable: boolean;
} {
  const errorCode = error?.code || error?.name || error?.__type || 'UnknownError';
  
  const retryableErrors = [
    'NetworkError',
    'ServiceUnavailableException',
    'ThrottlingException',
    'InternalErrorException',
  ];
  
  return {
    message: sanitizeAuthError(error),
    shouldShow: shouldShowError(error),
    isRetryable: retryableErrors.includes(errorCode),
  };
}
