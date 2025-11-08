import { z } from "zod"

export class SiteValidation {

    static CREATE = z.object({
        name: z.string().min(1, "Name is required").max(50, "Name character limit is 50"),
        address: z.string().min(1, "Address is required").max(200, "Address max character limit is 200"),
        latitude: z.number("Invalid latitude"),
        longitude: z.number("Invalid longitude")
    })
    
    static GET = z.object({
        page: z.number("Invalid query"),
        size: z.number("Invalid query")
    })

}