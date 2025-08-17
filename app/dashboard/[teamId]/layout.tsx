"use client";

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { useUser } from "@/lib/auth-context";
import { TeamSwitcher } from "@/components/team-switcher";
import { Globe, Settings2, ShoppingBag, Users } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const navigationItems: SidebarItem[] = [
  {
    name: "Overview",
    href: "/",
    icon: Globe,
    type: "item",
  },
  {
    type: "label",
    name: "Management",
  },
  {
    name: "Products",
    href: "/products",
    icon: ShoppingBag,
    type: "item",
  },
  {
    name: "People",
    href: "/people",
    icon: Users,
    type: "item",
  },
  {
    type: "label",
    name: "Settings",
  },
  {
    name: "Configuration",
    href: "/configuration",
    icon: Settings2,
    type: "item",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const user = useUser({ or: "redirect" });
  const router = useRouter();
  const params = useParams();
  const teamId = params.teamId as string;

  if (!user) return null;

  const teams = user.useTeams();

  if (!user.selectedTeam || user.selectedTeam.id !== teamId) {
    const team = teams.find((t) => t.id === teamId);
    if (team) {
      user.setSelectedTeam(team);
    } else {
      router.push("/dashboard");
      return null;
    }
  }

  return (
    <SidebarLayout
      items={navigationItems}
      basePath={`/dashboard/${teamId}`}
      sidebarTop={<TeamSwitcher />}
      baseBreadcrumb={[
        {
          title: user.selectedTeam?.displayName || "Team",
          href: `/dashboard/${teamId}`,
        },
      ]}
    >
      {props.children}
    </SidebarLayout>
  );
}
