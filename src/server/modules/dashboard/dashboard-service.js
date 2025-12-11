import { getUser } from "../../utils/auth";
import { labelFuture } from "../../utils/helper";
import { SiteRepository } from "../site/site-repository";
import { DashboardRepository } from "./dashboard-repository";
import { UserRepository } from "../user/user-repository";

export class DashboardService {
    
    static async operatorSummary() {
        const user = await getUser();

        const assignedSite = await DashboardRepository.countAssignedSite({userId: user.userId})

        const report = await DashboardRepository.reportSummary({userId: user.userId});

        const shiftSummary = await DashboardRepository.shiftSummary({userId: user.userId});
        const { nextShift: shift, checkedInShift, missedShift } = shiftSummary;
        const attendanceRate = (checkedInShift/(checkedInShift+missedShift))*100

        const site = await SiteRepository.findById({siteId: shift.site.id});

        const result = {
            reportsSubmitted: (report !== null) ? report.total : "-",
            attendanceRate: (attendanceRate !== null) ? `${attendanceRate}%` : "-",
            nextShift: (shift?.shiftDate) ? labelFuture(shift.shiftDate) : "No upcoming shift",
            currentSite: (shift?.site.name) ? shift.site.name : "-",
            pHLevel: (site?.report.length !== 0) ? site.report[0].pH : "-",
            flowRate: (site?.report.length !== 0) ? `${site.report[0].flowRate} L/h` : "-",
            tds: (site?.report.length !== 0) ? `${site.report[0].TDS} ppm` : "-",
            ec: (site?.report.length !== 0) ? `${site.report[0].EC} μS/cm` : "-",
            activeSites: assignedSite,
            approvedReports: (report !== null) ? report.approved : "-",
            pendingReports: (report !== null) ? report.pending : "-",
            rejectedReports: (report !== null) ? report.rejected : "-"
        }

        return result
    }

    static async waterTrend(){
        const user = await getUser();

        const shiftSummary = await DashboardRepository.shiftSummary({userId: user.userId});

        const reports = await DashboardRepository.findThisWeekByUserId({userId: user.userId, siteId: shiftSummary.nextShift.siteId})

        const result = Object.entries(reports).map(([day, r]) => ({
            day,
            ec: (r?.EC) ? r.EC : "-",
            tds: (r?.TDS) ? r.TDS : "-",
            pH: (r?.pH) ? r.pH : "-",
          }));
        
        return result;
    }

    static async recentActivity(){
        const user = await getUser();

        const activities = await DashboardRepository.getActivity({userId: user.userId})

        const result = activities.map((activity) => ({
            id: activity.id,
            type: activity.type,
            title: activity.title,
            time: activity.createdAt,
            detail: activity.metadata,
        }))
        
        return result;
    }

    static async hrdSummary(){
        const operators = await UserRepository.countOperator();

        const attendances = await DashboardRepository.attendancesSummary();

        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        const weeklyStats = days.map((day, i) => ({
            day,
            present: attendances.onTime[i] ?? 0,
            late: attendances.late[i] ?? 0,
            absent: attendances.noShow[i] ?? 0,
            total: (attendances.onTime[i] ?? 0) + (attendances.late[i] ?? 0) + (attendances.noShow[i] ?? 0)
          }));
        
        const todayStatus = [
            {
                status: "Present",
                value: (attendances.presentToday/(attendances.presentToday + attendances.lateToday)) * 100 ?? "-",
                count: attendances.presentToday ?? "-"
            },
            {
                status: "Late",
                value: (attendances.lateToday/(attendances.presentToday + attendances.lateToday))*100 ?? "-",
                count: attendances.lateToday ?? "-"
            }
        ]
        
        const result = {
            totalOperators: (operators !== null) ? operators : "-",
            presentToday: (attendances.presentToday !== null) ? attendances.presentToday : "-",
            attendanceRate: (attendances.attendanceRate !== null) ? attendances.attendanceRate : "-",
            pendingValidation: (attendances.pendingCount !== null) ? attendances.pendingCount : "-",
            weeklyStats, 
            todayStatus,
        }

        return result;
    }
    
    static async adminSummary(){
        const summary = await DashboardRepository.adminSummary()


        const {activeSite, maintenanceSite, inactiveSite, activeOperator, approvedReport, pendingReport, rejectedReport} = summary
        const complianceRate = (approvedReport/(approvedReport+pendingReport+rejectedReport))*100

        const result = {
            totalSites: activeSite+maintenanceSite+inactiveSite,
            activeOperator,
            dailyReports: approvedReport+pendingReport+rejectedReport,
            complianceRate,
            activeSite,
            maintenanceSite,
            inactiveSite,
            approvedReport,
            pendingReport,
            rejectedReport,
        }

        return result
    }

    static async reportStatus(){
        const {approvedReport, pendingReport,rejectedReport} = await DashboardRepository.reportStatus()

        const result = [
            {
                status: "approved",
                value:  (approvedReport/(approvedReport,pendingReport,rejectedReport))*100,
                count: approvedReport,
            },
            {
                status: "pending",
                value:  (pendingReport/(approvedReport,pendingReport,rejectedReport))*100,
                count: pendingReport,
            },
            {
                status: "rejected",
                value:  (rejectedReport/(approvedReport,pendingReport,rejectedReport))*100,
                count: rejectedReport,
            }
        ];

        return result;
    }

}