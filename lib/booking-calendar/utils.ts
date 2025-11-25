import { format } from "date-fns"

export const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"]
export const DAYS_EN = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
export const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
]
export const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  isSelected: boolean
  hasSlots: boolean
  disabled: boolean
}

export function getLocalDateString(date: Date): string {
  return format(date, "yyyy-MM-dd")
}

export function getSlotLocalDate(slotTime: string, timezone: string): string {
  try {
    const date = new Date(slotTime)
    return date.toLocaleDateString('en-CA', { timeZone: timezone })
  } catch {
    return format(new Date(slotTime), "yyyy-MM-dd")
  }
}

export function formatTime(
  slotTime: string,
  timezone: string,
  use24Hour: boolean
): string {
  try {
    const date = new Date(slotTime)
    return date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: !use24Hour
    })
  } catch {
    return slotTime
  }
}

// Alias for backwards compatibility
export const formatSlotTime = formatTime

export function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return "Europe/Paris"
  }
}

export function getMonthDateRange(date: Date): { start: string; end: string } {
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  // Extend to full calendar view (include days from prev/next months)
  const startDay = new Date(firstDay)
  const dayOfWeek = firstDay.getDay()
  // Adjust for Monday start (0 = Monday, 6 = Sunday)
  const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1
  startDay.setDate(startDay.getDate() - daysToSubtract)

  const endDay = new Date(lastDay)
  const lastDayOfWeek = lastDay.getDay()
  const daysToAdd = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek
  endDay.setDate(endDay.getDate() + daysToAdd)

  return {
    start: format(startDay, "yyyy-MM-dd"),
    end: format(endDay, "yyyy-MM-dd")
  }
}

export function generateCalendarDays(
  currentDate: Date,
  selectedDate: Date | null,
  monthSlots: Record<string, unknown[]>
): CalendarDay[] {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDay = new Date(year, month, 1)
  const dayOfWeek = firstDay.getDay()
  // Adjust for Monday start
  const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1

  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - daysToSubtract)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Create Set for O(1) lookup
  const slotsSet = new Set(Object.keys(monthSlots).filter(key => monthSlots[key]?.length > 0))

  const days: CalendarDay[] = []

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)

    const dateString = format(date, "yyyy-MM-dd")
    const isCurrentMonth = date.getMonth() === month
    const isPast = date < today
    const hasSlots = slotsSet.has(dateString)
    const isSelected = selectedDate
      ? format(selectedDate, "yyyy-MM-dd") === dateString
      : false

    days.push({
      date,
      isCurrentMonth,
      isSelected,
      hasSlots: hasSlots && isCurrentMonth,
      disabled: isPast || !hasSlots || !isCurrentMonth
    })
  }

  return days
}
