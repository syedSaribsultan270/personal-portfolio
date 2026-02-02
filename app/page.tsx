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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <SectionHeading>About</SectionHeading>
            <Card className="border-2 border-zinc-900 dark:border-zinc-700 shadow-[8px_8px_0_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0_rgba(0,0,0,0.15)]">
              <CardContent className="p-8">
                <div className="font-mono text-xs text-[#F9BD2B] mb-4">README.md</div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {personalInfo.about}
                </p>
                <Button asChild variant="outline" className="hover:scale-105 transition-transform">
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-24 px-6 bg-[#EBE6DC] dark:bg-[#252525]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Building products and brands across multiple ventures">
            Experience & Leadership
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
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
          <SectionHeading subtitle="Case studies showcasing strategic design and business impact">
            Featured Work
          </SectionHeading>
          <WorkGrid />
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#F9BD2B] hover:bg-[#f5b01a] text-zinc-900 font-bold hover:scale-105 transition-all shadow-lg">
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#EBE6DC] dark:bg-[#252525]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-zinc-900 dark:text-zinc-100 tracking-tight">
              Let's Build Together
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              Whether you're launching a new product, scaling your brand, or need strategic design leadership—I'm here to help turn vision into reality.
            </p>
            <div className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mb-6">
              <span className="text-green-600">$</span> npm install @sarib/strategic-design
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#F9BD2B] hover:bg-[#f5b01a] text-zinc-900 font-bold hover:scale-105 transition-all shadow-xl text-lg px-8">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 hover:scale-105 transition-all">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-6">
              <span className="font-mono text-xs">Trusted by startups and established brands to deliver design that drives business growth.</span>
            </p>
            <div className="mt-8 pt-8 border-t-2 border-zinc-300 dark:border-zinc-700">
              <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-500">
                <span>✓ Strategic Design</span>
                <span>✓ Product Leadership</span>
                <span>✓ Brand Development</span>
                <span>✓ Growth Marketing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
