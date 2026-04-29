// ============================================================
// ServicesHero.tsx
// Top hero section for the Services/Core Areas page
// Matches "Our Solutions" hero style from screenshot
// PASTE LOCATION: components/services/ServicesHero.tsx
// ============================================================

'use client'

import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="svc-hero">
      {/* Animated grid background lines */}
      <div className="svc-hero__grid" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="svc-hero__orb svc-hero__orb--left"  aria-hidden="true" />
      <div className="svc-hero__orb svc-hero__orb--right" aria-hidden="true" />

      <div className="svc-hero__content">
        {/* Top badge pill */}
        <div className="svc-hero__badge">
          <span className="svc-hero__badge-dot" />
          INDUSTRONICS EXPERTISE
        </div>

        {/* Main heading */}
        <h1 className="svc-hero__heading">
          Our Core <span className="svc-hero__accent">Areas</span>
        </h1>

        {/* Sub heading */}
        <p className="svc-hero__sub">
          Delivering end-to-end EPC, Automation & Smart Industrial Solutions
          across&nbsp;13&nbsp;specialised engineering disciplines.
        </p>

        {/* CTA buttons */}
        <div className="svc-hero__ctas">
          <a href="#core-areas" className="svc-hero__btn svc-hero__btn--primary">
            Explore Services
          </a>
          <Link href="/contact" className="svc-hero__btn svc-hero__btn--outline">
            Contact Us
          </Link>
        </div>

        {/* Stats row */}
        <div className="svc-hero__stats">
          {[
            { value: '13+', label: 'Service Domains' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '7',   label: 'Industries Served' },
            { value: '15+', label: 'Years Experience' },
          ].map((s, i) => (
            <div key={i} className="svc-hero__stat">
              <span className="svc-hero__stat-value">{s.value}</span>
              <span className="svc-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ── Hero wrapper ── */
        .svc-hero {
          position: relative;
          background:  #fffff,
              backgroundSize: '50px 50px',;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 100px 24px 80px;
        }

        /* ── Vertical grid lines (same as screenshot) ── */
        .svc-hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.03) 1px,
              transparent 1px,
              transparent 80px
            );
          pointer-events: none;
        }

        /* ── Teal glow orbs ── */
        .svc-hero__orb {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .svc-hero__orb--left {
          background: rgba(22, 125, 130, 0.18);
          top: -100px;
          left: -150px;
        }
        .svc-hero__orb--right {
          background: rgba(22, 125, 130, 0.10);
          bottom: -150px;
          right: -150px;
        }

        /* ── Content ── */
        .svc-hero__content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* ── Badge ── */
        .svc-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 6px 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 24px;
        }
        .svc-hero__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #167d82;
          box-shadow: 0 0 8px #167d82;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }

        /* ── Heading ── */
        .svc-hero__heading {
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }
        .svc-hero__accent {
          color: #167d82;
        }

        /* ── Sub ── */
        .svc-hero__sub {
          font-size: clamp(14px, 2vw, 17px);
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin: 0 0 36px;
          max-width: 540px;
        }

        /* ── CTAs ── */
        .svc-hero__ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 52px;
        }
        .svc-hero__btn {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 13px 30px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s;
          cursor: pointer;
        }
        .svc-hero__btn--primary {
          background: linear-gradient(135deg, #0d5c60, #167d82, #20b0b8);
          color: #fff;
          box-shadow: 0 0 24px rgba(22,125,130,0.45);
        }
        .svc-hero__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 32px rgba(22,125,130,0.6);
        }
        .svc-hero__btn--outline {
          border: 1.5px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.8);
          background: transparent;
        }
        .svc-hero__btn--outline:hover {
          border-color: #167d82;
          color: #fff;
          background: rgba(22,125,130,0.12);
        }

        /* ── Stats row ── */
        .svc-hero__stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.08);
          width: 100%;
        }
        .svc-hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .svc-hero__stat-value {
          font-size: 28px;
          font-weight: 900;
          color: #167d82;
          line-height: 1;
        }
        .svc-hero__stat-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .svc-hero {
            min-height: auto;
            padding: 90px 20px 60px;
          }
          .svc-hero__stats {
            gap: 28px;
          }
          .svc-hero__stat-value { font-size: 22px; }
        }
      `}</style>
    </section>
  )
}
