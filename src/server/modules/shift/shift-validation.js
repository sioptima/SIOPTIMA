import { z } from "zod"

export class ShiftValidation {

    static CREATE = z.object({
        date: z.string().date(),
        time: z.string().time(),
        end: z.string().time(),
        userId: z.array(z.number().int()),
        siteId: z.number().int(),
    })
    
    static GETASSIGNABLE = z.object({
        page: z.coerce.number("Invalid parameter").int(),
        size: z.coerce.number("Invalid parameter").int(),
        date: z.string().date()
    })

    static GETBYDATE = z.object({
        page: z.coerce.number("Invalid parameter").int(),
        size: z.coerce.number("Invalid parameter").int(),
        date: z.string().date()
    })

    static GET = z.object({
        page: z.coerce.number("Invalid parameter").int(),
        size: z.coerce.number("Invalid parameter").int()
    })

    static GETALL = z.object({
        page: z.coerce.number("Invalid parameter").int(),
        size: z.coerce.number("Invalid parameter").int()
    })

}