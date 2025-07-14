import { Router } from 'express'
import authRouter from './authRouter'
import credentialsRouter from './credentialRouter'
import healthRouter from './healthRouter'

const router = Router()

router.use(authRouter)
router.use(healthRouter)
router.use('/credentials', credentialsRouter)

export default router
