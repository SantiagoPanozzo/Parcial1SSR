import { contactos } from '../../basedatos/index.js'

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return reply.view('templates/root/new/index.ejs',)
    });
    fastify.post('/', async function (request, reply) {
        const contacto = {
            id: contactos.length + 1,
            foto: request.body.foto,
            nombre: request.body.nombre,
            sobrenombre: request.body.sobrenombre,
            edad: request.body.edad,
            email: request.body.email,
            telefono: request.body.telefono
        }
        contactos.push(contacto)
        return reply.redirect('/')
    });
}