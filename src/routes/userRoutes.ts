import { FastifyInstance } from 'fastify'
import { register } from '../controllers/userController'

export async function userRoutes(app: FastifyInstance) {
  app.post('/register', register)
}
