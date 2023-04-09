import React, { createContext } from 'react'

interface ContextProps {
  monthIdx: number
  setMonthIdx: Function
  smallCalendarMonth: number | null
  setSmallCalendarMonth: Function
}

const GlobalContext = createContext<ContextProps>({
  monthIdx: 0,
  setMonthIdx: (index: number) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: number) => {},
})

export default GlobalContext
