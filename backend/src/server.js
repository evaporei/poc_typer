import socketIo from 'socket.io'
import { createServer } from 'http'
import app from './app'
import createSocketIOEvents from './socket.io'

const server = createServer(app)

const io = socketIo(server)

createSocketIOEvents(io)

export default server
