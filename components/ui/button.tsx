import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/8 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-black/15 dark:bg-white/8 text-foreground backdrop-blur-2xl border border-black/20 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-black/20 dark:hover:bg-white/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:border-black/30 dark:hover:border-white/25",
        destructive:
          "bg-red-500/20 dark:bg-red-500/15 text-red-900 dark:text-red-100 backdrop-blur-2xl border border-red-500/30 dark:border-red-500/25 shadow-[0_8px_32px_rgba(239,68,68,0.15)] hover:bg-red-500/25 dark:hover:bg-red-500/20 hover:shadow-[0_12px_40px_rgba(239,68,68,0.2)]",
        outline:
          "border border-black/25 dark:border-white/25 bg-black/8 dark:bg-white/3 text-foreground backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-black/12 dark:hover:bg-white/8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-black/35 dark:hover:border-white/35",
        secondary:
          "bg-black/10 dark:bg-white/5 text-foreground backdrop-blur-2xl border border-black/15 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-black/15 dark:hover:bg-white/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
        ghost: "text-foreground hover:bg-black/15 dark:hover:bg-white/15 backdrop-blur-2xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
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
