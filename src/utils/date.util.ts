export const getTime = (date: Date): string => {
  const hours = ("0" + date.getHours()).slice(-2)
  const minutes = ("0" + date.getMinutes()).slice(-2)

  return `${hours}:${minutes}`
}

export const formatDate = (date: Date): string => {
  const day = ("0" + date.getDate()).slice(-2)
  const month = ("0" + date.getMonth() + 1).slice(-2)
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}