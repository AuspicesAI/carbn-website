"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "aws-amplify/auth/enable-oauth-listener";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useAuth } from "@/lib/auth-context";
import "@/lib/amplify-config";

// Retry helper for fetchUserAttributes to handle token scope issues
async function fetchUserAttributesWithRetry(maxRetries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetchUserAttributes();
    } catch (error: any) {
      if (error.name === "NotAuthorizedException" && attempt < maxRetries) {
        console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
        continue;
      }
      throw error;
    }
  }
}

export default function CognitoCallbackPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hubListener = Hub.listen("auth", async ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          try {
            const user = await getCurrentUser();

            // Retry fetchUserAttributes with backoff to handle token scope issues
            let userAttributes;
            let detectedProvider = "Email";

            try {
              userAttributes = await fetchUserAttributesWithRetry();

              if (userAttributes?.identities) {
                try {
                  const identities = JSON.parse(userAttributes.identities);
                  if (Array.isArray(identities) && identities.length > 0) {
                    const provider = identities[0].providerName?.toLowerCase();
                    if (provider === "google") detectedProvider = "Google";
                    else if (provider === "loginwithamazon")
                      detectedProvider = "Amazon";
                  }
                } catch (e) {
                  console.log("Could not parse identities:", e);
                }
              }

              console.log(
                `Successfully authenticated user via ${detectedProvider}:`,
                {
                  userId: user.userId,
                  username: user.username,
                  email: userAttributes?.email,
                  name: userAttributes?.name,
                  provider: detectedProvider,
                },
              );
            } catch (attrError) {
              console.warn(
                "Could not fetch user attributes, proceeding without them:",
                attrError,
              );
              console.log(`Successfully authenticated user:`, {
                userId: user.userId,
                username: user.username,
                provider: detectedProvider,
              });
            }

            // Refresh auth context
            await refreshUser();

            // Redirect to dashboard
            router.replace("/dashboard");
          } catch (err: any) {
            console.error("Sign-in completion error:", err);
            setError("Authentication failed. Please try again.");
            setTimeout(() => router.replace("/auth/signin"), 3000);
          } finally {
            setIsProcessing(false);
          }
          break;

        case "signInWithRedirect_failure":
          console.error("Sign-in with redirect failed:", payload.data);
          setError("Authentication failed. Please try again.");
          setTimeout(() => router.replace("/auth/signin"), 3000);
          setIsProcessing(false);
          break;

        case "customOAuthState":
          console.log("Custom OAuth state:", payload.data);
          break;
      }
    });

    return () => {
      hubListener();
    };
  }, [router, refreshUser]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="max-w-xs w-full text-center">
          <h1 className="text-2xl font-semibold text-red-600">
            Authentication Error
          </h1>
          <p className="text-gray-500 mt-2">{error}</p>
          <p className="text-xs text-gray-400 mt-2">
            Redirecting to sign-in page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="max-w-xs w-full text-center">
        <h1 className="text-2xl font-semibold">
          {isProcessing ? "Completing sign-in…" : "Redirecting to dashboard…"}
        </h1>
        <p className="text-gray-500 mt-2">
          Please wait while we finalize your session.
        </p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
