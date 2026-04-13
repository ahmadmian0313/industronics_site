import type { Metadata } from 'next'
import { NewsList } from '@/components/sections/news/NewsList'

export const metadata: Metadata = {
  title: 'News & Media',
  description: 'Latest project milestones, company updates, and official announcements.',
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.77) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">News & Media</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Project completions, company updates, and key announcements.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <NewsList />
        </div>
      </section>
    </main>
  )
}
