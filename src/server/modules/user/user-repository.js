import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"

export class UserRepository {

    static async findByUsername(username){
        try {
            return await PrismaClient.user.findUnique({
                where: { 
                    username
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findById(data){
        try {
            return await PrismaClient.user.findUnique({
                where: { 
                    id: data.userId
                },
                include: {
                    role: {
                        select: {
                            name: true,
                        }
                    },
                    sites: {
                        select: {
                            name: true,
                        }
                    },
                    profile: {
                        select: {
                            name: true,
                            email: true,
                        }
                    },
                    activity: {
                        take: 1,
                        orderBy: {
                            createdAt: "desc"
                        },
                        select: {
                            createdAt: true,
                        }
                    }
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }
    
    static async create(data){
        try {
            return await PrismaClient.user.create({
                data: { 
                    username: data.username,
                    password: data.password,
                    roleId: data.role,
                    ...(data.status && {status: data.status}), //register with optional field
                    ...(data.siteName && {
                        sites: {
                            connect: {
                                name: data.siteName
                            }
                        },
                    ...(data.email || data.name 
                        ?
                        {
                            profile: {
                                create: {
                                    ...(data.email && { email: data.email }),
                                    ...(data.name && {name: data.name})
                                }
                            }
                        }
                        : {}),
                    activity: {
                        create: {
                            action: "Account register"
                        }
                    }
                    })
                },
                include: {
                    profile: {
                        select: {
                            name: true,
                            email: true,
                        }
                    },
                    role: {
                        select: {
                            name: true,
                        }
                    },
                    sites: {
                        select: {
                            name: true,
                        }
                    },
                    activity: {
                        take: 1,
                        orderBy: {
                            createdAt: "desc"
                        },
                        select:{
                            createdAt: true,
                        }
                    }
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when writing in database")
        }
    }

    static async getRoleByName(name) {
        try {
            return await PrismaClient.role.findUnique({
                where: {
                    name
                },
                
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async getRoleById(id) {
        try {
            return await PrismaClient.role.findUnique({
                where: {
                    id
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findAll(data){
        try {
            const skip = (data.page - 1) * data.size;
            const users = await PrismaClient.user.findMany({
                include: {
                    profile: {
                        select: {
                            name: true,
                            email: true,
                        }
                    },
                    role: {
                        select: {
                            name: true,
                        }
                    },
                    sites: {
                        select: {
                            name: true,
                        }
                    },
                    activity: {
                        take: 1,
                        orderBy: {
                            createdAt: "desc"
                        },
                        select:{
                            createdAt: true,
                        }
                    }
                },
                orderBy: {
                        createdAt: 'desc',
                },
                take: data.size,
                skip: skip
            })
    
            const total = await PrismaClient.user.count()
            return {total, users};
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async findByRole(data){
        try {
            const skip = (data.page - 1) * data.size;
            const users = await PrismaClient.user.findMany({
                where: {
                    role: {
                        name: data.roleName
                    }
                },
                include: {
                    profile: {
                        select: {
                            name: true,
                            email: true,
                        }
                    },
                    role: {
                        select: {
                            name: true,
                        }
                    },
                    sites: {
                        select: {
                            name: true,
                        }
                    },
                    activity: {
                        take: 1,
                        orderBy: {
                            createdAt: "desc"
                        },
                        select:{
                            createdAt: true,
                        }
                    }
                },
                orderBy: {
                        createdAt: 'desc',
                },
                take: data.size,
                skip: skip
            })
    
            const total = await PrismaClient.user.count({
                where:{
                    role: {
                        name: data.roleName
                    }
                }
            })
            return {total, users};
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }

    static async assignUser(data){
        try {
            const user = await PrismaClient.user.update({
                where: {
                    id: data.userId
                },
                data: {
                    sites: {
                        connect: {
                            id: data.siteId   
                        }
                    }
                },
                select: {
                    username: true,
                    sites: {
                        select: {
                            name: true,
                        }
                    }
                }
            })
            return user;
        } catch (error) {
            throw new ResponseError(500, "Failed when connecting table in database")
        }
    }

    static async unassignUser(data){
        try {
            const user = await PrismaClient.user.update({
                where: {
                    id: data.userId
                },
                data: {
                    sites: {
                        disconnect: {
                            id: data.siteId   
                        }
                    }
                },
                select: {
                    username: true,
                    sites: {
                        select: {
                            name: true,
                        }
                    }
                }
            })
            return user;
        } catch (error) {
            throw new ResponseError(500, "Failed when disconnecting table in database")
        }
    }

    static async isAssigned(data){
        try {
            return await PrismaClient.user.findUnique({
                where: {
                    id: data.userId
                },
                select: {
                    sites: {
                        where: {
                            id: data.siteId
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying in database")
        }
    }
}