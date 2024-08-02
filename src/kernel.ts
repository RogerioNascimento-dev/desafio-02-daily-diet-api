import fastify from 'fastify'
import { userRoutes } from './routes/userRoutes'
import fjwt from '@fastify/jwt'
import cookie from '@fastify/cookie'
import { mealRoutes } from './routes/mealRoutes'
import { jwtConfig } from './configs/jwt'
import { env } from '../src/env/index'

export const kernel = fastify()

// Configurations
kernel.register(fjwt, { secret: env.JWT_SECRET })
kernel.addHook('preHandler', jwtConfig(kernel))
kernel.register(cookie)

// Routes
kernel.register(userRoutes, { prefix: 'user' })
kernel.register(mealRoutes, { prefix: 'meal' })
