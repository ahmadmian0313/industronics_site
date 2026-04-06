// components/sections/home/SolutionsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SOLUTIONS } from '@/lib/constants'

export function SolutionsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Our Solutions"
          title="Specialized Solutions"
          description="Tailored solutions addressing specific industrial challenges across diverse sectors."
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {SOLUTIONS.map((solution, index) => (
            <AnimatedSection key={solution} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 bg-white border border-gray-200 rounded-full text-sm md:text-base text-dark font-medium hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm"
              >
                {solution}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}