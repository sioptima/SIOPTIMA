import { ResponseError } from "@/src/lib/response-error.js";
import PrismaClient from "../../db/db.js"
import { daysOfWeek } from "../../utils/helper.js";

export class ShiftRepository {

    static async create(data, users){
        try {
            const {date, time, end} = data
            const shiftDate = new Date(date+","+time)
            const shiftEnd = new Date(date+","+end)
            const totalHour = (shiftEnd - shiftDate)/(1000*60*60)
            
            const shift = await PrismaClient.jadwalShift.create({
                data: {
                    shiftDate,
                    shiftEnd,
                    site: {
                        connect: {
                            id: data.siteId
                        }
                    },
                    user: {
                        connect: users.map(user => ({
                            id: user.id
                        }))
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
            
            //update each user weekly work hour
            const weekDates = daysOfWeek(new Date(shiftDate.getFullYear(), shiftDate.getMonth(), shiftDate.getDate())); // array of 7 days 

            const upsertPromises = users.map((user) => {
                return PrismaClient.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        jamKerja: {
                            upsert: {
                                create: {
                                    totalHours: totalHour,
                                    weekEnd: weekDates[6],
                                    weekStart: weekDates[0]
                                },
                                where: {
                                    weekStart_userId: {
                                        userId: user.id,
                                        weekStart: weekDates[0],
                                    }
                                },
                                update: {
                                    totalHours: {
                                        increment: totalHour
                                    }
                                }
                            }
                        }
                    }
                })
              });
              
            await PrismaClient.$transaction(upsertPromises);

            return shift
        } catch (error) {
            throw new ResponseError(500, error.message);
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
                    user: {
                        every: {
                            id: data.userId
                        }
                    },
                    presensi: null
                },
                select: {
                    shiftDate:true,
                    id: true,
                    site: {
                        select: {
                            address: {select: {
                                latitude: true,
                                longitude: true,
                            }}
                        }
                    }
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