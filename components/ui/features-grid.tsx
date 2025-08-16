import * as React from "react"
import { cn } from "@/lib/utils"
import { FeatureCard } from "@/components/ui/feature-card"

export interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesGridProps {
  items: FeatureItem[]
  className?: string
}

export function FeaturesGrid({ items, className }: FeaturesGridProps) {
  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-8", className)}>
      {items.map((f, i) => (
        <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
      ))}
    </div>
  )
}
