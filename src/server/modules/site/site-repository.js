import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"

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
        try {
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
                            address: true,
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
                            pH: true,
                            flowRate: true,
                            TDS: true,
                            EC: true,
                        }
                    }
                },
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when querying site in database")
        }
    }

    static async findAll(data){
        try {
            const skip = (data.page - 1) * data.size;

            const query = {
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
                        createdAt: 'asc',
                },
                take: data.size,
                skip: skip
            }

            const [sites, count] = await PrismaClient.$transaction([
                PrismaClient.site.findMany(query),
                PrismaClient.site.count()
            ]) 
    
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
                    maxCapacity: data.capacity,
                    address: {
                        create: {
                            city: data.city,
                            province: data.province,
                            address: data.address,
                            latitude: data.latitude,
                            longitude: data.longitude,
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

    static async update(data){
        try {  
            return await PrismaClient.site.update({
                where: {
                    id: data.siteId
                },
                data: {
                    ...(data.name && { name: data.name }),
                    ...(data.status && { status: data.status }),
                    ...(data.city || data.address || data.province 
                        ? 
                        {
                          address: {
                            update: {
                              ...(data.city && { city: data.city }),
                              ...(data.address && { address: data.address }),
                              ...(data.province && { province: data.province }),
                            }
                          }
                        }
                        : {})
                },
                include: {
                    _count: {
                        select: {
                            users: true,
                        }
                    },
                    address: {
                        select: {
                            address: true,
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
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when updating site to database")
        }
    }

    static async hardDeleteById(data){
        try {
            const site = await PrismaClient.site.findUnique({where: {id: data.siteId}})
            if(site){
                await PrismaClient.site.delete({
                    where:
                    {
                        id: data.siteId
                    }
                })
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to delete site")
        }
    }
}