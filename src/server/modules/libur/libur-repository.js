import PrismaClient from "../../db/db.js"
import { ResponseError } from "@/src/lib/response-error.js";

export class LiburRepository {

    static async create(data, userId){
        try {
            const start = new Date(data.start)
            const end = new Date(data.end)
            return await PrismaClient.libur.create({
                data: {
                    liburDate: start,
                    liburEnd: end,
                    reason: data.reason,
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                },
                select: {
                    id: true,
                    liburDate: true,
                    liburEnd: true,
                    reason: true,
                    user: {
                        select: {
                            username: true,
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, error.message)
        }
    }

    static async getMine(data, userId){
        try {
            const skip = (data.page - 1) * data.size;
            const [records, count] = await PrismaClient.$transaction([
                PrismaClient.libur.findMany({
                    where: {
                        userId
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.libur.count({
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
                PrismaClient.libur.findMany({
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
                PrismaClient.libur.count({
                    where: {
                        liburStatus: "APPROVED"
                    }
                }),
                PrismaClient.libur.count({
                    where: {
                        liburStatus: "PENDING"
                    }
                }),
                PrismaClient.libur.count({
                    where: {
                        liburStatus: "REJECTED"
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
            return await PrismaClient.libur.findUnique({
                where:{
                    id: data.liburId
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to grab record from database")
        }
    }

    static async approve(data){
        try {
            return await PrismaClient.libur.update({
                where:{
                    id: data.liburId
                },
                data: {
                    liburStatus: "APPROVED"
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to update record in database")
        }
    }

    static async reject(data){
        try {
            return await PrismaClient.libur.update({
                where:{
                    id: data.liburId
                },
                data: {
                    liburStatus: "REJECTED"
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to update record in database")
        }
    }
}