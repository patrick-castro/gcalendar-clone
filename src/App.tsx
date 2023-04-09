import React, { useState, useContext, useEffect } from 'react'

// Components
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'

// Context
import GlobalContext from './context/GlobalContext'

// Utils
import { getMonth } from './utils'

// Style
import './App.css'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIdx, setMonthIdx } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIdx))
  }, [monthIdx])

  return (
    <>
      <div className='h-screen flex flex-col'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  )
}

export default App
