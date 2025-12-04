import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
    try {
        await requireRole("ADMIN");
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page") || 1;
        const size = searchParams.get("limit") || 5;
        const role = searchParams.get("role") || null;

        const result = await UserService.getAll(parseInt(page), parseInt(size), role?.toUpperCase());
        return Response.json(
          {
           success: true, 
           message: "Users retrieved" ,
           data: result.data.users,
           pagination: {
            page: result.paging.current_page,
            limit: result.paging.size,
            total: result.data.total,
            totalPages: result.paging.total_page,
           }
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