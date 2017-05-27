
import moment from 'moment'

import User from '../models/User'
import getUserData from './getUserData'


const addlastVisitedTime = async (username) => {
  try {
    const {_id: userDataId} = await getUserData(username)
    if (!userDataId) {
      return
    }

    await User.update({userId: userDataId}, {
      $set: {
        lastVisitedAt: new Date()
      }
    })
  } catch (e) {
    const date = moment().add(3, 'h').format('YYYY-MM-DD HH:mm:ss')
    console.error(`[${date}] [addlastVisitedTime]`)
  }
}


export default addlastVisitedTime
