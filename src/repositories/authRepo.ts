import { prisma } from '../database/database'
import { User } from '@prisma/client'

export async function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } })
}

export async function createUser(data: Omit<User, 'id'>) {
  return prisma.user.create({ data })
}

export async function deleteUserAndData(userId: number) {
  await prisma.$transaction([
    prisma.credential.deleteMany({ where: { userId } }),
    prisma.user.delete({ where: { id: userId } })
  ])
}
