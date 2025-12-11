import z from "zod";

export class IzinValidation {

    static CREATE = z.object({
        start: z.string().date(),
        end: z.string().date(),
        reason: z.string().max(250)
    })

    static GETMANY = z.object({
        page: z.coerce.number().int(),
        size: z.coerce.number().int()
    })

    static GETBYID = z.object({
        id: z.coerce.number().int()
    })

    static APPROVE = z.object({
        id: z.coerce.number().int()
    })
}