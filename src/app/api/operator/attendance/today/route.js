import { PresensiService } from "@/src/server/modules/presensi/presensi-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
  try {
    await requireRole("OPERATOR");

    const result = await PresensiService.getToday();
    return Response.json({
       success: true, 
       message: "Attendance records retrieved" ,
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