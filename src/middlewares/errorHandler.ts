import { Request, Response, NextFunction } from 'express'

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err.name === 'ConflictError') return res.status(409).send(err.message)
  if (err.name === 'UnauthorizedError') return res.status(401).send(err.message)
  if (err.name === 'NotFoundError') return res.status(404).send(err.message)

  console.error(err)
  return res.status(500).send('Internal Server Error')
}
