import React, { FC, useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '../../constants'
import GlobalContext from '../../context/GlobalContext'

interface Props {
  day: dayjs.Dayjs
  rowIdx: number
}

const { TWO_DIGIT_DATE, DAY_OF_WEEK, FULL_DATE } = DATE_FORMAT
const labelsMap: { [key: string]: string } = {
  indigo: 'bg-indigo-500',
  gray: 'bg-gray-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  purple: 'bg-purple-500',
}

const Day: FC<Props> = ({ day, rowIdx }) => {
  const { setDaySelected, setShowEventModal, savedEvents } =
    useContext(GlobalContext)

  const [dayEvents, setDayEvents] = useState([])

  useEffect(() => {
    const events = savedEvents.filter((evt: any) => {
      return dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    })

    setDayEvents(events)
  }, [savedEvents, day])

  function getCurrentDayClass() {
    return day.format(FULL_DATE) === dayjs().format(FULL_DATE)
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='text-sm mt-1'>
            {day.format(DAY_OF_WEEK)?.toUpperCase()}
          </p>
        )}

        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format(TWO_DIGIT_DATE)}
        </p>
      </header>
      <div
        className='flex-1 cursor-pointer'
        onClick={() => {
          setDaySelected(day)
          setShowEventModal(true)
        }}
      >
        {dayEvents.map((evt: any, idx: number) => (
          <div
            key={idx}
            className={`${
              labelsMap[evt.label]
            } p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Day
