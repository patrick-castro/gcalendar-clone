import dayjs from 'dayjs'

/**
 * This function returns a matrix of days for a given month.
 * @param {number} month - The month parameter is an optional number parameter that represents the
 * month for which we want to generate a calendar. If no value is provided, it defaults to the current
 * month.
 * @returns - Matrix of days for the specified month. The matrix is a 5x7 array of `dayjs`
 * objects representing each day of the month. The first row of the matrix represents the first
 * week of the month, and the last row represents the last week of the month. If the month parameter
 * is not provided, the current month is used.
 */
export function getMonth(month: number = dayjs().month()) {
  const WEEK_ROWS = 5
  const DAY_COLUMNS = 7

  const year = dayjs().year()
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
  let currentMonthCount = 0 - firstDayOfMonth

  const daysMatrix = new Array(WEEK_ROWS).fill([]).map(() => {
    return new Array(DAY_COLUMNS).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })

  return daysMatrix
}
