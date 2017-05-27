
import moment from 'moment'

import User from '../models/User'
import getUserData from './getUserData'


const addUserByName = async (username) => {
  try {
    const {_id: userDataId, name: userDataUsername} = await getUserData(username)
    if (!userDataId) {
      return
    }

    const user = await User.findOne({userId: userDataId})
    if (!user) {
      await User.create({
        userId: userDataId,
        usernameList: [userDataUsername]
      })
      return
    }
    if (user.usernameList.indexOf(userDataUsername) === -1) {
      await User.update({_id: user.id}, {
        $push: {
          usernameList: userDataUsername
        }
      })
    }
  } catch (e) {
    const date = moment().add(3, 'h').format('YYYY-MM-DD HH:mm:ss')
    console.error(`[${date}] [addUserByName]`)
  }
}


export default addUserByName
