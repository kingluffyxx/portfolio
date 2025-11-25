"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Calendar, Clock, ArrowLeft } from "lucide-react"
import type { CalcomSlot, BookingFormData, BookingData } from "@/lib/booking-calendar/types"
import { formatSlotTime } from "@/lib/booking-calendar/utils"

interface BookingFormProps {
  selectedDate: Date
  selectedSlot: CalcomSlot
  timezone: string
  use24Hour: boolean
  eventTypeId: string
  onBack: () => void
  onSuccess: (booking: BookingData) => void
}

export function BookingForm({
  selectedDate,
  selectedSlot,
  timezone,
  use24Hour,
  eventTypeId,
  onBack,
  onSuccess
}: BookingFormProps) {
  const t = useTranslations("booking")
  const locale = useLocale()
  const dateLocale = locale === "fr" ? fr : enUS

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    notes: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const formattedDate = format(selectedDate, "EEEE d MMMM yyyy", { locale: dateLocale })
  const formattedTime = formatSlotTime(selectedSlot.time, timezone, use24Hour)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/booking-calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventTypeId,
          start: selectedSlot.time,
          name: formData.name,
          email: formData.email,
          notes: formData.notes,
          timeZone: timezone,
          language: locale
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || t("bookingError"))
      }

      onSuccess(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : t("bookingError"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("back")}
      </button>

      <div className="p-4 rounded-lg bg-muted/50 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="capitalize">{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-primary" />
          <span>{formattedTime}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t("formName")} *
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder={t("formNamePlaceholder")}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t("formEmail")} *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder={t("formEmailPlaceholder")}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="text-sm font-medium">
            {t("formNotes")}
          </label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
            placeholder={t("formNotesPlaceholder")}
            rows={3}
            disabled={loading}
          />
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("booking")}
            </>
          ) : (
            t("confirmBooking")
          )}
        </Button>
      </form>
    </div>
  )
}
