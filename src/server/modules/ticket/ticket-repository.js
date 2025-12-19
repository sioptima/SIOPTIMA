import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"

export class TicketRepository {

    static async createTicket(data){
        try {
            const site = await PrismaClient.site.findUnique({
                where: {
                    name: data.request.site,
                },
                select: {
                    id: true,
                }
            })

            if (site){
                return await PrismaClient.ticket.create({
                    data: {
                        site: {connect: {id: site.id}},
                        kategori: data.request.category,
                        deskripsi: data.request.description,
                        prioritas: data.request.priority,
                        judul: data.request.title,
                        user: {connect: {id: data.userId}},
                        gambar: data.imageLink
                    },
                    select: {
                        id: true,
                        judul: true,
                        prioritas: true,
                        status: true,
                        createdAt: true,
                        gambar: true,
                    }
                })
            } 
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to create ticket in database")
        }
    }

    static async getMyTickets(data){
        try {
            const skip = (data.parameter.page - 1) * data.parameter.size;
            const [tickets, count] = await PrismaClient.$transaction([
                PrismaClient.ticket.findMany({
                    where: {
                        userId: data.userId,
                        status: data.parameter.status,
                        prioritas: data.parameter.priority,
                        judul: {
                            contains: data.parameter.search,
                            mode: "insensitive",
                        },
                    },
                    include: {
                        user: {select: {
                            username:true,
                            profile: {select: {
                                name: true,
                            }}
                        }},
                        site: {select: {name: true,}},
                        
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    take: data.parameter.size,
                    skip: skip
                }),
                PrismaClient.ticket.count({
                    where: { // same query parameter as above
                        userId: data.userId,
                        status: data.parameter.status,
                        prioritas: data.parameter.priority,
                        judul: {
                            contains: data.parameter.search,
                            mode: "insensitive",
                        },
                    }
                })
            ])

            return {tickets, count}
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to retrieve tickets from database")
        }
    }

    static async getById(data){
        try {
            return await PrismaClient.ticket.findUnique({
                where: {
                    id: data.ticketId
                },
                include: {
                    user: {select: {
                        username: true,
                        profile: {select: {
                            name: true,
                        }}
                    }},
                    site: {select: {name: true,}},
                    feedback: {include: {
                        user: {
                            select: {
                                username: true,
                                profile: {select: {
                                    name: true,
                                }}
                    }}}},
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to retrieve ticket from database")
        }
    }

    static async getAll(data){
        try {
            const skip = (data.page - 1) * data.size;
            

            const [tickets, count] = await PrismaClient.$transaction([
                PrismaClient.ticket.findMany({ 
                    select:{
                        id: true,
                        user: {
                            select: {
                                id: true,
                                username: true,
                                profile: {
                                    select: {name: true}
                                },
                            }
                        },
                        site: {select: { name: true }},
                        deskripsi: true,
                        createdAt: true,
                        status: true,
                        prioritas: true,
                        kategori: true,
                        gambar: true,
                        feedback: {
                            select: {
                                feedback: true,
                                user: {select: {
                                    username: true,
                                    profile: {select: {name: true}}
                                }}
                            }
                        },
                        resolvedAt: true,
                        
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.ticket.count({})
            ])
            
            return {tickets, count};
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to retrieve list of tickets")
        }
    }

    static async respond({ticketId, feedback, ticketStatus, resolverId}){
        try {
            const ticket = await PrismaClient.ticket.count({where:{id: ticketId}})
            if(!ticket){throw new ResponseError(500, "")}
            
            let resolvedAt
            if(ticketStatus === "APPROVED"){
                resolvedAt = new Date()
            }
            const updatedTicket = await PrismaClient.ticket.update({
                where: {
                    id: ticketId
                },
                
                data: {
                    status: ticketStatus,
                    ...(resolvedAt && {resolvedAt}),
                    feedback: {
                        upsert: {
                            where: {
                                ticketId: ticketId,
                            },
                            update: {
                                feedback,
                            },
                            create: {
                                feedback,
                                user: {
                                    connect: {id: resolverId}
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    status: true,
                    resolvedAt: true,
                    feedback: {select: {
                        feedback: true,
                        updatedAt: true,
                        user: {
                            select: {
                                username: true,
                                profile: { select: {name: true}}
                            }
                        }
                    }},
                    userId: true
                }
            })

            return updatedTicket
        } catch (error) {
            throw new ResponseError(500, error)
        }
    }
}