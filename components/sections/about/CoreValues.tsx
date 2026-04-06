// components/sections/about/CoreValues.tsx
'use client'

import { Star, Lightbulb, Shield, Handshake } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CORE_VALUES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Star,
  Lightbulb,
  Shield,
  Handshake,
}

export function CoreValues() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Our Values"
          title="What We Stand For"
          description="The principles that guide every decision we make and every project we deliver."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((value, index) => {
            const IconComponent = iconMap[value.icon] || Star
            return (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 h-full hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}