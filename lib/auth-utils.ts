/**
 * Authentication Utilities Module
 * Provides modular, reusable authentication functions following best practices
 */

import { signIn, signUp, signOut, getCurrentUser } from 'aws-amplify/auth';
import { sanitizeAuthError, handleAuthError } from './auth-errors';

// Types for better type safety
export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: any;
}

/**
 * Secure user registration with sanitized error handling
 */
export async function registerUser(userData: SignUpData): Promise<AuthResult> {
  try {
    const { email, name, password } = userData;
    
    // Input validation
    if (!email || !name || !password) {
      return {
        success: false,
        error: 'All fields are required.',
      };
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Please enter a valid email address.',
      };
    }
    
    // Password strength validation
    if (password.length < 8) {
      return {
        success: false,
        error: 'Password must be at least 8 characters long.',
      };
    }
    
    const result = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          name,
        },
      },
    });
    
    return {
      success: true,
      user: result,
    };
    
  } catch (error: any) {
    const errorHandler = handleAuthError(error);
    
    return {
      success: false,
      error: errorHandler.message,
    };
  }
}

/**
 * Secure user authentication with sanitized error handling
 */
export async function authenticateUser(credentials: SignInData): Promise<AuthResult> {
  try {
    const { email, password } = credentials;
    
    // Input validation
    if (!email || !password) {
      return {
        success: false,
        error: 'Email and password are required.',
      };
    }
    
    const result = await signIn({
      username: email,
      password,
    });
    
    return {
      success: true,
      user: result,
    };
    
  } catch (error: any) {
    const errorHandler = handleAuthError(error);
    
    return {
      success: false,
      error: errorHandler.message,
    };
  }
}

/**
 * Secure user logout
 */
export async function logoutUser(): Promise<AuthResult> {
  try {
    await signOut();
    
    return {
      success: true,
    };
    
  } catch (error: any) {
    return {
      success: false,
      error: sanitizeAuthError(error),
    };
  }
}

/**
 * Get current authenticated user safely
 */
export async function getCurrentAuthUser(): Promise<AuthResult> {
  try {
    const user = await getCurrentUser();
    
    return {
      success: true,
      user,
    };
    
  } catch (error: any) {
    return {
      success: false,
      error: sanitizeAuthError(error),
    };
  }
}

/**
 * Validation utilities
 */
export const AuthValidation = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  password: (password: string): { valid: boolean; message?: string } => {
    if (password.length < 8) {
      return {
        valid: false,
        message: 'Password must be at least 8 characters long.',
      };
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one lowercase letter.',
      };
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one uppercase letter.',
      };
    }
    
    if (!/(?=.*\d)/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one number.',
      };
    }
    
    return { valid: true };
  },
  
  name: (name: string): boolean => {
    return name.trim().length >= 2;
  },
};

/**
 * Rate limiting utilities (client-side basic protection)
 */
class RateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private maxAttempts = 5;
  private windowMs = 15 * 60 * 1000; // 15 minutes
  
  canAttempt(identifier: string): boolean {
    const now = Date.now();
    const record = this.attempts.get(identifier);
    
    if (!record) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }
    
    // Reset if window has passed
    if (now - record.lastAttempt > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }
    
    // Check if under limit
    if (record.count < this.maxAttempts) {
      record.count++;
      record.lastAttempt = now;
      return true;
    }
    
    return false;
  }
  
  getRemainingTime(identifier: string): number {
    const record = this.attempts.get(identifier);
    if (!record) return 0;
    
    const now = Date.now();
    const remaining = this.windowMs - (now - record.lastAttempt);
    return Math.max(0, remaining);
  }
}

export const authRateLimiter = new RateLimiter();
