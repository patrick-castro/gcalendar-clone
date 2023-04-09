import React, { useContext } from 'react'
import dayjs from 'dayjs'
import GlobalContext from '../../context/GlobalContext'
import logo from '../../assets/logo.png'

const MONTH_AND_YEAR_FORMAT = 'MMMM YYYY'

const CalendarHeader = () => {
  const { monthIdx, setMonthIdx } = useContext(GlobalContext)

  const handlePrevMonth = () => {
    setMonthIdx(monthIdx - 1)
  }

  const handleNextMonth = () => {
    setMonthIdx(monthIdx + 1)
  }

  const handleResetMonth = () => {
    setMonthIdx(dayjs().month())
  }

  const monthAndYear = dayjs(new Date(dayjs().year(), monthIdx)).format(
    MONTH_AND_YEAR_FORMAT
  )

  return (
    <header className='px-4 py-2 flex items-center'>
      <img src={logo} alt='calendar' className='mr-2 w-12 h-12' />
      <h1 className='mr-10 text-xl text-gray-500'>Calendar</h1>
      <button
        className='border rounded py-2 px-4 mr-5'
        onClick={handleResetMonth}
      >
        Today
      </button>
      <button onClick={handlePrevMonth} className='items-center'>
        <span className='material-icons-outlined cursor pointer text-gray-600 mx-2 align-middle'>
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor pointer text-gray-600 mx-2 align-middle'>
          chevron_right
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500'>{monthAndYear}</h2>
    </header>
  )
}

export default CalendarHeader
