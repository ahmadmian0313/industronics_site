'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { 
  X, Search, ChevronRight, Cpu, Settings, Zap, 
  Database, Shield, Monitor, Factory, Activity, 
  Waves, Thermometer, Gauge, Terminal, Power, 
  Workflow, Layers, Box, ShieldAlert,
  Weight, Droplets, FlaskConical, BarChart3, Radio
} from 'lucide-react'   

// ── 24 CATEGORIES FROM YOUR LIST ──
const CATEGORIES_LIST = [
  { name: "Valves & Controller", icon: <Waves /> },
  { name: "Transformer", icon: <Zap /> },
  { name: "Switch Gear & Panels", icon: <Layers /> },
  { name: "Solenoid Valves", icon: <Activity /> },
  { name: "Servo Motor", icon: <Workflow /> },
  { name: "Sensors & Transducers", icon: <Radio /> },
  { name: "Safety & Protection Devices", icon: <Shield /> },
  { name: "Relay", icon: <Box /> },
  { name: "Pumps", icon: <Droplets /> },
  { name: "Power Supply", icon: <Power /> },
  { name: "PLC", icon: <Cpu /> },
  { name: "pH/ORP Controller", icon: <FlaskConical /> },
  { name: "Motors & Control Panels", icon: <Settings /> },
  { name: "Motor Protection Circuit Breaker", icon: <ShieldAlert /> },
{ name: "Module", icon: <Cpu /> },
  { name: "Miniature Circuit Breaker", icon: <Zap /> },
  { name: "Media & Signal Converter", icon: <Terminal /> },
  { name: "Load Cell & Weighing Equipment", icon: <Weight /> },
  { name: "Load Cell & Amplifiers", icon: <Activity /> },
  { name: "Inverters", icon: <Zap /> },
  { name: "Instrument", icon: <Gauge /> },
  { name: "HMI", icon: <Monitor /> },
  { name: "Flow Totalizer", icon: <Waves /> },
  { name: "Energy Analyzer", icon: <BarChart3 /> }
].sort((a, b) => a.name.localeCompare(b.name));

// ── 20 PRODUCTS FROM YOUR LIST ──
const PRODUCTS_DATA = [
  { id: 1, name: "AX-RE600PPR", detail: "Incremental Rotary Encoder with High Precision Pulse Output.", icon: <Settings /> },
  { id: 2, name: "CT6S-2P4", detail: "Multi-functional Counter/Timer with High-Speed Counting.", icon: <Activity /> },
  { id: 3, name: "AX-VH-2024", detail: "Industrial Isolation Module for High Voltage Protection.", icon: <Zap /> },
  { id: 4, name: "HF2211", detail: "Serial to Ethernet Server for Industrial IoT Connectivity.", icon: <Terminal /> },
  { id: 5, name: "1517-3 PN/DP", detail: "Siemens SIMATIC S7-1500 Advanced PLC Controller.", icon: <Cpu /> },
  { id: 6, name: "Signal Isolation Distributor", detail: "Precision Signal Processing & Interference Filtering.", icon: <Workflow /> },
  { id: 7, name: "6SL3120-1TE28-5AA3", detail: "SINAMICS S120 Double Motor Module for Motion Control.", icon: <Layers /> },
  { id: 8, name: "E50S8-360-3-T-24", detail: "Autonics Shaft Type Incremental Rotary Encoder.", icon: <Radio /> },
  { id: 9, name: "0CE35M-F44A0-V15", detail: "High-Performance Feedback System for Industrial Automation.", icon: <Settings /> },
  { id: 10, name: "PROFIBUS CONNECTOR", detail: "Standard high-speed bus connector for Siemens & industrial networks.", icon: <Box /> },
  { id: 11, name: "PD 2535", detail: "Advanced Power Distribution Unit for Control Panels.", icon: <Power /> },
  { id: 12, name: "Pilz PNOZ X3 24VDC", detail: "Safety Relay for Emergency Stop and Security Guard Monitoring.", icon: <Shield /> },
  { id: 13, name: "6ES7511-1AL03-0AB0", detail: "SIMATIC S7-1500 CPU 1511-1 PN for Mid-range applications.", icon: <Cpu /> },
  { id: 14, name: "MTZ Circuit Breakers – UL/ANSI", detail: "MasterPact high current protection system.", icon: <Zap /> },
  { id: 15, name: "6SL3210-1KE22-6AF1", detail: "SINAMICS G120C Compact Inverter for Motor Control.", icon: <Layers /> },
  { id: 16, name: "MCR-C-UI / UI-DCI", detail: "Phoenix Contact Configurable Signal Conditioner.", icon: <Activity /> },
  { id: 17, name: "MS 300", detail: "Delta High Performance Compact Vector Control Drive.", icon: <Workflow /> },
  { id: 18, name: "Electro-Magnetic flow meter", detail: "High-accuracy liquid flow measurement for pipes.", icon: <Waves /> },
  { id: 19, name: "TR-N1M-C40-1", detail: "Industrial Panel Meter for Real-time Monitoring.", icon: <Gauge /> },
 { id: 20, name: "MDS 001-022G/030P-7", detail: "Industrial Multi-Drive System for Servo applications.", icon: <Cpu /> },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[linear-gradient(145deg,#080808_0%,#17181b_45%,#2a2c31_100%)] relative overflow-hidden text-white">
      
      {/* ── ANTIGRAVITY AURORA BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(0deg, #000000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 py-16">
        
        {/* HERO SECTION */}
        <AnimatedSection className="mb-24 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our catalog
            </h1>
          <p className="text-white/40 font-mono tracking-[0.3em] text-xs uppercase">Industrial Inventory • 10,000+ Components • Global Standards</p>

          <div className="relative max-w-3xl mx-auto mt-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={24} />
            <input 
              type="text" 
              placeholder="Search components (e.g. Siemens, PLC, Sensor)..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-lg focus:border-[#167d82] outline-none transition-all backdrop-blur-md"
            />
          </div>
        </AnimatedSection>

        {/* ── CATEGORIES (24 Sectors) ── */}
        <section className="mb-32">
          <h2 className="text-[#c8cdd4] text-sm font-bold uppercase tracking-[0.5em] mb-12 border-l-4 border-[#c8cdd4] pl-6">
            Industrial Sectors (24)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CATEGORIES_LIST.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.09)', borderColor: '#d3d7de' }}
                className="bg-[#121315]/70 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all group backdrop-blur-sm"
              >
                <div className="text-[#d0d4db] mb-4 group-hover:scale-125 transition-transform duration-500">
                  {React.cloneElement(cat.icon as React.ReactElement, { size: 30 })}
                </div>
                <h3 className="text-white/80 text-[10px] font-bold uppercase tracking-widest leading-tight group-hover:text-white">
                  {cat.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PRODUCTS (20 Items) ── */}
        <section className="mb-40">
          <h2 className="text-[#c8cdd4] text-sm font-bold uppercase tracking-[0.5em] mb-12 border-l-4 border-[#c8cdd4] pl-6">
            Featured Components
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {PRODUCTS_DATA.map((prod) => (
              <motion.div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                whileHover={{ scale: 1.03 }}
                className="bg-[#121315] border border-white/15 hover:border-[#d8dde4] p-6 rounded-2xl cursor-pointer transition-all flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#d1d6dd] group-hover:bg-[#d1d6dd] group-hover:text-[#111214] transition-all shadow-lg">
                  {React.cloneElement(prod.icon as React.ReactElement, { size: 20 })}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-mono text-[12px] font-bold tracking-tighter uppercase group-hover:text-[#d7dbe2] transition-colors">
                    {prod.name}
                  </span>
                  <span className="text-white/20 text-[9px] font-black tracking-widest uppercase">Verified Spec</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FOOTER DISCLAIMER ── */}
        <footer className="pt-20 border-t border-white/5 text-center">
          <div 
            className="w-full h-24 opacity-[0.05] mb-10 pointer-events-none"  
            style={{ background: 'linear-gradient(90deg, #000 0%, #fff 40%, #fff 60%, #000 100%)' }}
          />
          <p className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase leading-loose px-10">
            Disclaimer: Industrial product prices vary by shipment duty & stock availability. <br />
            Industronics Engineering © 2026 - Optimized for Industrial Growth
          </p>
        </footer>
      </div>

      {/* ── PRODUCT MODAL POPUP ── */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a121e] border border-[#167d82]/40 p-10 md:p-16 rounded-[50px] max-w-3xl w-full relative shadow-[0_0_100px_rgba(22,125,130,0.2)]"
            >
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-10 right-10 text-white/30 hover:text-[#167d82] transition-colors"
              >
                <X size={40} />
              </button>

              <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                <div className="w-40 h-40 bg-[#167d82] text-white rounded-[40px] flex items-center justify-center shadow-2xl shrink-0">
                  {React.cloneElement(selectedProduct.icon as React.ReactElement, { size: 80 })}
                </div>
                
                <div className="flex-1">
                  <span className="text-[#167d82] font-mono text-sm tracking-[0.3em] mb-4 block uppercase font-bold">Part Identification</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-[#167d82]/30 pl-6 italic">
                    {selectedProduct.detail}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <span className="block text-[10px] text-white/30 uppercase font-black mb-1">Condition</span>
                      <span className="text-[#167d82] font-bold uppercase">Brand New / OEM</span>
                    </div>
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <span className="block text-[10px] text-white/30 uppercase font-black mb-1">Origin</span>
                      <span className="text-white font-bold uppercase">Certified Standard</span>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-[#167d82] text-white font-black rounded-2xl hover:bg-[#0d5a5e] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#167d82]/20 uppercase tracking-widest">
                    Request Technical Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}