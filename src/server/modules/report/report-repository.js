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
                select: {
                    id: true,
                    laporanDate: true,
                    laporanStatus: true,
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when updating in database")
        }
    }

    static async findAll(data){
        try {
            const skip = (data.page - 1) * data.size;
            
            const [reports, count] = await PrismaClient.$transaction([
                PrismaClient.laporan.findMany({  
                    select:{
                        id: true,
                        laporanDate: true,
                        siteName: true,
                        pH: true,
                        flowRate: true,
                        laporanStatus: true,
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
                            createdAt: 'desc',
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.laporan.count()
            ])
            
            return {result: reports, count: count};
            
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findAllByUserId(data, userId){
        try {
            const skip = (data.page - 1) * data.size;
            const query = {
                where: {
                    userId
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
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findAllNoPaging(userId){
        try {
            const reports = await PrismaClient.laporan.findMany({
                where: {
                    userId
                },
                orderBy: {
                        createdAt: 'desc',
                },
            })
            return reports
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
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }
}