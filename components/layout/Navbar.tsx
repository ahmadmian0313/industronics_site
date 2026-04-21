'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const COMPANY = {
  logoSrc: '/logo.png',
  logoAlt: 'Industronics Engineering',
}

const FLAGS = [
{ code: 'US', src: 'https://flagcdn.com/w40/us.png' },
  { code: 'PK', src: 'https://flagcdn.com/w40/pk.png' },
  { code: 'CA', src: 'https://flagcdn.com/w40/ca.png' },
  { code: 'IN', src: 'https://flagcdn.com/w40/in.png' },
  { code: 'CN', src: 'https://flagcdn.com/w40/cn.png' },
  { code: 'IE', src: 'https://flagcdn.com/w40/ie.png' },
  { code: 'DE', src: 'https://flagcdn.com/w40/de.png' },
  { code: 'FR', src: 'https://flagcdn.com/w40/fr.png' },
  { code: 'GB', src: 'https://flagcdn.com/w40/gb.png' },
  { code: 'JP', src: 'https://flagcdn.com/w40/jp.png' },
  
  
  


]

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
  { label: 'Home',       href: '/'          },
  { label: 'Services',   href: '/services'  },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Products',   href: '/products'  },
  { label: 'Careers',    href: '/careers'   },
  { label: 'Contact us', href: '/contact'   },
  { label: 'About Us',   href: '/about', isAbout: true },
]

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [aboutOpen,   setAboutOpen]   = useState(false)
  const [flagOpen,    setFlagOpen]    = useState(false) // New state for flags
  const [mobileAbout, setMobileAbout] = useState(false)
  const [activeLink,  setActiveLink]  = useState('Home')
  const [searchVal,   setSearchVal]   = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  const [hoveredSidebar, setHoveredSidebar] = useState(0)

  const aboutRef = useRef<HTMLDivElement>(null)
  const flagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false)
      if (flagRef.current && !flagRef.current.contains(e.target as Node)) setFlagOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const navBtnStyle = (isOpen: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '0 10px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    background: 'transparent',
    border: 'none',
    borderBottom: isOpen ? '2px solid #167d82' : '2px solid transparent',
    color: isOpen ? '#5ecdd1' : 'rgba(255,255,255,0.75)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
    backgroundColor: isOpen ? 'rgba(22,125,130,0.1)' : 'transparent',
    height: '100%',
  })

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, width: '100%',
        background: '#0a0f1a',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.6)' : '0 1px 0 rgba(255,255,255,0.08)',
        transition: 'box-shadow 0.3s ease',
      }}>

        <div style={{ display:'flex', alignItems:'stretch', width:'100%', height:68 }}>

          {/* ── LOGO SECTION ── */}
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0,
            height: '100%', position: 'relative', backgroundColor: 'rgba(0,0,0,0.2)', minWidth: '400px',
          }}>
            <div style={{ width: '120px', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#000000d3' }}>
              <div style={{ width: '50%', height: '80%', backgroundColor: '#ffffff', borderRadius: '4px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image src={COMPANY.logoSrc} alt={COMPANY.logoAlt} fill style={{ objectFit: 'contain', padding: '5px', transform: 'scale(2.5)' }} priority />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 25px', flexGrow: 1 }}>
              <div style={{ color: '#ffffff', fontWeight: 900, fontSize: '26px', lineHeight: '1', letterSpacing: '0.15em', textTransform: 'uppercase' }}>INDUSTRONICS</div>
              <div style={{ color: '#5ecdd1', fontWeight: 600, fontSize: '11px', lineHeight: '1', marginTop: '8px', letterSpacing: '0.5em', textTransform: 'uppercase' }}>ENGINEERING</div>
            </div>
          </Link>

          {/* ── NAV LINKS ── */}
          <nav className="ie-nav" style={{ display:'flex', alignItems:'stretch', flex:1, justifyContent:'center', gap: 4, paddingInline: 18 }}>
            {NAV_LINKS.map((item, idx) => {
              if (item.isAbout) {
                return (
                  <div key={idx} ref={aboutRef} style={{ position:'relative', display:'flex', alignItems:'stretch' }}>
                    <button onClick={() => setAboutOpen(p => !p)} style={navBtnStyle(aboutOpen)}>
                      {item.label}
                      <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transition:'transform 0.25s', transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    {/* Mega Dropdown code remains same as original */}
                    {aboutOpen && (
                      <div style={{ position:'fixed', top:68, left:32, right:32, background:'linear-gradient(160deg, #0b1a2e 0%, #0c1e34 60%, #0e2540 100%)', border:'1px solid rgba(22,125,130,0.45)', borderRadius:'0 0 18px 18px', boxShadow:'0 32px 80px rgba(0,0,0,0.7)', overflow:'hidden', zIndex:998, animation:'ieAboutSlide 0.22s cubic-bezier(0.4,0,0.2,1)' }}>
                        <div style={{ display:'flex', minHeight:340 }}>
                          <div style={{ width: 220, flexShrink:0, borderRight:'1px solid rgba(22,125,130,0.2)', padding:'24px 0', background:'rgba(22,125,130,0.06)' }}>
                            {ABOUT_SIDEBAR.map((si, i) => (
                              <Link key={i} href={si.href} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'11px 20px', color: hoveredSidebar === i ? '#5ecdd1' : 'rgba(255,255,255,0.7)', fontSize:13, fontWeight:600, textDecoration:'none', borderLeft: hoveredSidebar === i ? '3px solid #167d82' : '3px solid transparent', backgroundColor: hoveredSidebar === i ? 'rgba(22,125,130,0.18)' : 'transparent', transition:'all 0.18s' }} onMouseOver={() => setHoveredSidebar(i)} onMouseOut={() => setHoveredSidebar(0)}>{si.label}</Link>
                            ))}
                          </div>
                          <div style={{ flex:1, padding:'28px 36px' }}>
                            <div style={{ fontSize:22, fontWeight:800, color:'#ffffff', marginBottom:5 }}>About Us</div>
                            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
                              {ABOUT_ITEMS.map((card, i) => (
                                <Link key={i} href={card.href} style={{ display:'block', background: i === 0 ? 'rgba(22,125,130,0.1)' : 'rgba(255, 255, 255, 0.03)', border: `1px solid ${i === 0 ? 'rgba(22,125,130,0.4)' : 'rgba(22,125,130,0.18)'}`, borderRadius: 12, padding: '18px 16px', textDecoration: 'none' }}>
                                  <div style={{ fontSize:22, marginBottom:10 }}>{card.icon}</div>
                                  <div style={{ fontSize:14, fontWeight:700, color:'#e2e8f0', marginBottom:5 }}>{card.title}</div>
                                  <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', lineHeight:1.5 }}>{card.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              const isActive = activeLink === item.label
              return (
                <Link key={idx} href={item.href} onClick={() => setActiveLink(item.label)} style={{ display:'flex', alignItems:'center', padding:'0 10px', fontSize:12, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', textDecoration:'none', whiteSpace:'nowrap', color: isActive ? '#5ecdd1' : 'rgba(255,255,255,0.75)', borderBottom: isActive ? '2px solid #167d82' : '2px solid transparent', backgroundColor: isActive ? 'rgba(22,125,130,0.1)' : 'transparent', transition:'all 0.2s' }}>{item.label}</Link>
              )
            })}
          </nav>

          {/* ── SEARCH & FLAG & QUOTE ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: '20px' }}>
            <div className="ie-search">
              <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <svg style={{ position: 'absolute', left: 14, color: 'white', pointerEvents: 'none' }} width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <input type="text" value={searchVal} onChange={e => setSearchVal(e.target.value)} onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)} placeholder="Search Products..." style={{ borderRadius: 50, padding: '10px 16px 10px 42px', fontSize: 13, fontWeight: 500, color: '#ffffff', outline: 'none', width: searchFocus ? 200 : 180, backgroundColor: 'rgba(255, 255, 255, 0.07)', border: searchFocus ? '1px solid rgba(94,205,209,0.6)' : '1px solid rgba(255, 255, 255, 0.15)', transition: 'all 0.3s' }} />
                </div>
              </form>
            </div>

            {/* FLAG DROPDOWN INJECTED HERE */}
            <div ref={flagRef} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div onClick={() => setFlagOpen(!flagOpen)} style={{ width: 35, height: 35, borderRadius: '50%', border: '2px solid white', cursor: 'pointer', overflow: 'hidden', position: 'relative' }}>
                <Image src={FLAGS[0].src} alt="Flag" fill style={{ objectFit: 'cover' }} />
              </div>
              {flagOpen && (
                <div style={{ position: 'absolute', top: 50, right: 0, background: '#0a0f1a', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: 10, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 10px 25px rgba(0,0,0,0.5)', zIndex: 1001 }}>
                  {FLAGS.map((f, i) => (
                    <div key={i} style={{ width: 25, height: 25, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img src={f.src} alt="flag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="ie-quote" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'linear-gradient(135deg,#0d5c60 0%,#167d82 35%,#1a9499 65%,#20b0b8 100%)', color:'white', fontWeight:800, fontSize:12, letterSpacing:'0.12em', textTransform:'uppercase', textDecoration:'none', height:42, padding:'0 22px', borderRadius:50, boxShadow:'0 0 20px rgba(22,125,130,0.4)' }}>
              Get a Quote
            </Link>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="ie-hamburger" style={{ display:'none', background:'transparent', border:'none', cursor:'pointer', flexDirection:'column', gap:5 }}>
              <span style={{ width:22, height:2, background:'#5ecdd1' }}></span>
              <span style={{ width:22, height:2, background:'#5ecdd1' }}></span>
              <span style={{ width:22, height:2, background:'#5ecdd1' }}></span>
            </button>
          </div>
        </div>

        {/* ══ MOBILE MENU FIX ══ */}
        <div style={{ display: mobileOpen ? 'block' : 'none', background:'#0a0f1a', borderTop:'1px solid rgba(255,255,255,0.1)', padding:'20px' }}>
            {NAV_LINKS.map((item, idx) => (
              <Link key={idx} href={item.href} onClick={() => setMobileOpen(false)} style={{ display:'block', padding:'12px 0', color:'white', textDecoration:'none', fontSize:14, fontWeight:700, textTransform:'uppercase', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" style={{ display:'block', background:'#167d82', color:'white', textAlign:'center', padding:12, borderRadius:8, marginTop:15, textDecoration:'none', fontWeight:800 }}>GET A QUOTE</Link>
        </div>
      </header>

      <style>{`
        @keyframes ieAboutSlide { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1100px) { .ie-search { display: none !important; } }
        @media (max-width: 950px) {
          .ie-nav, .ie-quote, .ie-search { display: none !important; }
          .ie-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}