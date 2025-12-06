import { z } from "zod"


export class UserValidation {

    static REGISTER = z.object({
        username: z.string().min(3, "Username should have 3-25 characters").max(30, "Username should have 5-30 characters"),
        password: z.string().min(6, "Password should have at least 6 characters").max(20, "Password should have 6-20 characters"),
        role: z.string().toUpperCase()
                .pipe(z.enum(["ADMIN", "OPERATOR", "HRD"], "Invalid query")),
        email: z.string().max(30).email().optional(),
        site: z.string().max(100).optional(),
        status: z.string().max(20).toUpperCase()
                .pipe(z.enum(["ACTIVE", "MAINTENANCE", "INACTIVE"]))
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

    static ASSIGN = z.object({
        userId: z.number("Invalid request").int(),
        siteId: z.number("Invalid request").int(),
    })

    static GETBYID = z.object({
        id: z.coerce.number().int()
    })

}