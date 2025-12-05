import { ResponseError } from "@/src/lib/response-error";
import { UserRepository } from "../user/user-repository";
import { ShiftRepository } from "./shift-repository";
import { ShiftValidation } from "./shift-validation";
import { SiteRepository } from "../site/site-repository";

export class ShiftService {

    static async create(request) {
        // validate request
        const createRequest = ShiftValidation.CREATE.parse(request);

        const user = await UserRepository.findById({userId: createRequest.userId});
        if (!user) {
            throw new ResponseError(200, `User by id ${createRequest.userId} does not exist`)
        }

        const site = await SiteRepository.findById({siteId: createRequest.siteId});
        if (!site) {
            throw new ResponseError(200, `Site by id ${createRequest.siteId} does not exist`)
        }

        //check if user is assigned to the requested site
        const isAssigned = await UserRepository.isAssigned(createRequest)
        if (isAssigned.sites.length === 0){
            throw new ResponseError(200, `User ${user.username} (id:${createRequest.userId}) is not assigned to site ${site.name} (id:${createRequest.siteId})`)
        }

        // create shift
        const shift = await ShiftRepository.create(createRequest);
        if (!shift) {
            throw new ResponseError(500, "Failed to create shift");
        }

        return {
            date: shift.shiftDate.toLocaleDateString(),
            time: shift.shiftDate.toLocaleTimeString(),
            user: shift.user.username,
            site: shift.site.name,
        }
    }
}