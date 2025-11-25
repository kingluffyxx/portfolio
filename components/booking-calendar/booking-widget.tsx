"use client"

import { useState, useEffect, useCallback } from "react"
import { useTranslations } from "next-intl"
import { format } from "date-fns"
import { Clock } from "lucide-react"
import { CalendarGrid } from "./calendar-grid"
import { TimeSlotsPanel } from "./time-slots-panel"
import { BookingForm } from "./booking-form"
import { BookingSuccess } from "./booking-success"
import { useCalendarSlots } from "@/lib/booking-calendar/hooks/use-calendar-slots"
import { useIntersectionObserver } from "@/lib/booking-calendar/hooks/use-intersection-observer"
import { getUserTimezone } from "@/lib/booking-calendar/utils"
import type { CalcomSlot, BookingData } from "@/lib/booking-calendar/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BookingStep = "calendar" | "form" | "success"

interface BookingWidgetProps {
  eventTypeId: string
  className?: string
}

export function BookingWidget({ eventTypeId, className }: BookingWidgetProps) {
  const t = useTranslations("booking")
  const { ref, isVisible } = useIntersectionObserver()

  const [step, setStep] = useState<BookingStep>("calendar")
  const [timezone, setTimezone] = useState<string>("")
  const [use24Hour, setUse24Hour] = useState(true)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedSlot, setSelectedSlot] = useState<CalcomSlot | null>(null)
  const [bookingData, setBookingData] = useState<BookingData | null>(null)

  const {
    monthSlots,
    availableSlots,
    loading,
    error,
    fetchMonthSlots,
    fetchSlots
  } = useCalendarSlots(eventTypeId, isVisible)

  // Initialize timezone
  useEffect(() => {
    setTimezone(getUserTimezone())
  }, [])

  // Fetch month slots when visible or month changes
  useEffect(() => {
    if (isVisible && timezone) {
      fetchMonthSlots(currentMonth, timezone)
    }
  }, [isVisible, currentMonth, timezone, fetchMonthSlots])

  // Fetch slots when date is selected
  useEffect(() => {
    if (selectedDate && timezone) {
      fetchSlots(selectedDate, timezone)
    }
  }, [selectedDate, timezone, fetchSlots])

  // Auto-select first available date when month loads
  useEffect(() => {
    if (Object.keys(monthSlots).length > 0 && !selectedDate) {
      const today = format(new Date(), "yyyy-MM-dd")
      const sortedDates = Object.keys(monthSlots).sort()
      const firstAvailable = sortedDates.find(
        date => date >= today && monthSlots[date].length > 0
      )
      if (firstAvailable) {
        setSelectedDate(new Date(firstAvailable))
      }
    }
  }, [monthSlots, selectedDate])

  const handleDateSelect = useCallback((date: Date | undefined) => {
    setSelectedDate(date)
    setSelectedSlot(null)
  }, [])

  const handleSlotSelect = useCallback((slot: CalcomSlot) => {
    setSelectedSlot(slot)
  }, [])

  const handleContinue = useCallback(() => {
    if (selectedSlot) {
      setStep("form")
    }
  }, [selectedSlot])

  const handleBack = useCallback(() => {
    setStep("calendar")
  }, [])

  const handleBookingSuccess = useCallback((booking: BookingData) => {
    setBookingData(booking)
    setStep("success")
  }, [])

  const handleBookAnother = useCallback(() => {
    setStep("calendar")
    setSelectedDate(undefined)
    setSelectedSlot(null)
    setBookingData(null)
  }, [])

  // Don't render if no event type ID or Cal.com is not configured
  if (!eventTypeId || error === "not_configured") {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-card p-6",
        className
      )}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">{t("title")}</h3>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      {step === "calendar" && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <CalendarGrid
                selectedDate={selectedDate}
                onSelectDate={handleDateSelect}
                currentMonth={currentMonth}
                onMonthChange={setCurrentMonth}
                monthSlots={monthSlots}
              />
            </div>
            <div className="min-h-[280px]">
              <TimeSlotsPanel
                selectedDate={selectedDate}
                slots={availableSlots}
                loading={loading}
                timezone={timezone}
                use24Hour={use24Hour}
                onSelectSlot={handleSlotSelect}
                selectedSlot={selectedSlot}
                onTimezoneChange={setTimezone}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setUse24Hour(!use24Hour)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Clock className="h-3 w-3" />
              {use24Hour ? "24h" : "12h"}
            </button>

            <Button
              onClick={handleContinue}
              disabled={!selectedSlot}
            >
              {t("continue")}
            </Button>
          </div>
        </>
      )}

      {step === "form" && selectedDate && selectedSlot && (
        <BookingForm
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          timezone={timezone}
          use24Hour={use24Hour}
          eventTypeId={eventTypeId}
          onBack={handleBack}
          onSuccess={handleBookingSuccess}
        />
      )}

      {step === "success" && bookingData && (
        <BookingSuccess
          booking={bookingData}
          timezone={timezone}
          use24Hour={use24Hour}
          onBookAnother={handleBookAnother}
        />
      )}
    </div>
  )
}
