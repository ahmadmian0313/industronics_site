import type { Metadata } from 'next'
import { MANAGEMENT_GROUPS } from '@/data/team'
import { TeamMemberCard } from '@/components/ui/TeamMemberCard'
import { EmptyState } from '@/components/ui/EmptyState'

export const metadata: Metadata = {
  title: 'Management Team',
  description: 'Explore team hierarchy across senior management, junior staff, trainees, and interns.',
}

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.77) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Management Team</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">A structured team model built for reliable project execution.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {Object.entries(MANAGEMENT_GROUPS).map(([label, members]) => (
            <div key={label}>
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-gray-border)]">{label}</h2>
              {members.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {members.map((member) => (
                    <TeamMemberCard key={`${label}-${member.name}`} {...member} />
                  ))}
                </div>
              ) : (
                <EmptyState title={`No ${label.toLowerCase()} listed`} description="Profiles will be published soon." />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
