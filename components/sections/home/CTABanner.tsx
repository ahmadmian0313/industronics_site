// components/sections/home/CTABanner.tsx
'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COMPANY } from '@/lib/constants'

export function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <AnimatedSection className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/70 text-lg max-w-xl">
              Let's discuss how our solutions can optimize your industrial processes and drive efficiency.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phone1}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone1}
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}