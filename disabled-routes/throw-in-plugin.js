module.exports = async (fastify) => {
  fastify.get('/throw-in-plugin', () => {
    return { ok: true }
  })
  throw new Error('boom')
}
