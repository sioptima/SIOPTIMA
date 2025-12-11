import { z } from "zod"

export class ShiftValidation {

    static CREATE = z.object({
        date: z.string().date(),
        time: z.string().time(),
        end: z.string().time(),
        userId: z.array(z.number().int()),
        siteId: z.number().int(),
    })

}