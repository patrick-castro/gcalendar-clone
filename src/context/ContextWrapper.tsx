import React, { FC, ReactNode, useEffect, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

interface Props {
  children: ReactNode
}

const savedEventsReducer = (
  state: any,
  { type, payload }: { type: string; payload: { [key: string]: any } }
) => {
  switch (type) {
    case 'push':
      return [...state, payload]
    case 'update':
      return state.map((event: any) =>
        event.id === payload.id ? payload : event
      )
    case 'delete':
      return state.filter((event: any) => event.id !== payload.id)
    default:
      throw new Error()
  }
}

const initEvents = () => {
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvents
}

const ContextWrapper: FC<Props> = ({ children }) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<null | number>(
    null
  )
  const [daySelected, setDaySelected] = useState(dayjs())
  const [showEventModal, setShowEventModal] = useState(false)

  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  )

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
  }, [savedEvents])

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
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        savedEvents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
