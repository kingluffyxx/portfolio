"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DAYS,
  DAYS_EN,
  MONTHS,
  MONTHS_EN,
  generateCalendarDays,
  getLocalDateString
} from "@/lib/booking-calendar/utils"
import type { MonthSlots } from "@/lib/booking-calendar/types"

interface CalendarGridProps {
  selectedDate: Date | undefined
  onSelectDate: (date: Date | undefined) => void
  currentMonth: Date
  onMonthChange: (date: Date) => void
  monthSlots: MonthSlots
}

export function CalendarGrid({
  selectedDate,
  onSelectDate,
  currentMonth,
  onMonthChange,
  monthSlots
}: CalendarGridProps) {
  const locale = useLocale()
  const days = locale === "fr" ? DAYS : DAYS_EN
  const months = locale === "fr" ? MONTHS : MONTHS_EN

  const calendarDays = generateCalendarDays(currentMonth, selectedDate ?? null, monthSlots)

  const handlePrevMonth = () => {
    const newDate = new Date(currentMonth)
    newDate.setMonth(newDate.getMonth() - 1)
    onMonthChange(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(currentMonth)
    newDate.setMonth(newDate.getMonth() + 1)
    onMonthChange(newDate)
  }

  const handleDayClick = (date: Date) => {
    onSelectDate(date)
  }

  const monthLabel = `${months[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`

  return (
    <div className="w-full">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevMonth}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </Button>
        <h2 className="text-sm font-medium">{monthLabel}</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextMonth}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </Button>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => {
          const dateString = getLocalDateString(day.date)
          const dayNumber = day.date.getDate()

          return (
            <button
              key={`${dateString}-${index}`}
              disabled={day.disabled}
              onClick={() => handleDayClick(day.date)}
              className={cn(
                "h-9 w-9 mx-auto rounded-full text-sm transition-colors",
                "flex items-center justify-center",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                !day.isCurrentMonth && "text-muted-foreground/30",
                day.isCurrentMonth && !day.disabled && "hover:bg-accent",
                day.disabled && "cursor-not-allowed opacity-50",
                day.hasSlots && !day.isSelected && "font-semibold text-primary",
                day.isSelected && "bg-primary text-primary-foreground hover:bg-primary"
              )}
            >
              {dayNumber}
            </button>
          )
        })}
      </div>
    </div>
  )
}
