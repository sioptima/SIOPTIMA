import { PresensiService } from "@/src/server/modules/presensi/presensi-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
  try {
    await requireRole("OPERATOR");
    const searchParams = request.nextUrl.searchParams;
    const parameter = {
      page: searchParams.get("page") || 1,
      size: searchParams.get("limit") || 5,
      month: searchParams.get("month") || null,
    }

    const result = await PresensiService.getMany(parameter);
    return Response.json({
       success: true, 
       message: "Attendance records retrieved" ,
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