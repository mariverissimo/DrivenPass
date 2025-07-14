import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import healthRouter from './routers/healthRouter'
import { errorHandler } from './middlewares/errorHandler'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(errorHandler)

app.use(healthRouter)

export default app
