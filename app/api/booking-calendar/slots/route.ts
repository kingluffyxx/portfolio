import { NextRequest, NextResponse } from "next/server"

const CALCOM_API_KEY = process.env.CALCOM_API_KEY
const CALCOM_API_URL = "https://api.cal.com/v2"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const eventTypeId = searchParams.get("eventTypeId")
  const startTime = searchParams.get("startTime")
  const endTime = searchParams.get("endTime")
  const timeZone = searchParams.get("timeZone")

  if (!eventTypeId || !startTime || !endTime) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    )
  }

  if (!CALCOM_API_KEY) {
    return NextResponse.json(
      { error: "Cal.com API key not configured" },
      { status: 500 }
    )
  }

  try {
    const url = new URL(`${CALCOM_API_URL}/slots/available`)
    url.searchParams.set("eventTypeId", eventTypeId)
    url.searchParams.set("startTime", `${startTime}T00:00:00.000Z`)
    url.searchParams.set("endTime", `${endTime}T23:59:59.999Z`)
    if (timeZone) {
      url.searchParams.set("timeZone", timeZone)
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${CALCOM_API_KEY}`,
        "cal-api-version": "2024-08-13"
      },
      next: { revalidate: 60 } // Cache for 1 minute
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Cal.com API error:", error)
      return NextResponse.json(
        { error: "Failed to fetch slots" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching slots:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
