import { PresensiService } from "@/src/server/modules/presensi/presensi-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
      await requireRole("OPERATOR");
      const data = await request.formData();
      const result = await PresensiService.checkOut(data);
      return Response.json({
         success: true, 
         message: "Check-out successful" ,
         data: result
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { 
          success: error.success || false,
          code: error.status || 500,
          message: error.issues || error.message || "Internal Server Error",
          data: error.data },
        { status: error.status || 500 }
        );
      }
}