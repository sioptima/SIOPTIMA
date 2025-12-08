import { date } from "zod";
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
        const result = {
            totalOperators: (operators !== null) ? operators : "-",
            
        }
    }
}