import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/libs/prismadb'

// import { PrismaClient, Prisma } from '@prisma/client'
// const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, name, password } = body

  const hashedPassword = await bcrypt.hash(password, 12)
  console.log(hashedPassword)
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
