// components/sections/home/WhyUsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { WHY_US_REASONS, SOLUTIONS } from '@/lib/constants'

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid lg:grid-cols-2">
        {/* Dark Side */}
        <div className="bg-dark py-16 md:py-20 px-6 lg:px-12">
          <div className="max-w-xl mx-auto lg:mx-0">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 mb-4">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Your Trusted Partner in Industrial Excellence
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {WHY_US_REASONS.map((reason, index) => (
                <AnimatedSection key={reason.number} delay={index * 0.1}>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-accent font-heading font-bold">{reason.number}</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Light Side */}
        <div className="bg-white py-16 md:py-20 px-6 lg:px-12">
          <div className="max-w-xl mx-auto lg:mx-0">
            <AnimatedSection>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-8">
                Industries We Serve
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Textile Manufacturing',
                'Food & Beverage',
                'Pharmaceutical',
                'Chemical Processing',
                'Oil & Gas',
                'Power Generation',
                'Water Treatment',
                'Automotive',
                'Cement & Building Materials',
                'Packaging Industry',
                'Steel & Metals',
                'FMCG',
              ].map((industry, index) => (
                <AnimatedSection key={industry} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-primary/5 transition-colors cursor-default group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-accent transition-colors" />
                    <span className="text-sm text-muted group-hover:text-dark transition-colors">
                      {industry}
                    </span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}