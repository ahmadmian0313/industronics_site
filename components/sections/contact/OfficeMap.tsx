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
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.067341052684!2d67.06554557606678!3d24.930062042475635!2m3!1f0!2f0!3f0!3m2!1i1024!2i2048!4f13.1!3m3!1m2!1s0x3eb33f140654217f%3A0xc3f3f01966567083!2sIndustronics!5e0!3m2!1sen!2spk!4v1711200000000!5m2!1sen!2spk',
    },
    {
      city: 'Lahore',
      address: COMPANY.offices.lahore.address,
      phone: COMPANY.phone2,
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.542!2d74.358!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i2048!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMjEnMjguOCJF!5e0!3m2!1sen!2spk!4v1711200000000!5m2!1sen!2spk',
    },
  ]

  return (
    // Line 28: bg-background remove karke style add kiya gaya hai
   <section 
  className="py-20 md:py-28" 
  style={{ 
    background: "radial-gradient(circle at center, #e7e3e3 0%, #2a2d33 60%, #090909 100%)" 
  }}
>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xl font-medium bg-primary/20 text-primary mb-4 border border-primary/30">
            Our Offices
          </span>
          
          {/* Line 41: text-dark add kiya gaya hai taake heading black nazar aaye */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Visit Our Locations
          </h2>
          
          <p className="text-gray-900 text-lg max-w-2xl mx-auto font-medium">
            We have offices in Karachi and Lahore to serve you better.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <AnimatedSection key={office.city} delay={index * 0.1}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
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
                  <h3 className="font-heading text-xl font-semibold text-black mb-4">
                    {office.city} Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-800 text-sm hover:text-primary transition-colors font-medium">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-800 text-sm">{office.hours}</span>
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