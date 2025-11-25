"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Globe } from "lucide-react"
import { getAvailableTimezones, getTimezoneDisplayName } from "@/lib/booking-calendar/timezone-utils"
import { useMemo } from "react"

interface TimezoneSelectorProps {
  value: string
  onChange: (timezone: string) => void
  className?: string
}

export function TimezoneSelector({ value, onChange, className }: TimezoneSelectorProps) {
  const timezones = useMemo(() => getAvailableTimezones(), [])
  const displayValue = useMemo(() => value ? getTimezoneDisplayName(value) : "", [value])

  return (
    <div className={className}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full text-xs h-8">
          <Globe className="h-3 w-3 mr-2 text-muted-foreground" />
          <SelectValue placeholder="Select timezone">
            {displayValue}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {timezones.map((tz) => (
            <SelectItem key={tz.value} value={tz.value} className="text-xs">
              {tz.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
