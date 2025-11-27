import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export class ReportValidation {

    static CREATE = z.object({
        volt: z.coerce.number(),
        tds: z.coerce.number(),
        phLevel: z.coerce.number(),
        flowRate: z.coerce.number(),
        ec: z.coerce.number(),
        time: z.string().time(),
        date: z.coerce.string().date(),
        ampere: z.coerce.number(),
        images: z.instanceof(File).array()
                  .refine(
                    (file) => file.length > 0, "No files selected"
                  )
                  .refine(
                    (file) => file.length <= 10, "Maximum files is 10"
                  )
                  .refine(
                    (file) => file.every((file) => file.size <= MAX_FILE_SIZE), 
                    "Maximum size for each file is 5 MB")
                  .refine(
                    (file) => file.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
                    "Only .jpg, .jpeg, .png and .webp formats are supported."
                  ),
        outFilterStatus: z.enum(["Normal", "Broken", "Maintenance"]),
        agitatorStatus: z.enum(["Normal", "Broken", "Maintenance"]),
        settleStatus: z.enum(["Normal", "Broken", "Maintenance"]),
        additionalNotes: z.string().max(1024),
        siteName: z.string().max(75)
    })

    static GET = z.object({
      page: z.coerce.number("Invalid parameter"),
      size: z.coerce.number("Invalid parameter")
    })

    static GETBYID = z.coerce.number("Invalid parameter")

}