import { createUser, findByEmail } from '../repositories/authRepo'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UnauthorizedError, NotFoundError } from '../utils/errors'
import { ConflictError } from '../utils/errors'
import { deleteUserAndData } from '../repositories/authRepo'

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

interface SignInData {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInData): Promise<string> {
  const user = await findByEmail(email)
  if (!user) throw new NotFoundError('E-mail not registered')

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw new UnauthorizedError('Incorrect password')

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' })

  return token
}

export async function eraseAccount(userId: number) {
  await deleteUserAndData(userId)
}

