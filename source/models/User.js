
import mongoose, {Schema} from 'mongoose'

import {hideProps} from '../utils/mongoose'


const userSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  usernameList: {
    type: [{
      type: String,
      unique: true
    }],
    required: true
  },
  lastVisitedAt: {
    type: Date,
    default: Date.now
  }
}, {
  toObject: {
    versionKey: false,
    virtuals: true,
    transform: hideProps
  }
})


export default mongoose.model('User', userSchema)
