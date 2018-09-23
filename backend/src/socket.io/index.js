import authentication from './authentication'
import Player from '../models/player'

const createSocketIOEvents = io =>
  io.on('connection', (socket) => {
    const player = new Player(socket.id)

    socket.emit('player.token', player.token)

    socket.use((packet, next) => authentication(packet, next, player.token))
  })

export default createSocketIOEvents
