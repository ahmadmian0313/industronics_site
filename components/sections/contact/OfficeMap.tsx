// components/sections/contact/OfficeMap.tsx
'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COMPANY } from '@/lib/constants'

export function OfficeMap() {
  const offices = [
    {
      city: 'Karachi',
      address: COMPANY.offices.karachi.address,
      phone: COMPANY.phone1,
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.4!2d67.3!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzAwLjAiTiA2N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1',
    },
    {
      city: 'Lahore',
      address: COMPANY.offices.lahore.address,
      phone: COMPANY.phone2,
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.!2d74.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Offices
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Visit Us
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We have offices in Karachi and Lahore to serve you better.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <AnimatedSection key={office.city} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="aspect-video relative bg-gray-200">
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} Office Map`}
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-dark mb-4">
                    {office.city} Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-muted text-sm hover:text-primary transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}