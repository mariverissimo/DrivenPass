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
