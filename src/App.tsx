import React, { useState } from 'react'

// Components
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'

// Utils
import { getMonth } from './utils'

// Style
import './App.css'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

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
