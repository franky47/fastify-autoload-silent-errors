foo // reference error
module.exports = async (fastify) => {
  fastify.get('/error-in-top-level', () => {
    return { ok: true }
  })
}
