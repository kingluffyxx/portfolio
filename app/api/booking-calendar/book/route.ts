import { NextRequest, NextResponse } from "next/server"

const CALCOM_API_KEY = process.env.CALCOM_API_KEY
const CALCOM_API_URL = "https://api.cal.com/v2"

export async function POST(request: NextRequest) {
  if (!CALCOM_API_KEY) {
    return NextResponse.json(
      { error: "Cal.com API key not configured" },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const { eventTypeId, start, name, email, notes, timeZone, language } = body

    if (!eventTypeId || !start || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Build request body
    const bookingBody: Record<string, unknown> = {
      eventTypeId: parseInt(eventTypeId),
      start,
      attendee: {
        name,
        email,
        timeZone: timeZone || "Europe/Paris",
        language: language || "fr"
      }
    }

    // Add notes if provided - using both methods for compatibility
    if (notes && notes.trim()) {
      // Method 1: bookingFieldsResponses for custom fields (requires "notes" field in Cal.com event type)
      bookingBody.bookingFieldsResponses = {
        notes: notes.trim()
      }
      // Method 2: metadata as fallback
      bookingBody.metadata = {
        guestNotes: notes.trim()
      }
    }

    const response = await fetch(`${CALCOM_API_URL}/bookings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CALCOM_API_KEY}`,
        "Content-Type": "application/json",
        "cal-api-version": "2024-08-13"
      },
      body: JSON.stringify(bookingBody)
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("Cal.com booking error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to create booking" },
        { status: response.status }
      )
    }

    const result = await response.json()

    // Cal.com v2 API returns data in 'data' field
    // Normalize the response structure
    const bookingData = result.data || result

    return NextResponse.json({
      success: true,
      data: {
        uid: bookingData.uid || bookingData.id,
        title: bookingData.title || "Booking",
        startTime: bookingData.start || bookingData.startTime,
        endTime: bookingData.end || bookingData.endTime,
        attendees: bookingData.attendees || [{ name, email }]
      }
    })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
