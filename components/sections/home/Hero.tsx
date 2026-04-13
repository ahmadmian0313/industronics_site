'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { HOME_SLIDES, HOME_STATS } from '@/data/home'
import { theme } from '@/lib/theme'
import { Button } from '@/components/ui/Button'

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const num = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/\d/g, '')

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (isInView) motionValue.set(num)
  }, [isInView, num, motionValue])

  useEffect(() => springValue.on('change', (latest) => setDisplay(Math.floor(latest).toLocaleString())), [springValue])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % HOME_SLIDES.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: 80,
        background: theme.colors.bgHero,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(to right, rgb(253, 250, 250) 1px, transparent 1px)',
            backgroundSize: '80px 100%',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)',
          }}
        />
      </div>

      <div
        style={{
          width: '100%',
          padding: '0 0 0 80px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          gap: '20px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ paddingRight: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 2, backgroundColor: theme.colors.primary }} />
            <span style={{ color: theme.colors.primary, fontSize: 12, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {HOME_SLIDES[slide].tag}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
            <AnimatePresence mode="wait">
              <motion.div key={slide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
                <span style={{ color: 'white' }}>{HOME_SLIDES[slide].title[0]} </span>
                <br />
                <span style={{ color: theme.colors.primary }}>{HOME_SLIDES[slide].title[1]}</span>
              </motion.div>
            </AnimatePresence>
          </h1>

          <p style={{ color: theme.colors.textMuted, fontSize: 18, maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>{HOME_SLIDES[slide].subtitle}</p>

          <div style={{ display: 'flex', gap: 16 }}>
            <Button href="#services">Get Started →</Button>
          </div>

          <div style={{ display: 'flex', gap: 30, marginTop: 50 }}>
            {HOME_STATS.map((stat, index) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: theme.colors.primary }}>
                    <Counter value={stat.value} />
                  </div>
                  <div style={{ fontSize: 10, textTransform: 'uppercase', color: theme.colors.textSubtle, letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
                {index < HOME_STATS.length - 1 ? <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} /> : null}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                x: { duration: 1, ease: 'easeOut' },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.8 },
              }}
              style={{ width: '100%', maxWidth: '600px' }}
            >
              <Image
                src={HOME_SLIDES[slide].image}
                alt="Industrial Object"
                width={600}
                height={600}
                priority
                style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 40, left: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 20 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {HOME_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                height: 4,
                borderRadius: 2,
                border: 'none',
                cursor: 'pointer',
                width: i === slide ? 40 : 15,
                backgroundColor: i === slide ? theme.colors.primary : 'rgba(255,255,255,0.2)',
                transition: '0.4s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
