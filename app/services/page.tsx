// app/services/page.tsx
import BrandSection from '@/components/BrandSection'
import { ServicesSection } from '@/components/sections/home/ServicesSection'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default async function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO SECTION - Exact Match to Contact Page Theme */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        {/* Layer 1: The Grid Pattern (Exact same 50px square grid) */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77) 1px, transparent 1px),
                                linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Layer 2: Content with AnimatedSection for consistent entry */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 mb-6">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive industrial solutions designed to optimize your operations 
              and drive sustainable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection />
         {/* <BrandSection /> */}

    </main>
  )
}