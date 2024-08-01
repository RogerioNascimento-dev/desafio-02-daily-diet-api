import fastify from 'fastify'
import { userRoutes } from './routes/userRoutes'

export const kernel = fastify()

kernel.register(userRoutes, { prefix: 'user' })
