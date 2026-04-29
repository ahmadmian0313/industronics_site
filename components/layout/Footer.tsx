// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY, SERVICES, SOLUTIONS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
<footer className="text-white border-t border-white/5 shadow-2xl overflow-hidden bg-[#000000]">
  <div className="max-w-[1870px] mx-auto px-6 py-16">
    {/* Humne grid-cols-5 use kiya hai taake sab ek hi line mein rahein */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
      
{/* 1. Industronics (Company Info) */}
<div className="flex flex-col h-full justify-between">
  
  {/* Top Section: Heading and Paragraph */}
  <div className="space-y-4">
    <div>
      <h4 className="text-2xl font-bold text-white leading-none">Industronics</h4>
      <span className="text-white/60 text-sm">Engineering</span>
    </div>
    
    <p className="text-white/70 text-xs leading-relaxed max-w-[280px]">
      {COMPANY.tagline}. Industronics Engineering is Automation based company, providing technical services to national and multi-national companies in field of Software development, SCADA & OEE development, Automation & process control, Instrumentation & Calibration and actively delivering supply of industrial automation products and control-process monitoring equipment for the last 25 years with excellence.
    </p>
  </div>

  {/* Social Icons Section - Pushed to Bottom */}
  <div className="flex items-center gap-4 mt-10 lg:mt-auto">
    <a
      href="https://www.facebook.com/IndustronicsEngineering07"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
      aria-label="Facebook"
    >
      <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
    </a>
    <a
      href="https://www.instagram.com/industronicsengineering/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
      aria-label="Instagram"
    >
      <Instagram className="w-5 h-5 text-white/70 group-hover:text-white" />
    </a>
    <a
      href="https://pk.linkedin.com/company/industronics-engineering"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white" />
    </a>
  </div>
</div>

      {/* 2. Solutions Column 1 */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Solutions</h4>
        <ul className="space-y-2">
          {SOLUTIONS.slice(0, 14).map((item) => (
            <li key={item} className="text-[13px] text-white/70 hover:text-primary transition-all cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Solutions Column 2 */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Solutions</h4>
        <ul className="space-y-2">
          {SOLUTIONS.slice(14).map((item) => (
            <li key={item} className="text-[13px] text-white/70 hover:text-primary transition-all cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Services (Placed after Solutions) */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Services</h4>
        <ul className="space-y-3">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}`} className="text-[13px] text-white/70 hover:text-primary transition-all">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 5. Contact (Last Column) */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Contact</h4>
        <ul className="space-y-4 text-[13px] text-white/70">
          <li className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span>{COMPANY.phone1}</span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span className="break-all">{COMPANY.email}</span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="font-bold text-white mb-1">Karachi</p>
              <p className="text-xs leading-tight">{COMPANY.offices.karachi.address}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="font-bold text-white mb-1">Lahore</p>
              <p className="text-xs leading-tight">{COMPANY.offices.lahore.address}</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
  
  {/* Bottom Bar remains the same */}
<div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/50 text-sm">
              &copy; {currentYear} {COMPANY.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-xs">
              {COMPANY.certifications.map((cert, index) => (
                <span key={cert} className="flex items-center gap-2">
                  {cert}
                  {index < COMPANY.certifications.length - 1 && <span className="hidden md:inline">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


  
</footer>
  )
}


    // {/* Bottom Bar */}
      