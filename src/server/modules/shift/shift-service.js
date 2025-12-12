import { ResponseError } from "@/src/lib/response-error";
import { UserRepository } from "../user/user-repository";
import { ShiftRepository } from "./shift-repository";
import { ShiftValidation } from "./shift-validation";
import { SiteRepository } from "../site/site-repository";
import { NotificationRepository } from "../notification/notification-repository";

export class ShiftService {

    static async create(request) {
        // validate request
        const createRequest = ShiftValidation.CREATE.parse(request);

        //check if each user exist
        const users = await UserRepository.findMultiple({userId: createRequest.userId})

        const site = await SiteRepository.findById({siteId: createRequest.siteId});
        if (!site) {
            throw new ResponseError(200, `Site by id ${createRequest.siteId} does not exist`)
        }

        // create shift -  only create for user that exist
        const shift = await ShiftRepository.create(createRequest, users);
        if (!shift) {
            throw new ResponseError(500, "Failed to create shift");
        }

        //create notification for related operator
        await NotificationRepository.bulkCreate({
            users: shift.user, 
            type: "SHIFT", 
            title: `Anda mempunyai shift baru pada tanggal ${shift.shiftDate.toLocaleDateString()} di ${shift.site.name}`})

        return {
            date: shift.shiftDate.toLocaleDateString(),
            time: shift.shiftDate.toLocaleTimeString(),
            user: shift.user.map(user => ({
                username: user.username
            })),
            site: shift.site.name,
        }
    }

    static async getAssignable(request) {
        // validate request
        const createRequest = ShiftValidation.GETASSIGNABLE.parse(request);

        //get assignable operator at given date
        const operators = await ShiftRepository.getAssignable(createRequest);

        const result = operators.eligibleOperators.map(operator => ({
            id: operator.id,
            username: operator.username,
            role: operator.role.name,
            name: operator.profile?.name || "-"
        }))

        return {
            result,
            paging: {
                size: createRequest.size,
                total: operators.count,
                total_page: Math.ceil(operators.count / createRequest.size),
                current_page: createRequest.page,
            }
        }
    }

    static async getByDate(request) {
        // validate request
        const createRequest = ShiftValidation.GETBYDATE.parse(request);

        //get array of shifts at given date
        const shifts = await ShiftRepository.getByDate(createRequest);

        const result = shifts.shifts.map(shift => ({
            id: shift.id,
            name: `${shift.shiftDate.toLocaleTimeString()} - ${shift.shiftEnd.toLocaleTimeString()}`,
            start: shift.shiftDate.toLocaleTimeString(),
            end: shift.shiftEnd.toLocaleTimeString(),
            site: shift.site.name,
            user: shift.user.map(user => ({
                username: user.username,
                name: user.profile?.name
            }))
        }))

        return {
            result,
            paging: {
                size: createRequest.size,
                total: shifts.count,
                total_page: Math.ceil(shifts.count / createRequest.size),
                current_page: createRequest.page,
            }
        }
    }
}