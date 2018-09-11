import socketIo from 'socket.io'
import { createServer } from 'http'
import app from './app'

const server = createServer(app)

const io = socketIo(server)

const doStuff = socket => console.log('yo socket yo:', socket)

io.on('connection', doStuff)

export default io
