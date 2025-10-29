import { z } from "zod"

export class RoleValidation {
    //create role body request validation
    static CREATE = z.object({
        name: z.string(),
    })
}