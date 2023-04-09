import React, { createContext } from 'react'

const GlobalContext = createContext({
  monthIdx: 0,
  setMonthIdx: (index: number) => {},
})

export default GlobalContext
