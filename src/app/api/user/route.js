import { ResponseError } from "@/src/lib/response-error";
import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
    try {
        const checkRole = await requireRole("ADMIN");
        if (!checkRole){
          throw new ResponseError(403, "Unauthorized")
        };
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page") || 1;
        const size = searchParams.get("size") || 5;
        const role = searchParams.get("role") || null;

        const users = await UserService.getAll(parseInt(page), parseInt(size), role?.toUpperCase());
        return Response.json(
          { 
           message: "Users retrieved" ,
           result: {
            users
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