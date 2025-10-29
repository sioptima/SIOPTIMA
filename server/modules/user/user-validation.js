import { z } from "zod"

export class UserValidation {

    static REGISTER = z.object({
        username: z.string().min(5, "Username should have 5-25 characters").max(25, "Username should have 5-25 characters"),
        password: z.string().min(6, "Password should have at least 6 characters").max(20, "Password should have 6-20 characters"),
        role: z.string().optional(),
    })

    static LOGIN = z.object({
        username: z.string().min(1, "Name is required"),
        password: z.string().min(1, "Password is required"),
    })

}