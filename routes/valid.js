module.exports = async (fastify) => {
  fastify.get('/valid', () => {
    return { ok: true }
  })
}
