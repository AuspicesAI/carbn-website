'use client';

import { useEffect, useRef, useState } from 'react';
import { signInWithRedirect } from 'aws-amplify/auth';
import '@/lib/amplify-config';

export default function SignInPage() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const attemptedRef = useRef(false);

  useEffect(() => {
    // Avoid multiple redirects due to double-invocation in React strict mode
    if (!attemptedRef.current) {
      attemptedRef.current = true;
      setIsRedirecting(true);
      signInWithRedirect();
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Redirecting to secure sign-in
          </h2>
        </div>
        <div className="mt-8 space-y-6 text-center">
          <p className="text-gray-600">You are being redirected to the AuspicesAI secure sign-in page...</p>
          <button
            type="button"
            onClick={() => signInWithRedirect()}
            disabled={isRedirecting}
            className="inline-flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
          >
            {isRedirecting ? 'Redirecting…' : 'Go to Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
