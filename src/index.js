import Server from './server/index.js'

const server = new Server({
  logger: process.env.NODE_ENV !== 'production'
})

server.start()