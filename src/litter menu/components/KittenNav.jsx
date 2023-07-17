import { getKittenImage } from "../sections/utils/utils"
import { testLitter } from "../../test_queries/test_data"

const KittenNav = () => {
  return (
    <nav id='kitten_nav'>
      {testLitter.kittens.map((kitten) => (
        <div className="kitten_nav_tab">
          {getKittenImage(kitten)}
        </div>
      ))}
    </nav>
  )
}

export default KittenNav