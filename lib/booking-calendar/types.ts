export interface CalcomSlot {
  time: string
}

export interface MonthSlots {
  [date: string]: CalcomSlot[]
}

export interface BookingData {
  uid: string
  title: string
  startTime: string
  endTime: string
  attendees: {
    name: string
    email: string
  }[]
}

export interface BookingFormData {
  name: string
  email: string
  notes?: string
}
