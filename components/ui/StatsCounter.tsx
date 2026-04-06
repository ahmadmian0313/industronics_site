// components/ui/StatsCounter.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

export function StatsCounter({ value, suffix = '', label, delay = 0 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        start = Math.min(Math.ceil((progress / duration) * value), value)
        setCount(start)
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timeoutId)
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted uppercase tracking-wider font-medium">
        {label}
      </div>
    </motion.div>
  )
}