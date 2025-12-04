import { ResponseError } from "@/src/lib/response-error";
import { SiteRepository } from "./site-repository";
import { SiteValidation } from "./site-validation";

export class SiteService {

    static async create(request) {
        // validate request
        const createRequest = SiteValidation.CREATE.parse(request);
        if(!createRequest){
            throw new ResponseError(400, "Invalid request data");
        }
        
        const site = await SiteRepository.findByName(createRequest.name);
        if (site) {
            throw new ResponseError (409, "Site by this name already exist")
        }
        
        const newSite = await SiteRepository.create({
            name: createRequest.name,
            address: createRequest.address,
            city: createRequest.city,
            province: createRequest.province,
            latitude: createRequest.latitude,
            longitude: createRequest.longitude
        });
        if (!newSite) {
            throw new ResponseError(500, "Failed to create site");
        }

        return {
            name: newSite.name,
        }
    }

    static async getAll(parameter) {
        const getRequest = SiteValidation.GET.parse(parameter);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const { page, size } = getRequest;

        const sites = await SiteRepository.findAll(getRequest);
        if (!sites) {
            throw new ResponseError (200, "No site found")
        }

        return {
            data: sites,
            paging: {
                size: size,
                total_page: Math.ceil(sites.count / size),
                current_page: page,
            }
        }
    }
}