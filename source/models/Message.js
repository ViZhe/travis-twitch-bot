
import mongoose, {Schema} from 'mongoose'

import {hideProps} from '../utils/mongoose'


const messageSchema = new Schema({
  channelId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  toObject: {
    virtuals: true,
    transform: hideProps
  }
})


export default mongoose.model('Message', messageSchema)
