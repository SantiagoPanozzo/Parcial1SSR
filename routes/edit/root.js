import { contactos } from '../../basedatos/index.js'

export default async function (fastify, opts) {
    fastify.get('/:id', async function (request, reply) {
        const contacto = contactos[request.params.id - 1]
        return reply.view('templates/root/edit/index.ejs', { contacto: contacto })
    });
    fastify.post('/:id', async function (request, reply) {
        const contacto = {
            id: request.params.id,
            foto: request.body.foto,
            nombre: request.body.nombre,
            sobrenombre: request.body.sobrenombre,
            edad: request.body.edad,
            email: request.body.email,
            telefono: request.body.telefono
        }
        contactos[request.params.id] = contacto
        return reply.redirect('/')
    });

}