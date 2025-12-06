"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { WorkGrid } from "@/components/sections/WorkGrid"
import { AnimatedGradientBackground } from "@/components/sections/AnimatedGradientBackground"

export default function WorkPage() {
  return (
    <>
      <AnimatedGradientBackground />
      
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              subtitle="A selection of projects showcasing my work in UX engineering, creative direction, and marketing strategy"
            >
              Featured Work
            </SectionHeading>
          </motion.div>

          <WorkGrid />
        </div>
      </div>
    </>
  )
}
