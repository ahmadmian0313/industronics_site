// components/sections/home/ServicesSection.tsx
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="What We Do"
          title="Our Services"
          description="Comprehensive industrial solutions designed to optimize your operations and drive growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}