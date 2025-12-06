"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { caseStudies } from "@/lib/data"
import { AnimatedGradientBackground } from "@/components/sections/AnimatedGradientBackground"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <AnimatedGradientBackground />
      
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-4">
              <Link 
                href="/work" 
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                ← Back to Work
              </Link>
            </div>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
              {caseStudy.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 text-zinc-900 dark:text-zinc-100">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {caseStudy.subtitle}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 rounded-2xl flex items-center justify-center text-8xl font-bold text-zinc-300 dark:text-zinc-700">
              {caseStudy.title.charAt(0)}
            </div>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                      Role
                    </h3>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                      {caseStudy.role}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                      Year
                    </h3>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                      {caseStudy.year}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Overview</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {caseStudy.overview}
            </p>
          </motion.section>

          {/* Problem & Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-12 grid md:grid-cols-2 gap-6"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">The Problem</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">The Solution</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Process</h2>
            <div className="space-y-4">
              {caseStudy.process.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                          {step.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.outcomes.map((outcome, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {outcome.metric}
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-12"
            >
              <Card>
                <CardContent className="p-8">
                  <blockquote className="text-xl text-zinc-700 dark:text-zinc-300 italic mb-4">
                    &ldquo;{caseStudy.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    — {caseStudy.testimonial.author}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-between"
          >
            <Button asChild variant="outline">
              <Link href="/work">← Back to All Work</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
