import React from "react";
import kitten_default_image from '../../../images/kitten_default_image.jpeg'


const getDefaultImage = (color) => {
  return (
    <span className='default_kitten_image' style={{ backgroundColor: color }}>
      <img src={kitten_default_image} alt='' />
    </span>
  )
}

export const getKittenImage = (kitten) => {
  if (kitten.image) {
    return <span><img src={kitten.image} alt='' /></span>
  }

  return getDefaultImage(kitten.collarColor)
}

const getMostRecentWeight = (weightLog) => {
  const timestamps = weightLog.map(log => {
  return log.timestamp.getTime()
  })
  const latestLog = Math.max(...timestamps)

  return weightLog.map(log => {
    if (log.timestamp.getTime().toString() === latestLog.toString()) {
      return log.postWeight
    }
    return ''
  })
}

export const getBasicKittenProfile = (kitten) => {
  return (
    <span className='kitten_profile'>
      {getKittenImage(kitten)}
      <div className='bold'>{kitten.name}</div>
      <div>{kitten.sex}</div>
      <div>
        {getMostRecentWeight(kitten.weightLog) ?? '-'} grams
      </div>
    </span>
  )
}

export const getFullKittenProfile = (kitten, dob) => {
  return (
    <>
      <h2 className='kitten_name'>{kitten.name}</h2>
      <div>{getKittenImage(kitten)}</div>
      <span className='basic_data'>
        <div><span className='bold'>DOB - </span>{ DateFormatters.getCalendarDate(dob) }</div>
        <div><span className='bold'>Age - </span>{DateFormatters.getWeeksDaysSince(dob)}</div>
        <div><span className='bold'>Sex - </span>{kitten.sex}</div>
        <div><span className='bold'>Color - </span>{kitten.color}</div>
      </span>
    </>
  )
}

export const getKittenNamesOptions = (kittens) => {
  return (
    kittens.map(kitten => {
      return <option value={kitten.name}>{kitten.name}</option>
    })  
  )
}

export const getKittenByName = (kittens, name) => {
  var newKitten = null
  kittens.forEach(kitten => {
    if (kitten.name === name) {
      newKitten = kitten
    }
  })

  return newKitten
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const getCalendarDate = (inputDate) => {
  const formattedDate = `${monthNames[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}`
  return formattedDate
}

const getShortDate = (inputDate) => {
  return (`${inputDate.getMonth()}/${inputDate.getDate()}`)
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

const getDateTime = (inputDate) => {
  let hour = inputDate.getHours() % 12
  if (hour === 0) { hour = 12 }

  let minutes = inputDate.getMinutes()
  if (minutes === 0) { minutes = '00' }
  
  let postfix = "AM"
  if (inputDate.getHours() - 12 >= 0) {
    postfix = "PM"
  }
  const date = getShortDate(inputDate)

  

  const time = `${hour}:${minutes} ${postfix}`

  return `${date} - ${time}`
    
}

export const DateFormatters = {getCalendarDate, getWeeksDaysSince, getDateTime}