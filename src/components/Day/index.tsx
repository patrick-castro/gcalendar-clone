import React, { FC, useContext } from 'react'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '../../constants'
import GlobalContext from '../../context/GlobalContext'

interface Props {
  day: dayjs.Dayjs
  rowIdx: number
}

const { TWO_DIGIT_DATE, DAY_OF_WEEK, FULL_DATE } = DATE_FORMAT

const Day: FC<Props> = ({ day, rowIdx }) => {
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext)

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
      ></div>
    </div>
  )
}

export default Day
