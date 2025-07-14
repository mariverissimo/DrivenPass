import { Router } from 'express'
import { signUp } from '../controllers/authController'
import { validateSchema } from '../middlewares/validator'
import { signUpSchema } from '../schemas/authSchema'
import { signIn } from '../controllers/authController'
import { signInSchema } from '../schemas/authSchema'

const authRouter = Router()

authRouter.post('/sign-up', validateSchema(signUpSchema), signUp)

authRouter.post('/sign-in', validateSchema(signInSchema), signIn)


export default authRouter
