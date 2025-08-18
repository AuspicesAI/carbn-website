import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassyIconProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

export function GlassyIcon({ icon, size = "md", className }: GlassyIconProps) {
  return (
    <div
      className={cn(
        // Base styles - matching FeatureCard design
        "rounded-2xl flex items-center justify-center",
        "bg-gradient-to-br from-primary/20 to-purple-600/20",
        "backdrop-blur-sm border border-primary/20",
        // Hover effects - matching FeatureCard
        "group-hover:scale-105 transition-transform duration-300",
        // Size classes
        sizeClasses[size],
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center text-primary",
          iconSizeClasses[size],
        )}
      >
        {icon}
      </div>
    </div>
  );
}
