import React, { FC } from 'react'
import dayjs from 'dayjs'

// Components
import Day from '../Day'

type Day = dayjs.Dayjs
type Week = Day[]
type Month = Week[]
interface Props {
  month: Month
}

const Month: FC<Props> = ({ month }) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row: Week, i: number) => (
        <React.Fragment key={i}>
          {row.map((day: Day, idx: number) => (
            <Day day={day} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Month
