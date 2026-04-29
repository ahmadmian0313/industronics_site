// ============================================================
// ServiceCard.tsx
// Individual sector card — image + title + short description
// + expandable detail panel (accordion)
// PASTE LOCATION: components/services/ServiceCard.tsx
// ============================================================

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ServiceSector } from './servicesData';

interface ServiceCardProps {
  sector: ServiceSector
}

export default function ServiceCard({ sector }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="svc-card">
      {/* ── Card Image ── */}
      <div className="svc-card__img-wrap">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="svc-card__img"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Teal overlay on hover */}
        <div className="svc-card__img-overlay" />

        {/* Icon badge */}
        <span className="svc-card__icon">{sector.icon}</span>

        {/* Category pill */}
        <span className="svc-card__category">{sector.category}</span>
      </div>

      {/* ── Card Body ── */}
      <div className="svc-card__body">
        <h3 className="svc-card__title">{sector.title}</h3>
        <p className="svc-card__desc">{sector.shortDesc}</p>

        {/* ── Expand / Collapse toggle ── */}
        <button
          className={`svc-card__toggle ${expanded ? 'svc-card__toggle--open' : ''}`}
          onClick={() => setExpanded(p => !p)}
          aria-expanded={expanded}
        >
          {expanded ? 'Hide Details' : 'View Details'}
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'rotate(0)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* ── Expanded Detail Panel ── */}
        {expanded && (
          <div className="svc-card__expanded">
            <p className="svc-card__expanded-label">What it includes:</p>
            <ul className="svc-card__list">
              {sector.details.map((item, i) => (
                <li key={i}>
                  <span className="svc-card__bullet">▸</span> {item}
                </li>
              ))}
            </ul>

            <p className="svc-card__expanded-label" style={{ marginTop: 14 }}>Industries served:</p>
            <div className="svc-card__tags">
              {sector.industries.map((ind, i) => (
                <span key={i} className="svc-card__tag">{ind}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="svc-card__ctas">
              <Link href="/contact" className="svc-card__btn svc-card__btn--primary">
                Request Service
              </Link>
              <Link href="/contact" className="svc-card__btn svc-card__btn--outline">
                Contact Engineer
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* ── Card wrapper ── */
        .svc-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 18px rgba(22, 125, 130, 0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(22, 125, 130, 0.12);
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(22, 125, 130, 0.22);
        }

        /* ── Image ── */
        .svc-card__img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }
        .svc-card__img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .svc-card:hover .svc-card__img {
          transform: scale(1.06);
        }
        .svc-card__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(22, 125, 130, 0) 30%,
            rgba(10, 20, 22, 0.72) 100%
          );
          transition: opacity 0.3s;
        }
        .svc-card:hover .svc-card__img-overlay {
          opacity: 0.85;
        }
        .svc-card__icon {
          position: absolute;
          top: 14px;
          left: 16px;
          font-size: 28px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }
        .svc-card__category {
          position: absolute;
          bottom: 12px;
          right: 14px;
          background: rgba(22, 125, 130, 0.88);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 50px;
        }

        /* ── Body ── */
        .svc-card__body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .svc-card__title {
          font-size: 17px;
          font-weight: 800;
          color: #0f0f10;
          margin: 0 0 10px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .svc-card__desc {
          font-size: 13.5px;
          color: #4a5568;
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }

        /* ── Toggle button ── */
        .svc-card__toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1.5px solid #167d82;
          color: #167d82;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          align-self: flex-start;
        }
        .svc-card__toggle:hover,
        .svc-card__toggle--open {
          background: #167d82;
          color: #fff;
        }

        /* ── Expanded panel ── */
        .svc-card__expanded {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(22, 125, 130, 0.15);
          animation: expandIn 0.25s ease;
        }
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-card__expanded-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #167d82;
          margin: 0 0 8px;
        }
        .svc-card__list {
          list-style: none;
          padding: 0;
          margin: 0 0 8px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .svc-card__list li {
          font-size: 13px;
          color: #2d3748;
          display: flex;
          align-items: flex-start;
          gap: 7px;
          line-height: 1.5;
        }
        .svc-card__bullet {
          color: #167d82;
          font-size: 11px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .svc-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }
        .svc-card__tag {
          background: rgba(22, 125, 130, 0.08);
          border: 1px solid rgba(22, 125, 130, 0.2);
          color: #167d82;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 50px;
        }
        .svc-card__ctas {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .svc-card__btn {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 9px 18px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .svc-card__btn--primary {
          background: #167d82;
          color: #fff;
          box-shadow: 0 4px 14px rgba(22,125,130,0.3);
        }
        .svc-card__btn--primary:hover {
          background: #0f5c60;
        }
        .svc-card__btn--outline {
          border: 1.5px solid #167d82;
          color: #167d82;
          background: transparent;
        }
        .svc-card__btn--outline:hover {
          background: #167d82;
          color: #fff;
        }
      `}</style>
    </article>
  )
}
