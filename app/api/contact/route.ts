// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { COMPANY } from '@/lib/constants'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, phone, email, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    const data = await resend.emails.send({
      from: 'Industronics Contact <noreply@industronics.uk>',
      to: COMPANY.email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #167D82; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background: #f7fafa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="margin-top: 0; color: #111418;">Contact Details</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #167D82;">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #167D82;">${phone}</a></p>
              <p><strong>Service Interested:</strong> ${service || 'Not specified'}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="margin-top: 0; color: #111418;">Message</h2>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the contact form on industronics.uk
            </p>
          </div>
        </body>
        </html>
      `,
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