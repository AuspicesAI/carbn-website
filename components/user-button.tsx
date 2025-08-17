"use client";

import { useAuth } from "@/lib/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import Link from "next/link";

export function UserButton() {
  const { user, signOut } = useAuth();
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchAuthSession()
        .then((session) => {
          // Extract user info from ID token claims
          const idToken = session.tokens?.idToken;
          if (idToken) {
            const claims = idToken.payload;
            setUserInfo({
              email: claims.email,
              given_name: claims.given_name,
              family_name: claims.family_name,
              name: claims.name,
              nickname: claims.nickname,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching auth session:", error);
        });
    }
  }, [user]);

  if (!user) return null;

  // Get user info from ID token claims or fallback to user object
  const userEmail = userInfo?.email || user.signInDetails?.loginId || "User";
  const displayName =
    userInfo?.given_name ||
    userInfo?.name ||
    userInfo?.nickname ||
    userEmail.split("@")[0];
  const userInitials = displayName.slice(0, 2).toUpperCase() || "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 rounded-full p-1 hover:bg-gray-100 transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage src={undefined} alt={userEmail} />
            <AvatarFallback className="text-xs">{userInitials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
