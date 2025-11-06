import { hashPassword } from "../../utils/password.js";
import prisma from "../db.js";
import { user } from "./data.js";

async function main(userData) {
  //check if init admin already exist
  const adminUsername = process.env.INIT_ADMIN_USERNAME
  const admin = await prisma.user.findUnique({
    where: {
      username: adminUsername
    }
  })

  // if no admin exist then proceed to seed accounts
  if (!admin) {
    for (const u of userData) {
      const hashedPassword = await hashPassword(u.password)
      await prisma.user.create({
        data: {
          username: u.username,
          password: hashedPassword,
          role: {
            connectOrCreate: {
              where: {
                name: u.role,
              },
              create: {
                name: u.role,
              }
            }
          }
        }
      })
    }
  }
}

main(user)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })