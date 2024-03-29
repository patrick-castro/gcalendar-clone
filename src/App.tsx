import React, { useState, useContext, useEffect } from 'react'

// Components
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'
import EventModal from './components/EventModal'

// Context
import GlobalContext from './context/GlobalContext'

// Utils
import { getMonth } from './utils'

// Style
import './App.css'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIdx, setMonthIdx, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIdx))
  }, [monthIdx])

  return (
    <>
      {showEventModal && <EventModal />}
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
