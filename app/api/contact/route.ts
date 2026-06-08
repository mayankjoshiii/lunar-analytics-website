import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Runs on the Node.js runtime so Nodemailer (net/tls) works.
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD

    if (!user || !pass) {
      console.error('Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars')
      return NextResponse.json(
        {
          success: false,
          message:
            'Email is not configured yet. Please email hello@lunaranalytics.co.uk directly.',
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    const to = process.env.CONTACT_TO || user

    await transporter.sendMail({
      from: `"Lunar Analytics Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ''}`,
      text:
        `New Lunar Analytics enquiry\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company || '—'}\n` +
        `Service: ${service || '—'}\n\n` +
        `Message:\n${message || '—'}\n`,
      html:
        `<h2 style="font-family:sans-serif">New Lunar Analytics enquiry</h2>` +
        `<table style="font-family:sans-serif;border-collapse:collapse">` +
        `<tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${name}</td></tr>` +
        `<tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${email}</td></tr>` +
        `<tr><td style="padding:4px 12px 4px 0"><strong>Company</strong></td><td>${company || '—'}</td></tr>` +
        `<tr><td style="padding:4px 12px 4px 0"><strong>Service</strong></td><td>${service || '—'}</td></tr>` +
        `</table>` +
        `<p style="font-family:sans-serif"><strong>Message</strong><br>${(message || '—').replace(/\n/g, '<br>')}</p>`,
    })

    return NextResponse.json({ success: true, message: "Thanks — we'll be in touch." })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Could not send your enquiry right now. Please email hello@lunaranalytics.co.uk directly.',
      },
      { status: 500 }
    )
  }
}
