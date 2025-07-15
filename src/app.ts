import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { errorHandler } from './middlewares/errorHandler'
import router from './routers'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(errorHandler)

app.use(router)

export default app
