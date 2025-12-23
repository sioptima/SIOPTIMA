import bcrypt from "bcryptjs";
import { createSession } from "@/src/server/utils/sessions.js";
import { UserValidation } from "./user-validation.js";
import { UserRepository } from "./user-repository.js";
import { ResponseError } from "@/src/lib/response-error.js";
import { hashPassword } from "@/src/server/utils/password.js";
import { SiteRepository } from "../site/site-repository.js";
import { getUser } from "../../utils/auth.js";
import { timeSince } from "../../utils/helper.js";

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

        let site;
        if (registerRequest.site){
            site = await SiteRepository.findByName(registerRequest.site)
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
            email: (registerRequest.email) ? registerRequest.email : undefined,
            siteName: (site?.name) ? site.name : undefined,
            status: (registerRequest.status) ? registerRequest.status : undefined,
            name: (registerRequest.name) ? registerRequest.name : undefined, 
        });
        if (!newUser) {
            throw new ResponseError(500, "Failed to create user");
        }

        const resultTransform = {
            id: newUser.id,
            username: newUser.username,
            name: (newUser.profile?.name) ? newUser.profile.name : "-",
            email: (newUser.profile?.email) ? newUser.profile.email : "-",
            role: newUser.role.name,
            site: (!!newUser.sites.length) ? newUser.sites[0].name : "-",
            status: newUser.status,
            lastActive: (newUser.activity.length) ? timeSince(newUser.activity[0].createdAt) : "-",
            initial: (newUser.profile?.name) ? newUser.profile.name.slice(0,1).toUpperCase() : newUser.username.slice(0,1).toUpperCase(),
        }

        if(!site && registerRequest.site) {
            throw new ResponseError(200, "Created user but the site you entered does not exist", true, resultTransform)
        }
        return resultTransform;
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

        let users; //if role not specified then take all
        if (!queryData.roleName){
            users = await UserRepository.findAll(queryData);
        } else {
            users = await UserRepository.findByRole(queryData)
        }

        if (!users) {
            throw new ResponseError (200, "No user found")
        }

        //format result
        const usersTransform = users.users.map(user => ({
            id: user.id,
            username: user.username,
            name: (user.profile?.name) ? user.profile.name : user.username,
            email: (user.profile?.email) ? user.profile.email : "-",
            role: user.role.name.toLowerCase(),
            site: (!!user.sites.length) ? `${user.sites[0].name}` : "-", //frontend cannot handle array yet so just send a string; or map array to a string..
            status: (user.status) ? user.status.toLowerCase() : "-",
            lastActive: (!!user.activity.length) ? timeSince(user.activity[0].createdAt) : "-",
            initial: (user.profile?.name) ? user.profile.name.slice(0,1).toUpperCase() : user.username.slice(0,1).toUpperCase(),
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        })
        )

        return {
            data: {
                usersTransform,
                totalUsers: users.total || "-",
                operatorsCount: users.operatorCount || "-",
                hrdsCount: users.hrdCount || "-",
                adminsCount: users.adminCount || "-"
            },
            paging: {
                size: size,
                total_page: Math.ceil(users.total / size),
                current_page: page,
                total: users.total
            }
        }
    }

    static async getAllForHrDashboard(page, size, roleName) {
        const queryData = { page, size, roleName }
        const getRequest = UserValidation.GET.parse(queryData);
        if(!getRequest){
            throw new ResponseError(400, "Invalid request data");
        }

        let users; //if role not specified then take all
        if (!queryData.roleName){
            users = await UserRepository.findAll(queryData);
        } else {
            users = await UserRepository.findByRole(queryData)
        }

        if (!users) {
            throw new ResponseError (200, "No user found")
        }

        //format result
        const usersTransform = users.users.map(user => ({
            id: user.id,
            name: user.profile?.name || user.username,
            employeeId: user.id,
            position: user.role.name,
            joinDate: user.createdAt,
            status: user.status.toLowerCase(),
            contact: user.profile?.phone || "-",
            totalHours: user.jamKerja[0]?.totalHours || 0
        })
        )

        return {
            data: {
                usersTransform,
                totalUsers: users.total || "-",
                operatorsCount: users.operatorCount || "-",
                hrdsCount: users.hrdCount || "-",
                adminsCount: users.adminCount || "-"
            },
            paging: {
                size: size,
                total_page: Math.ceil(users.total / size),
                current_page: page,
                total: users.total
            }
        }
    }

    static async getCount() {
        const users = await UserRepository.getCount();

        return users;
    }

    static async update(request){
        //validate
        const validatedRequest = UserValidation.UPDATE.parse(request)

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

        const updatedUser = await UserRepository.update({
            userId: validatedRequest.id, 
            name: (validatedRequest.data.name) ? validatedRequest.data.name : undefined,
            email: (validatedRequest.data.email) ? validatedRequest.data.email : undefined,
            role: (validatedRequest.data.role) ? validatedRequest.data.role : undefined,
            //siteId: (validatedRequest.data.siteId && validatedRequest.data.site) ? validatedRequest.data.siteId :undefined,
            site: (validatedRequest.data.site && site) ? validatedRequest.data.site : undefined,
            status: (validatedRequest.data.status) ? validatedRequest.data.status : undefined,
        })

        const profile = updatedUser.profile;
        const sites = updatedUser.sites;
        const role = updatedUser.role;

        //format result
        const result = {
            id: updatedUser.id,
            name: (profile?.name) ? profile.name : "-",
            email: (profile?.email) ? profile.email : "-",
            role: (role.name) ? role.name : "-",
            site: (sites.length !== 0) ? sites[0].name : "-",
            status: (updatedUser.status) ? updatedUser.status : "-",
            lastActive: (!!updatedUser.activity.length) ? timeSince(updatedUser.activity[0].createdAt) : "-",
            initial: (profile?.name) ? profile.name.slice(0,1).toUpperCase() : updatedUser.username.slice(0,1).toUpperCase()
        };

        if(!site && validatedRequest.data.site){
            throw new ResponseError(200, "User updated but failed to update site information as it does not exist", true, result)
        };

        return result;
    }

    static async assignUserToSite(request) {
        //validate
        const assignRequest = UserValidation.ASSIGN.parse(request);

        const user = await UserRepository.findById({userId: assignRequest.userId})
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

        const user = await UserRepository.findById({userId: unassignRequest.userId})
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

    static async getById(parameter) {

        //validate parameter
        const validatedParam = UserValidation.GETBYID.parse(parameter)

        //find userr
        const user = await UserRepository.findById({userId: validatedParam.id})
        if (!user){
            throw new ResponseError(200, "User does not exist")
        }

        const transformUser= {
            id: user.id,
            username: user.username,
            name: (user.profile?.name) ? user.profile.name : "-",
            email: (user.profile?.email) ? user.profile.email : "-",
            role: user.role.name,
            site: (!!user.sites?.length) ? user.sites[0] : "-", //frontend cannot handle array yet so just send a string
            status: (user.status) ? user.status : "-",
            lastActive: (!!user.activity?.length) ? timeSince(user.activity[0].createdAt) : "-",
            initial: (user.profile?.name) ? user.profile.name.slice(0,1).toUpperCase() : user.username.slice(0,1).toUpperCase(),
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }

        return transformUser
    }

    static async whoAmI() {
        const current = await getUser()

        //find userr
        const user = await UserRepository.whoAmI({userId: current.userId})
        if (!user){
            throw new ResponseError(200, "User does not exist")
        }

        const transformUser= {
            id: user.id,
            employeeId: user.id,
            username: user.username,
            name: (user.profile?.name) ? user.profile.name : user.username,
            email: (user.profile?.email) ? user.profile.email : "-",
            role: user.role.name,
            site: (user.shift.length !== 0) ? user.shift[0].site.name : "-", 
            initial: (user.profile?.name) ? user.profile.name.slice(0,1).toUpperCase() : user.username.slice(0,1).toUpperCase(),
            status: (user.status) ? user.status.toLocaleLowerCase() : "-",
            lastActive: (!!user.activity?.length) ? timeSince(user.activity[0].createdAt) : "-",
            joinDate: user.createdAt.toLocaleDateString(),
            phone: user.profile?.phone || "-",
            address: user.profile?.address || "-",
            shift: (user.shift.length !== 0) ? `${user.shift[0].shiftDate.toLocaleTimeString() - user.shift[0].shiftDate.toLocaleTimeString()}` : "-"
        }

        return transformUser
    }

    static async hardDelete(request) {
        const validatedReq = UserValidation.HARDDELETE.parse(request);

        //check if user to delete exist first
        const user = await UserRepository.findById({userId: validatedReq.id});
        if(!user){throw new ResponseError(200, "User you are trying to delete does not exist")}

        await UserRepository.hardDelete({userId: validatedReq.id});

        return;
    }

    static async getAssignedSites(){
        const user = await getUser();

        const assignedSites = await UserRepository.getAssignedSites({userId: user.userId});
        if(assignedSites.length === 0){throw new ResponseError(200, "No assigned site yet")}
        
        const result = assignedSites.map((site) => ({
            id: site.id,
            name: site.name,
            city: site.address.city,
            address: site.address.address,
            province: site.address.province,
            status: site.status
        }))

        return result
    }
}