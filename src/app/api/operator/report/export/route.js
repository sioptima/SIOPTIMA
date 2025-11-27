import { ReportService } from "@/src/server/modules/report/report-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request, {params}) {
    try {
      await requireRole("OPERATOR");
      const searchParams = request.nextUrl.searchParams;
      const parameter = {
        format: searchParams.get("format") || "pdf",
        startDate: searchParams.get("startDate") || null,
        endDate: searchParams.get("endDate") || null,
        status: searchParams.get("status") || all,
      }
      const result = await ReportService.getById(id);
      return Response.json({
         success: true, 
         message: "Report retrieved" ,
         data: result.reportTransform
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