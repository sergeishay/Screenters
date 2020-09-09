export const shortenText = (text, numOfChars) => {
  if (text) {
    const suffix = text.length > numOfChars ? '...' : ''
    return text.substring(0, numOfChars) + suffix
  }
}

export const formatDate = date => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const dayString = days[date.getDay()]
  const dateString = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${dayString} | ${dateString} | ${hour}:${minutes} `
}

export const getClosestShow = shows => {
  const today = new Date()
  let closestShow = null
  shows.forEach(show => {
    const showDate = new Date(show.startTime)
    if (showDate > today) {
      if (!closestShow) closestShow = showDate
      else if (showDate < closestShow) closestShow = showDate
    }
  })
  return closestShow
}
