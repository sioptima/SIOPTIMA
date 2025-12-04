import { ReportService } from "@/src/server/modules/report/report-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
      await requireRole("OPERATOR");
      const data = await request.formData();
      const result = await ReportService.create(data);
      return Response.json({
         success: true, 
         message: "Report created" ,
         data: result
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { 
          success: error.success || false,
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

      const result = await ReportService.getAll(parameter);
      return Response.json({
         success: true, 
         message: "Reports retrieved" ,
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