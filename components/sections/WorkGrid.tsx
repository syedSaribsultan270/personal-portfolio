"use client"

import { caseStudies } from "@/lib/data"
import { CaseStudyCard } from "./CaseStudyCard"

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <CaseStudyCard
          key={study.slug}
          {...study}
          index={index}
        />
      ))}
    </div>
  )
}
