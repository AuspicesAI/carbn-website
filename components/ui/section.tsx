import * as React from "react"
import { cn } from "@/lib/utils"

type Spacing = "none" | "sm" | "md" | "lg"

const spacingMap: Record<Spacing, string> = {
  none: "py-0",
  sm: "py-12",
  md: "py-16",
  lg: "py-24",
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  spacing?: Spacing
}

export function Section({ id, spacing = "lg", className, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn(spacingMap[spacing], className)} {...rest}>
      {children}
    </section>
  )
}
