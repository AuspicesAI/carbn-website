import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-500/20 via-white/20 to-purple-600/20 dark:bg-gradient-to-r dark:from-purple-500/15 dark:via-white/8 dark:to-purple-600/15 text-foreground backdrop-blur-2xl border border-purple-400/60 dark:border-purple-400/40 shadow-[0_8px_32px_rgba(147,51,234,0.25),0_4px_16px_rgba(147,51,234,0.15)] dark:shadow-[0_8px_32px_rgba(147,51,234,0.3),0_4px_16px_rgba(147,51,234,0.2)] hover:bg-gradient-to-r hover:from-purple-500/25 hover:via-white/25 hover:to-purple-600/25 dark:hover:bg-gradient-to-r dark:hover:from-purple-500/20 dark:hover:via-white/12 dark:hover:to-purple-600/20 hover:shadow-[0_16px_48px_rgba(147,51,234,0.35),0_8px_24px_rgba(147,51,234,0.25)] dark:hover:shadow-[0_16px_48px_rgba(147,51,234,0.4),0_8px_24px_rgba(147,51,234,0.3)] hover:border-purple-400/70 dark:hover:border-purple-400/50",
        destructive:
          "bg-red-500/20 dark:bg-red-500/15 text-red-900 dark:text-red-100 backdrop-blur-2xl border border-red-500/30 dark:border-red-500/25 shadow-[0_8px_32px_rgba(239,68,68,0.15)] hover:bg-red-500/25 dark:hover:bg-red-500/20 hover:shadow-[0_12px_40px_rgba(239,68,68,0.2)]",
        outline:
          "border border-purple-400/50 dark:border-purple-400/35 bg-gradient-to-r from-purple-50/15 via-white/15 to-purple-50/15 dark:bg-gradient-to-r dark:from-purple-900/10 dark:via-white/3 dark:to-purple-900/10 text-foreground backdrop-blur-2xl shadow-[0_8px_32px_rgba(147,51,234,0.2),0_4px_16px_rgba(147,51,234,0.12)] dark:shadow-[0_8px_32px_rgba(147,51,234,0.25),0_4px_16px_rgba(147,51,234,0.15)] hover:bg-gradient-to-r hover:from-purple-50/20 hover:via-white/20 hover:to-purple-50/20 dark:hover:bg-gradient-to-r dark:hover:from-purple-900/15 dark:hover:via-white/8 dark:hover:to-purple-900/15 hover:shadow-[0_16px_48px_rgba(147,51,234,0.25),0_8px_24px_rgba(147,51,234,0.18)] dark:hover:shadow-[0_16px_48px_rgba(147,51,234,0.3),0_8px_24px_rgba(147,51,234,0.2)] hover:border-purple-400/60 dark:hover:border-purple-400/45",
        secondary:
          "bg-gradient-to-r from-purple-100/18 via-white/18 to-purple-100/18 dark:bg-gradient-to-r dark:from-purple-800/8 dark:via-white/5 dark:to-purple-800/8 text-foreground backdrop-blur-2xl border border-purple-300/40 dark:border-purple-500/25 shadow-[0_8px_32px_rgba(147,51,234,0.15),0_4px_16px_rgba(147,51,234,0.1)] dark:shadow-[0_8px_32px_rgba(147,51,234,0.2),0_4px_16px_rgba(147,51,234,0.12)] hover:bg-gradient-to-r hover:from-purple-100/22 hover:via-white/22 hover:to-purple-100/22 dark:hover:bg-gradient-to-r dark:hover:from-purple-800/12 dark:hover:via-white/10 dark:hover:to-purple-800/12 hover:shadow-[0_16px_48px_rgba(147,51,234,0.2),0_8px_24px_rgba(147,51,234,0.15)] dark:hover:shadow-[0_16px_48px_rgba(147,51,234,0.25),0_8px_24px_rgba(147,51,234,0.18)] hover:border-purple-300/50 dark:hover:border-purple-500/35",
        ghost: "text-foreground hover:bg-gradient-to-r hover:from-purple-50/20 hover:via-white/20 hover:to-purple-50/20 dark:hover:bg-gradient-to-r dark:hover:from-purple-900/15 dark:hover:via-white/15 dark:hover:to-purple-900/15 backdrop-blur-2xl hover:shadow-[0_12px_40px_rgba(147,51,234,0.18),0_6px_20px_rgba(147,51,234,0.12)] dark:hover:shadow-[0_12px_40px_rgba(147,51,234,0.22),0_6px_20px_rgba(147,51,234,0.15)]",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-12 rounded-2xl px-10 text-base",
        icon: "h-10 w-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
