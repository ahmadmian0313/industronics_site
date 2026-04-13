import type { Metadata } from 'next'
import './globals.css';
import { Navbar } from '@/components/layout/Navbar'
import {WhatsAppButton} from '@/components/layout/WhatsAppButton';
import { Footer } from '@/components/layout/Footer'
export const metadata: Metadata = {
  title: 'Industronics Engineering | Industrial Automation Pakistan',
  description: 'Pakistan based company providing PLC, SCADA, BMS, EPC & Automation services for 25+ years.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0f1a] text-white m-0 p-0 flex flex-col min-h-screen">
        
        {/* ✅ Navbar — shows on ALL pages */}
        <Navbar />

        {/* Spacer for fixed header */}
        <div className="h-[68px]" />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
<WhatsAppButton />  
        {/* Footer at bottom */}
        <Footer /> 

      </body>
    </html>
  )
}