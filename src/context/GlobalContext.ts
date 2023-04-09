import React, { createContext } from 'react'
import { Day } from '../types'

interface ContextProps {
  monthIdx: number
  setMonthIdx: Function
  smallCalendarMonth: number | null
  setSmallCalendarMonth: Function
  daySelected: null | Day
  setDaySelected: Function
}

const GlobalContext = createContext<ContextProps>({
  monthIdx: 0,
  setMonthIdx: (index: number) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: number) => {},
  daySelected: null,
  setDaySelected: (day: any) => {},
})

export default GlobalContext
