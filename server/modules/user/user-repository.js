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

}