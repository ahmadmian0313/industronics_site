'use client'
import { useState, useEffect } from 'react'

export default function Home() {

  // ── Slider state ──────────────────────────────────────────
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      tag:      'Industrial Automation',
      title:    ['Industrial', 'Automation'],
      subtitle: 'Next-Gen PLC, SCADA & DCS Solutions for Modern Industry',
    },
    {
      tag:      'BMS Integration',
      title:    ['Building', 'Management'],
      subtitle: 'Intelligent BMS Solutions for Energy Efficiency & Control',
    },
    {
      tag:      'EPC Contracts',
      title:    ['Engineering', 'Procurement'],
      subtitle: 'End-to-End EPC Contracts for Large-Scale Industrial Projects',
    },
  ]

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  // ── Services data ─────────────────────────────────────────
  const services = [
    { icon: '⚡', title: 'Automation Services',      desc: 'Complete PLC/DCS automation for industrial plants, modernization & upgrades.' },
    { icon: '🏢', title: 'BMS Integration',           desc: 'Customized Building Management Systems for optimal mechanical & electrical control.' },
    { icon: '📋', title: 'EPC Contracts',             desc: 'Full Engineering, Procurement & Construction for large-scale complex projects.' },
    { icon: '⚙️', title: 'Mechanical Engineering',    desc: 'In-house fabrication from raw material to cutting, forming, welding & assembly.' },
    { icon: '💻', title: 'Software Development',      desc: 'Web-based Machine Monitoring, OEE Data Logging, WMS & ERP (SAP/Oracle).' },
    { icon: '📊', title: 'Process Monitoring',        desc: 'Solutions for Textile, Denim, Carpet Industries — Web Tensions & Weft Controls.' },
    { icon: '🔬', title: 'Instrumentation',           desc: 'Precision calibration & instrumentation for industrial measurement & control.' },
    { icon: '💧', title: 'Dosing Systems',            desc: 'Customised chemical dosing systems for Chemical & Dyes industries.' },
    { icon: '🌱', title: 'Green Energy',              desc: 'Solar & renewable energy solutions for sustainable industrial power.' },
  ]

  return (
    <div style={{ backgroundColor: '#0a0f1a', color: 'white', fontFamily: "'Segoe UI', system-ui, sans-serif", overflowX: 'hidden' }}>

 

      {/* ════════════════════════════════════════
          HERO SECTION — Full screen slider
          ════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh', paddingTop: 68,
        background: 'linear-gradient(135deg, #0a0f1a 0%, #0d1f2d 50%, #0f2a35 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>

        {/* Animated grid background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#167d82" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Glowing orbs */}
        <div style={{
          position: 'absolute', top: '20%', right: '15%',
          width: 400, height: 400, borderRadius: '50%',
          backgroundColor: '#167d82', opacity: 0.08,
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '10%',
          width: 300, height: 300, borderRadius: '50%',
          backgroundColor: '#167d82', opacity: 0.06,
          filter: 'blur(60px)',
        }} />

        {/* Animated circuit lines */}
        {[15, 30, 45, 60, 75].map((top, i) => (
          <div key={i} style={{
            position: 'absolute', left: 0, right: 0,
            top: `${top}%`, height: 1,
            background: 'linear-gradient(90deg, transparent, #167d82, transparent)',
            opacity: 0.15,
            animation: `pulse ${2 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}

        {/* Rotating gear SVG */}
        <div style={{
          position: 'absolute', top: 80, right: 60, opacity: 0.12,
          animation: 'spin 30s linear infinite',
        }}>
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="60" fill="none" stroke="#167d82" strokeWidth="1" strokeDasharray="10 5"/>
            <circle cx="70" cy="70" r="40" fill="none" stroke="#167d82" strokeWidth="0.5"/>
            <circle cx="70" cy="70" r="10" fill="#167d82" opacity="0.5"/>
            {[0,60,120,180,240,300].map((a,i) => (
              <circle key={i}
                cx={70 + 60 * Math.cos(a * Math.PI / 180)}
                cy={70 + 60 * Math.sin(a * Math.PI / 180)}
                r="5" fill="#167d82"/>
            ))}
          </svg>
        </div>

        {/* Slide content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '0 60px', maxWidth: 900 }}>

          {/* Tag line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 2, backgroundColor: '#167d82' }} />
            <span style={{ color: '#167d82', fontSize: 12, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Industronics Engineering
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 90px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
            <span style={{ color: 'white' }}>{slides[slide].title[0]} </span>
            <span style={{ color: '#167d82' }}>{slides[slide].title[1]}</span>
          </h1>

          {/* Subtitle */}
          <p style={{ color: '#9ca3af', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 40 }}>
            {slides[slide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#services" style={{
              backgroundColor: '#167d82', color: 'white',
              fontWeight: 700, fontSize: 13, letterSpacing: '0.1em',
              padding: '14px 32px', borderRadius: 8,
              textDecoration: 'none', textTransform: 'uppercase',
              boxShadow: '0 0 30px rgba(22,125,130,0.5)',
              transition: 'all 0.3s',
            }}>Our Services →</a>
            <a href="#about" style={{
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white', fontWeight: 600, fontSize: 13,
              padding: '14px 32px', borderRadius: 8,
              textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>Read More</a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 60, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}>
            {[['16+','Years Experience'],['2000+','Projects Done'],['60+','Expert Engineers'],['100%','Quality Certified']].map(([num, label], i) => (
              <div key={i}>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#167d82' }}>{num}</div>
                <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} style={{
              height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
              width: i === slide ? 32 : 8,
              backgroundColor: i === slide ? '#167d82' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.4s',
            }} />
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, right: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, color: '#6b7280', letterSpacing: '0.2em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #167d82, transparent)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES SECTION
          ════════════════════════════════════════ */}
      <section id="services" style={{ padding: '96px 24px', backgroundColor: '#080d16', position: 'relative' }}>
        {/* Top border accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #167d82, transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 1, backgroundColor: '#167d82' }} />
              <span style={{ color: '#167d82', fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>What We Do</span>
              <div style={{ width: 32, height: 1, backgroundColor: '#167d82' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, marginBottom: 16 }}>
              Our <span style={{ color: '#167d82' }}>Core</span> Services
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 600, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              25+ years of industrial excellence — delivering cutting-edge automation & engineering solutions across Pakistan and beyond.
            </p>
          </div>

          {/* Services grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {services.map((svc, i) => (
              <div key={i}
                style={{
                  backgroundColor: '#0d1520',
                  border: '1px solid rgba(22,125,130,0.2)',
                  borderRadius: 16, padding: 28,
                  cursor: 'pointer', transition: 'all 0.3s',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseOver={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(22,125,130,0.7)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 20px 40px rgba(22,125,130,0.15)'
                }}
                onMouseOut={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(22,125,130,0.2)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 12,
                  backgroundColor: 'rgba(22,125,130,0.15)',
                  border: '1px solid rgba(22,125,130,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, marginBottom: 20,
                }}>{svc.icon}</div>

                {/* Title */}
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'white' }}>{svc.title}</h3>

                {/* Desc */}
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{svc.desc}</p>

                {/* Read more */}
                <a href="#" style={{ color: '#167d82', fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #167d82, transparent)' }} />
      </section>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <footer id="contact" style={{ backgroundColor: '#05080f', borderTop: '1px solid rgba(22,125,130,0.2)', padding: '64px 24px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 48 }}>

            {/* About */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#167d82', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: 'white', fontSize: 14 }}>IE</div>
                <div>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: 12, letterSpacing: '0.15em' }}>INDUSTRONICS</div>
                  <div style={{ color: '#167d82', fontSize: 9, letterSpacing: '0.3em' }}>ENGINEERING</div>
                </div>
              </div>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>About <span style={{ color: '#167d82' }}>Us</span></h3>
              <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.8 }}>
                Pakistan-based company delivering technical services to national & multi-national companies in SCADA, OEE, Automation & Calibration for 25+ years.
              </p>
            </div>

            {/* Resources */}
            <div>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Useful <span style={{ color: '#167d82' }}>Resources</span></h3>
              {['Careers','Client List','I.T Services','Consulting Services','Product Engineering','Industrial Process Monitoring'].map((item, i) => (
                <a key={i} href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 13, textDecoration: 'none', marginBottom: 10 }}
                  onMouseOver={e => (e.target as HTMLElement).style.color='#167d82'}
                  onMouseOut={e => (e.target as HTMLElement).style.color='#6b7280'}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#167d82', flexShrink: 0 }} />
                  {item}
                </a>
              ))}
            </div>

            {/* Key Services */}
            <div>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Key <span style={{ color: '#167d82' }}>Services</span></h3>
              {['PLC & RTU','HMI & SCADA','Calibration','Flow Control','Digital Twin','Global Machines Service'].map((item, i) => (
                <a key={i} href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 13, textDecoration: 'none', marginBottom: 10 }}
                  onMouseOver={e => (e.target as HTMLElement).style.color='#167d82'}
                  onMouseOut={e => (e.target as HTMLElement).style.color='#6b7280'}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#167d82', flexShrink: 0 }} />
                  {item}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Contact <span style={{ color: '#167d82' }}>Us</span></h3>
              {[
                { icon: '📞', text: '+923378908848 | +923378908857' },
                { icon: '✉️', text: 'info@industronics.uk' },
                { icon: '📍', text: 'R8-8/1-2, National Highway N-5, Landhi, Karachi' },
                { icon: '📍', text: '12-Ali Homes, Mian Jan Muhammad Road, Lahore' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 14, color: '#6b7280', fontSize: 13 }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
              {/* Social */}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                {['📘','📸','💼'].map((icon, i) => (
                  <a key={i} href="#" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: '1px solid rgba(22,125,130,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}>{icon}</a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(22,125,130,0.2)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ color: '#4b5563', fontSize: 13 }}>
              Copyright ©2026 All rights reserved | <span style={{ color: '#167d82' }}>industronics.uk</span>
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Privacy Policy','Terms of Use','Sitemap'].map((link, i) => (
                <a key={i} href="#" style={{ color: '#4b5563', fontSize: 12, textDecoration: 'none' }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── CSS Animations ── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a0f1a; }
        ::-webkit-scrollbar-thumb { background: #167d82; border-radius: 3px; }
      `}</style>

    </div>
  )
}
