import { ResponseError } from "@/src/lib/response-error";
import { timeSince, transformFormData } from "../../utils/helper";
import { UserRepository } from "../user/user-repository";
import { ProfileValidation } from "./profile-validation";
import { SiteRepository } from "../site/site-repository";
import { uploadImage } from "../../utils/uploadthing";
import { ProfileRepository } from "./profile-repository";
import { getUser } from "../../utils/auth";

export class ProfileService {

    static async getCurrent(){
        const user = await getUser();

        const profile = await ProfileRepository.getCurrent({userId: user.userId});
        if(!profile){throw new ResponseError(200, "This account does have a profile set up yet")}

        const result = {
            userId: profile.userId,
            name: profile.name,
            email: profile.email,
            site: profile.user.sites,
            initial: profile.name.slice(0,1).toUpperCase() || profile.user.username.slice(0,1).toUpperCase(),
            role: profile.user.role.name,
            phone: profile.phone,
            status: profile.user.status,
            joinDate: profile.user.createdAt.toLocaleDateString(),
            address: profile.user.profile?.address?.address || "-"
        }
        
        return result;
    }

    static async update(request){
        const object = {
            id: request.id,
            data: transformFormData(request.data)
        }

        //validate
        const validatedRequest = ProfileValidation.UPDATE.parse(object)

        //check if user exist
        const user = await UserRepository.findById({userId: validatedRequest.id});
        if(!user){
            throw new ResponseError(200, "No user found")
        }

        //check if site is in request then check if it exist in db
        let site;
        if(validatedRequest.data.site){ 
            site = await SiteRepository.findByName(validatedRequest.data.site)
        }

        //upload image to imagething
        let uploadImageData, image;
        if (validatedRequest.data.image){
            uploadImageData = await uploadImage(validatedRequest.data.image)
            image = uploadImageData.data.ufsUrl
        }

        const updatedUser = await ProfileRepository.update({
            userId: validatedRequest.id, 
            name: (validatedRequest.data.name) ? validatedRequest.data.name : undefined,
            email: (validatedRequest.data.email) ? validatedRequest.data.email : undefined,
            role: (validatedRequest.data.role) ? validatedRequest.data.role : undefined,
            //siteId: (validatedRequest.data.siteId && validatedRequest.data.site) ? validatedRequest.data.siteId :undefined,
            site: (validatedRequest.data.site && site) ? validatedRequest.data.site : undefined,
            status: (validatedRequest.data.status) ? validatedRequest.data.status : undefined,
            birthDate: (validatedRequest.data.birthDate) ? new Date(validatedRequest.data.birthDate) : undefined,
            address: (validatedRequest.data.address) ? validatedRequest.data.address : undefined,
            city: (validatedRequest.data.city) ? validatedRequest.data.city : undefined,
            province: (validatedRequest.data.province) ? validatedRequest.data.province : undefined,
            image: (validatedRequest.data.image && image) ? image : undefined,
            phone: (validatedRequest.data.phone) ? validatedRequest.data.phone : undefined,
        })

        const profile = updatedUser.profile;
        const address = profile.address;
        const sites = updatedUser.sites;
        const role = updatedUser.role;
        const req = validatedRequest.data;

        //format result, only return updated field
        const result = {
            id: updatedUser.id,
            name: (req.name && profile?.name) ? profile.name : undefined,
            email: (req.email && profile?.email) ? profile.email : undefined,
            role: (req.role && role.name) ? role.name : undefined,
            site: (req.site && sites.length !== 0) ? sites[0].name : undefined,
            status: (req.status && updatedUser.status) ? updatedUser.status : undefined,
            birthDate: (req.birthDate && profile?.birthDate) ? profile.birthDate : undefined,
            address: (req.address && profile?.address.address) ? address : undefined,
            city: (req.city && address.city) ? address.city : undefined,
            lastActive: (updatedUser.activity.length !== 0) ? timeSince(updatedUser.activity[0].createdAt) : "-",
            initial: (profile?.name) ? profile.name.slice(0,1).toUpperCase() : updatedUser.username.slice(0,1).toUpperCase(),
            phone: (req.phone && profile?.phone) ? profile.phone : undefined,
        };

        if(!site && validatedRequest.data.site){
            throw new ResponseError(200, "User updated but failed to update site information as it does not exist", true, result)
        };

        if(!image && validatedRequest.data.image){
            throw new ResponseError(200, "User updated but failed to upload image", true, result)
        };

        return result;
    }

    static async updatePartial(request){
        //validate
        const validatedRequest = ProfileValidation.UPDATE.parse(request)

        //check if user exist
        const user = await UserRepository.findById({userId: validatedRequest.id});
        if(!user){
            throw new ResponseError(200, "No user found")
        }

        const updatedUser = await ProfileRepository.update({
            userId: validatedRequest.id, 
            name: (validatedRequest.data.name) ? validatedRequest.data.name : undefined,
            email: (validatedRequest.data.email) ? validatedRequest.data.email : undefined,
            phone: (validatedRequest.data.phone) ? validatedRequest.data.phone : undefined,
        })

        const profile = updatedUser.profile;
        const req = validatedRequest.data;

        //format result, only return updated field
        const result = {
            id: updatedUser.id,
            name: (req.name && profile?.name) ? profile.name : undefined,
            email: (req.email && profile?.email) ? profile.email : undefined,
            phone: (req.phone && profile?.phone) ? profile.phone : undefined,
        };

        return result;
    }
}