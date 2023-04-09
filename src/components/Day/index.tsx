import React, { FC } from 'react'

interface Props {
  day: any
}

const Day: FC<Props> = ({ day }) => {
  return <div>{day.format()}</div>
}

export default Day
