import type { Metadata } from 'next'
import { BOARD_CEO, BOARD_DIRECTORS, DEPARTMENT_HEADS } from '@/data/team'
import { TeamMemberCard } from '@/components/ui/TeamMemberCard'

export const metadata: Metadata = {
  title: 'Board of Directors',
  description: 'Meet the leadership team guiding Industronics Engineering.',
}

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.77) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Leadership structure focused on delivery, innovation, and growth.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-gray-border)]">Chief Executive Officer</h2>
          <div className="max-w-md">
            <TeamMemberCard {...BOARD_CEO} />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-gray-border)]">GM / Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BOARD_DIRECTORS.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-gray-border)]">Department Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPARTMENT_HEADS.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
