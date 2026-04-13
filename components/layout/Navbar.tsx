'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const COMPANY = {
  logoSrc: '/logo.png',
  logoAlt: 'Industronics Engineering',
}

const CERTIFICATIONS = [
  { name: 'ISO 9001:2015 / 14001:2015 / 45001:2018', icon: '🏆' },
  { name: 'PSEB — Pakistan Software Export Board',    icon: '🇵🇰' },
  { name: 'UKAS Management Systems',                  icon: '✅' },
  { name: 'PEC — Pakistan Engineering Council',       icon: '⚙️' },
  { name: 'Green Building Council Member',            icon: '🌱' },
  { name: 'KCCI — Karachi Chamber of Commerce',       icon: '🏛️' },
]

const ABOUT_ITEMS = [
  { title: 'Board of Directors', desc: 'Stewards of vision, integrity, and long-term growth',          icon: '🏛️', href: '/about/board'       },
  { title: 'Management Team',   desc: 'Pioneering the architecture of modern industrial automation',   icon: '👥', href: '/about/management'  },
  { title: 'News & Media',      desc: 'Innovation, progress, and insight from across Industronics',    icon: '📰', href: '/about/news'        },
  { title: 'Investors',         desc: 'Driving sustainable value through strategic growth',            icon: '📈', href: '/about/investors'   },
  { title: 'Careers',           desc: 'Join the people powering Pakistan\'s industrial future',        icon: '💼', href: '/careers'           },
  { title: 'Certifications',    desc: 'ISO, UKAS, PEC, PSEB certified — 25+ years of excellence',     icon: '🏆', href: '/about/certifications' },
]

const ABOUT_SIDEBAR = [
  { label: 'Overview',          href: '/about'                  },
  { label: 'Board of Directors',href: '/about/board'            },
  { label: 'Management Team',   href: '/about/management'       },
  { label: 'News & Media',      href: '/about/news'             },
  { label: 'Investors',         href: '/about/investors'        },
  { label: 'Careers',           href: '/careers'                },
]

const NAV_LINKS = [
  { label: 'Home',         href: '/'          },
  { label: 'Certified By', href: '#',  isCert: true  },
    { label: 'Services',     href: '/services'  },
  { label: 'Solutions',    href: '/solutions' },
  { label: 'Products',     href: '/products'  },
  { label: 'Careers',      href: '/careers'   },
  { label: 'About Us',     href: '/about', isAbout: true },
  { label: 'Contact us',      href: '/contact'   },
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
    color:           isOpen ? '#5ecdd1' : 'rgba(255,255,255,0.85)',
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
        background:  'linear-gradient(90deg, #f7f7f7  0%, #0b1a2e 40%, #0d2035 70%, #ffffff 100%)',
        borderBottom: '2px solid #167d82',
        boxShadow: scrolled
          ? '0 4px 32px rgba(22,125,130,0.4), 0 1px 0 rgba(22,125,130,0.2)'
          : '0 2px 16px rgba(22,125,130,0.15)',
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
  borderLeft: '4px solid #167d82',
  backgroundColor: 'rgba(255,255,255,0.03)',
  minWidth: '400px', // Poore block ki width thodi badhai hy bade logo ke liye
}}>
  {/* Left Logo Block (Full Height Sidebar style) */}
  <div style={{
    width: '120px', // Logo container bada kiya hy (Original was 100px)
    height: '100%', 
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid rgba(22,125,130,0.3)',
    backgroundColor: 'rgba(0,0,0,0.1)',
  }}>
    <Image 
      src={COMPANY.logoSrc} 
      alt={COMPANY.logoAlt} 
      fill
      style={{ 
        objectFit: 'contain', 
        padding: '5px', 
        transform: 'scale(1.5)', // Logo ko bara karne ke liye scale badhaya hy
      }} 
      priority
    />
  </div>
  
  {/* Right Text Block (Centered) */}
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
      fontSize: '24px', // Same Size as requested
      lineHeight: '1',
      letterSpacing: '0.12em', 
      textTransform: 'uppercase' 
    }}>
      INDUSTRONICS
    </div>
    <div style={{ 
      color: '#5ecdd1', 
      fontWeight: 600, 
      fontSize: '12px', // Same Size as requested
      lineHeight: '1',
      marginTop: '8px', 
      letterSpacing: '0.45em', 
      textTransform: 'uppercase' 
    }}>
      ENGINEERING
    </div>
  </div>
</Link>
          {/* ── NAV LINKS ── */}
          <nav className="ie-nav" style={{ display:'flex', alignItems:'stretch', flex:1, justifyContent:'space-evenly' }}>
            {NAV_LINKS.map((item, idx) => {

              // ── CERTIFIED BY dropdown ──
              if (item.isCert) {
                return (
                  <div key={idx} ref={certRef} style={{ position:'relative', display:'flex', alignItems:'stretch' }}>
                    <button
                      onClick={() => setCertOpen(p => !p)}
                      style={navBtnStyle(certOpen)}
                      onMouseOver={e => { if (!certOpen) { e.currentTarget.style.color='#5ecdd1'; e.currentTarget.style.backgroundColor='rgba(22,125,130,0.07)' }}}
                      onMouseOut={e => { if (!certOpen) { e.currentTarget.style.color='rgba(255,255,255,0.85)'; e.currentTarget.style.backgroundColor='transparent' }}}
                    >
                      {item.label}
                      <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        style={{ transition:'transform 0.25s', transform: certOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    {certOpen && (
                      <div style={{
                        position:'absolute', top:'100%', left:'50%', transform:'translateX(-50%)',
                        minWidth:300, marginTop:4,
                        background:'linear-gradient(160deg, #0b1a2e 0%, #0e2236 100%)',
                        border:'1px solid rgba(22,125,130,0.4)', borderRadius:12,
                        boxShadow:'0 20px 50px rgba(0,0,0,0.6), 0 0 20px rgba(22,125,130,0.2)',
                        overflow:'hidden', zIndex:999,
                      }}>
                        <div style={{ padding:'10px 16px', background:'rgba(22,125,130,0.18)', borderBottom:'1px solid rgba(22,125,130,0.3)', fontSize:10, fontWeight:800, color:'#5ecdd1', letterSpacing:'0.22em', textTransform:'uppercase' }}>
                          Our Certifications
                        </div>
                        {CERTIFICATIONS.map((cert, i) => (
                          <a key={i} href="#" onClick={() => setCertOpen(false)}
                            style={{ display:'flex', alignItems:'center', gap:12, padding:'11px 16px', color:'rgba(255,255,255,0.82)', fontSize:13, fontWeight:500, textDecoration:'none', borderBottom: i < CERTIFICATIONS.length-1 ? '1px solid rgba(22,125,130,0.1)' : 'none', transition:'all 0.2s' }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor='rgba(22,125,130,0.15)'; e.currentTarget.style.color='#5ecdd1'; e.currentTarget.style.paddingLeft='22px' }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='rgba(255,255,255,0.82)'; e.currentTarget.style.paddingLeft='16px' }}
                          >
                            <span style={{ fontSize:16 }}>{cert.icon}</span>
                            <span>{cert.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              // ── ABOUT US mega dropdown ──
              if (item.isAbout) {
                return (
                  <div key={idx} ref={aboutRef} style={{ position:'relative', display:'flex', alignItems:'stretch' }}>
                    <button
                      onClick={() => setAboutOpen(p => !p)}
                      style={navBtnStyle(aboutOpen)}
                      onMouseOver={e => { if (!aboutOpen) { e.currentTarget.style.color='#5ecdd1'; e.currentTarget.style.backgroundColor='rgba(22,125,130,0.07)' }}}
                      onMouseOut={e => { if (!aboutOpen) { e.currentTarget.style.color='rgba(255,255,255,0.85)'; e.currentTarget.style.backgroundColor='transparent' }}}
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
                              <div style={{ height:1, background:'linear-gradient(90deg, rgba(22,125,130,0.5) 0%, transparent 80%)', marginBottom:20 }} />

                              {/* 3×2 Cards Grid */}
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
                    color: isActive ? '#5ecdd1' : 'rgba(255,255,255,0.85)',
                    borderBottom: isActive ? '2px solid #167d82' : '2px solid transparent',
                    borderTop: isActive ? '2px solid rgba(22,125,130,0.25)' : '2px solid transparent',
                    backgroundColor: isActive ? 'rgba(22,125,130,0.1)' : 'transparent',
                    transition:'all 0.2s',
                  }}
                  onMouseOver={e => { if (!isActive) { e.currentTarget.style.color='#5ecdd1'; e.currentTarget.style.backgroundColor='rgba(22,125,130,0.07)'; e.currentTarget.style.borderBottomColor='rgba(22,125,130,0.35)' }}}
                  onMouseOut={e => { if (!isActive) { e.currentTarget.style.color='rgba(255,255,255,0.85)'; e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.borderBottomColor='transparent' }}}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

{/* ── SEARCH BAR --- For Products/  */}
<div className="ie-search" style={{ display: 'flex', alignItems: 'center', padding: '0 16px', flexShrink: 0 }}>
  {/* Inline Style Block for Placeholder - Yeh line "Search Products" ko white karegi */}
  <style>{`
    .ie-search-input::placeholder {
      color: #ffffff !important;
      opacity: 1 !important;
      font-weight: 500;
    }
  `}</style>

  <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      
      {/* Icon */}
      <svg 
        style={{ position: 'absolute', left: 14, zIndex: 1, color: '#ffffff', pointerEvents: 'none' }}
        width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>

      <input 
        type="text" 
        className="ie-search-input" // Yeh class zaroori hai
        value={searchVal} 
        onChange={e => setSearchVal(e.target.value)}
        onFocus={() => setSearchFocus(true)} 
        onBlur={() => setSearchFocus(false)}
        placeholder="Search Products..."
        style={{
          borderRadius: 50, 
          padding: '10px 16px 10px 42px', 
          fontSize: 13, 
          fontWeight: 600,
          color: '#ffffff', // Typing text color
          outline: 'none', 
          width: searchFocus ? 200 : 180,
          backgroundColor: searchFocus ? '#167d82' : 'rgba(22, 125, 130, 0.95)', // Background thora dark rakha hai taake white pop kare
          border: searchFocus ? '1.5px solid #ffffff' : '1.5px solid rgba(255,255,255,0.3)',
          fontFamily: 'inherit', 
          letterSpacing: '0.02em',
          boxShadow: searchFocus 
            ? '0 8px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(22, 125, 130, 0.5)' 
            : '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
            style={{ display:'none', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:5, padding:'0 20px', border:'none', background:'transparent', cursor:'pointer', borderLeft:'1px solid rgba(22,125,130,0.2)', flexShrink:0, height:'100%' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ display:'block', width:22, height:2, backgroundColor:'#5ecdd1', borderRadius:2, transition:'all 0.3s ease',
                transform: mobileOpen ? i===0 ? 'rotate(45deg) translateY(7px)' : i===2 ? 'rotate(-45deg) translateY(-7px)' : 'none' : 'none',
                opacity: mobileOpen && i===1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>

        {/* ══ MOBILE MENU ══ */}
        <div style={{ overflow:'hidden', maxHeight: mobileOpen ? 800 : 0, transition:'max-height 0.4s ease', background:'linear-gradient(180deg,#0b1a2e 0%,#0d2035 100%)', borderTop: mobileOpen ? '1px solid rgba(22,125,130,0.3)' : 'none' }}>
          <div style={{ padding:'16px 20px 28px' }}>
            <form onSubmit={handleSearch} style={{ marginBottom:16 }}>
              <div style={{ position:'relative' }}>
                <svg style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'rgba(94,205,209,0.6)', pointerEvents:'none' }}
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input type="text" placeholder="  s..." value={searchVal} onChange={e => setSearchVal(e.target.value)}
                  style={{ width:'100%', border:'1px solid rgba(22,125,130,0.4)', borderRadius:50, padding:'10px 18px 10px 40px', fontSize:13, backgroundColor:'rgb(255, 255, 255)', color:'#e2e8f0', outline:'none', fontFamily:'inherit', boxSizing:'border-box' }}
                />
              </div>
            </form>

            {NAV_LINKS.map((item, idx) => {
              if (item.isCert) return (
                <div key={idx}>
                  <button onClick={() => setMobileCert(p => !p)}
                    style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'12px 14px', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color: mobileCert ? '#5ecdd1' : 'rgba(255,255,255,0.85)', backgroundColor: mobileCert ? 'rgba(22,125,130,0.15)' : 'transparent', border:'none', borderLeft: mobileCert ? '3px solid #167d82' : '3px solid transparent', borderRadius:6, marginBottom:3, cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s' }}>
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
                    style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'12px 14px', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color: mobileAbout ? '#5ecdd1' : 'rgba(255,255,255,0.85)', backgroundColor: mobileAbout ? 'rgba(22,125,130,0.15)' : 'transparent', border:'none', borderLeft: mobileAbout ? '3px solid #167d82' : '3px solid transparent', borderRadius:6, marginBottom:3, cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s' }}>
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
                  style={{ display:'flex', alignItems:'center', padding:'12px 14px', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', textDecoration:'none', color: activeLink===item.label ? '#5ecdd1' : 'rgba(255,255,255,0.85)', backgroundColor: activeLink===item.label ? 'rgba(22,125,130,0.15)' : 'transparent', borderRadius:6, marginBottom:3, borderLeft: activeLink===item.label ? '3px solid #167d82' : '3px solid transparent', transition:'all 0.2s' }}>
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
        input::placeholder { color: rgba(94,205,209,0.45); font-style: italic; letter-spacing: 0.05em; }
      `}</style>
    </>
  )
}