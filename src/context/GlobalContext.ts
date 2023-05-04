import React, { createContext } from 'react'
import dayjs from 'dayjs'
import { Day } from '../types'

interface ContextProps {
  monthIdx: number
  setMonthIdx: Function
  smallCalendarMonth: number | null
  setSmallCalendarMonth: Function
  daySelected: Day
  setDaySelected: Function
  showEventModal: boolean
  setShowEventModal: Function
  dispatchCalEvent: Function
  savedEvents: any
}

const GlobalContext = createContext<ContextProps>({
  monthIdx: 0,
  setMonthIdx: (index: number) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: number) => {},
  daySelected: dayjs(),
  setDaySelected: (day: Day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }: any) => {},
  savedEvents: [],
})

export default GlobalContext
