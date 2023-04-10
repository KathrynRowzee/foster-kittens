import React from "react"
import { testLitter } from "../../test_queries/test_data"
import { getKittenByName, getKittenNamesOptions, getFullKittenProfile } from "./utils/utils"

const Kittens = () => {
  const [selected, setSelected] = React.useState(testLitter.kittens[0])

  const onChange = (event) => {
    const newKitten = getKittenByName(testLitter.kittens, event.target.value)
    if (!newKitten) {
      setSelected(testLitter.kittens[0])
      return
    }
    setSelected(newKitten)
  }

  return (
    <div className='kittens'>
      <div className="column left">
        <select className="kitten_selector" onChange={onChange}>
          {getKittenNamesOptions(testLitter.kittens)}
        </select>
        {getFullKittenProfile(selected, testLitter.DOB)}
      </div>
      <div className="column right">
        <div>weight log</div>
      </div>
      
    </div>
  )
}

export default Kittens