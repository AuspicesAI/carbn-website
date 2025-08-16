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
  xl: "w-20 h-20"
};

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8", 
  xl: "w-10 h-10"
};

export function GlassyIcon({ icon, size = "md", className }: GlassyIconProps) {
  return (
    <div
      className={cn(
        // Base styles - perfect centering
        "rounded-2xl flex items-center justify-center relative",
        // Glass morphism effect - compatible with both modes
        "backdrop-blur-md bg-gradient-to-br from-background/80 to-background/40",
        "border border-border/50 dark:border-border/30",
        // Enhanced shadows for both modes
        "shadow-lg shadow-black/10 dark:shadow-black/30",
        // Subtle inner glow - fixed for light mode
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-30 dark:before:from-white/10",
        // Hover effects - removed scale
        "transition-all duration-300",
        "hover:bg-gradient-to-br hover:from-background/90 hover:to-background/60",
        "hover:shadow-xl hover:shadow-primary/15 dark:hover:shadow-primary/10",
        "hover:border-primary/40",
        // Size classes
        sizeClasses[size],
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center text-primary relative z-10",
        iconSizeClasses[size]
      )}>
        {icon}
      </div>
    </div>
  );
}
