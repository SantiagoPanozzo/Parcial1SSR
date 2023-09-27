import { contactos } from '../../basedatos/index.js'

export default async function (fastify, opts) {
    fastify.get('/:id', async function (request, reply) {
        contactos.splice(request.params.id - 1, 1)
        return reply.redirect('/')
    });
}