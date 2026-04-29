import ServicesHero from '@/components/sections/sectors/ServicesHero';
import ServicesGrid from '@/components/sections/sectors/ServicesGrid';
import IndustriesSection from '@/components/sections/sectors/IndustriesSection';
import ServicesCTA from '@/components/sections/sectors/ServicesCTA';

export default function SectorsPage() {
  return (
    <main className="bg-[#0f0f10] min-h-screen">
      <ServicesHero />
      <div id="core-areas">
        <ServicesGrid />
      </div>
      <IndustriesSection />
      <ServicesCTA />
    </main>
  );
}