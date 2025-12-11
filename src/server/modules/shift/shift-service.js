import { ResponseError } from "@/src/lib/response-error";
import { UserRepository } from "../user/user-repository";
import { ShiftRepository } from "./shift-repository";
import { ShiftValidation } from "./shift-validation";
import { SiteRepository } from "../site/site-repository";

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

        return {
            date: shift.shiftDate.toLocaleDateString(),
            time: shift.shiftDate.toLocaleTimeString(),
            user: shift.user.map(user => ({
                username: user.username
            })),
            site: shift.site.name,
        }
    }
}