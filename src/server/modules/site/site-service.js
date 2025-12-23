import { ResponseError } from "@/src/lib/response-error";
import { SiteRepository } from "./site-repository";
import { SiteValidation } from "./site-validation";
import { timeSince } from "../../utils/helper";

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
            longitude: createRequest.longitude,
            capacity: createRequest.capacity,
            status: createRequest.status
        });
        if (!newSite) {
            throw new ResponseError(500, "Failed to create site");
        }

        return {
            id: newSite.id,
            name: newSite.name,
            operators: newSite._count.users,
        }
    }

    static async getAll(parameter) {
        const getRequest = SiteValidation.GET.parse(parameter);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const { page, size } = getRequest;

        const sites = await SiteRepository.findAll(getRequest);
        if (sites.count === 0) {
            throw new ResponseError (200, "No site found")
        }

        const sitesData = sites.sites.map(s => ({
            id: s.id,
            name: s.name,
            city: s.address?.city || "-",
            location: s.address?.city || "-",
            address: s.address?.address || "-",
            capacity: "0",
            province: s.address?.province || "-",
            latitude: s.address?.latitude || "-",
            longitude: s.address?.longitude || "-",
            supervisor: "...",
            contact: "...",
            operators: s._count.users,
            status: s.status.toLowerCase(),
            lastReport: !!s.report.length ? timeSince(s.report[0]?.laporanDate) : "-"
        }))

        return {
            data: {
                sites: sitesData,
                totalSites: sites.count,
                activeSites: sites.activeSites,
                maintenanceSites: sites.maintenanceSites,
                totalOperators: sites.totalOperators
            },
            paging: {
                size: size,
                total_page: Math.ceil(sites.count / size),
                current_page: page,
            }
        }
    }

    static async getById(parameter){
        const validatedParameter = SiteValidation.GETBYID.parse(parameter);

        const site = await SiteRepository.findById({siteId: validatedParameter.id})
        if(!site){
            throw new ResponseError (200, "No site found")
        }
        //format response
        const recordTransform = {
            id: site.id,
            name: site.name,
            city: site.address.city,
            address: site.address.address,
            province: site.address.province,
            operators: site._count.users,
            status: site.status,
            lastReport: (!!site.report?.length) ? timeSince(site.report[0].laporanDate) : "No report yet",
            createdAt: site.createdAt,
            updatedAt: site.updatedAt,
        }

        return recordTransform;
    }

    static async updateSite(request){
        //validate request
        const validatedRequest = SiteValidation.UPDATE.parse(request);

        //check if site exist
        const site = await SiteRepository.findById({siteId: validatedRequest.id});
        if (!site){
            throw new ResponseError(200, "Site to update does not exist")
        }

        //update site
        const updatedSite = await SiteRepository.update({
            siteId: validatedRequest.id,
            name: (validatedRequest.data.name) ? validatedRequest.data.name : undefined,
            city: (validatedRequest.data.city) ? validatedRequest.data.city : undefined,
            address: (validatedRequest.data.address) ? validatedRequest.data.address : undefined,
            province: (validatedRequest.data.province) ? validatedRequest.data.province : undefined,
            status: (validatedRequest.data.status) ? validatedRequest.data.status : undefined,
        })

        //format response
        const siteTransform = {
            id: updatedSite.id,
            name: updatedSite.name,
            city: updatedSite.address.city,
            address: updatedSite.address.address,
            province: updatedSite.address.province,
            operators: updatedSite._count,
            status: updatedSite.status,
            lastReport: (!!site.report?.length) ? timeSince(site.report[0]?.laporanDate) : "No report yet",
        }

        return  siteTransform;
    }

    static async hardDelete(parameter){
        const validatedParam = SiteValidation.DELETE.parse(parameter);
        const isDeleted = await SiteRepository.hardDeleteById({siteId: validatedParam.id})
        if(isDeleted){
            return;
        } else {
            throw new ResponseError(200, "Site you are trying to delete does not exist")
        }
    }
}