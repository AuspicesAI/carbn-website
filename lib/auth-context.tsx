"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { getCurrentUser, signOut, AuthUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import "@/lib/amplify-config";

interface Team {
  id: string;
  displayName: string;
  createdAt: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isInitialized: boolean;
  teams: Team[];
  selectedTeam: Team | null;
  signOut: () => Promise<void>;
  createTeam: (params: { displayName: string }) => Promise<void>;
  setSelectedTeam: (team: Team) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeamState] = useState<Team | null>(null);

  const loadUserTeams = useCallback(async (userId: string) => {
    try {
      // TODO: Implement API call to load user teams using DynamoDB
      // For now, using localStorage as a simple solution
      const storedTeams = localStorage.getItem(`teams_${userId}`);
      if (storedTeams) {
        const parsedTeams = JSON.parse(storedTeams);
        setTeams(parsedTeams);

        // Auto-select first team if none selected
        const storedSelectedTeam = localStorage.getItem(
          `selectedTeam_${userId}`,
        );
        if (storedSelectedTeam) {
          setSelectedTeamState(JSON.parse(storedSelectedTeam));
        } else if (parsedTeams.length > 0) {
          setSelectedTeamState(parsedTeams[0]);
          localStorage.setItem(
            `selectedTeam_${userId}`,
            JSON.stringify(parsedTeams[0]),
          );
        }
      }
    } catch (error) {
      console.error("Error loading user teams:", error);
      setTeams([]);
      setSelectedTeamState(null);
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      setIsLoading(true);
      await signOut({ global: true });
      setUser(null);
      setTeams([]);
      setSelectedTeamState(null);
      // Don't clear localStorage, keep teams for when user signs back in
      // Only clear selected team for current session
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith("selectedTeam_")) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error("Error signing out:", error);
      // Force redirect even if signOut fails
      window.location.href = "/";
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTeam = useCallback(
    async ({ displayName }: { displayName: string }) => {
      if (!user) return;

      try {
        const newTeam: Team = {
          id: `team_${user.userId}`,
          displayName,
          createdAt: new Date().toISOString(),
        };

        const updatedTeams = [...teams, newTeam];
        setTeams(updatedTeams);
        setSelectedTeamState(newTeam);

        // Store in localStorage
        localStorage.setItem(
          `teams_${user.userId}`,
          JSON.stringify(updatedTeams),
        );
        localStorage.setItem(
          `selectedTeam_${user.userId}`,
          JSON.stringify(newTeam),
        );
      } catch (error) {
        console.error("Error creating team:", error);
      }
    },
    [user, teams],
  );

  const refreshUser = useCallback(async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      // Load teams for the user using DynamoDB
      await loadUserTeams(currentUser.userId);
    } catch (error) {
      setUser(null);
      setTeams([]);
      setSelectedTeamState(null);
    } finally {
      setIsLoading(false);
      setIsInitialized(true);
    }
  }, [loadUserTeams]);

  const setSelectedTeam = useCallback(
    async (team: Team) => {
      if (!user) return;
      try {
        setSelectedTeamState(team);
        localStorage.setItem(
          `selectedTeam_${user.userId}`,
          JSON.stringify(team),
        );
      } catch (error) {
        console.error("Error setting selected team:", error);
      }
    },
    [user],
  );

  useEffect(() => {
    refreshUser();

    // Listen for auth events
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signedIn":
          refreshUser();
          break;
        case "signedOut":
          setUser(null);
          setTeams([]);
          setSelectedTeamState(null);
          setIsLoading(false);
          setIsInitialized(true);
          // Redirect to root page after logout
          window.location.href = "/";
          break;
      }
    });

    return unsubscribe;
  }, [refreshUser]);

  const value: AuthContextType = {
    user,
    isLoading,
    isInitialized,
    teams,
    selectedTeam,
    signOut: handleSignOut,
    createTeam,
    setSelectedTeam,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Hook to replace Stack Auth's useUser with redirect functionality
export function useUser(options?: { or?: "redirect" }) {
  const {
    user,
    isLoading,
    isInitialized,
    teams,
    selectedTeam,
    createTeam,
    setSelectedTeam,
  } = useAuth();

  useEffect(() => {
    if (isInitialized && !isLoading && !user && options?.or === "redirect") {
      window.location.href = "/";
    }
  }, [user, isLoading, isInitialized, options]);

  // Don't return anything until auth is initialized
  if (!isInitialized || isLoading) return null;
  if (!user) return null;

  return {
    ...user,
    useTeams: () => teams,
    selectedTeam,
    setSelectedTeam,
    createTeam,
  };
}
