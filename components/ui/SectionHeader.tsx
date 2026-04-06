// components/ui/SectionHeader.tsx
import { AnimatedSection } from './AnimatedSection'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            light
              ? 'bg-white/10 text-white'
              : 'bg-primary/10 text-primary'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? 'text-white/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}