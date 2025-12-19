import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"

export class ReportRepository {

    static async create(data){
        try {
            return await PrismaClient.laporan.create({
                data: {
                    flowRate: data.flowRate,
                    ampere: data.ampere,
                    volt: data.volt,
                    TDS: data.tds,
                    EC: data.ec,
                    notes: data.notes,
                    pH: data.pH,
                    agitatorStatus: data.agitatorStatus,
                    outFilterStatus: data.outFilterStatus,
                    settleStatus: data.settleStatus,
                    laporanDate: data.laporanDate,
                    user: {
                        connect: {
                            id: data.userId,
                        },
                    },
                    site: {
                        connect: {
                            id: data.siteId
                        }
                    }
                },
                select: {
                    id: true,
                    laporanDate: true,
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when writing to database")
        }
    }

    static async update(data){
        try {
            return await PrismaClient.laporan.update({
                where: {
                    id: data.reportId,
                },
                data: {
                    fotoSampel: data.imageLink
                },
                include: {
                    user: {
                        select: {
                            profile: {
                                select: {name: true,}
                            }
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when updating in database")
        }
    }

    static async findMonthly(data){
        try {
            const skip = (data.page - 1) * data.size;
            
            const date = new Date()
            const startOfMonth = new Date(date.getFullYear(), date.getMonth());
            const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1);

            const [reports, count] = await PrismaClient.$transaction([
                PrismaClient.laporan.findMany({
                    where:{
                        laporanDate: {gte: startOfMonth, lt: endOfMonth}
                    },
                    include:{
                        user: {
                            select: {
                                username: true,
                                profile: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: {
                        laporanDate: 'desc',
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.laporan.count({})
            ])
            
            return {result: reports, count: count};
            
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch weekly report")
        }
    }

    static async findAllByUserId(data, userId){
        try {
            const skip = (data.page - 1) * data.size;
            const query = {
                where: {
                    userId,
                    laporanStatus: data.status
                },
                include:{
                    user: {
                        select: {
                            username: true,
                        }
                    }
                },
                orderBy: {
                        createdAt: 'desc',
                },
                take: data.size,
                skip: skip
            }
            
            const [reports, count] = await PrismaClient.$transaction([
                PrismaClient.laporan.findMany(query),
                PrismaClient.laporan.count({where: query.where})
            ]);

            return {result: reports, count: count};
            
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch report in database")
        }
    }

    static async findAllByUserIdNoPaging(userId){
        try {
            const query = {
                where: {
                    userId
                },
                orderBy: {
                        createdAt: 'desc',
                },
            }

            const [reports, count] = await PrismaClient.$transaction([
                PrismaClient.laporan.findMany(query),
                PrismaClient.laporan.count({where: query.where})
            ]);

            return {result: reports, count: count};
        } catch (error){
            throw new ResponseError (500, "Failed when querying in database")
        }
    }

    static async findById(id){
        try {
            const report = await PrismaClient.laporan.findUnique({
                where:{
                    id
                },
                include: {
                    user: {
                        select: {
                            username: true,
                            profile: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    }
                }
            })

            return report;
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findToday(){
        try {
            const date = new Date();
            const startOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate())
            const endOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1)
            const report = await PrismaClient.laporan.findMany({
                where:{
                    laporanDate: {gte:startOfDay, lt: endOfDay}
                },
                include:{
                    user: {
                        select: {
                            username: true,
                            profile: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    laporanDate: 'desc'
                }
            })
            return report;
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async approve(reportId){
        try {
            return await PrismaClient.laporan.update({
                where: {
                    id: reportId,
                },
                data: {
                    laporanStatus: "APPROVED"
                },
                select: {
                    id: true,
                    laporanStatus: true,
                    userId: true,
                    laporanDate: true,
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async reject(reportId){
        try {
            return await PrismaClient.laporan.update({
                where: {
                    id: reportId,
                },
                data: {
                    laporanStatus: "REJECTED"
                },
                select: {
                    id: true,
                    laporanStatus: true,
                    userId: true,
                    laporanDate: true,
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

}