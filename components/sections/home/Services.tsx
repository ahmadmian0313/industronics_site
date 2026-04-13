import { HOME_SERVICES } from '@/data/home'
import { Container } from '@/components/ui/Container'

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '96px 24px',
        background: 'linear-gradient(135deg, #090909 0%, #1a1a1d 45%, #2a2d33 100%)',
        position: 'relative',
      }}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#f1f3f6' }}>
            Our <span style={{ color: '#c7cbd2' }}>Core</span> Services
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {HOME_SERVICES.map((service) => (
            <div key={service.title} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(197, 201, 209, 0.25)', borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{service.title}</h3>
              <p style={{ color: '#b8bcc5', fontSize: 14 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
