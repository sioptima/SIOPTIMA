import { PresensiService } from "@/src/server/modules/presensi/presensi-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request, {params}) {
    try {
      await requireRole("HRD");
      const { id } = await params;//grab query parameter(/:id)
      const data = await request.json()
      const result = await PresensiService.reject({id: id, data: data});
      return Response.json({
         success: true, 
         message: "Attendance rejected successfully" ,
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