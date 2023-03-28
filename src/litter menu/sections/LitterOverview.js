import React from "react"

import { DateFormatters } from "../utils/date_formatter"

import { testLitter } from "../../test_queries/test_data"

import getDefaultImage from '../utils/default_image'

const kittenProfile = (kitten) => {
  const currentWeight = () => {
    const timestamps = kitten.weightLog.map(log => {
      return log.timestamp.getTime()
    })
    const latestLog = Math.max(...timestamps)
    
    return kitten.weightLog.map(log => {
      if (log.timestamp.getTime().toString() === latestLog.toString()) {
        return log.postWeight
      }
      return ''
    })
  }
  
  return (
    <span className='kitten_profile'>
      {kitten.image ?
        <span><img src={kitten.image} alt='' /></span>
        : getDefaultImage(kitten.collarColor)}
      <div className='bold'>{kitten.name}</div>
      <div>{kitten.sex}</div>
      <div>
        {currentWeight() ?? '-'} grams
      </div>
    </span>
  )
}

const LitterOverview = () => {
  return (
    <div className='litter_overview'>
      <h2>Litter Overview</h2>
      <div>
        <span className='bold'>Date of Birth:</span> {DateFormatters.getCalendarDate(testLitter.DOB)}
      </div>
      <div>
        <span className='bold'>Age:</span> {DateFormatters.getWeeksDaysSince(testLitter.DOB)}
      </div>
      <div>
        <span className='bold'>Kittens</span>
        <div>
          {testLitter.kittens.map(kitten => {
              return kittenProfile(kitten)
          })}
        </div>
      </div>
    </div>
  )
}

export default LitterOverview