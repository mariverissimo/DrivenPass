import { Request, Response, NextFunction } from 'express'
import * as authService from '../services/authService'

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    await authService.signUp(req.body)
    return res.sendStatus(201)
  } catch (error) {
    next(error)
  }
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  try {
    const token = await authService.signIn(req.body)
    return res.status(200).send({ token })
  } catch (error) {
    next(error)
  }
}

