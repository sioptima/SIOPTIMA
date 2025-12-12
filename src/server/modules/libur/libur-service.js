import { ResponseError } from "@/src/lib/response-error";
import { getUser } from "../../utils/auth";
import { LiburRepository } from "./libur-repository";
import { LiburValidation } from "./libur-validation";
import { NotificationRepository } from "../notification/notification-repository";

export class LiburService {

    static async create(request){
        const user = await getUser();

        const validatedReq = LiburValidation.CREATE.parse(request);

        const libur = await LiburRepository.create(validatedReq, user.userId);

        return {
            id: libur.id,
            start: libur.liburDate,
            end: libur.liburEnd || "-",
            reason: libur.reason,
            user: libur.user.username,
        }
    }

    static async getMine(request){
        const user = await getUser();

        const validatedParam = LiburValidation.GETMANY.parse(request)

        const query = await LiburRepository.getMine(validatedParam, user.userId)
        if(query.count === 0){throw new ResponseError(200, "No request for day off yet")}

        const result = query.records.map(r => ({
            id: r.id,
            start: r.liburDate,
            end: r.liburEnd,
            status: r.liburStatus,
            reason: r.reason
        }))

        return {
            result,
            paging: {
                size: validatedParam.size,
                total: query.count,
                total_page: Math.ceil(query.count / validatedParam.size),
                current_page: validatedParam.page,
            }
        }
    }

    static async getMany(request){
        const validatedParam = LiburValidation.GETMANY.parse(request)

        const query = await LiburRepository.getMany(validatedParam)
        if(query.count === 0){throw new ResponseError(200, "No request for day off yet")}

        const result = query.records.map(r => ({
            id: r.id,
            start: r.liburDate,
            end: r.liburEnd,
            status: r.liburStatus,
            reason: r.reason,
            user: {
                username: r.user.username,
                profile: {
                    name: r.user.profile.name
                }
            }
        }))

        return {
            count: {
                approved: query.approved,
                pending: query.pending,
                rejected: query.rejected
            },
            result,
            paging: {
                size: validatedParam.size,
                total: query.count,
                total_page: Math.ceil(query.count / validatedParam.size),
                current_page: validatedParam.page,
            }
        }
    }

    static async getById(request){
        const user = await getUser();

        const validated = LiburValidation.GETBYID.parse(request);

        const query = await LiburRepository.getById({liburId: validated.id})
        if(!query){throw new ResponseError(200, "No data found")}

        if (user.role === "OPERATOR"){
            if(query.userId !== user.userId){throw new ResponseError(403, "This resource belong to someone else")}
        }

        const result = {
            id: query.id,
            start: query.liburDate,
            end: query.liburEnd,
            status: query.liburStatus,
            reason: query.reason
        }

        return result
    }

    static async approve(request){
        const validated = LiburValidation.APPROVE.parse(request);

        const libur = await LiburRepository.getById({liburId: validated.id})
        if(!libur){throw new ResponseError(200, "Resource you are trying to update does not exist")}
        const approved = await LiburRepository.approve({liburId: validated.id})

        const result = {
            id: approved.id,
            start: approved.liburDate,
            end: approved.liburEnd,
            status: approved.liburStatus,
            reason: approved.reason
        }

        //create notification for related operator
        await NotificationRepository.create({
            userId: approved.userId, 
            type: "LIBUR", 
            title: `Permintaan libur tanggal ${approved.liburDate.toLocaleDateString()} diterima`})

        return result
    }

    static async reject(request){
        const validated = LiburValidation.APPROVE.parse(request);

        const libur = await LiburRepository.getById({liburId: validated.id})
        if(!libur){throw new ResponseError(200, "Resource you are trying to update does not exist")}
        const rejected = await LiburRepository.reject({liburId: validated.id})

        const result = {
            id: rejected.id,
            start: rejected.liburDate,
            end: rejected.liburEnd,
            status: rejected.liburStatus,
            reason: rejected.reason
        }

         //create notification for related operator
         await NotificationRepository.create({
            userId: rejected.userId, 
            type: "LIBUR", 
            title: `Permintaan libur tanggal ${rejected.liburEnd.toLocaleDateString()} ditolak`})

        return result
    }
}