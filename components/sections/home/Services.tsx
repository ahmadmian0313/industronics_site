'use client'

import { HOME_SERVICES } from '@/data/home'
import { Container } from '@/components/ui/Container'
import { useState } from 'react'

function ServiceCard({ service }: { service: { title: string; desc: string; image: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'rgba(231, 231, 231, 0.03)',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: 16,
        padding: 28,
        cursor: 'pointer',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 15px 30px rgba(0, 0, 0, 0.15)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 12 }}>
        <img 
          src={service.image} 
          alt={service.title} 
          style={{ 
            width: 40, 
            height: 40, 
            objectFit: 'contain' 
          }} 
        />
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0, color: '#000' }}>
          {service.title}
        </h3>
      </div>
      
      <p style={{ color: '#000000', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
        {service.desc}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '96px 24px',
        background: 'linear-gradient(135deg, #090909 0%,  #e7e3e3 45%, #2a2d33 100%)',
        position: 'relative',
      }}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#000000' }}>
            Our <span style={{ color: '#000000' }}>Core</span> Services
          </h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {HOME_SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}