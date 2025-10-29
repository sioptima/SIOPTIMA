import { RoleService } from "@/server/modules/role/role-service.js";

// this file is used for dev only it will be deleted
export async function POST(request) {
    try {
        const data = await request.json();
        const role = await RoleService.create(data);
        return Response.json({ 
          error: false,
          message: "Role created successfully", 
          result: role, 
        },
      );
    } catch (error) {
      return Response.json({ 
         message: error.message || "Internal Server Error",
         status: error.status || 500,
        }
      );
    }
}