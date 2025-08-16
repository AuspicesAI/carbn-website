import * as React from "react"
import { cn } from "@/lib/utils"
import { GradientHeading } from "@/components/ui/gradient-heading"

interface SectionHeaderProps {
  title: string
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
      <GradientHeading className="mb-6">{title}</GradientHeading>
      {description ? (
        <p className={cn("text-xl text-muted-foreground leading-relaxed", align === "center" ? "mx-auto max-w-4xl" : undefined)}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
