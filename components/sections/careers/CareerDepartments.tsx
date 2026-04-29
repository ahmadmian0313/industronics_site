'use client'

import { useMemo, useState } from 'react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CAREER_DEPARTMENTS } from '@/data/careers'
import { EmptyState } from '@/components/ui/EmptyState'
import { LoadingGridSkeleton } from '@/components/ui/LoadingGridSkeleton'

const ORDER = ['Intern / Trainee', 'Junior', 'Mid-level', 'Senior', 'Lead / Manager'] as const

export function CareerDepartments() {
  const [open, setOpen] = useState<string | null>(CAREER_DEPARTMENTS[0]?.name ?? null)
  const [loading, setLoading] = useState(true)

  const departments = useMemo(() => CAREER_DEPARTMENTS, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingGridSkeleton count={4} />
  }

  if (!departments.length) {
    return <EmptyState title="No openings yet" description="There are currently no open positions. Please check back soon." />
  }

  return (
    <div className="space-y-5">
      {departments.map((department) => {
        const isOpen = open === department.name
        const grouped = ORDER.map((level) => ({
          level,
          roles: department.roles.filter((role) => role.level === level),
        })).filter((item) => item.roles.length > 0)

        return (
         <div key={department.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-[var(--color-bg-input)] to-[var(--color-primary)] overflow-hidden">
            <button onClick={() => setOpen(isOpen ? null : department.name)} className="w-full flex items-center justify-between px-6 py-5 text-left">
              <div>
                <h3 className="text-xl font-semibold text-white">{department.name}</h3>
                <p className="text-[#ffff] text-sm mt-1">{department.roles.length} open positions</p>
              </div>
              <span className="text-[#ffff] text-2xl leading-none">{isOpen ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {grouped.map((group) => (
                      <div key={group.level} className="rounded-xl border border-white/10 bg-black/20 p-4">
                        <h4 className="text-[#d6dae1] text-sm uppercase tracking-wider mb-4">{group.level}</h4>
                        <div className="space-y-3">
                          {group.roles.map((role) => (
                            <div key={role.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition-colors">
                              <h5 className="text-white font-medium">{role.title}</h5>
                              <p className="text-white/70 text-sm mt-1">{role.description}</p>
                              <button className="mt-3 px-4 py-2 rounded-lg border border-[var(--color-gray-cool)]/50 text-[#d9dde3] text-sm hover:bg-white/10 transition-colors">
                                Apply
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
