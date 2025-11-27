import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request) {
    try {
        await requireRole("ADMIN");
        const data = await request.json();
        const result = await UserService.assignUserToSite(data);
        return Response.json(
          {
           success: true,
           message: "User assigned" ,
           data: result
          },
          { status: 200 }
        );
    } catch (error) {
      return Response.json(
        { 
          success: error.success,
          code: error.status || 500,
          message: error.issues || error.message || "Internal Server Error" },
        { status: error.status || 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        await requireRole("ADMIN");
        const data = await request.json();
        const result = await UserService.unassignUserFromSite(data);
        return Response.json(
          { 
           success: true,
           message: "User unassigned" ,
           data: result
          },
          { status: 200 }
        );
    } catch (error) {
      return Response.json(
        { 
          success: error.success,
          code: error.status || 500,
          message: error.issues || error.message || "Internal Server Error" },
        { status: error.status || 500 }
        );
    }
}