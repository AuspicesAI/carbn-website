"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithRedirect, getCurrentUser } from "aws-amplify/auth";
import { Button } from "@/components/ui/button";
import "@/lib/amplify-config";

export default function SignInPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const attemptedRef = useRef(false);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (attemptedRef.current) return;
      attemptedRef.current = true;

      try {
        // Check if user is already authenticated
        const user = await getCurrentUser();
        if (user) {
          console.log("User already authenticated, redirecting to dashboard");
          router.replace("/dashboard");
          return;
        }
      } catch (err) {
        // User not authenticated, proceed with sign-in
        console.log("User not authenticated, proceeding with sign-in");
      }

      setIsChecking(false);
      setIsRedirecting(true);
      // Call without provider to show Hosted UI with all options
      signInWithRedirect();
    };

    checkAuthAndRedirect();
  }, [router]);

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
            {isChecking
              ? "Checking authentication status..."
              : "Redirecting to Carbn sign-in page..."}
          </p>
          <Button
            type="button"
            onClick={() => signInWithRedirect()}
            disabled={isChecking || isRedirecting}
            size="lg"
          >
            {isChecking
              ? "Checking..."
              : isRedirecting
                ? "Redirecting…"
                : "Go to Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
}
