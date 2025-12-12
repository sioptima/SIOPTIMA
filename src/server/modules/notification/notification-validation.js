import z from "zod";

export class NotificationValidation {

    static READ = z.object({
        id: z.coerce.number().int()
    })

}