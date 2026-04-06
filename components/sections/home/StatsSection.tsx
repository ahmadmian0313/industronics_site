// components/sections/home/StatsSection.tsx
'use client'

import { StatsCounter } from '@/components/ui/StatsCounter'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { STATS } from '@/lib/constants'

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Impact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Numbers That Speak
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Over two decades of delivering excellence in industrial automation and engineering solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <StatsCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}