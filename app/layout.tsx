// ============================================================
// app/layout.tsx
//
// Navbar yahan hai — isliye SARI pages pe automatically show hoga
// Kisi bhi page.tsx mein Navbar add karne ki zaroorat NAHI
// ============================================================

import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'

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
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0f1a', color: 'white' }}>

        {/* ✅ Navbar — shows on ALL pages automatically */}
        <Navbar />

        {/* Spacer — pushes content below fixed 68px header */}
        <div style={{ height: 68 }} />

        {/* Page content renders here */}
        {children}

      </body>
    </html>
  )
}
