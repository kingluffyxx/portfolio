"use client"

import { useTranslations, useLocale } from "next-intl"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { TimezoneSelector } from "./timezone-selector"
import { formatSlotTime } from "@/lib/booking-calendar/utils"
import { cn } from "@/lib/utils"
import type { CalcomSlot } from "@/lib/booking-calendar/types"

interface TimeSlotsPanelProps {
  selectedDate: Date | undefined
  slots: CalcomSlot[]
  loading: boolean
  timezone: string
  use24Hour: boolean
  onSelectSlot: (slot: CalcomSlot) => void
  selectedSlot: CalcomSlot | null
  onTimezoneChange: (timezone: string) => void
}

export function TimeSlotsPanel({
  selectedDate,
  slots,
  loading,
  timezone,
  use24Hour,
  onSelectSlot,
  selectedSlot,
  onTimezoneChange
}: TimeSlotsPanelProps) {
  const t = useTranslations("booking")
  const locale = useLocale()
  const dateLocale = locale === "fr" ? fr : enUS

  return (
    <div className="flex flex-col h-full">
      {/* Timezone Selector */}
      <div className="mb-4">
        <TimezoneSelector
          value={timezone}
          onChange={onTimezoneChange}
        />
      </div>

      {!selectedDate ? (
        <div className="flex items-center justify-center flex-1 text-muted-foreground text-sm">
          {t("selectDate")}
        </div>
      ) : (
        <>
          {/* Selected Date Header */}
          <div className="mb-4">
            <h3 className="font-medium capitalize">
              {format(selectedDate, "EEEE d MMMM", { locale: dateLocale })}
            </h3>
          </div>

          {/* Slots List */}
          {loading ? (
            <div className="flex items-center justify-center flex-1">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : slots.length === 0 ? (
            <div className="flex items-center justify-center flex-1 text-muted-foreground text-sm">
              {t("noSlots")}
            </div>
          ) : (
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[240px] pr-2">
              {slots.map((slot) => {
                const isSelected = selectedSlot?.time === slot.time
                return (
                  <Button
                    key={slot.time}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => onSelectSlot(slot)}
                    className={cn(
                      "justify-center",
                      isSelected && "ring-2 ring-primary ring-offset-2"
                    )}
                  >
                    {formatSlotTime(slot.time, timezone, use24Hour)}
                  </Button>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}
