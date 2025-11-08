import PrismaClient from "../../db/db.js"

export class SiteRepository {

    static async findByName(name){
        return await PrismaClient.site.findUnique({
            where: { 
                name
            }
        });
    }

    static async findAll(data){
        const skip = (data.page - 1) * data.size;
        const sites = await PrismaClient.site.findMany({
            select:{
                id: true,
                name: true,
                image: true,
                address: {
                    select: {
                        address:true,
                        latitude: true,
                        longitude: true
                    }
                }
            },
            orderBy: {
                    createdAt: 'desc',
            },
            take: data.size,
            skip: skip
        })

        const count = await PrismaClient.site.count()
        return {count, sites};
    }

    static async create(data){
        return await PrismaClient.site.create({
            data:{
                name: data.name,
                address: {
                    create: {
                        address: data.address,
                        latitude: data.latitude,
                        longitude: data.longitude 
                    }
                }
            },
        })
    }

}