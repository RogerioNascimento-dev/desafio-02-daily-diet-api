import { FastifyInstance } from 'fastify'
import { register, login } from '../controllers/userController'

export async function userRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.post('/login', login)
}
