import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"
import { daysOfWeek, timeSince } from "../../utils/helper.js";

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

    static async findMultiple(data){
        try {
            return await PrismaClient.user.findMany({
                where: { 
                    id: { in: data.userId }
                },
                select: {
                    id: true,
                }
            });
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch multiple user")
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

    static async whoAmI(data){
        try {
            const targetDate = new Date()
            const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())
            const endOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()+1)
            return await PrismaClient.user.findUnique({
                where: { 
                    id: data.userId
                },
                select: {
                    id: true,
                    username: true,
                    status: true,
                    profile: {select:{
                        name: true,
                        email: true,
                        phone: true,
                        address: true,
                    }},
                    role: true,
                    shift: {
                        where: {
                            shiftDate: {
                                gte: startOfDay,
                                lt: endOfDay
                            },
                            presensi: {
                                checkOut: null
                            }
                        },
                        take: 1,
                        orderBy: {shiftDate: "asc"},
                        select: {
                            site: {select: {name: true}},
                            shiftDate:true,
                            shiftEnd:true,
                        }
                    },
                    createdAt: true,
                    activity: {
                        take: 1,
                        orderBy: {createdAt: "desc"},
                        select:{createdAt:true}
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
                    activity: {
                        create: {
                            action: "-",
                            type: "auth",
                            title: "Account registered"
                        }
                    },
                    ...(data.status && {status: data.status}), //register with optional field
                    ...(data.siteName && {
                        sites: {
                            connect: {
                                name: data.siteName
                            }
                        },
                    }),
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
            throw new ResponseError(500, "Failed when trying to register user in database")
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

            //find week range
            const targetDate = new Date();//today
            const weekDates = daysOfWeek(new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())); // array of 7 days 
            const weekStart = weekDates[0];
            const weekEnd = weekDates[6];

            const [users, total, adminCount, operatorCount, hrdCount] = await PrismaClient.$transaction([
                PrismaClient.user.findMany({
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
                        },
                        jamKerja: {
                            where: {
                                weekStart: weekStart,
                                weekEnd: weekEnd
                            },
                            select: {
                                totalHours: true,
                            }
                        }
                    },
                    orderBy: {
                            createdAt: 'desc',
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.user.count(),
                PrismaClient.user.count({where: {role: {name: "ADMIN"}}}),
                PrismaClient.user.count({where: {role: {name: "OPERATOR"}}}),
                PrismaClient.user.count({where: {role: {name: "HRD"}}})
            ]);
    
            return {total, users, adminCount, operatorCount, hrdCount};
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch users in database")
        }
    }

    static async getCount(){
        try {
            const [adminCount, operatorCount, hrdCount, activeCount, lastActiveDate] = await PrismaClient.$transaction([
                PrismaClient.user.count({where: {role: {name: "ADMIN"}}}),
                PrismaClient.user.count({where: {role: {name: "OPERATOR"}}}),
                PrismaClient.user.count({where: {role: {name: "HRD"}}}),
                PrismaClient.user.count({where: {status: "ACTIVE"}}),
                PrismaClient.activity.findFirst({orderBy: {createdAt: 'desc'}, select: {createdAt: true}}),
            ]);

            const lastActive = timeSince(lastActiveDate.createdAt);

            return {adminCount, operatorCount, hrdCount, activeCount, lastActive};
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch users count")
        }
    }

    static async findByRole(data){
        try {
            const skip = (data.page - 1) * data.size;

            //find week range
            const targetDate = new Date();//today
            const weekDates = daysOfWeek(new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())); // array of 7 days 
            const weekStart = weekDates[0];
            const weekEnd = weekDates[6];

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
                            phone: true,
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
                    },
                    jamKerja: {
                        where: {
                            weekStart,
                            weekEnd,
                        },
                        select: {
                            totalHours: true,
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
            throw new ResponseError(500, "Failed when trying to fetch user list")
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

    static async update(data){
        try {
            return await PrismaClient.user.update({
                where: {
                    id: data.userId
                },
                data: {
                    ...(data.name || data.email //if any of these data exist then update profile
                        ? 
                        {
                            profile: {
                                upsert: {
                                    create: {
                                        ...(data.name && {name: data.name}),
                                        ...(data.email && {email: data.email}),
                                    },
                                    update: {
                                        ...(data.name && {name: data.name}),
                                        ...(data.email && {email: data.email}),
                                    },
                                },
                            },
                        } : {} // do nothing if data doesnt exist
                    ),
                    ...(data.role && {
                        role: {
                            connect: {
                                name: data.role
                            }
                        },
                    }),
                    ...(data.site && {
                        sites: {
                            connect: {
                                name: data.site
                            }
                        },
                    }),
                    ...(data.status && {status: data.status})
                },
                include: {
                    profile: {
                        select: {
                            name: true,
                            email: true,
                        },
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
                        select: {
                            createdAt: true,
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to update user in database")
        }
    }

    static async hardDelete(data){
        try {
            await PrismaClient.user.delete({
                where: {
                    id: data.userId
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to delete user")
        }
    }

    static async getAssignedSites(data){
        try {
            return await PrismaClient.site.findMany({
                where: {
                    users: {
                        every: {
                            id: data.userId
                        }
                    }
                },
                select: {
                    address: {
                        select: {
                            city: true,
                            address: true,
                            province: true,
                        }
                    },
                    status: true,
                    name: true,
                    id: true,
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying for assigned sites in db")
        }
    }

    static async countOperator(){
        try {
            return await PrismaClient.user.count({
                where: {
                    role: {
                        name: "OPERATOR"
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying for total operator")
        }
    }
}