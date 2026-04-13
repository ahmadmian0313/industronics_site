'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#060b13] overflow-hidden">
      
      {/* ── THE ULTIMATE BACKGROUND FIX ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Subtle Vertical Lines - Increased spacing to 120px for a cleaner look */}
        <div
          className="absolute inset-0 opacity-[0.07]" // Lowered opacity for elegance
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '120px 100%', 
          }}
        />
        
        {/* 2. Radial Overlay - This creates the "Glow" behind your text/cards */}
        <div 
          className="absolute inset-0"  
          style={{
            background: 'linear-gradient(90deg, #000000  0%, #ffffff 40%, #ffffff 70%, #000000 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              {/* CARD CONTENT START */}
              <div className="relative h-[450px] w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
                {/* FRONT SIDE - Semi-transparent to let the glow peek through */}
                <div className="absolute inset-0 backface-hidden bg-[#0a121e]/90 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col justify-between shadow-2xl">
                  <div className="h-16 w-16 bg-[#167d82]/10 rounded-lg flex items-center justify-center text-[#167d82] text-3xl">
                     <span className="opacity-80">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed line-clamp-3">{service.shortDescription}</p>
                  </div>
                  <div className="text-[#167d82] text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Details <span className="text-xl">→</span>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#167d82] to-[#0d5a5e] p-8 rounded-2xl flex flex-col justify-center items-center text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/90 mb-8 leading-relaxed">{service.description || service.shortDescription}</p>
                  <button className="px-8 py-3 bg-white text-[#167d82] rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}