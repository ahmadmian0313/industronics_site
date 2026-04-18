// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { COMPANY } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    // Resend ko yahan initialize karo, top level pe nahi
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { name, company, phone, email, service, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: 'Industronics Contact <noreply@industronics.uk>',
      to: COMPANY.email,
      subject: `New Contact Form Submission from ${name}`,
      html: `...same html as before...`,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}