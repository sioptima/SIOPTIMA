import PrismaClient from "../../db/db.js"
import { ResponseError } from "@/src/lib/response-error.js";
import { daysOfWeek } from "../../utils/helper.js";

export class DashboardRepository {
    static async countAssignedSite(data){
        try {
            return await PrismaClient.site.count({
                where:{
                    users: {
                        every: {
                            id: data.userId
                        }
                    }
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying for assigned sites")
        }
    }

    static async reportSummary(data){
        try {
            const userId = data.userId;
            const [approved, pending, rejected, total] = await PrismaClient.$transaction([
                PrismaClient.laporan.count({where: {
                    userId,
                    laporanStatus: "APPROVED",
                },
                }),
                PrismaClient.laporan.count({where: {
                    userId,
                    laporanStatus: "PENDING",
                },
                }),
                PrismaClient.laporan.count({where: {
                    userId,
                    laporanStatus: "REJECTED",
                },
                }),
                PrismaClient.laporan.count({where: {userId}})
            ]);

            return {approved, pending, rejected, total};
        } catch (error){
            throw new ResponseError (500, "Failed when querying in database")
        }
    }

    //may need to redo logic
    //find a report for each day of users current site 
    static async findThisWeekByUserId(data){
        try {
            const date = new Date()
            const weekDates = daysOfWeek(new Date(date.getFullYear(), date.getMonth(), date.getDate())); // array of 7 days

            const endOfWeek = new Date(
                weekDates[6].getFullYear(),
                weekDates[6].getMonth(),
                weekDates[6].getDate() + 1
            );

            const ranges = weekDates.map((d, i) => ({
                start: d,
                end: i === 6 ? endOfWeek : weekDates[i + 1]
            }));

            const results = await Promise.all(
                ranges.map(r => 
                    PrismaClient.laporan.findFirst({
                        where: {
                            laporanDate: { gte: r.start, lt: r.end },
                            userId: data.userId,
                            site: {id: data.siteId}
                        },
                        select: {
                            EC: true,
                            TDS: true,
                            pH: true,
                        },
                        orderBy: { laporanDate: "desc" }
                    })
                )
            );

            const [Mon, Tue, Wed, Thu, Fri, Sat, Sun] = results;

            return { Mon, Tue, Wed, Thu, Fri, Sat, Sun };
        } catch (error) {
            throw new ResponseError(500, error.message)
        }
    }

    //find upcoming shift and their count(used for counting attendance rate)
    static async shiftSummary(data){
        try {
            const date = new Date()
            const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate())

            const userId = data.userId
            // find shift that has active check in or upcoming shift
            // find shift that has active check in
            const queryActive = {
                where: {
                    userId,
                    presensi: {
                        checkOut: null,
                    } 
                },
                select: {
                    shiftDate:true,
                    site: {
                        select: {
                            name: true,
                            id: true,
                        }
                    },
                    id: true,
                },
                orderBy: {
                    shiftDate: 'asc'
                }
            }

            //find upcoming shift
            const queryUpcoming = {
                    where: { 
                        userId,
                        shiftDate: {
                            gte: startOfDay, 
                        },
                        presensi: null, 
                    },
                    select: {
                        shiftDate:true,
                        site: {
                            select: {
                                name: true
                            }
                        },
                        id: true,
                    },
                    orderBy: {
                        shiftDate: 'asc'
                    }
                }
            

            const [activeshift, upcomingShift, checkedInShift, missedShift] = await PrismaClient.$transaction([
                PrismaClient.jadwalShift.findFirst(queryActive),
                PrismaClient.jadwalShift.findFirst(queryUpcoming),
                PrismaClient.jadwalShift.count({
                    where: {
                        userId,
                        presensi: { isNot: null },
                        shiftDate: {
                            lte: date
                        }
                    }
                }),
                PrismaClient.jadwalShift.count({
                    where: {
                        userId,
                        presensi: null,
                        shiftDate: {
                            lte: date
                        } 
                    }
                }),
            ])

            let nextShift;
            if(!activeshift){
                nextShift = upcomingShift;
            } else {
                nextShift = activeshift;
            }

            return {nextShift, checkedInShift, missedShift}
        } catch (error) {
            throw new ResponseError(500, error.message)
        }
    }

    static async getActivity(data) {
        try {
            return await PrismaClient.activity.findMany({
                where: {
                    userId: data.userId
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when querying for activity in database")
        }
    }

    static async attendancesSummary(){
        try {
            // get weekly attendance information
            const date = new Date()
            //get day of week(number)
            //0 on  getDay() is Sunday, we want 0 as Monday
            const numberdayweek = [6,0,1,2,3,4,5];
            const day = numberdayweek[date.getDay()] 
            const weekDates = daysOfWeek(new Date(date.getFullYear(), date.getMonth(), date.getDate())); // array of 7 days

            const endOfWeek = new Date(
                weekDates[6].getFullYear(),
                weekDates[6].getMonth(),
                weekDates[6].getDate() + 1
            );

            //range will not include upcoming day; +1 so each day has a end of day time
            const ranges = weekDates.slice(0,day+1).map((d, i) => ({
                start: d,
                end: i === 6 ? endOfWeek : weekDates[i + 1]
            }));

            const onTime = await Promise.all(
                ranges.map(r => 
                    PrismaClient.presensi.count({
                        where: {
                            presensiDate: { gte: r.start, lt: r.end },
                            statusPresensi: "ONTIME",
                        }
                    })
                )
            );

            const late = await Promise.all(
                ranges.map(r => 
                    PrismaClient.presensi.count({
                        where: {
                            presensiDate: { gte: r.start, lt: r.end },
                            statusPresensi: "LATE",
                        }
                    })
                )
            );

            const noShow = await Promise.all(
                ranges.map(r =>
                    PrismaClient.jadwalShift.count({
                        where: {
                            shiftDate: { gte: r.start, lt: r.end },
                            presensi: null,
                        }
                    })
                )
            );

            //get shifts both with and without attendance information to calculate attendance rate
            //also get attendances that are PENDING  
            const startOfMonth = new Date(date.getFullYear(), date.getMonth());
            const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1);
            const [checkedIn, noCheckIns ,pendingCount] = await PrismaClient.$transaction([
                PrismaClient.jadwalShift.count({where: {
                    shiftDate: {gte: startOfMonth, lt: endOfMonth},
                    presensi: { isNot: null}
                }}),
                PrismaClient.jadwalShift.count({where: {
                    shiftDate: {gte: startOfMonth, lt: endOfMonth},
                    presensi: null
                }}),
                PrismaClient.presensi.count({
                    where: {
                        statusApproval: "PENDING"
                    }
                })
            ]) 

            const attendanceRate = (checkedIn/(checkedIn+noCheckIns))*100

            //get count of operator that checked in today
            const presentToday = onTime[day]; 
            const lateToday = late[day];

            return { onTime, late, noShow, pendingCount, attendanceRate, presentToday, lateToday };
        } catch (error) {
            throw new ResponseError(500, "Failed when querying for attendances information")
        }
    }

    static async adminSummary(){
        try {
            const date = new Date();
            const startOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate())
            const endOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1)
            const [activeSite, maintenanceSite, inactiveSite, activeOperator, approvedReport, pendingReport, rejectedReport] = 
                await PrismaClient.$transaction([
                    PrismaClient.site.count({where: {status:"ACTIVE"}}),
                    PrismaClient.site.count({where: {status:"MAINTENANCE"}}),
                    PrismaClient.site.count({where: {status:"INACTIVE"}}),
                    PrismaClient.user.count({where: {role: {name:"OPERATOR"},status:"ACTIVE"}}),
                    PrismaClient.laporan.count({where: {
                        laporanStatus:"APPROVED",
                        laporanDate: {gte: startOfDay, lt:endOfDay}
                    }}),
                    PrismaClient.laporan.count({where: {
                        laporanStatus:"PENDING",
                        laporanDate: {gte: startOfDay, lt:endOfDay}
                    }}),
                    PrismaClient.laporan.count({where: {
                        laporanStatus:"REJECTED",
                        laporanDate: {gte: startOfDay, lt:endOfDay}
                    }}),
                ])
            return {activeSite, maintenanceSite, inactiveSite, activeOperator, approvedReport, pendingReport, rejectedReport}
        } catch (error) {
            throw new ResponseError(500, "Failed when retrieving dashboard information from database")
        }
    }

    static async reportStatus(){
        try {
            const date = new Date();
                const startOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate())
                const endOfDay = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1)
                const [approvedReport, pendingReport, rejectedReport] = 
                    await PrismaClient.$transaction([
                        PrismaClient.laporan.count({where: {
                            laporanStatus:"APPROVED",
                            laporanDate: {gte: startOfDay, lt:endOfDay}
                        }}),
                        PrismaClient.laporan.count({where: {
                            laporanStatus:"PENDING",
                            laporanDate: {gte: startOfDay, lt:endOfDay}
                        }}),
                        PrismaClient.laporan.count({where: {
                            laporanStatus:"REJECTED",
                            laporanDate: {gte: startOfDay, lt:endOfDay}
                        }}),
                    ])
                return {approvedReport, pendingReport, rejectedReport}
        } catch (error) {
            throw new ResponseError(500, "Failed when retrieving report status distribution from database")
        }
    }
}