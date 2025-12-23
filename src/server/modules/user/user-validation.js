import { z } from "zod"

export class UserValidation {

    static REGISTER = z.object({
        username: z.string().min().max(100),
        password: z.string().min().max(100),
        role: z.string().toUpperCase()
                .pipe(z.enum(["ADMIN", "OPERATOR", "HRD"], "Invalid query")),
        email: z.string().max(30).email().optional(),
        site: z.string().max(100).optional(),
        status: z.string().max(20).toUpperCase()
                .pipe(z.enum(["ACTIVE", "INACTIVE"]))
                .optional(),
        name: z.string().max(35).optional()
    })

    static LOGIN = z.object({
        username: z.string().min(1, "Name is required").max(100),
        password: z.string().min(1, "Password is required").max(100),
    })

    static GET = z.object({
        page: z.number("Invalid query"),
        size: z.number("Invalid query"),
        roleName: z.string().toUpperCase()
                   .pipe(z.enum(["ADMIN", "OPERATOR", "HRD"], "Invalid query"))
                   .optional()
    })

    static UPDATE = z.object({
        id: z.coerce.number().int(),
        data: z.object({
            name: z.string().max(35).optional(),
            email: z.string().max(30).email().optional(),
            role: z.string().toUpperCase()
                .pipe(z.enum(["ADMIN", "OPERATOR", "HRD"], "Invalid query")),
            //siteId: z.coerce.number().int().optional(),
            site: z.string().max(100).optional(),
            status: z.string().max(20).toUpperCase()
                    .pipe(z.enum(["ACTIVE", "INACTIVE"]))
                    .optional(),
        })
    })

    static ASSIGN = z.object({
        userId: z.number("Invalid request").int(),
        siteId: z.number("Invalid request").int(),
    })

    static GETBYID = z.object({
        id: z.coerce.number().int()
    })

    static HARDDELETE = z.object({
        id: z.coerce.number().int()
    })

}