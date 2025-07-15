import { Router } from 'express'
import { signUp } from '../controllers/authController'
import { validateSchema } from '../middlewares/validator'
import { signUpSchema } from '../schemas/authSchema'
import { signIn } from '../controllers/authController'
import { signInSchema } from '../schemas/authSchema'
import { authenticateToken } from '../middlewares/authMiddleware'
import { eraseAccount } from '../controllers/authController'

const authRouter = Router()

authRouter.post('/sign-up', validateSchema(signUpSchema), signUp)

authRouter.get('/sign-in', validateSchema(signInSchema), signIn)

authRouter.delete('/erase', authenticateToken, eraseAccount)



export default authRouter
