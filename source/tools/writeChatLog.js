
import moment from 'moment'

import Message from '../models/Message'


const writeChatLog = async (channelId, userId, username, createdAt, message) => {
  try {
    await Message.create({
      channelId,
      userId,
      username,
      createdAt,
      message
    })
  } catch (e) {
    const date = moment().add(3, 'h').format('YYYY-MM-DD HH:mm:ss')
    console.error(`[${date}] [writeChatLog]`)
  }
}


export default writeChatLog
