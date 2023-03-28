import kitten_default_image from '../../images/kitten_default_image.jpeg'

const getDefaultImage = (color) => {
  return (
    <span className='default_kitten_image' style={{ backgroundColor: color}}>
      <img src={kitten_default_image} alt='' />
    </span>
  )
}

export default getDefaultImage