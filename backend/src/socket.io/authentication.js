const authentication = (packet, next, token) => {
  const areTheSameToken = packet.token === token

  if (areTheSameToken) {
    return next()
  }

  return next(new Error('Authentication error'))
}

export default authentication
