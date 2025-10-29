import prisma from "../db.js";
import { user } from "./data.js";

async function main(userData) {
  const user = await prisma.user.createMany({
    data: userData
  })
  console.log({ user })
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