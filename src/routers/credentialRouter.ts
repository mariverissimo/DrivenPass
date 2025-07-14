import { Router } from 'express'
import { validateSchema } from '../middlewares/validator'
import { credentialSchema } from '../schemas/credentialSchema'
import { authenticateToken } from '../middlewares/authMiddleware'
import {
  createCredential,
  getCredentials,
  updateCredential,
  deleteCredential
} from '../controllers/credentialController'

const credentialsRouter = Router()

credentialsRouter
  .use(authenticateToken)

credentialsRouter.post('/', validateSchema(credentialSchema), createCredential)
credentialsRouter.get('/', getCredentials)
credentialsRouter.get('/:id', getCredentials)
credentialsRouter.put('/:id', validateSchema(credentialSchema), updateCredential)
credentialsRouter.delete('/:id', deleteCredential)

export default credentialsRouter
