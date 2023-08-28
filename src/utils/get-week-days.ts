export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => {
      // const resultado = formatter.format(new Date(Date.UTC(2021, 5, day)))
      // console.log(new Date())
      // console.log(resultado)
      return formatter.format(new Date(Date.UTC(2021, 5, day)))
    })

    .map((weekDay) => {
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
