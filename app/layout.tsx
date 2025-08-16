import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { AuthProvider } from "@/lib/auth-context";
import "@/lib/amplify-config";
import { GlassBackground } from "@/components/ui/glass-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuspicesAI: Security That Is Not Artificial",
  description: "Defensive AI solutions that keep you protected. Custom security solutions built immediately.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GlassBackground>
          <Provider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </Provider>
        </GlassBackground>
      </body>
    </html>
  );
}
