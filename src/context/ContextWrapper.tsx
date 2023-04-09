import React, { FC, ReactNode, useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

interface Props {
  children: ReactNode
}

const ContextWrapper: FC<Props> = ({ children }) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<null | number>(
    null
  )
  const [daySelected, setDaySelected] = useState(null)

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIdx(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  return (
    <GlobalContext.Provider
      value={{
        monthIdx,
        setMonthIdx,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
