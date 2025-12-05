import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"
import { M_PLUS_1 } from "next/font/google/index.js";

export class SiteRepository {

    static async findByName(name){
        try {
            return await PrismaClient.site.findUnique({
                where: { 
                    name
                },
                select: {
                    name: true
                }
            });
            
        } catch (error) {
            throw new ResponseError(500, "Failed when querying site in database");
        }
    }

    static async findById(data){
        //try {
            return await PrismaClient.site.findUnique({
                where: { 
                    id: data.siteId
                },
                include: {
                    _count: {
                        select: {
                            users: true,
                        }
                    },
                    address: {
                        select: {
                            city: true,
                            province: true,
                        }
                    },
                    report: {
                        take: 1,
                        orderBy: {
                            laporanDate: 'desc'
                        },
                        select: {
                            laporanDate: true,
                        }
                    }
                },
            });
        //} catch (error) {
        //    throw new ResponseError(500, "Failed when querying site in database")
        //}
    }

    static async findAll(data){
        try {
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
            
        } catch (error) {
            throw new ResponseError(500, "Failed when querying sites in database")
        }
    }

    static async create(data){
        try {
            return await PrismaClient.site.create({
                data:{
                    name: data.name,
                    address: {
                        create: {
                            city: data.city,
                            province: data.province,
                            address: data.address,
                            latitude: data.latitude,
                            longitude: data.longitude 
                        }
                    }
                },
                select: {
                    name: true,
                }
            })
            
        } catch (error) {
            throw new ResponseError(500, "Failed when writing site to database")
        }
    }

}