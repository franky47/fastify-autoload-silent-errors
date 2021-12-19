const fastify = require('fastify')
const autoLoad = require('fastify-autoload')
const path = require('node:path')

const server = fastify()

server.register(autoLoad, {
  dir: path.resolve(__dirname, 'routes'),
})

server.ready(() => {
  console.log(server.printRoutes())
})
