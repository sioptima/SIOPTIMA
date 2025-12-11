import { IjinService } from "@/src/server/modules/ijin/ijin-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
        await requireRole("OPERATOR");
        const data = await request.json();
        const result = await IjinService.create(data);
        return Response.json(
          {
           success: true,
           message: "Success" ,
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

export async function GET(request) {
    try {
      await requireRole("OPERATOR");
      const searchParams = request.nextUrl.searchParams;
      const parameter = {
        page: searchParams.get("page") || 1,
        size: searchParams.get("limit") || 5,
      }
  
      const result = await IjinService.getMine(parameter);
      return Response.json({
         success: true, 
         message: "Records retrieved" ,
         data: result.result,
         pagination: {
          page: result.paging.current_page,
          limit: result.paging.size,
          total: result.paging.total,
          totalPage: result.paging.total_page
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