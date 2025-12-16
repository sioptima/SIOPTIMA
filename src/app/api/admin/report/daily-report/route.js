import { ReportService } from "@/src/server/modules/report/report-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
  try {
    await requireRole("ADMIN");
    const result = await ReportService.getToday();
    return Response.json({
       success: true, 
       message: "Daily report information retrieved" ,
       data: result,
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