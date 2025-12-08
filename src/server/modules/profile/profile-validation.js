import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export class ProfileValidation {
    static UPDATE = z.object({
        id: z.coerce.number().int(),
        data: z.object({
            role: z.string().toUpperCase()
                .pipe(z.enum(["ADMIN", "OPERATOR", "HRD"], "Invalid query"))
                .optional(),
            email: z.string().max(30).email().optional(),
            //siteId: z.coerce.number().int().optional(),
            site: z.string().max(100).optional(),
            status: z.string().max(20).toUpperCase()
                    .pipe(z.enum(["ACTIVE", "INACTIVE"]))
                    .optional(),
            name: z.string().max(35).optional(),
            birthDate: z.string().date().optional(),
            image: z.instanceof(File)
            .refine(
              (file) => file.size <= MAX_FILE_SIZE, 
              "Maximum size for file is 5 MB")
            .refine(
              (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
              "Only .jpg, .jpeg, .png and .webp formats are supported."
            ).optional(),
            address: z.string().max(250).optional(),
            city: z.string().max(50).optional(),
            province: z.string().max(50).optional(),
            phone: z.string().max(20).optional()
        })
    })
}
