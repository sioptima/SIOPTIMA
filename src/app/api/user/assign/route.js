import { ResponseError } from "@/src/lib/response-error";
import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request) {
    try {
        const checkRole = await requireRole("ADMIN");
        if (!checkRole){
          throw new ResponseError(403, "Unauthorized")
        };

        const data = await request.json();
        const response = await UserService.assignUserToSite(data);
        return Response.json(
          {
           success: true,
           message: "User assigned" ,
           result: response
          },
          { status: 200 }
        );
    } catch (error) {

      return Response.json( 
         {
          success: error.success,
          message: error.errors || error.message || "Internal Server Error"},
         {status: error.status || 500} 
      );
    }
}

export async function DELETE(request) {
    try {
        const checkRole = await requireRole("ADMIN");
        if (!checkRole){
          throw new ResponseError(403, "Unauthorized")
        };

        const data = await request.json();
        const response = await UserService.unassignUserFromSite(data);
        return Response.json(
          { 
           success: true,
           message: "User unassigned" ,
           result: response
          },
          { status: 200 }
        );
    } catch (error) {

      return Response.json( 
         {
          success: error.success,
          message: error.errors || error.message || "Internal Server Error"},
         {status: error.status || 500} 
      );
    }
}