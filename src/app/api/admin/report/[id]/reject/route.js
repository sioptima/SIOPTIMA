import { ReportService } from "@/src/server/modules/report/report-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request, {params}) {
    try {
      await requireRole("ADMIN");
      const { id } = await params;//grab query parameter(/:id)
      const result = await ReportService.reject({id: id});
      return Response.json({
         success: true, 
         message: "Report rejected successfully" ,
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