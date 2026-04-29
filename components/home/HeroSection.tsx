'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ── Slide data ───────────────────────────────────────────────
// Images rakho: /public/images/automation.jpg etc.
const SLIDES = [
  {
    tag:      'Industrial Automation',
    title1:   'Industrial 4.0',
    title2:   'Automation',
    subtitle: 'Next-Gen PLC, SCADA & DCS Solutions for Modern Industry',
    image:    '/images/automation.jpg',
    bgColor: 'var(--grad-hero-deep)',
    accent:   ' var(--color-primary)',
  },
  {
    tag:      'Software Development',
    title1:   'Software',
    title2:   'Development',
    subtitle: 'Web-Based Machine Monitoring, OEE & ERP Integration Systems',
    image:    '/images/software.jpg',
    bgColor: 'var(--grad-hero-deep)',
    accent:   'var(--color-primary-accent)',
  },
  {
    tag:      'EPC Contracts',
    title1:   'Engineering',
    title2:   'Procurement',
    subtitle: 'End-to-End EPC Contracts for Large-Scale Industrial Projects',
    image:    '/images/engineering.jpg',
   bgColor: 'var(--grad-hero-deep)',
    accent:   ' var(--color-primary)',
  },
]

export default function HeroSection() {
  const [current,   setCurrent]   = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // ── Auto-advance every 6 seconds ─────────────────────────
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(p => (p + 1) % SLIDES.length)
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const goTo = (idx: number) => {
    if (idx === current || animating) return
    setAnimating(true)
    setCurrent(idx)
    startTimer()
    setTimeout(() => setAnimating(false), 800)
  }

  const goNext = () => goTo((current + 1) % SLIDES.length)
  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)

  return (
    <section style={{
      position:  'relative',
      width:     '100%',
      height:    '100vh',
      minHeight: 680,
      overflow:  'hidden',
      background: '#060f1a',
    }}>

      {/* ══ SLIDE BACKGROUNDS ══════════════════════════════ */}
      {SLIDES.map((slide, idx) => (
        <div key={idx} style={{
          position:   'absolute',
          inset:      0,
          zIndex:     idx === current ? 2 : 1,
          opacity:    idx === current ? 1 : 0,
          transition: 'opacity 1.2s ease-in-out',
        }}>

          {/* ── IMAGE ── */}
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            unoptimized
            style={{
              position:       'absolute',
              inset:          0,
              width:          '100%',
              height:         '100%',
              objectFit:      'cover',
              objectPosition: 'center',
              filter:         'brightness(0.38) saturate(1.2)',
            }}
          />

          {/* ── CSS FALLBACK (shows if image missing) ── */}
          <div style={{
            position:   'absolute',
            inset:      0,
            background: slide.bgColor,
            zIndex:     -1,
          }}>
            {/* Animated grid */}
            <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.07 }}>
              <defs>
                <pattern id={`g${idx}`} width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke=" var(--color-primary)" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#g${idx})`}/>
            </svg>
            {/* Glowing orb */}
            <div style={{
              position:     'absolute', top:'15%', right:'20%',
              width:        500,        height:500,
              borderRadius: '50%',
              background:   `radial-gradient(circle, ${slide.accent}25 0%, transparent 70%)`,
              animation:    'orbFloat 8s ease-in-out infinite',
            }}/>
          </div>

          {/* ── LEFT GRADIENT (text readability) ── */}
          <div style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(90deg, rgba(6,15,26,0.88) 0%, rgba(6,15,26,0.55) 55%, rgba(6,15,26,0.15) 100%)',
            zIndex:     3,
          }}/>

          {/* ── BOTTOM FADE ── */}
          <div style={{
            position:   'absolute',
            bottom:     0, left:0, right:0,
            height:     160,
            background: 'linear-gradient(to top, #060f1a 0%, transparent 100%)',
            zIndex:     3,
          }}/>
        </div>
      ))}

      {/* ══ SLIDE CONTENT ══════════════════════════════════ */}
      <div style={{
        position:       'relative',
        zIndex:         10,
        height:         '100%',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '0 6vw',
        maxWidth:       900,
      }}>

        {/* Tag */}
        <div style={{
          display:      'flex',
          alignItems:   'center',
          gap:          12,
          marginBottom: 20,
          animation:    'fadeUp 0.7s ease both',
        }}>
          <div style={{ width:40, height:2, backgroundColor:' var(--color-primary)' }}/>
          <span style={{
            color:         'var(--color-primary-light)',
            fontSize:      12,
            fontWeight:    700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}>
            {SLIDES[current].tag}
          </span>
        </div>

        {/* Heading */}
        <div style={{ marginBottom:24, animation:'fadeUp 0.8s ease 0.1s both' }}>
          <div style={{
            color:         'var(--color-text-bright)var(--color-text-bright)',
            fontWeight:    900,
            fontSize:      'clamp(52px, 8vw, 96px)',
            lineHeight:    1.0,
            letterSpacing: '-0.02em',
          }}>
            {SLIDES[current].title1}
          </div>
          <div style={{
            color:         ' var(--color-primary)',
            fontWeight:    900,
            fontSize:      'clamp(52px, 8vw, 96px)',
            lineHeight:    1.0,
            letterSpacing: '-0.02em',
            textShadow:    '0 0 40px rgba(22,125,130,0.45)',
          }}>
            {SLIDES[current].title2}
          </div>
        </div>

        {/* Subtitle */}
        <p style={{
          color:        'rgba(255,255,255,0.72)',
          fontSize:     'clamp(15px, 1.5vw, 19px)',
          maxWidth:     560,
          lineHeight:   1.7,
          marginBottom: 40,
          animation:    'fadeUp 0.8s ease 0.2s both',
        }}>
          {SLIDES[current].subtitle}
        </p>

        {/* Buttons */}
        <div style={{
          display:   'flex',
          gap:       16,
          flexWrap:  'wrap',
          animation: 'fadeUp 0.8s ease 0.3s both',
        }}>
          <a href="#services" style={{
            background:     'linear-gradient(135deg,  var(--color-primary), bg-primaryAccent)',
            color:          'white',
            fontWeight:     800,
            fontSize:       13,
            letterSpacing:  '0.12em',
            padding:        '15px 36px',
            borderRadius:   8,
            textDecoration: 'none',
            textTransform:  'uppercase',
            boxShadow:      '0 0 30px rgba(22,125,130,0.5)',
            border:         '1px solid rgba(94,205,209,0.3)',
            transition:     'all 0.3s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(22,125,130,0.7)'
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(22,125,130,0.5)'
          }}
          >
            Our Services →
          </a>
          <a href="#about" style={{
            background:     'transparent',
            color:          'white',
            fontWeight:     700,
            fontSize:       13,
            letterSpacing:  '0.12em',
            padding:        '15px 36px',
            borderRadius:   8,
            textDecoration: 'none',
            textTransform:  'uppercase',
            border:         '1px solid rgba(255,255,255,0.25)',
            transition:     'all 0.3s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.borderColor = ' var(--color-primary)'
            e.currentTarget.style.color       = 'var(--color-primary-light)'
            e.currentTarget.style.background  = 'rgba(22,125,130,0.1)'
          }}
          onMouseOut={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            e.currentTarget.style.color       = 'white'
            e.currentTarget.style.background  = 'transparent'
          }}
          >
            Read More
          </a>
        </div>  

        {/* Stats */}
        <div style={{
          display:    'flex',
          gap:        48,
          marginTop:  56,
          paddingTop: 28,
          borderTop:  '1px solid rgba(255,255,255,0.08)',
          flexWrap:   'wrap',
          animation:  'fadeUp 0.8s ease 0.4s both',
        }}>
          {[['25+','Years Experience'],['500+','Projects Done'],['50+','Expert Engineers'],['100%','Quality Certified']].map(([num, label]) => (
            <div key={label}>
              <div style={{
                fontSize:   'clamp(28px,3vw,38px)',
                fontWeight: 900,
                color:      ' var(--color-primary)',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(22,125,130,0.4)',
              }}>{num}</div>
              <div style={{
                fontSize:      10,
                color:         'rgba(255,255,255,0.45)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginTop:     4,
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PREV / NEXT ARROWS ═════════════════════════════ */}
      {(['prev','next'] as const).map(dir => (
        <button key={dir} onClick={dir==='prev' ? goPrev : goNext} style={{
          position:       'absolute',
          top:            '50%',
          transform:      'translateY(-50%)',
          zIndex:         20,
          [dir==='prev' ? 'left' : 'right']: 24,
          width:          48,
          height:         48,
          borderRadius:   '50%',
          background:     'rgba(22,125,130,0.2)',
          border:         '1px solid rgba(22,125,130,0.4)',
          cursor:         'pointer',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition:     'all 0.25s',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background    = 'rgba(22,125,130,0.55)'
          e.currentTarget.style.borderColor   = 'var(--color-primary-light)'
          e.currentTarget.style.transform     = 'translateY(-50%) scale(1.1)'
        }}
        onMouseOut={e => {
          e.currentTarget.style.background    = 'rgba(22,125,130,0.2)'
          e.currentTarget.style.borderColor   = 'rgba(22,125,130,0.4)'
          e.currentTarget.style.transform     = 'translateY(-50%) scale(1)'
        }}
        >
          <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={dir==='prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}/>
          </svg>
        </button>
      ))}

      {/* ══ SLIDE DOTS ═════════════════════════════════════ */}
      <div style={{
        position:  'absolute',
        bottom:    32,
        left:      '50%',
        transform: 'translateX(-50%)',
        zIndex:    20,
        display:   'flex',
        gap:       10,
        alignItems:'center',
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width:           i===current ? 32 : 8,
            height:          8,
            borderRadius:    4,
            border:          'none',
            cursor:          'pointer',
            backgroundColor: i===current ? ' var(--color-primary)' : 'rgba(255,255,255,0.3)',
            boxShadow:       i===current ? '0 0 12px rgba(22,125,130,0.7)' : 'none',
            transition:      'all 0.4s ease',
            padding:         0,
          }}/>
        ))}
      </div>

      {/* ══ SLIDE COUNTER ══════════════════════════════════ */}
      <div style={{
        position:      'absolute',
        bottom:        32,
        right:         32,
        zIndex:        20,
        color:         'rgba(255,255,255,0.4)',
        fontSize:      13,
        fontWeight:    700,
        letterSpacing: '0.1em',
      }}>
        <span style={{ color:' var(--color-primary)', fontSize:18 }}>
          {String(current+1).padStart(2,'0')}
        </span>
        {' / '}
        {String(SLIDES.length).padStart(2,'0')}
      </div>

      {/* ══ SCROLL INDICATOR ═══════════════════════════════ */}
      <div style={{
        position:      'absolute',
        bottom:        32,
        left:          40,
        zIndex:        20,
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           6,
        animation:     'scrollBounce 2s ease-in-out infinite',
      }}>
        <span style={{
          color:         'rgba(255,255,255,0.35)',
          fontSize:      9,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          writingMode:   'vertical-rl',
        }}>Scroll</span>
        <div style={{
          width:      1,
          height:     40,
          background: 'linear-gradient(to bottom,  var(--color-primary), transparent)',
        }}/>
      </div>

      {/* ══ ANIMATIONS ═════════════════════════════════════ */}
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(20px,-15px); }
        }
        @keyframes scrollBounce {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(6px); }
        }
      `}</style>

    </section>
  )
}
