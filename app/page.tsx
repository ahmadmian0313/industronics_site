'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import BrandSection from '@/components/BrandSection';

// --- 3rd POINT: Digits Counter Component ---
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const num = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) motionValue.set(num);
  }, [isInView, num, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest).toLocaleString());
    });
  }, [springValue]);

  return <span ref={ref}>{display}{suffix}</span>;
};

export default function Home() {
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      tag: 'Industrial Automation',
      title: ['Industrial', 'Automation'],
      image: '/eng.png', 
      subtitle: 'Next-Gen PLC, SCADA & DCS Solutions for Modern Industry',
    },
    {
      tag: 'BMS Integration',
      title: ['Building', 'Management'],
      image: '/03.png', 
      subtitle: 'Intelligent BMS Solutions for Energy Efficiency & Control',
    },
    {
      tag: 'EPC Contracts',
      title: ['Engineering', 'Procurement'],
      image: '/02.png', 
      subtitle: 'End-to-End EPC Contracts for Large-Scale Industrial Projects',
    },
  ]

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const services = [
    { icon: '⚡', title: 'Automation Services', desc: 'Complete PLC/DCS automation for industrial plants, modernization & upgrades.' },
    { icon: '🏢', title: 'BMS Integration', desc: 'Customized Building Management Systems for optimal mechanical & electrical control.' },
    { icon: '📋', title: 'EPC Contracts', desc: 'Full Engineering, Procurement & Construction for large-scale complex projects.' },
    { icon: '⚙️', title: 'Mechanical Engineering', desc: 'In-house fabrication from raw material to cutting, forming, welding & assembly.' },
    { icon: '💻', title: 'Software Development', desc: 'Web-based Machine Monitoring, OEE Data Logging, WMS & ERP (SAP/Oracle).' },
    { icon: '📊', title: 'Process Monitoring', desc: 'Solutions for Textile, Denim, Carpet Industries — Web Tensions & Weft Controls.' },
    { icon: '🔬', title: 'Instrumentation', desc: 'Precision calibration & instrumentation for industrial measurement & control.' },
    { icon: '💧', title: 'Dosing Systems', desc: 'Customised chemical dosing systems for Chemical & Dyes industries.' },
  ]

  return (
    <div style={{ backgroundColor: '#0b181d', color: 'white', fontFamily: "'Segoe UI', system-ui, sans-serif", overflowX: 'hidden' }}>

     {/* HERO SECTION */}
<section style={{
  minHeight: '100vh', paddingTop: 80,
  background: '#1a1d1db9',
  position: 'relative', overflow: 'hidden',
  display: 'flex', alignItems: 'center',
}}>

  {/* Background Grid Accent */}
  <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
      <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right, rgb(253, 250, 250) 1px, transparent 1px)',
          backgroundSize: '80px 100%',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
      }} />
  </div>

  {/* FIX: removed maxWidth and set padding to 0 or very small to touch the edge */}
  <div style={{ 
    width: '100%', padding: '0 0 0 80px', // Left side edge gap (40px)
    display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center',
    gap: '20px', position: 'relative', zIndex: 10
  }}>

    {/* LEFT SIDE: Text Content */}
    <div style={{ paddingRight: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 40, height: 2, backgroundColor: '#167d82' }} />
        <span style={{ color: '#167d82', fontSize: 12, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          {slides[slide].tag}
        </span>
      </div>

      <h1 style={{ fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <span style={{ color: 'white' }}>{slides[slide].title[0]} </span><br/>
            <span style={{ color: '#167d82' }}>{slides[slide].title[1]}</span>
          </motion.div>
        </AnimatePresence>
      </h1>

      <p style={{ color: '#9ca3af', fontSize: 18, maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>
        {slides[slide].subtitle}
      </p>

      <div style={{ display: 'flex', gap: 16 }}>
        <a href="#services" style={{
          backgroundColor: '#167d82', color: 'white', fontWeight: 700, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 0 30px rgba(22,125,130,0.3)'
        }}>Get Started →</a>
      </div>

      <div style={{ display: 'flex', gap: 30, marginTop: 50 }}>
            <div>
              <div style={{fontSize: 28, fontWeight: 900, color: '#167d82'}}>
                  <Counter value="25+" />
              </div>
              
              <div style={{fontSize: 10, textTransform: 'uppercase', color: '#6b7280', letterSpacing: '0.1em'}}>Years Experience</div>
            </div>
            <div style={{width: 1, height: 40, background: 'rgba(255,255,255,0.1)'}} />
            <div>
              <div style={{fontSize: 28, fontWeight: 900, color: '#167d82'}}>
                  <Counter value="2000+" />
              </div>
              <div style={{fontSize: 10, textTransform: 'uppercase', color: '#6b7280', letterSpacing: '0.1em'}}>Projects Done</div>
            </div>
      </div>
    </div>
    

    {/* RIGHT SIDE: Image */}
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={slide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -15, 0] 
          }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
              x: { duration: 1, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 }
          }}
          style={{ width: '100%', maxWidth: '600px' }}
        >
          <img 
            src={slides[slide].image} 
            alt="Industrial Object" 
            style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* Slide Dots - FIX: Centered on screen */}
  <div style={{ 
    position: 'absolute', bottom: 40, left: 0, width: '100%', 
    display: 'flex', justifyContent: 'center', zIndex: 20 
  }}>
      <div style={{ display: 'flex', gap: 10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)} style={{
            height: 4, borderRadius: 2, border: 'none', cursor: 'pointer',
            width: i === slide ? 40 : 15,
            backgroundColor: i === slide ? '#167d82' : 'rgba(255,255,255,0.2)',
            transition: '0.4s',
          }} />
        ))}
      </div>
  </div>
</section>

      {/* REST OF THE SECTIONS (Unchanged) */}
      <section id="services" style={{ padding: '96px 24px', backgroundColor: '#080d16', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: '42px', fontWeight: 900 }}>Our <span style={{ color: '#167d82' }}>Core</span> Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {services.map((svc, i) => (
              <div key={i} style={{ backgroundColor: '#0d1520', border: '1px solid rgba(22,125,130,0.2)', borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandSection />

    </div>
  )
}