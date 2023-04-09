import React, { FC } from 'react'
import dayjs from 'dayjs'

// Components
import Day from '../Day'

interface Props {
  month: dayjs.Dayjs[][] | any
}

const Month: FC<Props> = ({ month }) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row: any, i: number) => (
        <React.Fragment key={i}>
          {row.map((day: any, idx: number) => (
            <Day day={day} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Month
