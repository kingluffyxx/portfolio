export interface TimezoneOption {
  value: string
  label: string
}

export function getTimezoneOffset(timezone: string, date = new Date()): string {
  try {
    const formatter = new Intl.DateTimeFormat('en', {
      timeZone: timezone,
      timeZoneName: 'shortOffset',
    })
    const parts = formatter.formatToParts(date)
    const offsetPart = parts.find((part) => part.type === 'timeZoneName')
    if (offsetPart?.value) {
      return offsetPart.value
    }
  } catch {
    // Fallback
  }

  try {
    const formatter = new Intl.DateTimeFormat('en', {
      timeZone: timezone,
      timeZoneName: 'longOffset',
    })
    const parts = formatter.formatToParts(date)
    const offsetPart = parts.find((part) => part.type === 'timeZoneName')
    if (offsetPart?.value) {
      return offsetPart.value
    }
  } catch {
    // Fallback to manual calculation
  }

  // Manual calculation fallback
  try {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000
    const targetTime = new Date(date.toLocaleString('en-US', { timeZone: timezone }))
    const offsetMinutes = (utc - targetTime.getTime()) / 60000
    const hours = Math.floor(Math.abs(offsetMinutes) / 60)
    const minutes = Math.abs(offsetMinutes) % 60
    const sign = offsetMinutes <= 0 ? '+' : '-'
    return `GMT${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  } catch {
    return ''
  }
}

export function getTimezoneDisplayName(timezone: string): string {
  try {
    const city = timezone.split('/').pop()?.replace(/_/g, ' ') || timezone
    const offset = getTimezoneOffset(timezone)
    return `${city} (${offset})`
  } catch {
    return timezone
  }
}

function getTimezoneOffsetMinutes(timezone: string): number {
  try {
    const date = new Date()
    const utc = date.getTime() + date.getTimezoneOffset() * 60000
    const target = new Date(date.toLocaleString('en-US', { timeZone: timezone }))
    return (utc - target.getTime()) / 60000
  } catch {
    return 0
  }
}

function sortTimezones(timezones: TimezoneOption[]): TimezoneOption[] {
  const timezonesWithOffsets = timezones.map((tz) => ({
    ...tz,
    offsetMinutes: getTimezoneOffsetMinutes(tz.value),
  }))

  return timezonesWithOffsets
    .sort((a, b) => {
      if (a.offsetMinutes !== b.offsetMinutes) {
        return a.offsetMinutes - b.offsetMinutes
      }
      return a.label.localeCompare(b.label)
    })
    .map(({ offsetMinutes, ...tz }) => tz)
}

export function getAvailableTimezones(): TimezoneOption[] {
  try {
    if ('supportedValuesOf' in Intl && typeof Intl.supportedValuesOf === 'function') {
      const timezones = Intl.supportedValuesOf('timeZone') as string[]
      const filteredTimezones = timezones
        .filter((tz) => {
          return (
            !tz.includes('SystemV') &&
            !tz.includes('Etc/GMT') &&
            (tz.includes('/') || tz === 'UTC') &&
            !tz.startsWith('US/') &&
            !tz.startsWith('Canada/')
          )
        })
        .map((timezone) => ({
          value: timezone,
          label: getTimezoneDisplayName(timezone),
        }))

      return sortTimezones(filteredTimezones)
    }
  } catch (error) {
    console.warn('Failed to get supported timezones:', error)
  }

  // Fallback to common timezones
  const commonTimezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Toronto',
    'America/Sao_Paulo',
    'America/Mexico_City',
    'Europe/London',
    'Europe/Berlin',
    'Europe/Paris',
    'Europe/Rome',
    'Europe/Madrid',
    'Europe/Amsterdam',
    'Europe/Moscow',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Hong_Kong',
    'Asia/Singapore',
    'Asia/Seoul',
    'Asia/Mumbai',
    'Asia/Dubai',
    'Australia/Sydney',
    'Australia/Melbourne',
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Pacific/Auckland',
    'UTC',
  ]

  const mappedTimezones = commonTimezones.map((timezone) => ({
    value: timezone,
    label: getTimezoneDisplayName(timezone),
  }))

  return sortTimezones(mappedTimezones)
}
