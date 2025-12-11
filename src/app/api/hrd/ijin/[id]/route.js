import { IjinService } from "@/src/server/modules/ijin/ijin-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request, {params}) {
    try {
      await requireRole("HRD");
      const { id } = await params;//grab query parameter(/:id)
      const result = await IjinService.getById({id: id});
      return Response.json({
         success: true, 
         message: "Record retrieved" ,
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