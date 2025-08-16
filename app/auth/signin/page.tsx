"use client";

import { useEffect, useRef, useState } from "react";
import { signInWithRedirect } from "aws-amplify/auth";
import { Button } from "@/components/ui/button";
import "@/lib/amplify-config";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/15 dark:bg-white/5 backdrop-blur-xl border border-white/25 dark:border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-lg dark:shadow-black/5">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
            Redirecting to sign-in
          </h2>
        </div>
        <div className="mt-8 space-y-6 text-center">
          <p className="text-muted-foreground">
            You are being redirected to the AuspicesAI sign-in page...
          </p>
          <Button
            type="button"
            onClick={() => signInWithRedirect()}
            disabled={isRedirecting}
            size="lg"
          >
            {isRedirecting ? "Redirecting…" : "Go to Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
}
