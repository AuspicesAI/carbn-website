import React from "react";
import clsx from "clsx";

type GradientHeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  center?: boolean;
};

const sizeMap: Record<NonNullable<GradientHeadingProps["size"]>, string> = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
  xl: "text-5xl md:text-6xl",
};

export function GradientHeading({
  as = "h1",
  children,
  className,
  size = "lg",
  center = true,
}: GradientHeadingProps) {
  const Comp = as as any;
  return (
    <Comp
      className={clsx(
        sizeMap[size],
        "font-extrabold tracking-tight",
        // Gradient text
        "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent",
        // Punchy glow to feel glassy/illuminated
        "drop-shadow-[0_2px_12px_rgba(168,85,247,0.35)]",
        center && "text-center",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
