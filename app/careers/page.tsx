import type { Metadata } from 'next'
import { CareerDepartments } from '@/components/sections/careers/CareerDepartments'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore open roles across engineering, IT, AI, CAD, electronics, and accounts departments.',
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Careers</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">Join a team building high-impact industrial engineering solutions.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <CareerDepartments />
        </div>
      </section>
    </main>
  )
}
