import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"

export class ShiftRepository {

    static async create(data){
        try {
            const {date, time} = data
            const shiftDate = new Date(date+","+time)
            return await PrismaClient.jadwalShift.create({
                data: {
                    shiftDate,
                    site: {
                        connect: {
                            id: data.siteId
                        }
                    },
                    user: {
                        connect: {
                            id: data.userId
                        }
                    }
                },
                include: {
                    user: {
                        select: {
                            username: true
                        }
                    },
                    site: {
                        select: {
                            name: true
                        }
                    }
                }
            });  
        } catch (error) {
            throw new ResponseError(500, "Failed when writing to database");
        }
    }

    static async findToday(data){
        try {
            return await PrismaClient.jadwalShift.findFirst({
                where: {
                    shiftDate: {
                        gte: data.start, //find shift schedule that is the same day as the check-in's request
                        lt: data.end
                    },
                    userId: data.userId,
                    presensi: null
                },
                select: {
                    shiftDate:true,
                    id: true,
                },
                orderBy: {
                    shiftDate: 'asc'
                }
            })
        } catch (error) {
            throw new ResponseError(500, error.message)
        }
    }
}