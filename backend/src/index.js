import server from './server'

const PORT = process.env.PORT || 8080

console.log('PORT', PORT)

server.listen(PORT)
