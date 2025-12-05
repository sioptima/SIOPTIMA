import { z } from "zod"

export class SiteValidation {

    static CREATE = z.object({
        name: z.string().min(1, "Name is required").max(50, "Name character limit is 50"),
        city: z.string().min(1, "City is required").max(50, "City character limit is 50"),
        province: z.string().min(1, "Province is required").max(50, "Province character limit is 50"),
        address: z.string().min(1, "Address is required").max(200, "Address max character limit is 200"),
        latitude: z.number("Invalid latitude"),
        longitude: z.number("Invalid longitude")
    })
    
    static GET = z.object({
        page: z.coerce.number("Invalid parameter"),
        size: z.coerce.number("Invalid parameter")
    })

    static GETBYID = z.object({
        id: z.coerce.number("Invalid parameter"),
    })

}