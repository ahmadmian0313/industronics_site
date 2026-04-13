// app/about/page.tsx
import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { MissionVision } from '@/components/sections/about/MissionVision'
import { CoreValues } from '@/components/sections/about/CoreValues'
import { CTABanner } from '@/components/sections/home/CTABanner'
import { StatsSection } from '@/components/sections/home/StatsSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Industronics Engineering - 25+ years of excellence in industrial automation and engineering solutions.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <MissionVision />
      <CoreValues />
      <CTABanner />
    </>
  )
}