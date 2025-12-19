import { ResponseError } from "@/src/lib/response-error";
import { getUser } from "../../utils/auth";
import { IzinRepository } from "./ijin-repository";
import { IzinValidation } from "./ijin-validation";
import { NotificationRepository } from "../notification/notification-repository";

export class IjinService {

    static async create(request){
        const user = await getUser();

        const validatedReq = IzinValidation.CREATE.parse(request);

        const ijin = await IzinRepository.create(validatedReq, user.userId);

        return {
            id: ijin.id,
            type: "ijin",
            date: ijin.ijinDate.toLocaleDateString(),
            startDate: ijin.ijinDate,
            endDate: ijin.ijinEnd || "-",
            reason: ijin.reason,
            user: ijin.user.username,
            status: ijin.reason,
            submittedAt: ijin.createdAt.toLocaleString(),
        }
    }

    static async getMine(request){
        const user = await getUser();

        const validatedParam = IzinValidation.GETMANY.parse(request)

        const query = await IzinRepository.getMine(validatedParam, user.userId)
        if(query.count === 0){throw new ResponseError(200, "No request for day off yet")}

        const result = query.records.map(ijin => ({
            id: ijin.id,
            type: "ijin",
            date: ijin.ijinDate.toLocaleDateString(),
            startDate: ijin.ijinDate.toLocaleDateString(),
            endDate: ijin.ijinEnd.toLocaleDateString() || "-",
            reason: ijin.reason,
            user: ijin.user.username,
            status: ijin.reason,
            submittedAt: ijin.createdAt.toLocaleString(),
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
        const validatedParam = IzinValidation.GETMANY.parse(request)

        const query = await IzinRepository.getMany(validatedParam)
        if(query.count === 0){throw new ResponseError(200, "No request for day off yet")}

        const result = query.records.map(r => ({
            id: r.id,
            start: r.ijinDate,
            end: r.ijinEnd,
            status: r.ijinStatus,
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

        const validated = IzinValidation.GETBYID.parse(request);

        const query = await IzinRepository.getById({ijinId: validated.id})
        if(!query){throw new ResponseError(200, "No data found")}

        if (user.role === "OPERATOR"){
            if(query.userId !== user.userId){throw new ResponseError(403, "This resource belong to someone else")}
        }

        const result = {
            id: query.id,
            start: query.ijinDate,
            end: query.ijinEnd,
            status: query.ijinStatus,
            reason: query.reason
        }

        return result
    }

    static async approve(request){
        const validated = IzinValidation.APPROVE.parse(request);

        const izin = await IzinRepository.getById({ijinId: validated.id})
        if(!izin){throw new ResponseError(200, "Resource you are trying to update does not exist")}
        const approved = await IzinRepository.approve({ijinId: validated.id})
        
        const result = {
            id: approved.id,
            start: approved.ijinDate,
            end: approved.ijinEnd,
            status: approved.ijinStatus,
            reason: approved.reason
        }

        //create notification for related operator
        await NotificationRepository.create({userId: approved.userId, type: "IJIN", title: `Permintaan ijin tanggal ${approved.ijinDate.toLocaleDateString()} disetujui`})

        return result
    }

    static async reject(request){
        const validated = IzinValidation.APPROVE.parse(request);

        const ijin = await IzinRepository.getById({ijinId: validated.id})
        if(!ijin){throw new ResponseError(200, "Resource you are trying to update does not exist")}
        const rejected = await IzinRepository.reject({ijinId: validated.id})

        const result = {
            id: rejected.id,
            start: rejected.ijinDate,
            end: rejected.ijinEnd,
            status: rejected.ijinStatus,
            reason: rejected.reason
        }

        //create notification for related operator
        await NotificationRepository.create({userId: approved.userId, type: "IJIN", title: `Permintaan ijin tanggal ${rejected.ijinDate.toLocaleDateString()} ditolak`})

        return result
    }
}