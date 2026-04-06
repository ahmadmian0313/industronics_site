// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTABanner } from '@/components/sections/home/CTABanner'
import { SERVICES } from '@/lib/constants'
import { getServiceBySlug } from '@/sanity/lib/sanity.queries'

interface ServicePageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  
  return {
    title: service?.title || 'Service',
    description: service?.shortDescription,
  }
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const serviceFromCMS = await getServiceBySlug(params.slug).catch(() => null)
  const service = serviceFromCMS || SERVICES.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

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
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              {service.shortDescription}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Description */}
            <AnimatedSection>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">
                About This Service
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection delay={0.1}>
              <div className="bg-background rounded-2xl p-8 border border-gray-100">
                <h3 className="font-heading text-xl font-semibold text-dark mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}