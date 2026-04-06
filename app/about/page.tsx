// app/about/page.tsx
import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { MissionVision } from '@/components/sections/about/MissionVision'
import { CoreValues } from '@/components/sections/about/CoreValues'
import { TeamSection } from '@/components/sections/about/TeamSection'
import { CertificationsSection } from '@/components/sections/home/CertificationsSection'
import { CTABanner } from '@/components/sections/home/CTABanner'
import { StatsSection } from '@/components/sections/home/StatsSection'
import { getTeamMembers } from '@/sanity/lib/sanity.queries'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Industronics Engineering - 25+ years of excellence in industrial automation and engineering solutions.',
}

export default async function AboutPage() {
  const team = await getTeamMembers().catch(() => [])

  return (
    <>
      <AboutHero />
      <StatsSection />
      <MissionVision />
      <CoreValues />
      <TeamSection team={team} />
      <CertificationsSection />
      <CTABanner />
    </>
  )
}