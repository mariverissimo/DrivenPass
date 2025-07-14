import { Router } from 'express'
import { signUp } from '../controllers/authController'
import { validateSchema } from '../middlewares/validator'
import { signUpSchema } from '../schemas/authSchema'

const authRouter = Router()

authRouter.post('/sign-up', validateSchema(signUpSchema), signUp)

export default authRouter
