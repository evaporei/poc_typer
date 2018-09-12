import socketIo from 'socket.io'
import { createServer } from 'http'
import app from './app'

const server = createServer(app)

const io = socketIo(server)

const disconnect = (socket) => () => {
  console.log('disconnect socket:', socket)
}

const connect = socket => {
  console.log('connect socket:', socket)

  socket.on('disconnect', disconnect(socket))
}

io.on('connection', connect)

export default server
