import React, { FC } from 'react'
import dayjs from 'dayjs'

interface Props {
  day: dayjs.Dayjs
  rowIdx: number
}

// The two digits of the date
const DATE_FORMAT = 'DD'
// First 3 letters of the day of the week
const DAY_OF_WEEK_FORMAT = 'ddd'

const Day: FC<Props> = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    const DATE_FORMAT = 'DD-MM-YY'

    return day.format(DATE_FORMAT) === dayjs().format(DATE_FORMAT)
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='text-sm mt-1'>
            {day.format(DAY_OF_WEEK_FORMAT)?.toUpperCase()}
          </p>
        )}

        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format(DATE_FORMAT)}
        </p>
      </header>
    </div>
  )
}

export default Day
