import bcrypt from "bcrypt";
import { createSession } from "@/server/auth/sessions.js";
import { UserValidation } from "./user-validation.js";
import { UserRepository } from "./user-repository.js";
import { ResponseError } from "@/lib/response-error.js";

export class UserService {

    static async register(request) {
        // validate request
        const registerRequest = UserValidation.REGISTER.parse(request);
        if(!registerRequest){
            throw new ResponseError(400, "Invalid request data");
        }
        
        const role = await UserRepository.getRoleByName(registerRequest.role);
        if (!role) {
            throw new ResponseError (404, "Role not found")
        }
        
        const checkUsername = await UserRepository.findByUsername(registerRequest.username);
        if (checkUsername) {
            throw new ResponseError(401,"Username already exists");
        }
        const hashedPassword = await bcrypt.hash(registerRequest.password, 10);
        
        const newUser = await UserRepository.create({
            username: registerRequest.username,
            password: hashedPassword,
            role: role.id,
        });
        if (!newUser) {
            throw new ResponseError(500, "Failed to create user");
        }
        
        await createSession(newUser.id, role.name);

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
            throw new ResponseError(401, "User not found");
        }

        const passwordIsValid = await bcrypt.compare(loginRequest.password, user.password);
        if (!passwordIsValid) {
            throw new ResponseError(401, "Invalid password");
        }

        const role =await UserRepository.getRoleById(user.roleId)

        await createSession(user.id, role.name)
    
        return {
            id: user.id,
            role: role.name
        }
    }
//
//    static async getByApplication(applicationId){
//
//        const result = await UserRepository.findByApplication(applicationId);
//
//        return result;
//    }
//    
//    static async assignRoleToUser(data){
//
//        const result = UserRepository.assignRole(data);
//
//        return result;
//    }

}