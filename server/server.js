const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

let app = express()
let server = http.createServer(app)
let io = socketIO(server)

app.use(express.json())

let Twit = require('twit')

let T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
})

let twitterStream
let searchTerm = 'js'

const startTwitterStream = () => {
  if (twitterStream == null) {
    console.log('Creating new Twitter stream.')
    twitterStream = T.stream('statuses/filter', { track: searchTerm })
    twitterStream.on('tweet', function (tweet) {
      io.emit('newTweet', tweet)
    })
  } else {
    console.log('Stream already exists.')
  }
  io.emit('searchTerm', searchTerm)
}

const stopTwitterStream = () => {
  console.log('Stopping Twitter stream.')
  twitterStream.stop()
  twitterStream = null
}

app.post('/updateSearchTerm', (req, res) => {
  searchTerm = req.body.searchTerm
  res.status(200).send({ searchTerm: searchTerm })
  stopTwitterStream()
  startTwitterStream()
})

io.on('connection', (socket) => {
  console.log('Client connected.')
  startTwitterStream()
  socket.on('disconnect', () => {
    if (Object.keys(io.sockets.sockets).length === 0) {
      stopTwitterStream()
    }
    console.log('Client disconnected.')
  })
})

module.exports.server = server.listen(3001, () => {
  console.log('Server is up on port 3001')
})
module.exports.app = app
