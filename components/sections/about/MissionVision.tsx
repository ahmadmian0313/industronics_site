// components/sections/about/MissionVision.tsx
'use client'

import { Target, Eye } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-background rounded-2xl p-8 md:p-10 h-full border border-gray-100 hover:border-primary/20 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed">
                To empower industries with innovative automation solutions that enhance operational efficiency, reduce costs, and drive sustainable growth. We are committed to delivering excellence through cutting-edge technology, skilled expertise, and unwavering dedication to our clients' success.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-background rounded-2xl p-8 md:p-10 h-full border border-gray-100 hover:border-primary/20 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Eye className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed">
                To be the leading industrial automation partner in the region, recognized for our technological innovation, quality delivery, and commitment to transforming industries. We envision a future where every business has access to smart, efficient, and sustainable industrial solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}