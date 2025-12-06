"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/sections/Hero"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { WorkGrid } from "@/components/sections/WorkGrid"
import { AnimatedGradientBackground } from "@/components/sections/AnimatedGradientBackground"
import { personalInfo, experiences } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <AnimatedGradientBackground />
      
      <Hero />

      {/* About Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading>About Me</SectionHeading>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {personalInfo.about}
                </p>
                <Button asChild variant="outline">
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="My journey across UX engineering, creative direction, and marketing">
            Experience
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {exp.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Case studies from my work in EdTech, creative studios, and product design">
            Featured Work
          </SectionHeading>
          <WorkGrid />
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              Let's Create Something Amazing
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              Whether you need a stunning website, a comprehensive brand identity, or a growth marketing strategy, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
