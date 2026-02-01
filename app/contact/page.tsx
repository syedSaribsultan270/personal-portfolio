"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { ContactForm } from "@/components/sections/ContactForm"
import { AnimatedGradientBackground } from "@/components/sections/AnimatedGradientBackground"
import { personalInfo } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
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
            <SectionHeading 
              subtitle="Let's discuss your project and create something exceptional together"
            >
              Get In Touch
            </SectionHeading>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:col-span-2 space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                        Email
                      </h4>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                        Phone
                      </h4>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                        Location
                      </h4>
                      <p className="text-zinc-900 dark:text-zinc-100">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                    Connect Online
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                        in
                      </span>
                      LinkedIn
                    </a>
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                        gh
                      </span>
                      GitHub
                    </a>
                    <a
                      href={personalInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                        tw
                      </span>
                      Twitter
                    </a>
                    <a
                      href={personalInfo.social.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                        be
                      </span>
                      Behance
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                    Response Time
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    I typically respond to inquiries within 24-48 hours. Looking forward to hearing from you!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
