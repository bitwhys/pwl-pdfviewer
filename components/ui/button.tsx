import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition",
    "focus:outline-none focus:ring-2 focus:ring-neutral-7 focus:ring-offset-2 dark:hover:bg-neutralDark-4 ",
    "dark:hover:text-neutralDark-12 disabled:opacity-50 dark:focus:ring-neutralDark-7 disabled:pointer-events-none ",
    "dark:focus:ring-offset-neutralDark-1 data-[state=open]:bg-neutral-5 dark:data-[state=open]:bg-neutralDark-5",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-neutralDark-1 text-neutralDark-12 hover:bg-neutralDark-3 dark:bg-neutral-1 dark:text-neutral-12",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-neutral-7 hover:bg-neutral-4 dark:border-neutralDark-7 dark:text-slate-100",
        subtle:
          "bg-neutral-4 text-neutral-11 hover:bg-slate-200 dark:bg-neutralDark-4 dark:text-neutralDark-11",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
