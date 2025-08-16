"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
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
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeamState] = useState<Team | null>(null);

  const refreshUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      // Load teams for the user (you'll need to implement this API)
      await loadUserTeams(currentUser.userId);
    } catch (error) {
      setUser(null);
      setTeams([]);
      setSelectedTeamState(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUserTeams = async (userId: string) => {
    // TODO: Implement API call to load user teams
    // For now, using localStorage as a simple solution
    const storedTeams = localStorage.getItem(`teams_${userId}`);
    if (storedTeams) {
      const parsedTeams = JSON.parse(storedTeams);
      setTeams(parsedTeams);

      // Auto-select first team if none selected
      const storedSelectedTeam = localStorage.getItem(`selectedTeam_${userId}`);
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
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      setTeams([]);
      setSelectedTeamState(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const createTeam = async ({ displayName }: { displayName: string }) => {
    if (!user) return;

    const newTeam: Team = {
      id: `team_${Date.now()}`, // In production, use proper UUID
      displayName,
      createdAt: new Date().toISOString(),
    };

    const updatedTeams = [...teams, newTeam];
    setTeams(updatedTeams);
    setSelectedTeamState(newTeam);

    // Store in localStorage (in production, use proper API)
    localStorage.setItem(`teams_${user.userId}`, JSON.stringify(updatedTeams));
    localStorage.setItem(
      `selectedTeam_${user.userId}`,
      JSON.stringify(newTeam),
    );
  };

  const setSelectedTeam = (team: Team) => {
    if (!user) return;
    setSelectedTeamState(team);
    localStorage.setItem(`selectedTeam_${user.userId}`, JSON.stringify(team));
  };

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
          break;
      }
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
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
  const { user, isLoading, teams, selectedTeam, createTeam, setSelectedTeam } =
    useAuth();

  useEffect(() => {
    if (!isLoading && !user && options?.or === "redirect") {
      window.location.href = "/auth/signin";
    }
  }, [user, isLoading, options]);

  if (!user) return null;

  return {
    ...user,
    useTeams: () => teams,
    selectedTeam,
    setSelectedTeam,
    createTeam,
  };
}
