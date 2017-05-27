
import config from '../config'


const getRandomUserColor = () => {
  const colors = config.colors
  const randomColorNum = Math.floor(Math.random() * colors.length)
  return colors[randomColorNum]
}


export default getRandomUserColor
