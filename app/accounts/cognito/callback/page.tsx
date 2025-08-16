'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { fetchAuthSession } from 'aws-amplify/auth';
import '@/lib/amplify-config';

export default function CognitoCallbackPage() {
  const router = useRouter();
  const { user, isLoading, refreshUser } = useAuth();

  useEffect(() => {
    // Trigger session fetch which ensures OAuth response is processed
    fetchAuthSession().finally(() => {
      // After session attempt, refresh user state
      refreshUser().catch(() => undefined);
    });
  }, [refreshUser]);

  useEffect(() => {
    // Ensure user state picks up after OAuth redirect
    // If not yet loaded, try a refresh once
    if (!user && !isLoading) {
      refreshUser().catch(() => undefined);
    }
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, isLoading, refreshUser, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">Completing sign-in…</h2>
        <p className="mt-4 text-sm text-gray-600">
          Please wait while we finalize your session.
        </p>
      </div>
    </div>
  );
}
