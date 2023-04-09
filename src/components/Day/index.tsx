import React, { FC } from 'react'
import dayjs from 'dayjs'

interface Props {
  day: dayjs.Dayjs
}

const Day: FC<Props> = ({ day }) => {
  return <div>{day.format()}</div>
}

export default Day
