import { contactos } from '../basedatos/index.js'

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return reply.view('templates/root/index.ejs', { contactos: contactos })
    });

}
