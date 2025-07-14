import { createUser, findByEmail } from '../repositories/authRepo'
import bcrypt from 'bcrypt'
import { ConflictError } from '../utils/errors'

interface SignUpData {
  name: string
  email: string
  password: string
}

export async function signUp({ name, email, password }: SignUpData) {
  const existingUser = await findByEmail(email)
  if (existingUser) throw new ConflictError('E-mail already registered')

  const hashedPassword = await bcrypt.hash(password, 10)

  await createUser({ name, email, password: hashedPassword })
}
