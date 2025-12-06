import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  className?: string
}

export function SectionHeading({ children, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-3 mb-12", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
