export function dateJoined(date: string) {
  let newDate = new Date(date)
  let month = newDate.toLocaleDateString('en', { month: 'short' })
  let day = newDate.getDate()
  let year = newDate.getFullYear()

  return `${day + 1} ${month} ${year}`
}
