
import fetch from 'node-fetch'
import moment from 'moment'

import config from '../config'


const getUserData = async (name) => {
  try {
    const stream = await fetch(`https://api.twitch.tv/kraken/users?login=${name}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': config.twitch.clientId
      }
    })
    const streamJson = await stream.json()
    return streamJson.users[0]
  } catch (e) {
    const date = moment().add(3, 'h').format('YYYY-MM-DD HH:mm:ss')
    console.error(`[${date}] [getUserData]`)
    return {}
  }
}


export default getUserData
