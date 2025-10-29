import { ResponseError } from "@/lib/response-error.js";
import { RoleRepository } from "./role-repository.js"
import { RoleValidation } from "./role-validation.js";

export class RoleService {

    static async create(request) {
        // validate request n check if it exist
        const createRequest = RoleValidation.CREATE.parse(request)
        const role = await RoleRepository.getByName(createRequest.name)
        if (role){
            throw new ResponseError (409, "Role already exist")
        }
        // create role
        const result = await RoleRepository.create(createRequest.name);
        if(!result){
            throw new ResponseError(500, 'Role creation failed');
        }
        
        return result;
    }

}