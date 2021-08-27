import './Greeting.css'
import moment from 'moment'
import { useEffect, useState } from 'react'
import RandomCatGif from '../RandomCatGif/RandomCatGif'

const Greeting = (props) => {
  const { name } = props
  const [weekday, setWeekday] = useState(null)
  const [timeOfDay, setTimeOfDay] = useState(null)

  useEffect(() => {
    const today = moment()
    getWeekDay(today)
    getTimeOfDay(today)
  }, [])

  // Get todays weekday.
  const getWeekDay = (today) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    setWeekday(weekdays[today.day()])
  }

  // Get the current time of day.
  const getTimeOfDay = (today) => {
    const hours = today.hours()
    const dayTimes = ['morning', 'afternoon', 'evening', 'night']
    
    if (hours > 3 && hours < 13) {
      setTimeOfDay(dayTimes[0])
    } else if (hours < 18) {
      setTimeOfDay(dayTimes[1])
    } else if (hours < 23) {
      setTimeOfDay(dayTimes[2])
    } else {
      setTimeOfDay(dayTimes[3])
    }
  }

  return ( 
    <>
    <h1>Hello to you too, <span id="greetedName">{name}</span>.</h1>
    <h2>Hope you're having a wonderful <span id="weekdayAndTime">{weekday} {timeOfDay}</span>.</h2>
    <RandomCatGif />
    </>
   )
}
 
export default Greeting