import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Carbn Dashboard: Coming Soon",
};

export default function DashboardPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Dashboard Not Ready Yet</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              We&apos;re working hard to bring you an amazing dashboard
              experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
