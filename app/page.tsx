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
            <SectionHeading>👋 Who is this person?</SectionHeading>
            <Card className="border-2 border-zinc-900 dark:border-zinc-700 shadow-[8px_8px_0_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0_rgba(0,0,0,0.15)]">
              <CardContent className="p-8">
                <div className="font-mono text-xs text-[#F9BD2B] mb-4">README.md</div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {personalInfo.about}
                </p>
                <Button asChild variant="outline" className="hover:scale-105 transition-transform">
                  <Link href="/about">Read the full story →</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-24 px-6 bg-[#EBE6DC] dark:bg-[#252525]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="The journey so far (and it's been wild)">
            💼 Where I've Built Cool Stuff
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
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-zinc-900 dark:border-zinc-700 shadow-[4px_4px_0_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0_rgba(0,0,0,0.15)]">
                  <CardContent className="p-6">
                    <div className="font-mono text-[10px] text-[#F9BD2B] mb-3">{`// ${exp.period}`}</div>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {exp.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                        {exp.company}
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
          <SectionHeading subtitle="Real projects. Real impact. Real results.">
            🎨 Featured Work
          </SectionHeading>
          <WorkGrid />
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#F9BD2B] hover:bg-[#f5b01a] text-zinc-900 font-bold hover:scale-105 transition-all shadow-lg">
              <Link href="/work">See All Projects →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#EBE6DC] dark:bg-[#252525]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-zinc-900 dark:text-zinc-100 tracking-tight">
              Shameless CTA
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              If nothing else has convinced you to work together, hopefully this classic marketing tactic will.
            </p>
            <div className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mb-6">
              <span className="text-green-600">$</span> npm install @sarib/hire-me@latest
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#F9BD2B] hover:bg-[#f5b01a] text-zinc-900 font-bold hover:scale-105 transition-all shadow-xl text-lg px-8">
                <Link href="/contact">🚀 Let's Build Together</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 hover:scale-105 transition-all">
                <Link href="/services">📋 View Services</Link>
              </Button>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-6 italic">
              *Warning: Working with me may result in exponential brand growth and dangerously good design.<br/>
              <span className="font-mono text-xs">**Side effects include: increased conversions, better UX, and jealous competitors.</span>
            </p>
            <div className="mt-8 pt-8 border-t-2 border-zinc-300 dark:border-zinc-700">
              <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-500">
                <span>✓ Fast learner</span>
                <span>✓ Coffee-powered</span>
                <span>✓ Git commit champion</span>
                <span>✓ Dark mode enthusiast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
