'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { useAuth } from '@/lib/auth-context';
import '@/lib/amplify-config';

export default function CognitoCallbackPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Wait a moment for Amplify to process the OAuth callback
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Try to get the current user after OAuth callback
        const user = await getCurrentUser();
        
        if (user) {
          // Refresh the auth context
          await refreshUser();
          // Redirect to dashboard
          router.replace('/dashboard');
        } else {
          setError('Authentication failed. Please try again.');
          setTimeout(() => router.replace('/auth/signin'), 3000);
        }
      } catch (err) {
        console.error('OAuth callback error:', err);
        setError('Authentication failed. Please try again.');
        setTimeout(() => router.replace('/auth/signin'), 3000);
      } finally {
        setIsProcessing(false);
      }
    };

    handleCallback();
  }, [router, refreshUser]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h2 className="mt-6 text-2xl font-semibold text-red-600">Authentication Error</h2>
          <p className="mt-4 text-sm text-gray-600">{error}</p>
          <p className="mt-2 text-xs text-gray-500">Redirecting to sign-in page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          {isProcessing ? 'Completing sign-in…' : 'Redirecting to dashboard…'}
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Please wait while we finalize your session.
        </p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
