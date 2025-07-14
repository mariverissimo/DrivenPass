import { Request, Response, NextFunction } from 'express'
import * as service from '../services/credentialService'

export async function createCredential(req: Request, res: Response, next: NextFunction) {
  const userId = res.locals.userId
  try {
    await service.createCredential(req.body, userId)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
}

export async function getCredentials(req: Request, res: Response, next: NextFunction) {
  const userId = res.locals.userId
  const id = Number(req.params.id)
  try {
    const result = id
      ? await service.getCredentialById(id, userId)
      : await service.getAllCredentials(userId)
    res.status(200).send(result)
  } catch (err) {
    next(err)
  }
}

export async function updateCredential(req: Request, res: Response, next: NextFunction) {
  const userId = res.locals.userId
  const id = Number(req.params.id)
  try {
    await service.updateCredential(id, userId, req.body)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

export async function deleteCredential(req: Request, res: Response, next: NextFunction) {
  const userId = res.locals.userId
  const id = Number(req.params.id)
  try {
    await service.deleteCredential(id, userId)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}
