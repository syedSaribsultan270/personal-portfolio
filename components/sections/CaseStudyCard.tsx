"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface CaseStudyCardProps {
  slug: string
  title: string
  subtitle: string
  category: string
  tags: string[]
  thumbnail: string
  index: number
  website?: string
}

export function CaseStudyCard({
  slug,
  title,
  subtitle,
  category,
  tags,
  index,
  website
}: CaseStudyCardProps) {
  const href = website || `/work/${slug}`
  const linkProps = website ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={href} {...linkProps}>
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-zinc-200 dark:border-zinc-800">
          <div className="relative h-64 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-zinc-300 dark:text-zinc-700">
              {index + 1}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <CardContent className="p-6">
            <div className="mb-3">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                {category}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
