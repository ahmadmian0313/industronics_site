"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Image support ke liye add kiya
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// ── 1. DATA STRUCTURE UPDATED WITH IMAGE PATHS ──
const SOLUTIONS_DATA = [
  { 
    title: "Building Management", 
    desc: "Automated HVAC and lighting control for smart infrastructures.", 
    imgSrc: "/solutions/sol1.png",
    color: "#ffffff" 
  },
  { 
    title: "Energy Monitoring", 
    desc: "Real-time tracking of power usage to reduce operational costs.", 
    imgSrc: "/solutions/sol2.png", 
    color: "#b8bec7" 
  },
  { 
    title: "Flow Metering", 
    desc: "Precision liquid and gas flow  t for industrial pipes.", 
    imgSrc: "/solutions/sol3.png", 
    color: "#aeb5bf" 
  },
  { 
    title: "E.P.C Contracts", 
    desc: "End-to-end Engineering, Procurement, and Construction services.", 
    imgSrc: "/solutions/sol4.png", 
    color: "#d5d9df" 
  },
  { 
    title: "Process Monitoring", 
    desc: "Visual tracking of production stages for quality assurance.", 
    imgSrc: "/solutions/sol5.png", 
    color: "#aeb5bf" 
  },
  { 
    title: "Web Tension Control", 
    desc: "High-speed tension regulation for paper and textile printing.", 
    imgSrc: "/solutions/sol6.png", 
    color: "#c7ccd4" 
  },
  { 
    title: "pH Monitoring", 
    desc: "Automated chemical balance testing for water treatment.", 
    imgSrc: "/solutions/sol7.png", 
    color: "#bcc2cb" 
  },
  { 
    title: "Weft Straightener", 
    desc: "Advanced fabric alignment systems for textile processing.", 
    imgSrc: "/solutions/sol8.png", 
    color: "#d0d4db" 
  },
  { 
    title: "Moister Control", 
    desc: "Humidity and moisture regulation for raw material storage.", 
    imgSrc: "/solutions/sol9.png", 
    color: "#a7aeb8" 
  },
  { 
    title: "Warehouse Management", 
    desc: "Inventory automation and real-time tracking solutions.", 
    imgSrc: "/solutions/sol10.png", 
    color: "#d1d5dc" 
  },
  { 
    title: "Warehouse Control", 
    desc: "Centralized logic for automated conveyor and sorting systems.", 
    imgSrc: "/solutions/sol11.png", 
    color: "#b0b6bf" 
  },
  { 
    title: "AS/RS Systems", 
    desc: "Automated Storage and Retrieval Systems for modern logistics.", 
    imgSrc: "/solutions/sol13.png", 
    color: "#c7ccd3" 
  },
];

export default function SolutionsGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* ── HERO SECTION ── */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#060b13] via-[#0a101a] to-[#060b13] overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-widest">
              Industronics Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#ffff]">Solutions</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of 20+ industrial automation and engineering services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GRID SECTION ── */}
      <section className="py-20 relative z-10 bg-[linear-gradient(145deg,#090909_0%,#e7e3e3_45%,#2a2d33_100%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_DATA.map((item, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer"
                >
                  <div 
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-[8px]" 
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="relative h-full bg-['linear-gradient(135deg, #090909 0%,  #e7e3e3 45%, #2a2d33 100%)'] border border-black/30 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group-hover:translate-y-[-5px] group-hover:bg-[#C0C0C0] shadow-2xl overflow-hidden">
                    
                    {/* ── 2. PICTURE SYSTEM REPLACED ICON BOX ── */}
                    <div className="w-20 h-20 mb-6 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                       <Image 
                         src={item.imgSrc} 
                         alt={item.title}
                         width={100} 
                         height={100}
                         className="object-contain"
                         priority
                       />
                    </div>

                    <h3 className="text-xl font-bold text-black mb-2 tracking-tight transition-colors">
                      {item.title}
                    </h3>

                    <AnimatePresence>
                      {isExpanded ? (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-black text-sm leading-relaxed mt-4 pt-4 border-t border-black/10"
                        >
                          {item.desc}
                        </motion.p>
                      ) : (
                     <span className="text-[10px] uppercase tracking-[0.2em] text-black mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
  Click for details
</span>
                      )}
                    </AnimatePresence>

                    <div 
                      className="absolute bottom-0 left-0 h-[3px] transition-all duration-700 ease-in-out w-0 group-hover:w-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}