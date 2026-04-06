// app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTABanner } from '@/components/sections/home/CTABanner'
import { SERVICES } from '@/lib/constants'
import { getServices } from '@/sanity/lib/sanity.queries'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive industrial automation and engineering services including PLC, SCADA, BMS, and Industry 4.0 solutions.',
}

export default async function ServicesPage() {
  const servicesFromCMS = await getServices().catch(() => [])
  const displayServices = servicesFromCMS.length > 0 ? servicesFromCMS : SERVICES

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
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
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 mb-6">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive industrial solutions designed to optimize your operations and drive sustainable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayServices.map((service: any, index: number) => (
              <ServiceCard
                key={service._id || service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug?.current || service.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}