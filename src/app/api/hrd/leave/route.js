import { LiburService } from "@/src/server/modules/libur/libur-service";
import { requireRole } from "@/src/server/utils/auth";

//get ijin and libur submission
export async function GET(request) {
    try {
        await requireRole("HRD");
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page") || 1;
        const size = searchParams.get("limit") || 5;

        const result = await LiburService.getIjinLibur({page: parseInt(page), size: parseInt(size)});
        return Response.json(
          {
           success: true, 
           message: "Users retrieved" ,
           data: result.result,
           pagination: {
            page: result.paging.current_page,
            limit: result.paging.size,
            total: result.paging.total,
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