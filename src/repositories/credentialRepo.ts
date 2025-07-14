import { prisma } from '../database/database'
import { Credential } from '@prisma/client'

export function findByTitleAndUserId(title: string, userId: number) {
  return prisma.credential.findFirst({ where: { title, userId } })
}

export function create(data: Omit<Credential, 'id'>) {
  return prisma.credential.create({ data })
}

export function findAllByUserId(userId: number) {
  return prisma.credential.findMany({ where: { userId } })
}

export function findById(id: number, userId: number) {
  return prisma.credential.findFirst({ where: { id, userId } })
}

export function update(id: number, userId: number, data: Partial<Credential>) {
  return prisma.credential.updateMany({
    where: { id, userId },
    data
  })
}

export function remove(id: number, userId: number) {
  return prisma.credential.deleteMany({ where: { id, userId } })
}
