import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface SocialButtonProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  className?: string;
}

const SocialButton = React.forwardRef<
  React.ElementRef<typeof Link>,
  SocialButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center h-9 w-9 rounded-xl text-foreground",
        "bg-gradient-to-r from-purple-50/15 via-white/15 to-purple-50/15",
        "dark:bg-gradient-to-r dark:from-purple-900/10 dark:via-white/3 dark:to-purple-900/10",
        "backdrop-blur-2xl border border-purple-400/30 dark:border-purple-400/25",
        // No base shadow - clean default state
        // Hover effects - subtle glow
        "hover:bg-gradient-to-r hover:from-purple-50/20 hover:via-white/20 hover:to-purple-50/20",
        "dark:hover:bg-gradient-to-r dark:hover:from-purple-900/15 dark:hover:via-white/8 dark:hover:to-purple-900/15",
        "hover:shadow-[0_12px_40px_rgba(147,51,234,0.25),0_6px_20px_rgba(147,51,234,0.15)]",
        "dark:hover:shadow-[0_12px_40px_rgba(147,51,234,0.3),0_6px_20px_rgba(147,51,234,0.18)]",
        "hover:border-purple-400/70 dark:hover:border-purple-400/45",
        "transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
});
SocialButton.displayName = "SocialButton";

export { SocialButton };
