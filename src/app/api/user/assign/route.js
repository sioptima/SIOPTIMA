import { ResponseError } from "@/src/lib/response-error";
import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
    try {
        const checkRole = await requireRole("ADMIN");
        if (!checkRole){
          throw new ResponseError(403, "Unauthorized")
        };

        const data = await request.json();
        const response = await UserService.assignSite(data);
        return Response.json(
          { 
           message: "User assigned" ,
           result: {
            response
           }
          },
          { status: 200 }
        );
    } catch (error) {

      return Response.json( 
         {message: error.errors || error.message || "Internal Server Error"},
         {status: error.status || 500} 
      );
    }
}