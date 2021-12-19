module.exports = async (fastify) => {
  foo // reference error

  fastify.get('/error-in-plugin', () => {
    return { ok: true }
  })
}
