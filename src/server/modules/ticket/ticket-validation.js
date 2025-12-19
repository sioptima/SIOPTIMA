import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export class TicketValidation {

    static CREATE = z.object({
        site: z.string().max(100),
        category: z.string().toUpperCase()
                    .pipe(z.enum(["TECHNICAL", "OPERATIONAL", "MAINTENANCE", "EQUIPMENT", "INSTRUMENT", "SUPPLY", "SOFTWARE", "OTHER"])),
        title: z.string().max(100),
        description: z.string().max(350),
        priority: z.string().toUpperCase()
                    .pipe(z.enum(["HIGH", "MEDIUM", "LOW"])),
        image: z.instanceof(File)
        .refine(
          (file) => file.size <= MAX_FILE_SIZE, 
          "Maximum size for file is 5 MB")
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported."
        ).optional(),
    })
    
    static GETMYTICKETS = z.object({
        page: z.coerce.number().int(),
        size: z.coerce.number().int(),
        status: z.string().toUpperCase()
                 .pipe(z.enum(["OPEN", "PENDING", "RESOLVED"]))
                 .optional(),
        priority: z.string().toUpperCase()
                    .pipe(z.enum(["HIGH", "MEDIUM", "LOW"]))
                    .optional(),
        search: z.string().max(150).optional()
    })

    static GETBYID = z.object({
      id: z.coerce.number().int(),
    })

    static RESPOND = z.object({
      id: z.coerce.number().int(),
      request: z.object({
        ticketStatus: z.coerce.string().toUpperCase(),
        feedback: z.string().max(350)
      })
    })

    static GET = z.object({
      page: z.coerce.number("Invalid parameter").int(),
      size: z.coerce.number("Invalid parameter").int(),
    })
}