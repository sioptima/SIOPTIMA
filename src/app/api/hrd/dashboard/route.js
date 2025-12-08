import { DashboardService } from "@/src/server/modules/dashboard/dashboard-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
  try {
    await requireRole("HRD");
    const result = await DashboardService.hrdSummary();
    return Response.json({
       success: true, 
       message: "Summary retrieved" ,
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