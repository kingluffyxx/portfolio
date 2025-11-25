"use client"

import { useState, useCallback } from "react"
import type { CalcomSlot, MonthSlots } from "../types"
import { getSlotLocalDate, getMonthDateRange } from "../utils"
import { format, addDays, subDays } from "date-fns"

export function useCalendarSlots(eventTypeId: string, enabled = true) {
  const [monthSlots, setMonthSlots] = useState<MonthSlots>({})
  const [availableSlots, setAvailableSlots] = useState<CalcomSlot[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const convertCalcomSlot = (slot: { start?: string; time?: string }): CalcomSlot => ({
    time: slot.start || slot.time || ""
  })

  const fetchMonthSlots = useCallback(
    async (date: Date, timezone: string) => {
      if (!enabled || !eventTypeId) return

      setLoading(true)
      setError(null)

      try {
        const { start, end } = getMonthDateRange(date)

        const response = await fetch(
          `/api/booking-calendar/slots?eventTypeId=${eventTypeId}&startTime=${start}&endTime=${end}&timeZone=${encodeURIComponent(timezone)}`
        )

        const data = await response.json()

        if (!response.ok) {
          // Don't throw error, just log it silently if Cal.com is not configured
          if (data.error === "Cal.com API key not configured") {
            console.warn("Cal.com API key not configured - booking calendar disabled")
            setError("not_configured")
            return
          }
          console.error("Cal.com API error:", data.error)
          setError(data.error || "Failed to fetch slots")
          return
        }

        const slots = data.data?.slots || {}

        const newMonthSlots: MonthSlots = {}

        Object.entries(slots).forEach(([dateKey, dateSlots]) => {
          if (Array.isArray(dateSlots)) {
            newMonthSlots[dateKey] = dateSlots.map(convertCalcomSlot)
          }
        })

        setMonthSlots(prev => ({ ...prev, ...newMonthSlots }))
      } catch (err) {
        console.error("Error fetching month slots:", err)
        setError("network_error")
      } finally {
        setLoading(false)
      }
    },
    [eventTypeId, enabled]
  )

  const fetchSlots = useCallback(
    async (date: Date, timezone: string) => {
      if (!enabled || !eventTypeId || error === "not_configured") return

      const dateString = format(date, "yyyy-MM-dd")

      // Check if we already have slots for this date
      if (monthSlots[dateString]) {
        setAvailableSlots(monthSlots[dateString])
        return
      }

      setLoading(true)

      try {
        // Pad dates to handle timezone edge cases
        const startDate = format(subDays(date, 1), "yyyy-MM-dd")
        const endDate = format(addDays(date, 1), "yyyy-MM-dd")

        const response = await fetch(
          `/api/booking-calendar/slots?eventTypeId=${eventTypeId}&startTime=${startDate}&endTime=${endDate}&timeZone=${encodeURIComponent(timezone)}`
        )

        const data = await response.json()

        if (!response.ok) {
          console.error("Cal.com API error:", data.error)
          setAvailableSlots([])
          return
        }

        const slots = data.data?.slots || {}

        const convertedSlots: CalcomSlot[] = []

        Object.entries(slots).forEach(([, dateSlots]) => {
          if (Array.isArray(dateSlots)) {
            dateSlots.forEach(slot => {
              const converted = convertCalcomSlot(slot)
              if (getSlotLocalDate(converted.time, timezone) === dateString) {
                convertedSlots.push(converted)
              }
            })
          }
        })

        setAvailableSlots(convertedSlots)
      } catch (err) {
        console.error("Error fetching slots:", err)
        setAvailableSlots([])
      } finally {
        setLoading(false)
      }
    },
    [eventTypeId, enabled, monthSlots, error]
  )

  return {
    monthSlots,
    availableSlots,
    loading,
    error,
    fetchMonthSlots,
    fetchSlots
  }
}
