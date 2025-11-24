import { hashPassword } from "../../utils/password.js";
import prisma from "../db.js";
import { role, user } from "./data.js";

//seed system with one admin and predefined roles
async function main(userData, roleData) {
  //check if init admin already exist
  const adminUsername = process.env.INIT_ADMIN_USERNAME
  const admin = await prisma.user.findUnique({
    where: {
      username: adminUsername
    }
  })

  // if no admin exist then proceed to seed account
  if (!admin) {
    console.log("no admin found");
    console.log("creating admin");
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
  } else {
    console.log("admin found")
  }

  const roles = await prisma.role.findMany({
    where: {
      name: {
        in: roleData
      } 
    },
    select: {
      name: true
    }
  })

  const existingNames = roles.map(r => r.name); //map existing roles
  const missingRoles = roleData.filter(r => !existingNames.includes(r)); //filter which roles is missing

  if (missingRoles.length != 0){
    console.log("missing roles:", missingRoles);
    console.log("creating roles");
    await prisma.role.createMany({
      data: missingRoles.map(r => ({name: r}))
    })
  } else {
    console.log("roles found")
  }

}

main(user, role)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })