import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-20 w-full rounded-md border border-neutral-7 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-9 ",
          "focus:outline-none focus:ring-2 focus:ring-neutral-8 focus:ring-offset-2 disabled:cursor-not-allowed ",
          "disabled:opacity-50 dark:border-neutralDark-7 dark:text-neutralDark-12 dark:focus:ring-neutralDark-8 dark:focus:ring-offset-neutralDark-7",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
