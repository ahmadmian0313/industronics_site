// components/sections/home/CertificationsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, Globe, Leaf, Building } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COMPANY } from '@/lib/constants'

const certificationIcons: Record<string, React.ElementType> = {
  'ISO Certified': Shield,
  'UKAS Accredited': Award,
  'PEC Member': BadgeCheck,
  'PSEB Member': Globe,
  'USGBC Member': Leaf,
  'KCCI Member': Building,
}

export function CertificationsSection() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              Trusted & Certified
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {COMPANY.certifications.map((cert, index) => {
              const IconComponent = certificationIcons[cert] || Shield
              return (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors group"
                >
                  <IconComponent className="w-5 h-5 group-hover:text-accent transition-colors" />
                  <span className="text-sm font-medium">{cert}</span>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}