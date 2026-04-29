// ============================================================
// ServicesCTA.tsx
// Bottom CTA banner — "Ready to Start Your Project?"
// PASTE LOCATION: components/services/ServicesCTA.tsx
// ============================================================

'use client'

import Link from 'next/link'

export default function ServicesCTA() {
  return (
    <section className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-container">
        <span className="cta-badge">Get Started Today</span>
        <h2 className="cta-heading">Ready to Start Your Project?</h2>
        <p className="cta-sub">
          Talk to our engineers and get a tailored solution for your industrial automation needs.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="cta-btn cta-btn--primary">Request a Quote</Link>
          <Link href="/contact" className="cta-btn cta-btn--outline">Talk to an Engineer</Link>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: #0f0f10;
          padding: 90px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(22,125,130,0.15);
        }
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(22,125,130,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .cta-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #167d82;
          border: 1px solid rgba(22,125,130,0.4);
          padding: 5px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .cta-heading {
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 900;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .cta-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0 0 36px;
        }
        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-btn {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s;
        }
        .cta-btn--primary {
          background: linear-gradient(135deg, #0d5c60, #167d82, #20b0b8);
          color: #fff;
          box-shadow: 0 0 28px rgba(22,125,130,0.45);
        }
        .cta-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 36px rgba(22,125,130,0.65);
        }
        .cta-btn--outline {
          border: 1.5px solid rgba(255,255,255,0.22);
          color: rgba(255,255,255,0.8);
          background: transparent;
        }
        .cta-btn--outline:hover {
          border-color: #167d82;
          color: #fff;
          background: rgba(22,125,130,0.12);
        }
        @media (max-width: 480px) {
          .cta-section { padding: 60px 16px; }
        }
      `}</style>
    </section>
  )
}
