import { z } from "zod"

export class RoleValidation {
    //create role body request validation
    static CREATE = z.object({
        name: z.string().max(100, "Maximum characters allowed is 100"),
    })
}