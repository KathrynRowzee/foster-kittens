import React from "react"

import { getBasicKittenProfile, DateFormatters } from "./utils/utils"

import { testLitter } from "../../test_queries/test_data"

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
              return getBasicKittenProfile(kitten)
          })}
        </div>
      </div>
    </div>
  )
}

export default LitterOverview