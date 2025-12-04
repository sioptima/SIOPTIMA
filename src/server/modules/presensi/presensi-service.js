import { ResponseError } from "@/src/lib/response-error";
import { PresensiValidation } from "./presensi-validation";
import { PresensiRepository } from "./presensi-repository";
import { uploadImage } from "../../utils/uploadthing";
import { getUser } from "../../utils/auth";

export class PresensiService{

    static async checkin(request){
        const user = await getUser();

        //turn formdata to object
        var object = {};
        request.forEach((value, key) => {
            // Reflect.has in favor of: object.hasOwnProperty(key)
            if(!Reflect.has(object, key)){
                object[key] = value;
                return;
            }
            if(!Array.isArray(object[key])){
                object[key] = [object[key]];    
            }
            object[key].push(value);
        });

        //validate
        const checkInRequest = PresensiValidation.CHECKIN.parse(object);
        //write to db without image link
        const checkIn = await PresensiRepository.checkin(checkInRequest, user.userId);
        //upload image
        const uploadImageData = await uploadImage(checkInRequest.selfie)
        if(!uploadImageData.data.ufsUrl){
            throw new ResponseError (200, "Created report in database but failed to upload images")
        }
        const imageLink = uploadImageData.data.ufsUrl;
        //update record in db with image
        const result = await PresensiRepository.updateImage({imageLink: imageLink, presensiId: checkIn.id})
        //return result
        return {
            id: result.id,
            checkInTime: result.presensiDate.toLocaleTimeString(),
            status: result.statusPresensi,
            approvalStatus: result.statusApproval
        }
    }

    static async getMany(parameter){
        const user = await getUser()

        const getRequest = parameter;
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const {page, size, month} = getRequest;

        const records = await PresensiRepository.findMany(getRequest, user.userId);
        if (!records) {
            throw new ResponseError (200, "No record found")
        }

        const reportTransform = reports.result.map((report) => ({
            id: report.id,
            date: report.laporanDate.toLocaleDateString(),
            time: report.laporanDate.toLocaleTimeString(),
            site: report.siteName,
            operator: report.user.username,
            pH: report.pH,
            flowRate: report.flowRate,
            volt: report.volt,
            ampere: report.ampere,
            tds: report.TDS,
            ec: report.EC,
            agitatorStatus: report.agitatorStatus,
            settleStatus: report.settleStatus,
            outFilterStatus: report.outFilterStatus,
            additionalNotes: report.notes,
            status: "submitted",
            images: report.fotoSampel
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
}