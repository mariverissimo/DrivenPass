import Cryptr from 'cryptr'
import {
  create,
  findAllByUserId,
  findById,
  findByTitleAndUserId,
  remove,
  update
} from '../repositories/credentialRepo'
import { ConflictError, NotFoundError } from '../utils/errors'

const cryptr = new Cryptr(process.env.CRYPTR_SECRET!)

export async function createCredential(data: any, userId: number) {
  const existing = await findByTitleAndUserId(data.title, userId)
  if (existing) throw new ConflictError('Credential title already in use.')

  const encrypted = cryptr.encrypt(data.password)
  await create({ ...data, password: encrypted, userId })
}

export async function getAllCredentials(userId: number) {
  const credentials = await findAllByUserId(userId)
  return credentials.map(c => ({ ...c, password: cryptr.decrypt(c.password) }))
}

export async function getCredentialById(id: number, userId: number) {
  const credential = await findById(id, userId)
  if (!credential) throw new NotFoundError('Credential not found.')
  return { ...credential, password: cryptr.decrypt(credential.password) }
}

export async function deleteCredential(id: number, userId: number) {
  const deleted = await remove(id, userId)
  if (deleted.count === 0) throw new NotFoundError('Credential not found.')
}

export async function updateCredential(id: number, userId: number, data: any) {
  const encrypted = cryptr.encrypt(data.password)
  const updated = await update(id, userId, { ...data, password: encrypted })
  if (updated.count === 0) throw new NotFoundError('Credential not found.')
}
