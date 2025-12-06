import PrismaClient from "../../db/db.js"
import { ResponseError } from "@/src/lib/response-error.js";

export class PresensiRepository {

    static async checkIn(data){
        try {
            return await PrismaClient.presensi.create({
                data: {       
                    latitude: data.request.lat,
                    longitude: data.request.long,
                    presensiDate: data.request.timestamp,
                    statusPresensi: data.isLate ? "LATE" : "ONTIME",
                    user: {
                        connect: {
                            id: data.userId
                        }
                    },
                    ...(data.shiftId && {
                        shift: {
                          connect: { id: data.shiftId }
                        }
                      })
                },
                select: {
                    id: true,
                    presensiDate: true,
                    statusPresensi: true,
                    statusApproval: true,
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when writing to database")
        }
    }

    static async checkOut(data){
        try {
            const checkOut = await PrismaClient.checkOut.create({
                data: {       
                    latitude: data.request.lat,
                    longitude: data.request.long,
                    checkOutDate: data.request.timestamp,
                    user: {
                        connect: {
                            id: data.userId
                        }
                    },
                    checkIn: {
                        connect: {
                            id: data.checkInId,
                        }
                    }
                },
                select: {
                    id: true,
                    checkOutDate: true,
                    checkIn: {
                        select: {
                            statusApproval: true,
                        }
                    }
                }
            });

            await PrismaClient.presensi.update({
                where: {
                    id: data.checkInId,
                },
                data:{
                    checkOut: {
                        connect: {
                            id: checkOut.id
                        }
                    }
                }
            })

            return checkOut
        } catch (error) {
            throw new ResponseError(500, "Failed when writing to database")
        }
    }

    static async getActiveCheckIn(data){
        try {
            return await PrismaClient.presensi.findFirst({
                where: {
                    userId: data.userId,
                    checkOut: null
                },
                select: {
                    id: true,
                    shift: {
                        select: {
                            siteId: true,
                        }
                    }
                },
                orderBy: {
                    presensiDate: 'desc',
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async updateCheckInImage(data){
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
            throw new ResponseError(500, "Failed when updating table in database")
        }
    }

    static async updateCheckOutImage(data){
        try {
            return PrismaClient.checkOut.update({
                where: {
                    id: data.checkOutId
                },
                data: {
                    fotoDiri: data.imageLink
                },
                select: {
                    id: true,
                    checkOutDate: true,
                    checkIn: {
                        select: {
                            statusApproval:true
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when updating table in database")
        }
    }

    static async findMany(data, userId){
        try {
            const startOfMonth = new Date(data.month) 
            const endOfMonth = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth()+1)
            const skip = (data.page - 1) * data.size;
            const records = await PrismaClient.presensi.findMany({
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
                    },
                    checkOut: {
                        select: {
                            checkOutDate: true,
                        }
                    }
                },
                orderBy: {
                    presensiDate: 'desc',
                },
                take: data.size,
                skip: skip
            })
            
            const count = await PrismaClient.presensi.count({
                where: {
                    userId,
                    presensiDate: {
                        gte: data.month != null ? startOfMonth : undefined,
                        lt: data.month != null ? endOfMonth : undefined
                    }
                }
            })
            return {result: records, count: count};
            
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findToday(data){ //find oldest and active check in record for today
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
        
        //find active check in first
        let presensi = await PrismaClient.presensi.findFirst({
            where: {
                userId: data.userId,
                presensiDate: {
                    gte: startOfDay,
                    lt: endOfDay
                },
                checkOut: null
            },
            select: {
                presensiDate: true,
                checkOut: {
                    select: {
                        checkOutDate: true,
                    }
                },
                shift: {
                    select: {
                        site: {
                            select: {
                                name: true,
                            }
                        }
                    }
                },
                statusPresensi: true,
            },
            orderBy: {
                presensiDate: 'asc'
            }
        })

        //if no active check in then grab latest check in for today
        if (!presensi) {
            presensi = await PrismaClient.presensi.findFirst({
                where: {
                    userId: data.userId,
                    presensiDate: {
                        gte: startOfDay,
                        lt: endOfDay
                    },
                },
                select: {
                    presensiDate: true,
                    checkOut: {
                        select: {
                            checkOutDate: true,
                        }
                    },
                    shift: {
                        select: {
                            site: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    },
                    statusPresensi: true,
                },
                orderBy: {
                    presensiDate: 'desc'
                }
            })
        }

        return presensi;
    }
        

    static async findById(data){
        try {
            return await PrismaClient.presensi.findUnique({
                where:{
                    id:data.presensiId
                },
                include:{
                    checkOut: {
                        select: {
                            checkOutDate: true,
                            fotoDiri: true,
                            latitude: true,
                            longitude: true,
                        }
                    },
                    shift: {
                        select:{
                            site: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    approver: {
                        select: {
                            username: true
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when finding record by id in database")
        }
    }
}