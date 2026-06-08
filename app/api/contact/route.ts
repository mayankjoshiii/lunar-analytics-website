import { NextRequest, NextResponse } from 'next/server'

// Submissions are delivered via FormSubmit (no API key required) to the
// business inbox. The address stays server-side so it isn't exposed to bots.
const TARGET_EMAIL = 'lunaranalytics2026@gmail.com'

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

    const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Company: company || '—',
        'Service Interest': service || '—',
        Message: message || '—',
        _subject: `New Lunar Analytics enquiry — ${name}${company ? ` (${company})` : ''}`,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      console.error('FormSubmit error:', res.status, data)
      return NextResponse.json(
        {
          success: false,
          message:
            'We could not send your enquiry right now. Please email hello@lunaranalytics.co.uk directly.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Thanks — we'll be in touch.",
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Something went wrong. Please email hello@lunaranalytics.co.uk directly.',
      },
      { status: 500 }
    )
  }
}
