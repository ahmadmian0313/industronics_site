// app/contact/page.tsx
import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { OfficeMap } from '@/components/sections/contact/OfficeMap'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Industronics Engineering. We have offices in Karachi and Lahore to serve you better.',
}

export default function ContactPage() {
  return (
    <>
    
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10"> 
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77) 1px, transparent 1px),
                                linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 mb-6">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Ready to transform your operations? Reach out to our team and let's discuss your project requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
 {/* Contact Form & Info Section */}
<section 
  className="py-10 md:py-10" 
  style={{ 
    background: "linear-gradient(135deg, #090909 0%, #e7e3e3 45%, #2a2d33 100%)" 
  }}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-5 gap-10">
      
      {/* 1. Form Section - Text color updated to dark */}
      <div className="lg:col-span-3 text-slate-900">
        <ContactForm />
      </div>

      {/* 2. Quick Contact Section */}
      <div className="lg:col-span-2">
        <AnimatedSection delay={0.2}>
          {/* Card background remains Dark/Transparent to contrast with the light page background */}
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 text-white h-full border border-white/10 shadow-2xl">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-white">
              Quick Contact
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-white/60 text-sm mb-1">Phone</div>
                <a href={`tel:${COMPANY.phone1}`} className="text-lg font-medium hover:text-accent transition-colors text-white">
                  {COMPANY.phone1}
                </a>
              </div>

              <div>
                <div className="text-white/60 text-sm mb-1">Email</div>
                <a href={`mailto:${COMPANY.email}`} className="text-lg font-medium hover:text-accent transition-colors text-white">
                  {COMPANY.email}
                </a>
              </div>

              <div>
                <div className="text-white/60 text-sm mb-1">WhatsApp</div>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors text-white"
                >
                  Click to Chat
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-white/60 text-sm mb-2">Working Hours</div>
              <div className="text-white">Monday - Saturday</div>
              <div className="text-white/70">9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  </div>
</section>

      <OfficeMap />
    </>
  )
}