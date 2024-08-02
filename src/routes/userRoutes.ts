import { FastifyInstance } from 'fastify'
import { register, login, logout } from '../controllers/userController'
import { authenticate } from '../middlewares/authenticate'

export async function userRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.post('/login', login)
  app.get('/logout', { preHandler: [authenticate] }, logout)
}
