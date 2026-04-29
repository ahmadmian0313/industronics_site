// ============================================================
// ServicesGrid.tsx
// Renders all sectors in 2-per-row grid
// TO ADD a new sector: add entry to servicesData.ts — done!
// PASTE LOCATION: components/services/ServicesGrid.tsx
// ============================================================

'use client'

import ServiceCard from './ServiceCard'
import { SERVICES_DATA, CATEGORY_ORDER } from './servicesData';

export default function ServicesGrid() {
  return (
    <section className="svc-grid-section">
      <div className="svc-grid-container">

        {/* ── Render cards in category groups ── */}
        {CATEGORY_ORDER.map(category => {
          // Filter sectors belonging to this category
          const sectors = SERVICES_DATA.filter(s => s.category === category)
          if (sectors.length === 0) return null

          return (
            <div key={category} className="svc-category-group">

              {/* Category heading */}
              <div className="svc-category-header">
                <span className="svc-category-line" />
                <h2 className="svc-category-title">{category}</h2>
                <span className="svc-category-line" />
              </div>

              {/* 2-column card grid */}
              <div className="svc-grid">
                {sectors.map(sector => (
                  <ServiceCard key={sector.id} sector={sector} />
                ))}

                {/*
                  If odd number of cards in a category, last card spans full width
                  handled via CSS :last-child:nth-child(odd)
                */}
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        /* ── Section wrapper ── */
        .svc-grid-section {
          background: radial-gradient(circle at center, #ffffff 0%, #2a2d33 60%, #ffffff 100%);
          padding: 60px 0 80px;
        }
        .svc-grid-container {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Category group ── */
        .svc-category-group {
          margin-bottom: 56px;
        }
        .svc-category-group:last-child {
          margin-bottom: 0;
        }

        /* ── Category header with flanking lines ── */
        .svc-category-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
        }
        .svc-category-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(22,125,130,0.35), transparent);
        }
        .svc-category-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #167d82;
          white-space: nowrap;
          padding: 6px 18px;
          border: 1.5px solid rgba(22,125,130,0.3);
          border-radius: 50px;
          background: rgba(22,125,130,0.05);
        }

        /* ── 2-column grid ── */
        .svc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        /* Last card in odd-count group spans full width */
        .svc-grid > :last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: 580px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .svc-grid {
            grid-template-columns: 1fr;
          }
          .svc-grid > :last-child:nth-child(odd) {
            grid-column: auto;
            max-width: 100%;
          }
          .svc-grid-section {
            padding: 40px 0 60px;
          }
        }
      `}</style>
    </section>
  )
}
