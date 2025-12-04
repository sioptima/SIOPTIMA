import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export class PresensiValidation {

    static CHECKIN = z.object({
        lat: z.coerce.number(),
        long: z.coerce.number(),
        selfie: z.instanceof(File)
        .refine(
          (file) => file.size <= MAX_FILE_SIZE, 
          "Maximum size for file is 5 MB")
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
        timestamp: z.string().datetime()
    });
    
}