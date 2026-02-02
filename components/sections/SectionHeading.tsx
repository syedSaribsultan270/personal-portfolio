import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  className?: string
}

export function SectionHeading({ children, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-3 mb-16", className)}>
      <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
