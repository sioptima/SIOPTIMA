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
                            username: true,
                            id: true,
                        }
                    },
                    site: {
                        select: {
                            name: true,
                            id:true
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
            throw new ResponseError(500, "Failed when trying to create shift");
        }
    }

    static async update(data, users, shiftId){
        try {
            const {date, time, end} = data
            const shiftDate = new Date(date+","+time)
            const shiftEnd = new Date(date+","+end)
            const totalHour = (shiftEnd - shiftDate)/(1000*60*60)

            
            const oldShift = await PrismaClient.jadwalShift.findUnique({
                where: {
                    id: shiftId
                },
                select: {
                    shiftDate: true,
                    shiftEnd: true
                }
            })
            if(!oldShift){throw new ResponseError(400, "")}
            const oldTotalHour = (oldShift.shiftDate - oldShift.shiftEnd)/(1000*60*60)
            //find week range
            const oldTargetDate = oldShift.shiftDate
            const oldWeekDates = daysOfWeek(new Date(oldTargetDate.getFullYear(), oldTargetDate.getMonth(), oldTargetDate.getDate())); // array of 7 days 

            //update each user weekly work hour
            const oldUpsertPromises = users.map((user) => {
                return PrismaClient.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        jamKerja: {
                            update: {
                                where: {
                                    weekStart_userId: {
                                        userId: user.id,
                                        weekStart: oldWeekDates[0],
                                    }
                                },
                                data: {
                                    totalHours: {
                                        decrement: oldTotalHour
                                    }
                                }
                            }
                        }
                    }
                })
              });
              
            await PrismaClient.$transaction(oldUpsertPromises);


            //find week range
            const targetDate = shiftDate
            const weekDates = daysOfWeek(new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())); // array of 7 days 

            const shift = await PrismaClient.jadwalShift.update({
                where: {
                    id: shiftId
                },
                data: {
                    shiftDate,
                    shiftEnd,
                    site: {
                        connect: {
                            id: data.siteId
                        }
                    },
                    user: {
                        set: [],
                        connect: users.map(user => ({
                            id: user.id
                        }))
                    }
                },
                include: {
                    user: {
                        select: {
                            username: true,
                            id: true,
                        }
                    },
                    site: {
                        select: {
                            name: true,
                            id:true
                        }
                    }
                }
            });
            
            //update each user weekly work hour
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

            return {shift, oldShift}
        } catch (error) {
            throw new ResponseError(500, "Failed when updating shift information");
        }
    }

    static async hardDelete(shiftId){
        try {
            const oldShift = await PrismaClient.jadwalShift.findUnique({
                where: {
                    id: shiftId
                },
                select: {
                    shiftDate: true,
                    shiftEnd: true,
                    user: {select: {
                        id: true,
                    }}
                }
            })
            if(!oldShift){throw new ResponseError(400, "")}
            const oldTotalHour = (oldShift.shiftDate - oldShift.shiftEnd)/(1000*60*60)
            //find week range
            const oldTargetDate = oldShift.shiftDate
            const oldWeekDates = daysOfWeek(new Date(oldTargetDate.getFullYear(), oldTargetDate.getMonth(), oldTargetDate.getDate())); // array of 7 days 

            //update each user weekly work hour
            const oldUpsertPromises = oldShift.user.map((user) => {
                return PrismaClient.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        jamKerja: {
                            update: {
                                where: {
                                    weekStart_userId: {
                                        userId: user.id,
                                        weekStart: oldWeekDates[0],
                                    }
                                },
                                data: {
                                    totalHours: {
                                        decrement: oldTotalHour
                                    }
                                }
                            }
                        }
                    }
                })
              });
              
            await PrismaClient.$transaction(oldUpsertPromises);
            await PrismaClient.jadwalShift.delete({where:{id:shiftId}})
            return oldShift
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
                        some: {
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
            throw new ResponseError(500, "Failed when trying to find shift information in database")
        }
    }

    static async getAssignable(data){
        try {
            const skip = (data.page - 1) * data.size;

            const targetDate = new Date(data.date);
            const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())
            const endOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()+1)

            //find week range to be used for checking weekly hour
            const weekDates = daysOfWeek(new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())); // array of 7 days 
            const weekStart = weekDates[0];
            const weekEnd = weekDates[6];
            
            const query = {
                status: "ACTIVE",
            
                //NOT in Ijin on targetDate
                ijin: {
                  none: {
                      ijinDate: { gte: startOfDay, lt:endOfDay},
                  }
                },
            
                //NOT in Libur on targetDate
                libur: {
                  none: {
                      liburDate: { gte: startOfDay, lt: endOfDay },
                  }
                },
            
                //NOT assigned to a shift on targetDate
                shift: {
                  none: {
                      shiftDate: { gte: startOfDay, lt: endOfDay },
                  }
                },
            
                //Weekly hours < 40
                jamKerja: {
                  none: {
                    weekStart: weekStart,
                    weekEnd: weekEnd,
                    totalHours: { gt: 40 }
                  }
                }
              }

            const [eligibleOperators, count] = await PrismaClient.$transaction([
                PrismaClient.user.findMany({
                  where: query,
                  select: {
                    id: true,
                    username: true,
                    role: {select: {name: true}},
                    profile: {select: {name: true}}
                  },
                  take: data.size,
                  skip: skip
                }),
                PrismaClient.user.count({
                    where: query
                })

            ])

            return {eligibleOperators, count};
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch assignable operators")
        }
    }

    static async getByDate(data){
        try {
            const skip = (data.page - 1) * data.size;

            const date = new Date(data.date)
            const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate())
            const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)

            const [shifts, count] = await PrismaClient.$transaction([
                PrismaClient.jadwalShift.findMany({
                    where: {
                        shiftDate: {
                            gte: startOfDay,
                            lt: endOfDay,
                        }
                    },
                    include: {
                        site: {
                            select: {
                                name: true,
                            }
                        },
                        user: {
                            select: {
                                username: true,
                                profile: {
                                    select: {name: true,}
                                }
                            }
                        }
                    },
                    take: data.size,
                    skip: skip 
                }),
                PrismaClient.jadwalShift.count({
                    where: {
                        shiftDate: {
                            gte: startOfDay,
                            lt: endOfDay,
                        }
                    }
                })
            ])

            return {shifts, count};
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch shift by date")
        }
    }

    static async findAllByUserId(data, userId){
        try {
            const skip = (data.page - 1) * data.size;
            
            const date = new Date();
            const startOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate()-1)
            const [shifts, count] = await PrismaClient.$transaction([
                PrismaClient.jadwalShift.findMany({
                    where: {
                        user: {some: {
                            id: userId
                        }},
                        shiftDate: {gte: startOfDay}
                    },
                    select: {
                        id: true,
                        shiftDate: true,
                        shiftEnd: true,
                        site: {select:{name: true}}
                    },
                    orderBy: {
                        shiftDate: 'asc',
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.jadwalShift.count({
                where: {
                    user: {some: {
                        id: userId
                    }},
                    shiftDate: {gte: startOfDay}
                },})
            ]);
            return {result: shifts, count: count};
            
        } catch (error) {
            throw new ResponseError(500, error.message)
        }
    }

    static async getAll(data, userId){
        try {
            const skip = (data.page - 1) * data.size;
            
            const date = new Date();
            const startOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate())
            const [shifts, count] = await PrismaClient.$transaction([
                PrismaClient.jadwalShift.findMany({
                    where: {
                        shiftDate: {gte: startOfDay}
                    },
                    select: {
                        id: true,
                        shiftDate: true,
                        shiftEnd: true,
                        site: {select:{
                            name: true,
                            id: true,
                        }},
                        user: {
                            select: {
                                profile: {select: {name: true}},
                                username: true,
                                id:true
                            }
                        },
                    },
                    orderBy: {
                        shiftDate: 'asc',
                    },
                    take: data.size,
                    skip: skip
                }),
                PrismaClient.laporan.count({where: {userId}})
            ]);

            return {result: shifts, count: count};
            
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch shift list in database")
        }
    }
}