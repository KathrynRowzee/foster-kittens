const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const getCalendarDate = (inputDate) => {
  const formattedDate = `${monthNames[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}`
  return formattedDate
}

const getWeeksDaysSince = (inputDate) => {
  const today = new Date()
  const diff = today.getTime() - inputDate.getTime()

  const oneDay = 1000 * 60 * 60 * 24
  
  const totalDays = Math.floor(diff / oneDay)
  const weeks = Math.floor(totalDays / 7)
  const days = totalDays % 7

  const formattedDate = `${weeks} weeks, ${days} days`
  return formattedDate
}

export const DateFormatters = {getCalendarDate, getWeeksDaysSince}