import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"

export class ProfileRepository {

    static async getCurrent(data){
        try {
            return await PrismaClient.profile.findUnique({
                where: {
                    userId: data.userId,
                },
                include: {
                    user: {
                        select: {
                            username: true,
                            status: true,
                            createdAt: true,
                            sites: {
                                select : {
                                    name: true,
                                }
                            },
                            role: {
                                select: {
                                    name: true,
                                }
                            },
                            profile: {
                                select: {
                                    address: {
                                        select: {address: true,}
                                    },
                                }
                            }
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to get current user profile data")
        }
    }

    static async update(data){
        try {
            return await PrismaClient.user.update({
                where: {
                    id: data.userId
                },
                data: {
                    ...(data.name || data.email || data.birthDate || 
                        data.image || data.address || data.city || data.province //if any of these data exist then update profile
                        ? 
                        {
                            profile: {
                                upsert: {
                                    create: {
                                        ...(data.name && {name: data.name}),
                                        ...(data.email && {email: data.email}),
                                        ...(data.birthDate && {birthDate: data.birthDate}),
                                        ...(data.image &&{image: data.image}),
                                        ...(data.phone &&{phone: data.phone}),
                                        ...(data.address || data.city || data.province ? {
                                            address: {
                                                create: {
                                                    ...(data.address && {address: data.address}),
                                                    ...(data.city && {city: data.city}),
                                                    ...(data.province && {province: data.province}),
                                                }
                                            }
                                            } : {})
                                    },
                                    update: {
                                        ...(data.name && {name: data.name}),
                                        ...(data.email && {email: data.email}),
                                        ...(data.image && {image: data.image}),
                                        ...(data.phone &&{phone: data.phone}),
                                        ...(data.birthDate && {birthDate: data.birthDate}),
                                        ...(data.address || data.city || data.province ? {
                                            address: {
                                                upsert: {
                                                    create: {
                                                        ...(data.address && {address: data.address}),
                                                        ...(data.city && {city: data.city}),
                                                        ...(data.province && {province: data.province}),
                                                    },
                                                    update: {
                                                        ...(data.address && {address: data.address}),
                                                        ...(data.city && {city: data.city}),
                                                        ...(data.province && {province: data.province}),
                                                    }
                                                }
                                            }
                                        } : {})
                                    },
                                },
                            },
                        } : {}),
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
                            address: true,
                            birthDate: true,
                            image: true,
                            phone: true,
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
            throw new ResponseError(500, "Failed when updating user in database")
        }
    }
}