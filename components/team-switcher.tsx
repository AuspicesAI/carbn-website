"use client";

import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamSwitcherProps {
  className?: string;
}

export function TeamSwitcher({ className }: TeamSwitcherProps) {
  const { teams, selectedTeam, setSelectedTeam } = useAuth();

  if (!selectedTeam) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn("w-[200px] justify-between", className)}
        >
          {selectedTeam.displayName}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] p-0">
        <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">
          Teams
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {teams.map((team) => (
          <DropdownMenuItem
            key={team.id}
            onSelect={() => setSelectedTeam(team)}
            className="flex items-center justify-between"
          >
            <span>{team.displayName}</span>
            {selectedTeam.id === team.id && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          <span>Create team</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
