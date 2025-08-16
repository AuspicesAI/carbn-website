import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Settings",
  description: "Application settings",
};

export default function SettingsPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          {/* <h2 className="text-2xl">Your Settings</h2> */}
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Settings configuration is currently under development.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}