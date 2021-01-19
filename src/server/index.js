import fastify from 'fastify'
import routes from './routes.js'

export default class Server {
  constructor(opts = {}) {
    this.server = new fastify(opts)

    routes.map(route => this.server.route(route))
  }

  start() {
    this.server.listen(process.env.PORT || 3000, function (err, address) {
      if (err) {
        server.log.error(err)
        process.exit(1)
      }
    })
  }
}

