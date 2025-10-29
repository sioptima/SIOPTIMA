import PrismaClient from "../../db/db.js";

export class RoleRepository {

    static async create(name) {
        return await PrismaClient.role.create({
            data: { 
                name
            }
        });
    }

    static async getByName(name) {
        return await PrismaClient.role.findUnique({
            where: { 
                name
            }
        });
    }

    static async getById(id) {
        return await PrismaClient.role.findUnique({
            where: { 
                id
            }
        });
    }

}