// components/sections/about/AboutHero.tsx
'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COMPANY } from '@/lib/constants'

export function AboutHero() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 mb-6">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Engineering Excellence Since 1999
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              {COMPANY.tagline}. For over 25 years, Industronics Engineering has been at the forefront of industrial innovation, delivering cutting-edge automation solutions across diverse sectors.
            </p>
            <p className="text-white/60 leading-relaxed">
              From humble beginnings in Karachi to becoming a trusted name in industrial automation, we have consistently pushed the boundaries of technology to help our clients achieve operational excellence. Our commitment to quality, innovation, and customer satisfaction has earned us certifications from ISO, UKAS, and memberships in prestigious organizations.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=500&fit=crop"
                alt="Industronics Engineering Team"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent rounded-xl p-6 shadow-xl">
              <div className="text-dark font-heading font-bold text-4xl">25+</div>
              <div className="text-dark/70 text-sm">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}