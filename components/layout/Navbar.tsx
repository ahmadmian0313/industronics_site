'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const COMPANY = {
  logoSrc: '/logo.png',
  logoAlt: 'Industronics Engineering',
}


const ABOUT_ITEMS = [
  { title: 'About Company', desc: 'Our company profile, history, and engineering values.', icon: '🏢', href: '/about' },
  { title: 'Board of Directors', desc: 'Stewards of vision, integrity, and long-term growth.', icon: '🏛️', href: '/about/board' },
  { title: 'Management Team', desc: 'Execution-focused structure across all operational levels.', icon: '👥', href: '/about/management' },
]

const ABOUT_SIDEBAR = [
  { label: 'About Company', href: '/about' },
  { label: 'Board of Directors', href: '/about/board' },
  { label: 'Management Team', href: '/about/management' },
]

const NAV_LINKS = [
  { label: 'Home',         href: '/'          },

  { label: 'Services',     href: '/services'  },
  { label: 'Solutions',    href: '/solutions' },
  { label: 'Products',     href: '/products'  },
  { label: 'Careers',      href: '/careers'   },
  { label: 'Contact us',   href: '/contact'   },
   { label: 'About Us',     href: '/about', isAbout: true },
]

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [certOpen,    setCertOpen]    = useState(false)
  const [aboutOpen,   setAboutOpen]   = useState(false)
  const [mobileCert,  setMobileCert]  = useState(false)
  const [mobileAbout, setMobileAbout] = useState(false)
  const [activeLink,  setActiveLink]  = useState('Home')
  const [searchVal,   setSearchVal]   = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  const [hoveredSidebar, setHoveredSidebar] = useState(0)

  const certRef  = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (certRef.current && !certRef.current.contains(e.target as Node)) setCertOpen(false)
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setCertOpen(false); setAboutOpen(false) }
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchVal.trim()) console.log('Searching:', searchVal)
  }

  // ── Shared button style builder ──────────────────────────
  const navBtnStyle = (isOpen: boolean): React.CSSProperties => ({
    display:         'flex',
    alignItems:      'center',
    gap:             4,
    padding:         '0 10px',
    fontSize:        12,
    fontWeight:      700,
    letterSpacing:   '0.07em',
    textTransform:   'uppercase',
    background:      'transparent',
    border:          'none',
    borderBottom:    isOpen ? '2px solid #167d82' : '2px solid transparent',
    color:           isOpen ? '#5ecdd1' : 'rgba(255,255,255,0.75)',  // CHANGED: 0.85 → 0.75
    cursor:          'pointer',
    fontFamily:      'inherit',
    whiteSpace:      'nowrap',
    transition:      'all 0.2s',
    backgroundColor: isOpen ? 'rgba(22,125,130,0.1)' : 'transparent',
    height:          '100%',
  })

  return (
    <>
      <header style={{
        position:    'fixed',
        top: 0, left: 0, right: 0,
        zIndex:      1000,
        width:       '100%',
        // CHANGED: pure near-black, no grey/silver gradient on corners
        background:  '#0a0f1a',
        // CHANGED: thin white line instead of thick teal
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        // CHANGED: clean dark shadow, no teal glow on the bar
        boxShadow: scrolled
          ? '0 4px 24px rgba(0,0,0,0.6)'
          : '0 1px 0 rgba(255,255,255,0.08)',
        transition: 'box-shadow 0.3s ease',
      }}>

        <div style={{ display:'flex', alignItems:'stretch', width:'100%', height:68 }}>

          {/* ── LOGO SECTION ── */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
            height: '100%',
            position: 'relative',
            // CHANGED: removed borderLeft '4px solid #167d82'
            backgroundColor: 'rgba(0,0,0,0.2)',  // KEPT as requested
            minWidth: '400px',
          }}>
            {/* Left Logo Block */}
            <div style={{
              width: '120px',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '1px solid rgba(255,255,255,0.08)',  // CHANGED: subtle white instead of teal
              backgroundColor: '#000000d3',
            }}>
              <Image
                src={COMPANY.logoSrc}
                alt={COMPANY.logoAlt}
                fill
                style={{
                  objectFit: 'contain',
                  padding: '5px',
                  transform: 'scale(1.5)',
                }}
                priority
              />
            </div>

            {/* Right Text Block */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 25px',
              flexGrow: 1,
            }}>
              <div style={{
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '26px',          // CHANGED: 24px → 26px
                lineHeight: '1',
                letterSpacing: '0.15em',   // CHANGED: 0.12em → 0.15em
                textTransform: 'uppercase'
              }}>
                INDUSTRONICS
              </div>
              <div style={{
                color: '#5ecdd1',
                fontWeight: 600,
                fontSize: '11px',          // CHANGED: 12px → 11px
                lineHeight: '1',
                marginTop: '8px',
                letterSpacing: '0.5em',    // CHANGED: 0.45em → 0.5em
                textTransform: 'uppercase'
              }}>
                ENGINEERING
              </div>
            </div>
          </Link>

          {/* ── NAV LINKS ── */}
          <nav className="ie-nav" style={{ display:'flex', alignItems:'stretch', flex:1, justifyContent:'center', gap: 4, paddingInline: 18 }}>
            {NAV_LINKS.map((item, idx) => {

              // ── CERTIFIED BY dropdown ──
        

              // ── ABOUT US mega dropdown ──
              if (item.isAbout) {
                return (
                  <div key={idx} ref={aboutRef} style={{ position:'relative', display:'flex', alignItems:'stretch' }}>
                    <button
                      onClick={() => setAboutOpen(p => !p)}
                      style={navBtnStyle(aboutOpen)}
                      onMouseOver={e => { if (!aboutOpen) { e.currentTarget.style.color='#5ecdd1'; e.currentTarget.style.backgroundColor='rgba(22,125,130,0.07)' }}}
                      onMouseOut={e => { if (!aboutOpen) { e.currentTarget.style.color='rgba(255,255,255,0.75)'; e.currentTarget.style.backgroundColor='transparent' }}}
                    >
                      {item.label}
                      <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        style={{ transition:'transform 0.25s', transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>

                    {/* ══ MEGA DROPDOWN PANEL ══ */}
                    {aboutOpen && (
                      <div style={{
                        position:  'fixed',
                        top:       68,
                        left:      32,
                        right:     32,
                        background: 'linear-gradient(160deg, #0b1a2e 0%, #0c1e34 60%, #0e2540 100%)',
                        border:     '1px solid rgba(22,125,130,0.45)',
                        borderTop:  'none',
                        borderRadius: '0 0 18px 18px',
                        boxShadow:  '0 32px 80px rgba(0,0,0,0.7), 0 0 40px rgba(22,125,130,0.15)',
                        overflow:   'hidden',
                        zIndex:     998,
                        animation:  'ieAboutSlide 0.22s cubic-bezier(0.4,0,0.2,1)',
                      }}>
                        <div style={{ display:'flex', minHeight:340 }}>

                          {/* ── LEFT SIDEBAR ── */}
                          <div style={{
                            width:       220,
                            flexShrink:  0,
                            borderRight: '1px solid rgba(22,125,130,0.2)',
                            padding:     '24px 0',
                            background:  'rgba(22,125,130,0.06)',
                          }}>
                            {ABOUT_SIDEBAR.map((si, i) => (
                              <Link
                                key={i}
                                href={si.href}
                                onClick={() => { setAboutOpen(false); setActiveLink('About Us') }}
                                style={{
                                  display:         'flex',
                                  alignItems:      'center',
                                  justifyContent:  'space-between',
                                  padding:         '11px 20px',
                                  color:           hoveredSidebar === i ? '#5ecdd1' : 'rgba(255,255,255,0.7)',
                                  fontSize:        13,
                                  fontWeight:      600,
                                  textDecoration:  'none',
                                  letterSpacing:   '0.03em',
                                  borderLeft:      hoveredSidebar === i ? '3px solid #167d82' : '3px solid transparent',
                                  backgroundColor: hoveredSidebar === i ? 'rgba(22,125,130,0.18)' : 'transparent',
                                  transition:      'all 0.18s',
                                }}
                                onMouseOver={() => setHoveredSidebar(i)}
                                onMouseOut={() => setHoveredSidebar(0)}
                              >
                                {si.label}
                                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
                                </svg>
                              </Link>
                            ))}
                          </div>

                          {/* ── RIGHT CONTENT ── */}
                          <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
                            <div style={{ flex:1, padding:'28px 36px' }}>

                              {/* Header */}
                              <div style={{ marginBottom:18 }}>
                                <div style={{ fontSize:22, fontWeight:800, color:'#ffffff', letterSpacing:'0.02em', marginBottom:5 }}>About Us</div>
                                <div style={{ fontSize:13, color:'rgba(94,205,209,0.75)', fontStyle:'italic' }}>Engineering excellence, innovation, and trust — since 1999</div>
                              </div>

                              {/* Divider */}
                              <div style={{ height:1, background:'linear-gradient(90deg, rgb(255, 255, 255) 0%, transparent 80%)', marginBottom:20 }} />

                              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
                                {ABOUT_ITEMS.map((card, i) => (
                                  <Link
                                    key={i}
                                    href={card.href}
                                    onClick={() => { setAboutOpen(false); setActiveLink('About Us') }}
                                    style={{
                                      display:        'block',
                                      background:     i === 0 ? 'rgba(22,125,130,0.1)' : 'rgba(255,255,255,0.03)',
                                      border:         `1px solid ${i === 0 ? 'rgba(22,125,130,0.4)' : 'rgba(22,125,130,0.18)'}`,
                                      borderRadius:   12,
                                      padding:        '18px 16px',
                                      textDecoration: 'none',
                                      transition:     'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                                      position:       'relative',
                                      overflow:       'hidden',
                                    }}
                                    onMouseOver={e => {
                                      e.currentTarget.style.background = 'rgba(22,125,130,0.13)'
                                      e.currentTarget.style.borderColor = 'rgba(22,125,130,0.5)'
                                      e.currentTarget.style.transform = 'translateY(-2px)'
                                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,125,130,0.18)'
                                      const title = e.currentTarget.querySelector('.about-card-title') as HTMLElement
                                      if (title) title.style.color = '#5ecdd1'
                                    }}
                                    onMouseOut={e => {
                                      e.currentTarget.style.background = i === 0 ? 'rgba(22,125,130,0.1)' : 'rgba(255,255,255,0.03)'
                                      e.currentTarget.style.borderColor = i === 0 ? 'rgba(22,125,130,0.4)' : 'rgba(22,125,130,0.18)'
                                      e.currentTarget.style.transform = 'translateY(0)'
                                      e.currentTarget.style.boxShadow = 'none'
                                      const title = e.currentTarget.querySelector('.about-card-title') as HTMLElement
                                      if (title) title.style.color = '#e2e8f0'
                                    }}
                                  >
                                    <div style={{ fontSize:22, marginBottom:10 }}>{card.icon}</div>
                                    <div className="about-card-title" style={{ fontSize:14, fontWeight:700, color:'#e2e8f0', marginBottom:5, letterSpacing:'0.02em', transition:'color 0.2s' }}>{card.title}</div>
                                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', lineHeight:1.5 }}>{card.desc}</div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Footer bar */}
                            <div style={{
                              display:'flex', alignItems:'center', justifyContent:'space-between',
                              padding:'14px 36px',
                              borderTop:'1px solid rgba(22,125,130,0.18)',
                              background:'rgba(22,125,130,0.05)',
                            }}>
                              <span style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>Industronics Engineering — Karachi, Pakistan · Est. 1999</span>
                              <Link
                                href="/contact"
                                onClick={() => setAboutOpen(false)}
                                style={{
                                  display:'flex', alignItems:'center', gap:6,
                                  background:'linear-gradient(135deg,#0d5c60,#167d82,#1a9499)',
                                  color:'white', fontSize:12, fontWeight:700,
                                  padding:'8px 18px', borderRadius:50,
                                  textDecoration:'none', letterSpacing:'0.08em',
                                  textTransform:'uppercase',
                                  boxShadow:'0 0 16px rgba(22,125,130,0.35)',
                                  transition:'all 0.2s',
                                }}
                                onMouseOver={e => { e.currentTarget.style.boxShadow='0 0 28px rgba(22,125,130,0.6)'; e.currentTarget.style.transform='scale(1.03)' }}
                                onMouseOut={e => { e.currentTarget.style.boxShadow='0 0 16px rgba(22,125,130,0.35)'; e.currentTarget.style.transform='scale(1)' }}
                              >
                                Get Started →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              // ── Regular link ──
              const isActive = activeLink === item.label
              return (
                <Link key={idx} href={item.href} onClick={() => setActiveLink(item.label)}
                  style={{
                    display:'flex', alignItems:'center', padding:'0 10px',
                    fontSize:12, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase',
                    textDecoration:'none', whiteSpace:'nowrap',
                    color: isActive ? '#5ecdd1' : 'rgba(255,255,255,0.75)',  // CHANGED: 0.85 → 0.75
                    borderBottom: isActive ? '2px solid #167d82' : '2px solid transparent',
                    borderTop: isActive ? '2px solid rgba(22,125,130,0.25)' : '2px solid transparent',
                    backgroundColor: isActive ? 'rgba(22,125,130,0.1)' : 'transparent',
                    transition:'all 0.2s',
                  }}
                  onMouseOver={e => { if (!isActive) { e.currentTarget.style.color='#5ecdd1'; e.currentTarget.style.backgroundColor='rgba(22,125,130,0.07)'; e.currentTarget.style.borderBottomColor='rgba(22,125,130,0.35)' }}}
                  onMouseOut={e => { if (!isActive) { e.currentTarget.style.color='rgba(255,255,255,0.75)'; e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.borderBottomColor='transparent' }}}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── SEARCH BAR ── */}
          <div className="ie-search" style={{ display: 'flex', alignItems: 'center', padding: '0 16px', flexShrink: 0 }}>
            <style>{`
              .ie-search-input::placeholder {
                color: rgb(255, 255, 255) !important;
                opacity: 1 !important;
                font-weight: 400;
                font-style: italic;
              }
            `}</style>

            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>

                {/* Icon */}
                <svg
                  style={{ position: 'absolute', left: 14, zIndex: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', transition: 'color 0.3s' }}
                  width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>

                <input
                  type="text"
                  className="ie-search-input"
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  placeholder="Search Products..."
                  style={{
                    borderRadius: 50,
                    padding: '10px 16px 10px 42px',
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#ffffff',
                    outline: 'none',
                    width: searchFocus ? 200 : 180,
                    // CHANGED: subtle white-glass look instead of solid teal
                    backgroundColor: searchFocus ? 'rgba(255,255,255,0.12)' : 'rgba(255, 255, 255, 0.07)',
                    // CHANGED: white border default, teal on focus
                    border: searchFocus ? '1px solid rgba(94,205,209,0.6)' : '1px solid rgba(255, 255, 255, 0.15)',
                    fontFamily: 'inherit',
                    letterSpacing: '0.02em',
                    boxShadow: searchFocus
                      ? '0 4px 20px rgba(255, 255, 255, 0.3), 0 0 12px rgba(255, 255, 255, 0.15)'
                      : 'none',
                    transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                />
              </div>
            </form>
          </div>

          {/* ── GET A QUOTE ── */}
          <Link href="/contact" className="ie-quote"
            style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'linear-gradient(135deg,#0d5c60 0%,#167d82 35%,#1a9499 65%,#20b0b8 100%)', color:'white', fontWeight:800, fontSize:12, letterSpacing:'0.12em', textTransform:'uppercase', textDecoration:'none', whiteSpace:'nowrap', flexShrink:0, height:42, alignSelf:'center', margin:'0 16px', padding:'0 22px', borderRadius:50, border:'1px solid rgba(94,205,209,0.25)', boxShadow:'0 0 20px rgba(22,125,130,0.4)', transition:'all 0.3s ease' }}
            onMouseOver={e => { e.currentTarget.style.background='linear-gradient(135deg,#0f6e73 0%,#1a9499 35%,#20b0b8 65%,#26cdd6 100%)'; e.currentTarget.style.boxShadow='0 0 30px rgba(22,125,130,0.65)'; e.currentTarget.style.transform='scale(1.03)' }}
            onMouseOut={e => { e.currentTarget.style.background='linear-gradient(135deg,#0d5c60 0%,#167d82 35%,#1a9499 65%,#20b0b8 100%)'; e.currentTarget.style.boxShadow='0 0 20px rgba(22,125,130,0.4)'; e.currentTarget.style.transform='scale(1)' }}
          >
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z"/>
            </svg>
            Get a Quote
          </Link>

          {/* ── HAMBURGER ── */}
          <button onClick={() => setMobileOpen(p => !p)} className="ie-hamburger" aria-label="Toggle navigation menu"
            style={{ display:'none', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:5, padding:'0 20px', border:'none', background:'transparent', cursor:'pointer', borderLeft:'1px solid rgba(255,255,255,0.08)', flexShrink:0, height:'100%' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ display:'block', width:22, height:2, backgroundColor:'#5ecdd1', borderRadius:2, transition:'all 0.3s ease',
                transform: mobileOpen ? i===0 ? 'rotate(45deg) translateY(7px)' : i===2 ? 'rotate(-45deg) translateY(-7px)' : 'none' : 'none',
                opacity: mobileOpen && i===1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>

        {/* ══ MOBILE MENU ══ */}
        <div style={{ overflow:'hidden', maxHeight: mobileOpen ? 800 : 0, transition:'max-height 0.4s ease', background:'#0a0f1a', borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
          <div style={{ padding:'16px 20px 28px' }}>
            <form onSubmit={handleSearch} style={{ marginBottom:16 }}>
              <div style={{ position:'relative' }}>
                <svg style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'rgba(94,205,209,0.6)', pointerEvents:'none' }}
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input type="text" placeholder="Search Products..." value={searchVal} onChange={e => setSearchVal(e.target.value)}
                  style={{ width:'100%', border:'1px solid rgba(255,255,255,0.15)', borderRadius:50, padding:'10px 18px 10px 40px', fontSize:13, backgroundColor:'rgba(255,255,255,0.07)', color:'#e2e8f0', outline:'none', fontFamily:'inherit', boxSizing:'border-box' }}
                />
              </div>
            </form>

            {NAV_LINKS.map((item, idx) => {
              if (item.isCert) return (
                <div key={idx}>
                  <button onClick={() => setMobileCert(p => !p)}
                    style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'12px 14px', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color: mobileCert ? '#5ecdd1' : 'rgba(255,255,255,0.75)', backgroundColor: mobileCert ? 'rgba(22,125,130,0.15)' : 'transparent', border:'none', borderLeft: mobileCert ? '3px solid #167d82' : '3px solid transparent', borderRadius:6, marginBottom:3, cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s' }}>
                    {item.label}
                    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transition:'transform 0.3s', transform: mobileCert ? 'rotate(180deg)' : 'none' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {mobileCert && (
                    <div style={{ marginLeft:14, marginBottom:8, borderLeft:'2px solid rgba(22,125,130,0.3)', paddingLeft:12 }}>
                      {CERTIFICATIONS.map((cert, i) => (
                        <a key={i} href="#" style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 0', color:'rgba(255,255,255,0.65)', fontSize:12, textDecoration:'none' }}
                          onMouseOver={e => (e.currentTarget.style.color='#5ecdd1')}
                          onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.65)')}
                        ><span>{cert.icon}</span>{cert.name}</a>
                      ))}
                    </div>
                  )}
                </div>
              )

              if (item.isAbout) return (
                <div key={idx}>
                  <button onClick={() => setMobileAbout(p => !p)}
                    style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'12px 14px', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color: mobileAbout ? '#5ecdd1' : 'rgba(255,255,255,0.75)', backgroundColor: mobileAbout ? 'rgba(22,125,130,0.15)' : 'transparent', border:'none', borderLeft: mobileAbout ? '3px solid #167d82' : '3px solid transparent', borderRadius:6, marginBottom:3, cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s' }}>
                    {item.label}
                    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transition:'transform 0.3s', transform: mobileAbout ? 'rotate(180deg)' : 'none' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {mobileAbout && (
                    <div style={{ marginLeft:14, marginBottom:8, borderLeft:'2px solid rgba(22,125,130,0.3)', paddingLeft:12 }}>
                      {ABOUT_SIDEBAR.map((si, i) => (
                        <Link key={i} href={si.href} onClick={() => { setMobileAbout(false); setMobileOpen(false) }}
                          style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 0', color:'rgba(255,255,255,0.65)', fontSize:12, textDecoration:'none' }}
                          onMouseOver={e => (e.currentTarget.style.color='#5ecdd1')}
                          onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.65)')}
                        >{si.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              )

              return (
                <Link key={idx} href={item.href} onClick={() => { setActiveLink(item.label); setMobileOpen(false) }}
                  style={{ display:'flex', alignItems:'center', padding:'12px 14px', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', textDecoration:'none', color: activeLink===item.label ? '#5ecdd1' : 'rgba(255,255,255,0.75)', backgroundColor: activeLink===item.label ? 'rgba(22,125,130,0.15)' : 'transparent', borderRadius:6, marginBottom:3, borderLeft: activeLink===item.label ? '3px solid #167d82' : '3px solid transparent', transition:'all 0.2s' }}>
                  {item.label}
                </Link>
              )
            })}

            <Link href="/contact" onClick={() => setMobileOpen(false)}
              style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'linear-gradient(135deg,#0d5c60,#167d82,#1a9499)', color:'white', fontWeight:800, fontSize:13, padding:14, borderRadius:10, textDecoration:'none', marginTop:12, letterSpacing:'0.1em', textTransform:'uppercase', boxShadow:'0 0 20px rgba(22,125,130,0.4)' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes ieAboutSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ie-hamburger { display: none !important; }
        .ie-nav       { display: flex !important; }
        .ie-search    { display: flex !important; }
        .ie-quote     { display: flex !important; }
        @media (max-width: 1100px) { .ie-search { display: none !important; } }
        @media (max-width: 900px) {
          .ie-nav { display: none !important; }
          .ie-search { display: none !important; }
          .ie-quote { display: none !important; }
          .ie-hamburger { display: flex !important; }
        }
        a:focus-visible, button:focus-visible { outline: 2px solid #167d82; outline-offset: 2px; border-radius: 4px; }
        .ie-search-input::placeholder { color: rgba(255,255,255,0.45) !important; font-style: italic; letter-spacing: 0.04em; }
      `}</style>
    </>
  )
}
