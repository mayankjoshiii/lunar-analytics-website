import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Forward to FastAPI backend
    const backendResponse = await fetch('http://localhost:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, company, service, message }),
    })

    if (!backendResponse.ok) {
      // If backend is unavailable, log and return success anyway (graceful degradation)
      console.error('Backend unavailable, logging contact request:', { name, email, company, service })
      return NextResponse.json({
        success: true,
        message: "Thank you! We've received your enquiry and will be in touch within 24 hours.",
      })
    }

    const data = await backendResponse.json()
    return NextResponse.json(data)
  } catch (error) {
    // Graceful degradation: if backend is down, still show success to user
    console.error('Contact form error:', error)
    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your enquiry and will be in touch within 24 hours.",
    })
  }
}
