import PrismaClient from "../../db/db.js"

export class UserRepository {

    static async findByUsername(username){
        return await PrismaClient.user.findUnique({
            where: { 
                username
            }
        });
    }

    static async findById(id){
        return await PrismaClient.user.findUnique({
            where: { 
                id
            }
        });
    }
    
    static async create(data){
        return await PrismaClient.user.create({
            data: { 
                username: data.username,
                password: data.password,
                roleId: data.role
            },
        });
    }

    static async getRoleByName(name) {
        return await PrismaClient.role.findUnique({
            where: {
                name
            }
        });
    }

    static async getRoleById(id) {
        return await PrismaClient.role.findUnique({
            where: {
                id
            }
        });
    }

    static async findAll(data){
        const skip = (data.page - 1) * data.size;
        const users = await PrismaClient.user.findMany({
            select: {
                id: true,
                username: true,
                role: {
                    select: {
                        name: true,
                    }
                }
            },
            orderBy: {
                    createdAt: 'desc',
            },
            take: data.size,
            skip: skip
        })

        const total = await PrismaClient.user.count()
        return {total, users};
    }

    static async findByRole(data){
        const skip = (data.page - 1) * data.size;
        const users = await PrismaClient.user.findMany({
            select: {
                id: true,
                username: true,
                role: {
                    select: {
                        name: true,
                    }
                }
            },
            where: {
                role: {
                    name: data.roleName
                }
            },
            orderBy: {
                    createdAt: 'desc',
            },
            take: data.size,
            skip: skip
        })

        const total = await PrismaClient.user.count({
            where:{
                role: {
                    name: data.roleName
                }
            }
        })
        return {total, users};
    }
}