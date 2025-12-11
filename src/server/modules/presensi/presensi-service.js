import { ResponseError } from "@/src/lib/response-error";
import { PresensiValidation } from "./presensi-validation";
import { PresensiRepository } from "./presensi-repository";
import { uploadImage } from "../../utils/uploadthing";
import { getUser } from "../../utils/auth";
import { ShiftRepository } from "../shift/shift-repository";
import { transformFormData } from "../../utils/helper";
import { trackActivity } from "../../utils/trackUser";

export class PresensiService{

    static async checkIn(request){
        const user = await getUser();

        //turn formdata to object
        const object = transformFormData(request)

        //validate
        const checkInRequest = PresensiValidation.CHECKIN.parse(object);

        //check if theres an active checkin session
        const isActive = await PresensiRepository.getActiveCheckIn({userId: user.userId}) 
        if (isActive){
            throw new ResponseError(400, "Active check in found, please checkout first")
        }

        const checkInDateUTC = new Date(checkInRequest.timestamp);
        const startOfDay = new Date(checkInDateUTC.getFullYear(), checkInDateUTC.getMonth(), checkInDateUTC.getDate())
        const endOfDay = new Date(checkInDateUTC.getFullYear(), checkInDateUTC.getMonth(), checkInDateUTC.getDate() + 1)
        //get today's shift information or whatever shift's information based on the date of request's timestamp
        //if multiple grab oldest that is 'open'(no check in associated yet)
        const shift = await ShiftRepository.findToday({start: startOfDay, end: endOfDay, userId: user.userId})
        //check ontime/late status
        let isLate; 
        if(!shift){
            isLate = true; // if no shift found default to late
        } else if (checkInDateUTC >= shift.shiftDate) {
            isLate = true;
        }

        //write to db without image link
        const checkIn = await PresensiRepository.checkIn({
            request: checkInRequest, 
            userId: user.userId, 
            isLate: isLate, 
            shiftId: (shift) ? shift.id : null
        });

        //track activity
        await trackActivity(user.userId, "Check In", "attendance", "Check-in completed", {
            id: checkIn.id,
            checkInTime: checkIn.presensiDate,
            status: checkIn.statusPresensi,
        })

        //upload image
        const uploadImageData = await uploadImage(checkInRequest.selfie)
        if(!uploadImageData.data.ufsUrl){
            throw new ResponseError (200, "Attendance recorded in database but failed to upload images", true, checkIn)
        }
        const imageLink = uploadImageData.data.ufsUrl;
        //update record in db with image
        const result = await PresensiRepository.updateCheckInImage({imageLink: imageLink, presensiId: checkIn.id})
        const transformedResult = {
            id: result.id,
            shiftStart: (shift) ? shift.shiftDate.toLocaleTimeString() : "--:--",
            checkInTime: result.presensiDate.toLocaleTimeString(),
            status: result.statusPresensi,
            approvalStatus: result.statusApproval
        }
        if(!shift){
            throw new ResponseError(200, 
                "Attendance recorded but no shift were found for this check-in, make sure you have been assigned a shift schedule for the checkin day", 
                true,
                transformedResult)
        }
        //return result
        return {
            transformedResult
        }
    }

    static async checkOut(request){
        const user = await getUser();

        //turn formdata to object
        const object = transformFormData(request)

        //validate
        const checkOutRequest = PresensiValidation.CHECKIN.parse(object);

        //get the corresponding checkin(clockin) information by assuming its related if its 'open' (no checkout appended yet)
        const checkIn = await PresensiRepository.getActiveCheckIn({userId: user.userId}) 
        if(!checkIn){
            throw new ResponseError(400, "No active checkin found. Make sure you checked in first before checking out")
        }

        //write to db without image link and connect the corresponding checkin checkout relation
        const checkOut = await PresensiRepository.checkOut({
            request: checkOutRequest, 
            userId: user.userId,
            checkInId: checkIn.id
        });

        //track activity
        await trackActivity(user.userId, "Check Out", "attendance", "Check-out completed", {
            id: checkOut.id,
            checkOutTime: checkOut.checkOutDate,
        })

        //upload image
        const uploadImageData = await uploadImage(checkOutRequest.selfie)
        if(!uploadImageData.data.ufsUrl){
            throw new ResponseError (200, "Check out recorded in database but failed to upload images", true,
                {
                    id: checkOut.id,
                    checkOutTime: checkOut.checkOutDate.toLocaleTimeString(),
                    approvalStatus: checkOut.checkIn.statusApproval
                })
        }
        const imageLink = uploadImageData.data.ufsUrl;
        //update record in db with image
        const result = await PresensiRepository.updateCheckOutImage({imageLink: imageLink, checkOutId: checkOut.id})
        //return result
        return {
            id: result.id,
            checkOutTime: result.checkOutDate.toLocaleTimeString(),
            approvalStatus: result.checkIn.statusApproval
        }
    }

    static async getMany(parameter){
        const user = await getUser()
        //validate param
        const getRequest = PresensiValidation.GETMANY.parse(parameter);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const records = await PresensiRepository.findMany(getRequest, user.userId);
        if (records.count === 0) {
            throw new ResponseError (200, "No record found")
        }

        //format result
        const {page, size} = getRequest;
        const recordTransform = records.result.map((record) => ({
            id: record.id,
            date: record.presensiDate.toLocaleDateString(),
            checkIn: record.presensiDate.toLocaleTimeString(),
            checkOut: (record.checkOut) ? record.checkOut.checkOutDate.toLocaleTimeString() : null,
            location: (record.shift?.site.name) ? record.shift.site.name : "-",
            status: record.statusApproval,
            approvalStatus: record.statusApproval,
            checkInStatus: record.statusPresensi,
            checkInLocation: {
                Lat: record.latitude,
                Long: record. longitude
            },
            checkOutLocation: {
                Lat: (record.checkOut?.latitude) ? record.checkOut.latitude : "-",
                Long: (record.checkOut?.longitude) ? record. checkOut.longitude : "-"
            },
            selfieCheckIn: (record.fotoDiri) ? record.fotoDiri : "-",
            selfieCheckOut: (record.checkOut?.fotoDiri) ? record.checkOut.fotoDiri : "-",
            approvedBy: (record.approver?.username) ? record.approver.username : "-",
            approvedAt: (record.approvedAt) ? record.approvedAt : "-",
        }))

        return {
            result: recordTransform,
            paging: {
                size: size,
                total: records.count,
                total_page: Math.ceil(records.count / size),
                current_page: page,
            }
        }
    }

    static async getToday(){
        const user = await getUser()
        
        const record = await PresensiRepository.findToday({userId: user.Id});
        if (!record){throw new ResponseError (200, "No attendance record for today")};
        return {
            checkInTime: (record) ? record.presensiDate.toLocaleTimeString() : "--:--",
            checkOutTime: (record?.checkOut) ? record.checkOut.checkOutDate.toLocaleTimeString() : "--:--",
            location: (record.shift?.site.name) ? record.shift.site.name : null,
            status: (record) ? record.statusPresensi : null,
            isCheckedIn: (record.presensiDate) ? true : false,
            isCheckedOut: (record.checkOut) ? true : false
        }
    }

    static async getById(parameter){
        const user = await getUser()

        const validatedParameter = PresensiValidation.GETBYID.parse(parameter);

        const record = await PresensiRepository.findById({presensiId: validatedParameter.id})
        if(!record){
            throw new ResponseError (200, "No record found")
        }
        //check if user is authorized to get this data
        if (user.role !== "ADMIN"){
            if (user.role !== "HRD"){
                if(user.userId !== record.userId){
                    throw new ResponseError(403, "This record belong to another user")
                }
            }
        }

        //format response
        const recordTransform = {
            id: record.id,
            date: record.presensiDate,
            checkIn: record.presensiDate.toLocaleTimeString(),
            checkOut: (record.checkOut?.checkOutDate) ? record.checkOut.checkOutDate.toLocaleTimeString() : "--:--",
            location: (record.shift?.site.name) ? record.shift.site.name : "-",
            status: record.statusApproval,
            approvalStatus: record.statusApproval,
            checkInStatus: record.statusPresensi,
            checkInLocation: {
                Lat: record.latitude,
                Long: record. longitude
            },
            checkOutLocation: {
                Lat: (record.checkOut?.latitude) ? record.checkOut.latitude : "-",
                Long: (record.checkOut?.longitude) ? record. checkOut.longitude : "-"
            },
            selfieCheckIn: (record.fotoDiri) ? record.fotoDiri : "-",
            selfieCheckOut: (record.checkOut?.fotoDiri) ? record.checkOut.fotoDiri : "-",
            approvedBy: (record.approver?.username) ? record.approver.username : "-",
            approvedAt: (record.approvedAt) ? record.approvedAt : "-",
            notes: (record.approvedAt) ? `Attendance approved by ${record.approver.username}` : "Attendance not approved yet" 
        }

        return recordTransform;
    }

    static async approve(request){
        const user = await getUser();
        const validatedRequest = PresensiValidation.APPROVE.parse(request)

        const record = await PresensiRepository.findById({presensiId: validatedRequest.id});
        if(!record){throw new ResponseError(200, "Attendance record does not exist")}        

        const approvedRecord = await PresensiRepository.approve({
            presensiId: validatedRequest.id, 
            approverId: user.userId,
            notes: validatedRequest.data.notes
        })

        //track activity
        await trackActivity(user.userId, "Approve", "attendance", "Approved an attendance", {
            id: approvedRecord.id,
            approvedAt: approvedRecord.updatedAt,
        })

        return {
            id: approvedRecord.id,
            status: approvedRecord.statusApproval,
            approvedAt: approvedRecord.updatedAt,
            approvedBy: approvedRecord.approver.username,
            notes: approvedRecord.notes,
        }
    }

    static async reject(request){
        const user = await getUser();
        const validatedRequest = PresensiValidation.APPROVE.parse(request)

        const record = await PresensiRepository.findById({presensiId: validatedRequest.id});
        if(!record){throw new ResponseError(200, "Attendance record does not exist")}        

        const rejectedRecord = await PresensiRepository.reject({
            presensiId: validatedRequest.id, 
            approverId: user.userId,
            notes: validatedRequest.data.notes
        })

        //track activity
        await trackActivity(user.userId, "Reject", "attendance", "Rejected an attendance", {
            id: rejectedRecord.id,
            approvedAt: rejectedRecord.updatedAt,
        })

        return {
            id: rejectedRecord.id,
            status: rejectedRecord.statusApproval,
            rejectedAt: rejectedRecord.updatedAt,
            rejectedBy: rejectedRecord.approver.username,
            notes: (rejectedRecord.notes) ? rejectedRecord.notes : undefined,
        }
    }

    static async getFiltered(request){
        const validatedReq = PresensiValidation.GETFILTERED.parse(request);
        
        const attendance  = await PresensiRepository.findFiltered({
            name: validatedReq.parameter.search, 
            page: validatedReq.parameter.page, 
            size: validatedReq.parameter.size,
            status: validatedReq.parameter.status,
        });

        const result = attendance.presensi.map((a) => ({
            id: a.id,
            operator: {
                id: a.userId,
                name: (a.user.profile?.name) ? a.user.profile.name : "-",
            },
            site: {
                id: (a.shift?.siteId) ? a.shift.siteId : "-",
                name: (a.shift?.site.name) ? a.shift.site.name : "-"
            },
            date: a.presensiDate.toLocaleDateString(),
            checkIn: a.presensiDate.toLocaleTimeString(),
            checkOut: (a.checkOut?.checkOutDate) ? a.checkOut.checkOutDate.toLocaleTimeString() : "-",
            status: a.statusApproval,
            submittedBy: (a.user.profile?.name) ? a.user.profile.name : a.user.username,
            location: (a.shift?.site?.name) ? a.shift.site.name : "-",
            notes: (a.notes) ? a.notes : "-",
        }))

        return {
            result,
            paging: {
                size: validatedReq.parameter.size,
                total_page: Math.ceil(attendance.count / validatedReq.parameter.size),
                current_page: validatedReq.parameter.page,
                total: attendance.count
            }
        }; 
    }
}