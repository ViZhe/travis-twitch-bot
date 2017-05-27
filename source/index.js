
import tmi from 'tmi.js'
import mongoose from 'mongoose'

import config from './config'
import writeChatLog from './tools/writeChatLog'
import getRandomUserColor from './tools/getRandomUserColor'
import addUserByName from './tools/addUserByName'
import addlastVisitedTime from './tools/addLastVisitedTime'


mongoose.Promise = global.Promise
mongoose.connect(config.mongoDB)

// eslint-disable-next-line new-cap
const bot = new tmi.client({
  options: {
    debug: false
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: config.user.name,
    password: config.tokenIRC
  },
  channels: config.channels
})

bot.connect()

bot.on('chat', (channel, user, message, self) => {
  writeChatLog(user['room-id'], user['user-id'], user.username, user['tmi-sent-ts'], message)
  if (self || user['user-id'] === config.user.id) {
    bot.color(getRandomUserColor())
  }
})

bot.on('join', (channel, username) => {
  addUserByName(username)
})

bot.on('part', (channel, username, self) => {
  if (self) {
    return
  }
  addlastVisitedTime(username)
})

let iteration = 1
const runner = setInterval(async () => {
  console.log(`[iteration] #${iteration}`)

  if (iteration === 45) {
    clearTimeout(runner)
    bot.disconnect()
    mongoose.disconnect()
  }
  iteration += 1
}, 60000)
