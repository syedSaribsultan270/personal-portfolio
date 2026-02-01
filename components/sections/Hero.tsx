"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              width={128}
              height={128}
              className="rounded-full shadow-lg object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium"
          >
            UX Engineer • Creative Director • Head of Marketing
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link href="/work">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:scale-105 transition-transform">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
