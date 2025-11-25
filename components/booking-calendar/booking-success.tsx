"use client"

import { useTranslations } from "next-intl"
import { format, parseISO } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useLocale } from "next-intl"
import { CheckCircle2, Calendar, Clock, User, Mail, CalendarPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BookingData } from "@/lib/booking-calendar/types"

interface BookingSuccessProps {
  booking: BookingData
  timezone: string
  use24Hour: boolean
  onBookAnother?: () => void
}

export function BookingSuccess({ booking, timezone, use24Hour, onBookAnother }: BookingSuccessProps) {
  const t = useTranslations("booking")
  const locale = useLocale()
  const dateLocale = locale === "fr" ? fr : enUS

  // Safety check for booking data
  if (!booking?.startTime) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("bookingConfirmed")}</h3>
          <p className="text-muted-foreground text-sm">{t("confirmationEmailSent")}</p>
        </div>
        {onBookAnother && (
          <Button variant="outline" onClick={onBookAnother} className="mt-4">
            <CalendarPlus className="mr-2 h-4 w-4" />
            {t("bookAnother")}
          </Button>
        )}
      </div>
    )
  }

  const startDate = parseISO(booking.startTime)
  const formattedDate = format(startDate, "EEEE d MMMM yyyy", { locale: dateLocale })
  const formattedTime = format(startDate, use24Hour ? "HH:mm" : "h:mm a")

  const attendee = booking.attendees?.[0]

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{t("bookingConfirmed")}</h3>
        <p className="text-muted-foreground text-sm">{t("bookingConfirmedDesc")}</p>
      </div>

      <div className="p-4 rounded-lg bg-muted/50 space-y-3 text-left">
        <h4 className="font-medium">{booking.title}</h4>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="capitalize">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{formattedTime} ({timezone})</span>
          </div>
          {attendee && (
            <>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>{attendee.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{attendee.email}</span>
              </div>
            </>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-sm">
        {t("confirmationEmailSent")}
      </p>

      {onBookAnother && (
        <Button variant="outline" onClick={onBookAnother}>
          <CalendarPlus className="mr-2 h-4 w-4" />
          {t("bookAnother")}
        </Button>
      )}
    </div>
  )
}
