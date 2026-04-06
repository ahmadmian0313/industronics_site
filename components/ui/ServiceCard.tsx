// components/ui/ServiceCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Factory, Building2, FileCheck, Gauge, Code2, Cpu, Truck, Wrench } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  slug: string
  index?: number
}

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Building2,
  FileCheck,
  Gauge,
  Code2,
  Cpu,
  Truck,
  Wrench,
}

export function ServiceCard({ title, description, icon, slug, index = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Factory

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/services/${slug}`}>
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
          </div>
          
          <h3 className="font-heading text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}