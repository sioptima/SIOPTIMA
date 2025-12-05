import bcrypt from "bcryptjs";
import { createSession } from "@/src/server/utils/sessions.js";
import { UserValidation } from "./user-validation.js";
import { UserRepository } from "./user-repository.js";
import { ResponseError } from "@/src/lib/response-error.js";
import { hashPassword } from "@/src/server/utils/password.js";
import { SiteRepository } from "../site/site-repository.js";

export class UserService {

    static async register(request) {
        // validate request
        const registerRequest = UserValidation.REGISTER.parse(request);
        if(!registerRequest){
            throw new ResponseError(400, "Invalid request data");
        }
        
        const role = await UserRepository.getRoleByName(registerRequest.role);
        if (!role) {
            throw new ResponseError (200, "Role not found")
        }
        
        const checkUsername = await UserRepository.findByUsername(registerRequest.username);
        if (checkUsername) {
            throw new ResponseError(401,"Username already exists");
        }
        
        const hashedPassword = await hashPassword(registerRequest.password);
        
        const newUser = await UserRepository.create({
            username: registerRequest.username,
            password: hashedPassword,
            role: role.id,
        });
        if (!newUser) {
            throw new ResponseError(500, "Failed to create user");
        }

        return {
            id: newUser.id,
            role: role.name
        }
    }

    static async login(request) {
        // validate request
        const loginRequest = UserValidation.LOGIN.parse(request);
        if (!loginRequest){
            throw new ResponseError (400, "Bad request")
        }

        const user = await UserRepository.findByUsername(loginRequest.username);
        if (!user) {
            throw new ResponseError(401, "Invalid username or password");
        }

        const passwordIsValid = await bcrypt.compare(loginRequest.password, user.password);
        if (!passwordIsValid) {
            throw new ResponseError(401, "Invalid username or password");
        }

        const role =await UserRepository.getRoleById(user.roleId)

        await createSession(user.id, role.name)
    
        return {
            id: user.id,
            role: role.name
        }
    }

    static async getAll(page, size, roleName) {
        const queryData = { page, size, roleName }
        const getRequest = UserValidation.GET.parse(queryData);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        if (!queryData.roleName){
            const users = await UserRepository.findAll(queryData);
            return {
                data: users,
                paging: {
                    size: size,
                    total_page: Math.ceil(users.total / size),
                    current_page: page,
                }
            }
        }

        const users = await UserRepository.findByRole(queryData)
        if (!users) {
            throw new ResponseError (200, "No site found")
        }
        
        return {
            query: users,
            paging: {
                size: size,
                total_page: Math.ceil(users.total / size),
                current_page: page,
            }
        }
    }

    static async assignUserToSite(request) {
        //validate
        const assignRequest = UserValidation.ASSIGN.parse(request);

        const user = await UserRepository.findById(assignRequest.userId)
        if (!user){
            throw new ResponseError(200, "User not found")
        }

        const site = await SiteRepository.findById({siteId: assignRequest.siteId})
        if (!site){
            throw new ResponseError (200, "Site not found")
        }

        const response = await UserRepository.assignUser(assignRequest)
        
        return {
            username: response.username,
            site: response.sites
        }
    }

    static async unassignUserFromSite(request) {
        const unassignRequest = UserValidation.ASSIGN.parse(request);
        if(!unassignRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        const user = await UserRepository.findById(unassignRequest.userId)
        if (!user){
            throw new ResponseError(200, "User not found")
        }

        const site = await SiteRepository.findById({siteId: unassignRequest.siteId})
        if (!site){
            throw new ResponseError (200, "Site not found")
        }

        const response = await UserRepository.unassignUser(unassignRequest)
        
        return {
            username: response.username,
            site: response.sites
        }
    }
}