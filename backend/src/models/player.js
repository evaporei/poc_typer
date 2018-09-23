import cuid from 'cuid'

class Player {
  constructor (id) {
    this.id = id
    this.name = ''
    this.ready = false
    this.token = cuid()
    this.keystrokes = 0
    this.room = null
  }
}

export default Player
