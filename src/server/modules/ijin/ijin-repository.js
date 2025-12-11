import PrismaClient from "../../db/db.js"
import { ResponseError } from "@/src/lib/response-error.js";

export class IzinRepository {

    static async create(data, userId){
        try {
            const start = new Date(data.start)
            const end = new Date(data.end)
            return await PrismaClient.ijin.create({
                data: {
                    ijinDate: start,
                    ijinEnd: end,
                    reason: data.reason,
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                },
                select: {
                    id: true,
                    ijinDate: true,
                    ijinEnd: true,
                    reason: true,
                    user: {
                        select: {
                            username: true
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to write in database")
        }
    }

    static async getMine(data, userId){
        try {
            const skip = (data.page - 1) * data.size;
            const [records, count] = await PrismaClient.$transaction([
                PrismaClient.ijin.findMany({
                    where: {
                        userId
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.ijin.count({
                    where: {
                        userId //same as above
                    }
                })
            ])

            return {records, count}
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to grab records from database")
        }
    }

    static async getMany(data){
        try {
            const skip = (data.page - 1) * data.size;
            const [records, approved, pending, rejected] = await PrismaClient.$transaction([
                PrismaClient.ijin.findMany({
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        user: {
                            select: {
                                username: true,
                                profile: {select: {name: true}}
                            }
                        }
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.ijin.count({
                    where: {
                        ijinStatus: "APPROVED"
                    }
                }),
                PrismaClient.ijin.count({
                    where: {
                        ijinStatus: "PENDING"
                    }
                }),
                PrismaClient.ijin.count({
                    where: {
                        ijinStatus: "REJECTED"
                    }
                }),
            ])

            const count = approved+pending+rejected
            return {records, count, approved, pending, rejected}
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to read in database")
        }
    }

    static async getById(data){
        try {
            return await PrismaClient.ijin.findUnique({
                where:{
                    id: data.ijinId
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to grab record from database")
        }
    }

    static async approve(data){
        try {
            return await PrismaClient.ijin.update({
                where:{
                    id: data.ijinId
                },
                data: {
                    ijinStatus: "APPROVED"
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to update record in database")
        }
    }

    static async reject(data){
        try {
            return await PrismaClient.ijin.update({
                where:{
                    id: data.ijinId
                },
                data: {
                    ijinStatus: "REJECTED"
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to update in database")
        }
    }
}