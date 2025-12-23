import { ResponseError } from "@/src/lib/response-error";
import { PresensiValidation } from "./presensi-validation";
import { PresensiRepository } from "./presensi-repository";
import { uploadImage } from "../../utils/uploadthing";
import { getUser } from "../../utils/auth";
import { ShiftRepository } from "../shift/shift-repository";
import { calculateDistance, transformFormData } from "../../utils/helper";
import { trackActivity } from "../../utils/trackUser";
import ExifReader from "exifreader";
import { NotificationRepository } from "../notification/notification-repository";

export class PresensiService{

    static async checkIn(request){
        const user = await getUser();
        
        //turn formdata to object
        const object = transformFormData(request)
        
        //validate
        const checkInRequest = PresensiValidation.CHECKIN.parse(object);
        
        //get gps from photo metadata
        const file = request.get('selfie');
        const arrayBuffer = await file.arrayBuffer();
        const tags = ExifReader.load(arrayBuffer, {expanded: true});
        
        if(!tags.gps){throw new ResponseError(500, "No GPS in metadata, please enable photo geotagging")}

        const gps = {
          lat: tags.gps.Latitude,
          lon: tags.gps.Longitude
        };
      
        
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
        if(!shift){
            throw new ResponseError(400, 
                "No shift were found for this check-in, make sure you have been assigned a shift schedule for the checkin day",
            )    
        }

        let isLate = false
        if (checkInDateUTC >= shift.shiftDate) {
            isLate = true;
        }

        //calculate distance to site
        let distance;
        if(shift){
            distance = calculateDistance(gps.lat, gps.lon, shift.site.address.latitude, shift.site.address.longitude)
        }

        //write to db without image link
        const checkIn = await PresensiRepository.checkIn({
            request: checkInRequest,
            gps, 
            userId: user.userId, 
            isLate: isLate, 
            shiftId: (shift) ? shift.id : null,
            distance,
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
            date: result.presensiDate,
            checkIn: result.presensiDate.toLocaleTimeString(),
            checkOut: "--:--",
            location: result.shift?.site.name || "-",
            status: result.statusPresensi.toLowerCase(),
            approvalStatus: result.statusApproval.toLowerCase(),
            checkInStatus: result.statusPresensi.toLowerCase(),
            checkInLocation: `${result.latitude} ${result.longitude}`,
            checkOutLocation: "--:--",
            selfieCheckIn: result.fotoDiri,
            selfieCheckOut: null,
            approvedBy: null,
            approvedAt: null,
            locationStatus: "-",
            distanceToSite: Math.ceil(result.distanceToSite),
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

        //get gps information from photo metadata
        const file = request.get('selfie');
        const arrayBuffer = await file.arrayBuffer();
        const tags = ExifReader.load(arrayBuffer, {expanded: true});
        
        if(!tags.gps){throw new ResponseError(500, "No GPS in metadata, please enable photo geotagging")}

        const gps = {
          lat: tags.gps.Latitude,
          lon: tags.gps.Longitude
        };

        //get the corresponding checkin(clockin) information by assuming its related if its 'open' (no checkout appended yet)
        const checkIn = await PresensiRepository.getActiveCheckIn({userId: user.userId}) 
        if(!checkIn){
            throw new ResponseError(400, "No active checkin found. Make sure you checked in first before checking out")
        }

        //write to db without image link and connect the corresponding checkin checkout relation
        const checkOut = await PresensiRepository.checkOut({
            request: checkOutRequest,
            gps,
            userId: user.userId,
            checkInId: checkIn.id,
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
                    approvalStatus: checkOut.checkIn.statusApproval.toLowerCase()
                })
        }
        const imageLink = uploadImageData.data.ufsUrl;

        //calculate distance to site
        let distance
        if(checkOut.checkIn.shift?.site.address.latitude && checkOut.checkIn.shift?.site.address.longitude){
            distance = calculateDistance(gps.lat, gps.lon, checkOut.checkIn.shift.site.address.latitude, checkOut.checkIn.shift.site.address.longitude)
        }

        //update record in db with image
        const result = await PresensiRepository.updateCheckOutImage({
            imageLink: imageLink, 
            checkOutId: checkOut.id,
            distance
        })
        //return result
        return {
            id: result.id,
            checkOut: result.checkOutDate.toLocaleTimeString(),
            checkOutTime: result.checkOutDate.toLocaleTimeString(), //idek why fe use 2
            checkOutLocation: result.checkIn.shift.site.name || "-",
            status: result.checkIn.statusPresensi.toLowerCase(),
            approvalStatus: result.checkIn.statusApproval.toLowerCase(),
            selfieCheckOut: result.fotoDiri,
            approvedAt: result.approvedAt,
            locationStatus: `${Math.ceil(result.distanceToSite)} m`,
            distanceToSite: Math.ceil(result.distanceToSite),
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
            IscheckedIn: true,
            IscheckedOut: (record.checkOut) ? true : false,
            checkOut: (record.checkOut) ? record.checkOut.checkOutDate.toLocaleTimeString() : "--:--",
            location: (record.shift?.site.name) ? record.shift.site.name : "blank",
            status: record.statusApproval.toLowerCase(),
            approvalStatus: record.statusApproval.toLowerCase(),
            checkInStatus: record.statusPresensi.toLowerCase(),
            checkInLatitude: record.latitude,
            checkInLongitude: record. longitude,
            checkOutLatitude: (record.checkOut?.latitude) ? record.checkOut.latitude : "-",
            checkOutLongitude: (record.checkOut?.longitude) ? record. checkOut.longitude : "-",
            selfieCheckIn: (record.fotoDiri) ? record.fotoDiri : null,
            selfieCheckOut: (record.checkOut?.fotoDiri) ? record.checkOut.fotoDiri : null,
            approvedBy: (record.approver?.username) ? record.approver.username : "-",
            approvedAt: (record.approvedAt) ? record.approvedAt : "-",
            distanceToSite: (record.distanceToSite) ? Math.ceil(record.distanceToSite) : "-"
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
            status: (record) ? record.statusPresensi.toLowerCase() : null,
            isCheckedIn: (record.presensiDate) ? true : false,
            isCheckedOut: (record.checkOut) ? true : false,
            distanceToSite: (record.distanceToSite) ? Math.ceil(record.distanceToSite) : "-",
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
            status: record.statusApproval.toLowerCase(),
            approvalStatus: record.statusApproval.toLowerCase(),
            checkInStatus: record.statusPresensi.toLowerCase(),
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
            notes: (record.approvedAt) ? `Attendance approved by ${record.approver.username}` : "Attendance not approved yet",
            distanceToSite: (record.distanceToSite) ? Math.ceil(record.distanceToSite) : "-"
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

        //create notification for related operator
        await NotificationRepository.create({
           userId: approvedRecord.userId, 
           type: "PRESENSI", 
           title: `Presensi tanggal ${approvedRecord.presensiDate.toLocaleDateString()} diterima`})

        return {
            id: approvedRecord.id,
            status: approvedRecord.statusApproval.toLowerCase(),
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

        //create notification for related operator
        await NotificationRepository.create({
            userId: rejectedRecord.userId, 
            type: "PRESENSI", 
            title: `Presensi tanggal ${rejectedRecord.presensiDate.toLocaleDateString()} ditolak`})

        return {
            id: rejectedRecord.id,
            status: rejectedRecord.statusApproval.toLowerCase(),
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

        const attendanceTransform = attendance.presensi.map((a) => ({
            id: a.id,
            operatorName: (a.user.profile?.name) ? a.user.profile.name : a.user.username,
            operator: (a.user.profile?.name) ? a.user.profile.name : a.user.username,
            operatorId: a.userId,
            site: (a.shift?.site.name) ? a.shift.site.name : "-",
            date: a.presensiDate.toISOString().split('T')[0],
            checkIn: a.presensiDate.toLocaleTimeString(),
            checkOut: (a.checkOut?.checkOutDate) ? a.checkOut.checkOutDate.toLocaleTimeString() : "-",
            status: a.statusPresensi.toLowerCase(),
            attendanceStatus: a.statusApproval.toLowerCase(),
            notes: (a.notes) ? a.notes : "-",
            location: (a.shift?.site?.name) ? a.shift.site.name : "-",
            locationStatus: "-",
            timeStatus: "-",
            submittedBy: (a.user.profile?.name) ? a.user.profile.name : a.user.username,
            distanceToSite: (a.distanceToSite) ? (Math.ceil(a.distanceToSite)) : "-",
            image: a.fotoDiri || "-",
            totalHours: "TBA",
            lateMinutes: 0,
            shiftId: a.shiftid || "-",
            photoUrl: a.fotoDiri || "-",
            locationCoordinates: `${a.latitude},${a.longitude}`,
            locationValid: true,
            timeValid: true,
        }))

        return {
            data: {
                attendanceTransform,
                totalAttendance: attendance.count,
            },
            paging: {
                size: validatedReq.parameter.size,
                total_page: Math.ceil(attendance.count / validatedReq.parameter.size),
                current_page: validatedReq.parameter.page,
                total: attendance.count
            }
        }; 
    }

    static async getActiveCheckIn(){
        const user = await getUser()
        //check if theres an active checkin session
        const isActive = await PresensiRepository.getActiveCheckIn({userId: user.userId}) 
        if(isActive){
            const transform = {
                checkInTime: isActive.presensiDate.toLocaleTimeString(),
                checkOutTime: "-",
                location: isActive.shift.site.name, //idfk whta location refer to in fe
                status: isActive.statusPresensi.toLowerCase(),
                isCheckedIn: true,
                isCheckedOut: false,
            }
            return transform
        }
    }
}