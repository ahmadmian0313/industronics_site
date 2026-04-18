import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { Hero } from '@/components/sections/home/Hero'
import { Services } from '@/components/sections/home/Services'
import { theme } from '@/lib/theme'
import { CertificationsStrip } from '@/components/sections/home/CertificationsSection'
const BrandSection = dynamic(() => import('@/components/BrandSection'))

export const metadata: Metadata = {
  title: 'Industronics Engineering | Home',
  description: 'Industrial automation, BMS integration, EPC contracts, and engineering services in Pakistan.',
}

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: theme.colors.bgPage,
        color: 'white',
        fontFamily: theme.fonts.base,
        overflowX: 'hidden',
      }}
    >
      <Hero />
      <CertificationsStrip /> 
      <Services />
      <BrandSection />
    </div>
  )
}