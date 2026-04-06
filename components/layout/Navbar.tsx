'use client'

// ============================================================
// components/layout/Navbar.tsx
// 
// FEATURES:
//   ✅ Corner-to-corner full width header
//   ✅ Logo image (logo.png) — fully fills container, no gaps
//   ✅ "Certified By" dropdown after Home
//   ✅ Careers button added
//   ✅ Search bar with "Search Products..." hint text
//   ✅ Get a Quote button at far right corner
//   ✅ Mobile hamburger menu
//   ✅ Scroll effect — adds shadow on scroll
//
// HOW TO MAKE STATIC ON ALL PAGES:
//   Put <Navbar /> in app/layout.tsx — NOT in page.tsx
//   It will show on every page automatically.
//
// USAGE in app/layout.tsx:
//   import { Navbar } from '@/components/layout/Navbar'
//   <body>
//     <Navbar />
//     {children}
//   </body>
// ============================================================

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── EDIT COMPANY INFO HERE ──────────────────────────────────
const COMPANY = {
  logoSrc: '/logo.png',   // Put your logo in /public/logo.png
  logoAlt: 'Industronics Engineering',
}

// ─── CERTIFICATION DROPDOWN ITEMS ───────────────────────────
const CERTIFICATIONS = [
  { name: 'ISO 9001:2015 / 14001:2015 / 45001:2018', icon: '🏆' },
  { name: 'PSEB — Pakistan Software Export Board',    icon: '🇵🇰' },
  { name: 'UKAS Management Systems',                  icon: '✅' },
  { name: 'PEC — Pakistan Engineering Council',       icon: '⚙️' },
  { name: 'Green Building Council Member',            icon: '🌱' },
  { name: 'KCCI — Karachi Chamber of Commerce',       icon: '🏛️' },
]

// ─── MAIN NAV LINKS ──────────────────────────────────────────
// Add/remove links here — Certified By and Careers are special
const NAV_LINKS = [
  { label: 'Home',         href: '/'          },
  { label: 'Certified By', href: '#',  isCert: true  },
  { label: 'About Us',     href: '/about'     },
  { label: 'Services',     href: '/services'  },
  { label: 'Solutions',    href: '/solutions' },
  { label: 'Products',     href: '/products'  },
  { label: 'Careers',      href: '/careers'   },
  { label: 'Contact',      href: '/contact'   },
]

// ────────────────────────────────────────────────────────────

export function Navbar() {

  // ── State ──────────────────────────────────────────────────
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [certOpen,    setCertOpen]    = useState(false)
  const [mobileCert,  setMobileCert]  = useState(false)
  const [activeLink,  setActiveLink]  = useState('Home')
  const [searchVal,   setSearchVal]   = useState('')
  const [searchFocus, setSearchFocus] = useState(false)

  const certRef    = useRef<HTMLDivElement>(null)
  const searchRef  = useRef<HTMLInputElement>(null)

  // ── Scroll listener ────────────────────────────────────────
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // ── Lock body scroll when mobile open ──────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // ── Close cert dropdown when clicking outside ───────────────
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (certRef.current && !certRef.current.contains(e.target as Node)) {
        setCertOpen(false)
      }
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  // ── Escape closes cert dropdown ─────────────────────────────
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCertOpen(false)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchVal.trim()) {
      console.log('Searching:', searchVal)
      // TODO: Add your search logic here
    }
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          MAIN HEADER
          position: fixed — stays on top on all pages
          width: 100% — corner to corner, no max-width
          ══════════════════════════════════════════════════════ */}
      <header style={{
        position:    'fixed',
        top:         0,
        left:        0,
        right:       0,
        zIndex:      1000,
        width:       '100%',

        // Dark navy gradient — corner to corner
        background:  'linear-gradient(90deg, #07111f 0%, #0b1a2e 40%, #0d2035 70%, #0f2540 100%)',
        borderBottom: '2px solid #167d82',

        // Shadow increases on scroll
        boxShadow: scrolled
          ? '0 4px 32px rgba(22,125,130,0.4), 0 1px 0 rgba(22,125,130,0.2)'
          : '0 2px 16px rgba(22,125,130,0.15)',

        transition: 'box-shadow 0.3s ease',
      }}>

        {/* ── INNER ROW — full width, no padding on edges ── */}
        <div style={{
          display:     'flex',
          alignItems:  'stretch',
          width:       '100%',
          height:      68,
          // NO max-width, NO margin auto — full corner to corner
        }}>

          {/* ════════════════════════════════════════
              1. LOGO — left edge
              ════════════════════════════════════════ */}
          <Link
            href="/"
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            12,
              padding:        '0 24px',
              textDecoration: 'none',
              flexShrink:     0,
              borderRight:    '1px solid rgba(22,125,130,0.2)',
              // Left teal accent stripe
              borderLeft:     '3px solid #167d82',
            }}
          >
            {/* Logo image container — fully filled, no gaps */}
            <div style={{
              width:        52,
              height:       52,
              borderRadius: 10,
              overflow:     'hidden',      // clips image to container
              flexShrink:   0,
              position:     'relative',   // needed for Next.js fill
              border:       '1px solid rgba(94,205,209,0.3)',
              boxShadow:    '0 0 18px rgba(22,125,130,0.5)',
              // White background so transparent PNGs look clean
              backgroundColor: '#ffffff',
            }}>
              <Image
                src={COMPANY.logoSrc}
                alt={COMPANY.logoAlt}
                fill                          // fills container completely
                style={{
                  objectFit:      'contain',    // cover = no gaps, fills edge to edge
                  transform: 'scale(1.8)',   // center the logo in container
                }}
                priority                      // load immediately (above the fold)
                onError={(e) => {
                  // If logo.png not found — show IE text fallback
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  if (el.parentElement) {
                    el.parentElement.style.backgroundColor = '#167d82'
                    el.parentElement.innerHTML =
                      '<span style="color:white;font-weight:900;font-size:18px;letter-spacing:2px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">IE</span>'
                  }
                }}
              />
            </div>

            {/* Brand name text */}
            <div style={{ lineHeight: 1.2 }}>
              <div style={{
                color:         '#ffffff',
                fontWeight:    900,
                fontSize:      20,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textShadow:    '0 0 20px rgba(22,125,130,0.4)',
              }}>
                INDUSTRONICS
              </div>
              <div style={{
                color:         '#5ecdd1',
                fontWeight:    600,
                fontSize:      12,
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
              }}>
                ENGINEERING
              </div>
            </div>
          </Link>

          {/* ════════════════════════════════════════
              2. NAV LINKS — center
              ════════════════════════════════════════ */}
          <nav
            className="ie-nav"
            style={{
              display:        'flex',
              alignItems:     'stretch',
              flex:           1,
              // Equal spacing across all links
              justifyContent: 'space-evenly',
            }}
          >
            {NAV_LINKS.map((item, idx) => {

              // ── "Certified By" — special dropdown button ──
              if (item.isCert) {
                return (
                  <div
                    key={idx}
                    ref={certRef}
                    style={{ position: 'relative', display: 'flex', alignItems: 'stretch' }}
                  >
                    <button
                      onClick={() => setCertOpen(p => !p)}
                      style={{
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
                        borderBottom:    certOpen
                          ? '2px solid #167d82'
                          : '2px solid transparent',
                        color:           certOpen ? '#5ecdd1' : 'rgba(255,255,255,0.85)',
                        cursor:          'pointer',
                        fontFamily:      'inherit',
                        whiteSpace:      'nowrap',
                        transition:      'all 0.2s',
                        backgroundColor: certOpen ? 'rgba(22,125,130,0.1)' : 'transparent',
                      }}
                      onMouseOver={e => {
                        if (!certOpen) {
                          e.currentTarget.style.color = '#5ecdd1'
                          e.currentTarget.style.backgroundColor = 'rgba(22,125,130,0.07)'
                        }
                      }}
                      onMouseOut={e => {
                        if (!certOpen) {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }
                      }}
                    >
                      {item.label}
                      {/* Chevron icon — rotates when open */}
                      <svg
                        width="9" height="9"
                        fill="none" stroke="currentColor" strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        style={{
                          transition: 'transform 0.25s',
                          transform:  certOpen ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>

                    {/* ── CERTIFICATION DROPDOWN PANEL ── */}
                    {certOpen && (
                      <div style={{
                        position:        'absolute',
                        top:             '100%',
                        left:            '50%',
                        transform:       'translateX(-50%)',
                        minWidth:        300,
                        marginTop:       4,
                        background:      'linear-gradient(160deg, #0b1a2e 0%, #0e2236 100%)',
                        border:          '1px solid rgba(22,125,130,0.4)',
                        borderRadius:    12,
                        boxShadow:       '0 20px 50px rgba(0,0,0,0.6), 0 0 20px rgba(22,125,130,0.2)',
                        overflow:        'hidden',
                        zIndex:          999,
                      }}>
                        {/* Dropdown header */}
                        <div style={{
                          padding:       '10px 16px',
                          background:    'rgba(22,125,130,0.18)',
                          borderBottom:  '1px solid rgba(22,125,130,0.3)',
                          fontSize:      10,
                          fontWeight:    800,
                          color:         '#5ecdd1',
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                        }}>
                          Our Certifications
                        </div>

                        {/* Certification list */}
                        {CERTIFICATIONS.map((cert, i) => (
                          <a
                            key={i}
                            href="#"
                            onClick={() => setCertOpen(false)}
                            style={{
                              display:        'flex',
                              alignItems:     'center',
                              gap:            12,
                              padding:        '11px 16px',
                              color:          'rgba(255,255,255,0.82)',
                              fontSize:       13,
                              fontWeight:     500,
                              textDecoration: 'none',
                              borderBottom:   i < CERTIFICATIONS.length - 1
                                ? '1px solid rgba(22,125,130,0.1)'
                                : 'none',
                              transition:     'all 0.2s',
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.backgroundColor = 'rgba(22,125,130,0.15)'
                              e.currentTarget.style.color = '#5ecdd1'
                              e.currentTarget.style.paddingLeft = '22px'
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = 'rgba(255,255,255,0.82)'
                              e.currentTarget.style.paddingLeft = '16px'
                            }}
                          >
                            <span style={{ fontSize: 16 }}>{cert.icon}</span>
                            <span>{cert.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              // ── Regular nav link ──
              const isActive = activeLink === item.label
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setActiveLink(item.label)}
                  style={{
                    display:         'flex',
                    alignItems:      'center',
                    padding:         '0 10px',
                    fontSize:        12,
                    fontWeight:      700,
                    letterSpacing:   '0.07em',
                    textTransform:   'uppercase',
                    textDecoration:  'none',
                    whiteSpace:      'nowrap',
                    color:           isActive ? '#5ecdd1' : 'rgba(255,255,255,0.85)',
                    borderBottom:    isActive
                      ? '2px solid #167d82'
                      : '2px solid transparent',
                    borderTop:       isActive
                      ? '2px solid rgba(22,125,130,0.25)'
                      : '2px solid transparent',
                    backgroundColor: isActive ? 'rgba(22,125,130,0.1)' : 'transparent',
                    transition:      'all 0.2s',
                  }}
                  onMouseOver={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#5ecdd1'
                      e.currentTarget.style.backgroundColor = 'rgba(22,125,130,0.07)'
                      e.currentTarget.style.borderBottomColor = 'rgba(22,125,130,0.35)'
                    }
                  }}
                  onMouseOut={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.borderBottomColor = 'transparent'
                    }
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ════════════════════════════════════════
              3. SEARCH BAR — stylish expandable
              ════════════════════════════════════════ */}
          <div
            className="ie-search"
            style={{
              display:     'flex',
              alignItems:  'center',
              padding:     '0 16px',
              borderLeft:  '1px solid rgba(22,125,130,0.2)',
              flexShrink:  0,
            }}
          >
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Search input */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                {/* Search icon inside input */}
                <svg
                  style={{
                    position:  'absolute',
                    left:      12,
                    zIndex:    1,
                    color:     searchFocus ? '#5ecdd1' : 'rgba(94,205,209,0.5)',
                    transition: 'color 0.2s',
                    pointerEvents: 'none',
                  }}
                  width="14" height="14" fill="none" stroke="currentColor"
                  strokeWidth="2.2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>

                <input
                  ref={searchRef}
                  type="text"
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  placeholder="Search Products..."
                  style={{
                    // Stylish pill shape
                    border:          searchFocus
                      ? '1px solid #167d82'
                      : '1px solid rgba(22,125,130,0.35)',
                    borderRadius:    50,
                    padding:         '8px 16px 8px 36px',   // left padding for icon
                    fontSize:        12,
                    fontWeight:      500,
                    color:           '#e2e8f0',
                    outline:         'none',
                    width:           searchFocus ? 200 : 170,  // expands on focus
                    backgroundColor: searchFocus
                      ? 'rgba(22,125,130,0.12)'
                      : 'rgba(255,255,255,0.06)',
                    fontFamily:      'inherit',
                    letterSpacing:   '0.03em',
                    // Glow on focus
                    boxShadow: searchFocus
                      ? '0 0 14px rgba(22,125,130,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                      : 'none',
                    transition:      'all 0.3s ease',
                  }}
                />
              </div>
            </form>
          </div>

          {/* ════════════════════════════════════════
              4. GET A QUOTE — right corner button
              Full height, gradient, no border-radius on right
              ════════════════════════════════════════ */}
 <Link
  href="/contact"
  className="ie-quote"
  style={{
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            8,
    background:     'linear-gradient(135deg, #0d5c60 0%, #167d82 35%, #1a9499 65%, #20b0b8 100%)',
    color:          'white',
    fontWeight:     800,
    fontSize:       12,
    letterSpacing:  '0.12em',
    textTransform:  'uppercase',
    textDecoration: 'none',
    whiteSpace:     'nowrap',
    flexShrink:     0,

    // ── YEH 3 CHANGES KARO ──
    height:         '42px',        // ← fixed height
    alignSelf:      'center',      // ← vertically center karo
    margin:         '0 16px',      // ← left-right space

    padding:        '0 22px',
    borderRadius:   50,            // ← full pill shape
    border:         '1px solid rgba(94,205,209,0.25)',
    boxShadow:      '0 0 20px rgba(22,125,130,0.4)',
    transition:     'all 0.3s ease',
  }}
  onMouseOver={e => {
    e.currentTarget.style.background =
      'linear-gradient(135deg, #0f6e73 0%, #1a9499 35%, #20b0b8 65%, #26cdd6 100%)'
    e.currentTarget.style.boxShadow = '0 0 30px rgba(22,125,130,0.65)'
    e.currentTarget.style.transform = 'scale(1.03)'
  }}
  onMouseOut={e => {
    e.currentTarget.style.background =
      'linear-gradient(135deg, #0d5c60 0%, #167d82 35%, #1a9499 65%, #20b0b8 100%)'
    e.currentTarget.style.boxShadow = '0 0 20px rgba(22,125,130,0.4)'
    e.currentTarget.style.transform = 'scale(1)'
  }}
>
  <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z"/>
  </svg>
  Get a Quote
</Link>

          {/* ════════════════════════════════════════
              5. MOBILE HAMBURGER — shows on small screens
              ════════════════════════════════════════ */}
          <button
            onClick={() => setMobileOpen(p => !p)}
            className="ie-hamburger"
            aria-label="Toggle navigation menu"
            style={{
              display:        'none',      // shown via CSS class
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            5,
              padding:        '0 20px',
              border:         'none',
              background:     'transparent',
              cursor:         'pointer',
              borderLeft:     '1px solid rgba(22,125,130,0.2)',
              flexShrink:     0,
              height:         '100%',
            }}
          >
            {/* Animated hamburger lines */}
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display:         'block',
                width:           22,
                height:          2,
                backgroundColor: '#5ecdd1',
                borderRadius:    2,
                transition:      'all 0.3s ease',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(7px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-7px)'
                  : 'none'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}/>
            ))}
          </button>

        </div>
        {/* ── End main row ── */}

        {/* ════════════════════════════════════════
            MOBILE MENU — slides down
            ════════════════════════════════════════ */}
        <div style={{
          overflow:   'hidden',
          maxHeight:  mobileOpen ? 700 : 0,
          transition: 'max-height 0.4s ease',
          background: 'linear-gradient(180deg, #0b1a2e 0%, #0d2035 100%)',
          borderTop:  mobileOpen ? '1px solid rgba(22,125,130,0.3)' : 'none',
        }}>
          <div style={{ padding: '16px 20px 28px' }}>

            {/* Mobile search */}
            <form onSubmit={handleSearch} style={{ marginBottom: 16 }}>
              <div style={{ position: 'relative' }}>
                <svg style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'rgba(94,205,209,0.6)', pointerEvents:'none' }}
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  style={{
                    width:           '100%',
                    border:          '1px solid rgba(22,125,130,0.4)',
                    borderRadius:    50,
                    padding:         '10px 18px 10px 40px',
                    fontSize:        13,
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    color:           '#e2e8f0',
                    outline:         'none',
                    fontFamily:      'inherit',
                    boxSizing:       'border-box',
                  }}
                />
              </div>
            </form>

            {/* Mobile nav links */}
            {NAV_LINKS.map((item, idx) => {
              if (item.isCert) {
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setMobileCert(p => !p)}
                      style={{
                        display:         'flex',
                        alignItems:      'center',
                        justifyContent:  'space-between',
                        width:           '100%',
                        padding:         '12px 14px',
                        fontSize:        13,
                        fontWeight:      700,
                        letterSpacing:   '0.06em',
                        textTransform:   'uppercase',
                        color:           mobileCert ? '#5ecdd1' : 'rgba(255,255,255,0.85)',
                        backgroundColor: mobileCert ? 'rgba(22,125,130,0.15)' : 'transparent',
                        border:          'none',
                        borderLeft:      mobileCert ? '3px solid #167d82' : '3px solid transparent',
                        borderRadius:    6,
                        marginBottom:    3,
                        cursor:          'pointer',
                        fontFamily:      'inherit',
                        transition:      'all 0.2s',
                      }}
                    >
                      {item.label}
                      <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        style={{ transition:'transform 0.3s', transform: mobileCert ? 'rotate(180deg)' : 'none' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    {/* Mobile cert list */}
                    {mobileCert && (
                      <div style={{ marginLeft:14, marginBottom:8, borderLeft:'2px solid rgba(22,125,130,0.3)', paddingLeft:12 }}>
                        {CERTIFICATIONS.map((cert, i) => (
                          <a key={i} href="#" style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 0', color:'rgba(255,255,255,0.65)', fontSize:12, textDecoration:'none', transition:'color 0.2s' }}
                            onMouseOver={e => (e.currentTarget.style.color = '#5ecdd1')}
                            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                          >
                            <span>{cert.icon}</span>{cert.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => { setActiveLink(item.label); setMobileOpen(false) }}
                  style={{
                    display:         'flex',
                    alignItems:      'center',
                    padding:         '12px 14px',
                    fontSize:        13,
                    fontWeight:      700,
                    letterSpacing:   '0.06em',
                    textTransform:   'uppercase',
                    textDecoration:  'none',
                    color:           activeLink === item.label ? '#5ecdd1' : 'rgba(255,255,255,0.85)',
                    backgroundColor: activeLink === item.label ? 'rgba(22,125,130,0.15)' : 'transparent',
                    borderRadius:    6,
                    marginBottom:    3,
                    borderLeft:      activeLink === item.label ? '3px solid #167d82' : '3px solid transparent',
                    transition:      'all 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Mobile Get a Quote */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            8,
                background:     'linear-gradient(135deg, #0d5c60, #167d82, #1a9499)',
                color:          'white',
                fontWeight:     800,
                fontSize:       13,
                padding:        '14px',
                borderRadius:   10,
                textDecoration: 'none',
                marginTop:      12,
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                boxShadow:      '0 0 20px rgba(22,125,130,0.4)',
              }}
            >
              Get a Quote
            </Link>

          </div>
        </div>
        {/* ── End mobile menu ── */}

      </header>

      {/* ════════════════════════════════════════════════════════
          SPACER — pushes page content below fixed header
          Add this in layout.tsx below <Navbar />
          ════════════════════════════════════════════════════════ */}
      {/* <div style={{ height: 68 }} /> */}

      {/* ══ RESPONSIVE CSS ══════════════════════════════════ */}
      <style>{`
        /* Desktop — show everything, hide hamburger */
        .ie-hamburger { display: none !important; }
        .ie-nav       { display: flex !important; }
        .ie-search    { display: flex !important; }
        .ie-quote     { display: flex !important; }

        /* Medium screens — hide search */
        @media (max-width: 1100px) {
          .ie-search { display: none !important; }
        }

        /* Mobile — show hamburger, hide nav */
        @media (max-width: 900px) {
          .ie-nav       { display: none !important; }
          .ie-search    { display: none !important; }
          .ie-quote     { display: none !important; }
          .ie-hamburger { display: flex !important; }
        }

        /* Smooth focus ring */
        a:focus-visible, button:focus-visible {
          outline: 2px solid #167d82;
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Placeholder text styling */
        input::placeholder {
          color: rgba(94, 205, 209, 0.45);
          font-style: italic;
          letter-spacing: 0.05em;
        }
      `}</style>
    </>
  )
}
