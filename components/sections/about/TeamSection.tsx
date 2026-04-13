// components/sections/about/TeamSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  image?: {
    asset?: {
      url: string
    }
  }
}

interface TeamSectionProps {
  team: TeamMember[]
}

export function TeamSection({ team }: TeamSectionProps) {
  // Fallback team if no data from CMS
  const displayTeam = team.length > 0 ? team : [
    {
      _id: '1',
      name: 'Ahmed Khan',
      role: 'Chief Executive Officer',
      bio: 'Leading Industronics with 25+ years of industry expertise and a vision for technological advancement.',
      image: { asset: { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' } },
    },
    {
      _id: '2',
      name: 'Fatima Malik',
      role: 'Chief Operations Officer',
      bio: 'Overseeing project delivery and operational excellence across all business units.',
      image: { asset: { url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' } },
    },
    {
      _id: '3',
      name: 'Imran Hassan',
      role: 'Technical Director',
      bio: 'Driving innovation in automation technologies and Industry 4.0 solutions.',
      image: { asset: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' } },
    },
    {
      _id: '4',
      name: 'Sara Ali',
      role: 'Head of Engineering',
      bio: 'Leading our engineering team with expertise in PLC, SCADA, and BMS systems.',
      image: { asset: { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop' } },
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Our Team"
          title="Meet the Experts"
          description="The talented professionals behind Industronics Engineering's success."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTeam.map((member, index) => (
            <AnimatedSection key={member._id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-background rounded-xl overflow-hidden border border-gray-100 group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image?.asset?.url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'}
                    alt={member.name}
                    width={300}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-dark mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}