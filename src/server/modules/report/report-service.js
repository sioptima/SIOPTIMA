import { ReportRepository } from "./report-repository";
import { ReportValidation } from "./report-validation";
import { getUser } from "../../utils/auth";
import { uploadImage } from "../../utils/uploadthing";
import { ResponseError } from "@/src/lib/response-error";
import { PresensiRepository } from "../presensi/presensi-repository";
import { transformFormData } from "../../utils/helper";
import { trackActivity } from "../../utils/trackUser";
import { NotificationRepository } from "../notification/notification-repository";

export class ReportService {
    
    static async create(request) {
        const user = await getUser();

        //transform request from formdata into validable object for zod
        const object = transformFormData(request)
        
        //turn request's images properties to array for zod to validate
        if(object.images.constructor !== Array) {
            object.images=[object.images]
        }
        
        //validate request 
        const createRequest = ReportValidation.CREATE.parse(object);

        //check if theres an active checkin session
        const activeCheckIn = await PresensiRepository.getActiveCheckIn({userId: user.userId}) 
        if (!activeCheckIn){
            throw new ResponseError(400, "No active check in, please check-in first before making a report")
        }

        //check if site exist, if exist then it is used to associate new report with a site
        if (!activeCheckIn.shift?.siteId){
            throw new ResponseError(200, "Current active check in does not have a shift associated with. Make sure check-in's day = shift schedule's day")
        }

        //write report to database
        const report = await ReportRepository.create({
            flowRate: createRequest.flowRate,
            ampere: createRequest.ampere,
            volt: createRequest.volt,
            tds: createRequest.tds,
            ec: createRequest.ec,
            notes: createRequest.additionalNotes,
            pH: createRequest.pHLevel,
            siteId: activeCheckIn.shift.siteId,
            agitatorStatus: createRequest.agitatorStatus,
            outFilterStatus: createRequest.outFilterStatus,
            settleStatus: createRequest.settleStatus,
            laporanDate: new Date(createRequest.date+","+createRequest.time),
            userId: user.userId
        });

        //track activity
        await trackActivity(user.userId, "Create report", "report", "Daily report submitted", {
            reportId: report.id,
            laporanTime: report.laporanDate,
            status: "submitted"
        })

        //upload image to uploadthing and retrieve image link from uploadthing response
        const uploadImageData = await uploadImage(createRequest.images)
        const imageLink = uploadImageData.map((obj) => obj.data.ufsUrl)

        //update report with image link
        const updatedReport = await ReportRepository.update({imageLink: imageLink, reportId: report.id})

        return {
            id: updatedReport.id,
            date: updatedReport.laporanDate.toLocaleDateString(),
            time: updatedReport.laporanDate.toLocaleTimeString(),
            pHLevel: `${updatedReport.pH}`,
            flowRate: `${updatedReport.flowRate}`,
            volt: `${updatedReport.volt}`,
            ampere: `${updatedReport.ampere}`,
            tds: `${updatedReport.TDS}`,
            ec: `${updatedReport.ec}`,
            agitatorStatus: updatedReport.agitatorStatus.toLowerCase(),
            settleStatus: updatedReport.settleStatus.toLowerCase(),
            outFilterStatus: updatedReport.outFilterStatus.toLowerCase(),
            additionalNotes: updatedReport.notes || "-",
            uploadedFiles: updatedReport.fotoSampel,
            timestamp: updatedReport.laporanDate,
            location: updatedReport.siteName,
            operator: updatedReport.user.profile?.name || updatedReport.user.username,
            status: updatedReport.laporanStatus
        }
    }

    static async getMonthly(parameter){
        const getRequest = ReportValidation.GET.parse(parameter);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const {page, size} = getRequest;

        const reports = await ReportRepository.findMonthly(getRequest);
        if (reports.count === 0) {
            throw new ResponseError (200, "No report found")
        }

        const reportTransform = reports.result.map((report) => ({
            id: report.id,
            date: report.laporanDate.toLocaleDateString(),
            time: report.laporanDate.toLocaleTimeString(),
            site: report.siteName,
            operator: (report.user.profile?.name) ? report.user.profile.name : report.user.username,
            pH: report.pH,
            flowRate: report.flowRate,
            volt: report.volt,
            ampere: report.ampere,
            tds: report.TDS,
            ec: report.EC,
            status: report.laporanStatus.toLowerCase(),
            equipmentStatus: {
                agitator: report.agitatorStatus,
                settle: report.settleStatus,
                outFilter: report.outFilterStatus
            },
            notes: report.notes,
            images: report.fotoSampel,
            uploadedFiles: report.fotoSampel,
        }))

        return {
            result: {
                reportTransform,
                totalReports: reports.count, 
            },
            paging: {
                size: size,
                total: reports.count,
                total_page: Math.ceil(reports.count / size),
                current_page: page,
            }
        }
    }

    static async getAllByUserId(parameter){
        const user = await getUser()

        const getRequest = ReportValidation.GET.parse(parameter);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const {page, size} = getRequest;

        const reports = await ReportRepository.findAllByUserId(getRequest, user.userId);
        if (reports.count === 0) {
            throw new ResponseError (200, "No report found")
        }

        const reportTransform = reports.result.map((report) => ({
            id: report.id,
            date: report.laporanDate,
            time: report.laporanDate.toLocaleTimeString(),
            site: report.siteName,
            operator: report.user.username,
            pHLevel: `${report.pH}`,
            flowRate: `${report.flowRate}`,
            volt: report.volt,
            ampere: report.ampere,
            tds: `${report.TDS}`,
            ec: `${report.EC}`,
            agitatorStatus: report.agitatorStatus,
            settleStatus: report.settleStatus,
            outFilterStatus: report.outFilterStatus,
            additionalNotes: report.notes,
            status: report.laporanStatus.toLowerCase(),
            images: report.fotoSampel,
            additionalNotes: report.notes,
            location: report.siteName,
        }))

        return {
            result: reportTransform,
            paging: {
                size: size,
                total: reports.count,
                total_page: Math.ceil(reports.count / size),
                current_page: page,
            }
        }
    }

    static async getById(parameter){
        const user = await getUser();

        const getRequest = ReportValidation.GETBYID.parse(parameter);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const report = await ReportRepository.findById(getRequest.id);
        if(!report){
            throw new ResponseError(200, "No report found")
        }
        
        if (user.role !== "ADMIN"){
            if(user.role !== "HRD"){
                if (report.userId === user.userId){throw new ResponseError(403, "This resource belong to someone else")}
            }
        }

        const reportTransform = {
            id: report.id,
            date: report.laporanDate.toLocaleDateString(),
            time: report.laporanDate.toLocaleTimeString(),
            site: (report.siteName) ? report.siteName : "-",
            operator: (report.user?.profile?.name) ? report.user.profile.name : report.user?.username || "-",
            pH: report.pH,
            flowRate: report.flowRate,
            status: report.laporanStatus,
            details: {
                tds: report.TDS,
                volt: report.volt,
                ampere: report.ampere,
                ec: report.EC,
                agitatorStatus: report.agitatorStatus,
                settleStatus: report.settleStatus,
                outFilterStatus: report.outFilterStatus,
                notes: report.notes,
                images: report.fotoSampel,
            },
            createdAt: report.createdAt
        }

        return{
            reportTransform
        }
    }

    static async getToday(){
        const reports = await ReportRepository.findToday();
        if (reports.count === 0) {
            throw new ResponseError (200, "No report found")
        }

        const reportTransform = reports.map((report) => ({
            id: report.id,
            date: report.laporanDate.toLocaleDateString(),
            time: report.laporanDate.toLocaleTimeString(),
            site: report.siteName,
            operator: (report.user.profile?.name) ? report.user.profile.name : report.user.username,
            pH: report.pH,
            flowRate: report.flowRate,
            volt: report.volt,
            ampere: report.ampere,
            tds: report.TDS,
            ec: report.EC,
            status: report.laporanStatus.toLowerCase(),
            equipmentStatus: {
                agitator: report.agitatorStatus,
                settle: report.settleStatus,
                outFilter: report.outFilterStatus
            },
            notes: report.notes,
            images: report.fotoSampel
        }))

        return reportTransform
    }

    static async export (parameter){
        //file validation
        const exportRequest = parameter;

        //get current user report
        const { userId } = await getUser();
        const reports = await ReportRepository.findAllByUserIdNoPaging(userId)

        //export to pdf
        
    }

    static async approve(parameter){
        const validatedParam = ReportValidation.APPROVE.parse(parameter)

        const report = await ReportRepository.findById(validatedParam.id);
        if(!report){throw new ResponseError(200, "Report does not exist")}        

        const approvedReport = await ReportRepository.approve(validatedParam.id)

        //create notification for related operator
        await NotificationRepository.create({
            userId: approvedReport.userId, 
            type: "LAPORAN", 
            title: `Laporan tanggal ${approvedReport.laporanDate.toLocaleDateString()} diterima`})

        return {
            id: approvedReport.id,
            status: approvedReport.laporanStatus
        }
    }

    static async reject(parameter){
        const validatedParam = ReportValidation.APPROVE.parse(parameter)

        const report = await ReportRepository.findById(validatedParam.id);
        if(!report){throw new ResponseError(200, "Report does not exist")}        

        const approvedReport = await ReportRepository.reject(validatedParam.id)

        //create notification for related operator
        await NotificationRepository.create({
            userId: approvedReport.userId, 
            type: "LAPORAN", 
            title: `Laporan tanggal ${approvedReport.laporanDate.toLocaleDateString()} ditolak`})

        return {
            id: approvedReport.id,
            status: approvedReport.laporanStatus
        }
    }
}