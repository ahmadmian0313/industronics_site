// ============================================================
// IndustriesSection.tsx
// "Industries We Serve" section — centralised component
// PASTE LOCATION: components/services/IndustriesSection.tsx
// ============================================================

'use client'

const INDUSTRIES = [
  { icon: '🧵', name: 'Textile',      desc: 'Automated weaving, dyeing & finishing lines' },
  { icon: '🍬', name: 'Sugar',        desc: 'Process control & cane processing automation' },
  { icon: '🏭', name: 'Cement',       desc: 'Kiln, mill & material handling automation' },
  { icon: '⚗️', name: 'Chemical',     desc: 'Batch processing & safety interlocks' },
  { icon: '🛢️', name: 'Oil & Gas',    desc: 'Pipeline monitoring & wellhead automation' },
  { icon: '🍱', name: 'Food Industry',desc: 'Hygienic processing & packaging lines' },
  { icon: '⚡', name: 'Power Plants', desc: 'DCS, turbine & load management systems' },
]

export default function IndustriesSection() {
  return (
    <section className="ind-section">
      <div className="ind-container">
        {/* Heading */}
        <div className="ind-heading-wrap">
          <span className="ind-badge">Industry Coverage</span>
          <h2 className="ind-heading">Industries We Serve</h2>
          <p className="ind-sub">
            Our engineering solutions span across seven major industrial sectors,
            each with tailored automation strategies.
          </p>
        </div>

        {/* Grid */}
        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className="ind-card">
              <span className="ind-icon">{ind.icon}</span>
              <h3 className="ind-name">{ind.name}</h3>
              <p className="ind-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ind-section {
          background: #0f0f10;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .ind-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px,
            transparent 1px, transparent 80px
          );
          pointer-events: none;
        }
        .ind-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .ind-heading-wrap {
          text-align: center;
          margin-bottom: 48px;
        }
        .ind-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #167d82;
          border: 1px solid rgba(22,125,130,0.4);
          padding: 5px 16px;
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .ind-heading {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }
        .ind-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .ind-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(22,125,130,0.18);
          border-radius: 14px;
          padding: 28px 22px;
          text-align: center;
          transition: all 0.28s ease;
          cursor: default;
        }
        .ind-card:hover {
          background: rgba(22,125,130,0.1);
          border-color: rgba(22,125,130,0.5);
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(22,125,130,0.2);
        }
        .ind-icon {
          font-size: 36px;
          display: block;
          margin-bottom: 12px;
          filter: drop-shadow(0 2px 6px rgba(22,125,130,0.4));
        }
        .ind-name {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 8px;
        }
        .ind-desc {
          font-size: 12.5px;
          color: rgba(255,255,255,0.42);
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 600px) {
          .ind-section { padding: 60px 16px; }
          .ind-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .ind-card { padding: 20px 14px; }
        }
        @media (max-width: 380px) {
          .ind-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
