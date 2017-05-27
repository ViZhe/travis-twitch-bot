
export default {
  user: {
    name: process.env.USER_NAME,
    id: process.env.USER_ID
  },
  tokenIRC: process.env.TOKEN_IRC,
  channels: [process.env.CHANNELS],
  twitch: {
    clientId: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET
  },
  colors: [
    'Blue',
    'BlueViolet',
    'CadetBlue',
    'Chocolate',
    'Coral',
    'DodgerBlue',
    'Firebrick',
    'GoldenRod',
    'Green',
    'HotPink',
    'OrangeRed',
    'Red',
    'SeaGreen',
    'SpringGreen',
    'YellowGreen'
  ],
  mongoDB: process.env.MONGO_DB_URL
}
