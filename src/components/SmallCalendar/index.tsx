import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { getMonth } from '../../utils'
import { DATE_FORMAT } from '../../constants'
import type { Day, Week } from '../../types'
import GlobalContext from '../../context/GlobalContext'

const { MONTH_AND_YEAR, TWO_LETTER_DAY, ONE_DIGIT_DATE, FULL_DATE } =
  DATE_FORMAT

const SmallCalendar = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx))
  }, [currentMonthIdx])

  const { monthIdx, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(GlobalContext)

  useEffect(() => {
    // TODO: FIX BUG
    // THIS WILL ONLY CHANGE IF THE VALUE OF monthIdx CHANGES
    setCurrentMonthIdx(monthIdx)
  }, [monthIdx])

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1)
  }

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1)
  }

  const getDayClass = (day: Day) => {
    const today = dayjs().format(FULL_DATE)
    const currentDay = day.format(FULL_DATE)
    const selectedDay = daySelected && daySelected.format(FULL_DATE)

    if (today === currentDay) {
      return 'bg-blue-500 rounded-full text-white'
    }

    if (currentDay === selectedDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold'
    }

    return ''
  }

  return (
    <div className='mt-9'>
      <header className='flex justify-between'>
        <p className='text-gray-500 font-semibold'>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
            MONTH_AND_YEAR
          )}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
              chevron_right
            </span>
          </button>
        </div>
      </header>
      {/* GRID */}
      <div className='grid grid-cols-7 grid-rows-6'>
        {/* Week day column so grab the first row only */}
        {currentMonth[0].map((day: Day, idx: number) => (
          <span key={idx} className='text-sm py-1 text-center'>
            {day.format(TWO_LETTER_DAY).charAt(0)}
          </span>
        ))}

        {currentMonth.map((row: Week, idx: number) => (
          <React.Fragment key={idx}>
            {row.map((day: Day, i: number) => (
              <button
                key={i}
                className={`py-1 w-full ${getDayClass(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx)
                  setDaySelected(day)
                }}
              >
                <span className='text-sm'>{day.format(ONE_DIGIT_DATE)}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SmallCalendar
