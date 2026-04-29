// ============================================================
// services/page.tsx  (or services.tsx for Pages Router)
// Main Services page — assembles all components
// PASTE LOCATION: app/services/page.tsx
// ============================================================

import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import IndustriesSection from './IndustriesSection';
import ServicesCTA from './ServicesCTA';

export const metadata = {
  title: 'Our Core Areas | Industronics Engineering',
  description:
    'Explore 13 industrial automation & engineering service domains — EPC, PLC/SCADA, BMS, Electrical, Mechanical, Industry 4.0 and more.',
}

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Hero — "Our Core Areas" */}
      <ServicesHero />

      {/* 2. All 13 sector cards — 2 per row, grouped by category */}
      <div id="core-areas">
        <ServicesGrid />
      </div>

      {/* 3. Industries We Serve */}
      <IndustriesSection />

      {/* 4. Bottom CTA */}
      <ServicesCTA />
    </main>
  )
}
