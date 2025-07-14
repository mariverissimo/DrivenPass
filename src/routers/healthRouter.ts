import { Router } from 'express'

const healthRouter = Router()

healthRouter.get('/health', (_req, res) => {
  return res.status(200).send("I’m OK!")
})

export default healthRouter
