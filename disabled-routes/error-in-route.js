module.exports = async (fastify) => {
  fastify.get('/error-in-route', () => {
    foo // reference error
    return { ok: true }
  })
}
