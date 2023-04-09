import React, { FC } from 'react'

// Types
import type { Day, Week, Month } from '../../types'

// Components
import DayComponent from '../Day'
interface Props {
  month: Month
}

const Month: FC<Props> = ({ month }) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row: Week, i: number) => (
        <React.Fragment key={i}>
          {row.map((day: Day, idx: number) => (
            <DayComponent day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Month
