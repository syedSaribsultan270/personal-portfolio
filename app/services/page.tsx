"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { AnimatedGradientBackground } from "@/components/sections/AnimatedGradientBackground"
import { services } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      <AnimatedGradientBackground />
      
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              subtitle="Comprehensive solutions across UX engineering, creative direction, and marketing strategy"
            >
              Services
            </SectionHeading>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">
              How I Work
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Discovery", description: "Understanding your goals, audience, and challenges" },
                { title: "Strategy", description: "Developing a comprehensive plan and roadmap" },
                { title: "Execution", description: "Bringing ideas to life with precision and creativity" },
                { title: "Optimization", description: "Continuous improvement based on data and feedback" }
              ].map((step, index) => (
                <Card key={step.title}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <Card>
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss your goals and create something exceptional together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/work">View My Work</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}
