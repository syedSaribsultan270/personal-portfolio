"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 relative">
      <div className="absolute top-24 left-8 font-mono text-xs text-zinc-400 hidden lg:block">
        <div className="space-y-1">
          <div>💾 portfolio.exe</div>
          <div>📊 Loading assets...</div>
          <div className="text-green-600">✓ System ready</div>
        </div>
      </div>
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.1,
              type: "spring", 
              stiffness: 260,
              damping: 20
            }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={140}
                height={140}
                className="rounded-xl border-4 border-zinc-900 shadow-[8px_8px_0_rgba(0,0,0,0.1)] object-cover"
                priority
              />
              <div className="absolute -bottom-2 -right-2 bg-[#F9BD2B] border-2 border-zinc-900 px-2 py-1 text-xs font-mono font-bold rounded transform rotate-3">
                ONLINE
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2, 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter leading-none"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-xl md:text-3xl font-bold"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Product Designer</span>
            <span className="text-zinc-400 dark:text-zinc-600 mx-2">•</span>
            <span className="text-zinc-900 dark:text-zinc-100">Creative Director</span>
            <span className="text-zinc-400 dark:text-zinc-600 mx-2">•</span>
            <span className="text-zinc-900 dark:text-zinc-100">Business & Marketing Strategist</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button asChild size="lg" className="bg-[#F9BD2B] hover:bg-[#f5b01a] text-zinc-900 font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              <Link href="/work">View Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-zinc-900 dark:border-zinc-100 hover:scale-105 transition-all hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          {/* PostHog-style tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-12 mt-12 border-t-2 border-zinc-300 dark:border-zinc-700"
          >
            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mb-4">$ cat tech-stack.txt</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['Next.js', 'React', 'TypeScript', 'Figma', 'Tailwind', 'Framer'].map((tech) => (
                <span key={tech} className="font-mono text-xs px-3 py-1.5 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 rounded hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_rgba(0,0,0,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
