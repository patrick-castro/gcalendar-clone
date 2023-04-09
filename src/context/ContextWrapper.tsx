import React, { FC, ReactNode, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

interface Props {
  children: ReactNode
}

const ContextWrapper: FC<Props> = ({ children }) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  return (
    <GlobalContext.Provider value={{ monthIdx, setMonthIdx }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
