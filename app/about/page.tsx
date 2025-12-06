"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { AnimatedGradientBackground } from "@/components/sections/AnimatedGradientBackground"
import { personalInfo, experiences, skills } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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
            className="mb-16"
          >
            <SectionHeading>About Me</SectionHeading>
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                SS
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {personalInfo.about}
                </p>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">Location:</span>{" "}
                      <span className="text-zinc-600 dark:text-zinc-400">{personalInfo.location}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">Email:</span>{" "}
                      <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                            {exp.title}
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-zinc-500 dark:text-zinc-500 mt-1 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Skills & Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-100 capitalize">
                        {category}
                      </h4>
                      <ul className="space-y-2">
                        {skillList.map((skill) => (
                          <li key={skill} className="text-zinc-600 dark:text-zinc-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  Interested in working together?
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities.
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
