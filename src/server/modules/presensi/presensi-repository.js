import PrismaClient from "../../db/db.js"
import { ResponseError } from "@/src/lib/response-error.js";

export class PresensiRepository {

    static async checkin(data, userId){
        try {
            return await PrismaClient.presensi.create({
                data: {       
                    latitude: data.lat,
                    longitude: data.long,
                    presensiDate: data.timestamp,
                    statusPresensi: "ONTIME",
                    user: {
                        connect: {
                            id: userId
                        }
                    },
                    shift: {
                        connect: {
                            id: shiftId
                        }
                    }
                },
                
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when writing to database")
        }
    }

    static async updateImage(data){
        try {
            return await PrismaClient.presensi.update({
                where: {
                    id: data.presensiId
                },
                data: {
                    fotoDiri: data.imageLink
                },
                select: {
                    id: true,
                    presensiDate: true,
                    statusPresensi: true,
                    statusApproval: true
                }

            });
        } catch (error) {
            throw new ResponseError(500, "Failed when writing to database")
        }
    }

    static async findMany(data, userId){
        try {
            const startOfMonth = new Date(data.month) 
            const endOfMonth = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth()+1)
            const skip = (data.page - 1) * data.size;
            const reports = await PrismaClient.presensi.findMany({
                where: {
                    userId,
                    presensiDate: {
                        gte: data.month != null ? startOfMonth : undefined,
                        lt: data.month != null ? endOfMonth : undefined
                    }
                },
                include:{
                    approver: {
                        select: {
                            username: true
                        }
                    },
                    shift: {
                        select: {
                            site: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    presensiDate: 'desc',
                },
                take: data.size,
                skip: skip
            })
            
            const count = await PrismaClient.laporan.count({
                where: {
                    userId
                }
            })
            return {result: reports, count};
            
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }
}