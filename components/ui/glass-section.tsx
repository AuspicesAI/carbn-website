import React from "react";
import clsx from "clsx";

export function GlassSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={clsx(
        "rounded-2xl border shadow-lg",
        // Glassmorphism background with subtle border
        "bg-white/10 dark:bg-zinc-900/30 border-white/20 dark:border-white/10 backdrop-blur-xl",
        // Light bevel/shadow for depth
        "ring-1 ring-black/5",
        className
      )}
    >
      {children}
    </section>
  );
}
