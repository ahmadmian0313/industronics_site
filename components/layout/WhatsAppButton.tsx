'use client'

import { motion } from 'framer-motion'
import Image from 'next/image' // ✅ Image component import karein
import { COMPANY } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
      aria-label="Contact via WhatsApp"
    >
      {/* ✅ Original WhatsApp Logo */}
      <div className="relative w-8 h-8">
        <Image 
          src="/what.png" // ⚠️ Make sure file 'public' folder mein ho
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  )
}