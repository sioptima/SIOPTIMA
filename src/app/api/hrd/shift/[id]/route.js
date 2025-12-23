import { ShiftService } from "@/src/server/modules/shift/shift-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request, {params}) {
    try {
      await requireRole("HRD");
      const { id } = await params;//grab query parameter(/:id)
      const data = await request.json();
      const result = await ShiftService.update({id: id, data:data});
      return Response.json({
         success: true, 
         message: "Shift updated successfully" ,
         data: result,
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { 
          success: error.success,
          code: error.status || 500,
          message: error.issues || error.message || "Internal Server Error",
          data: error.data || undefined
        },
        { status: error.status || 500 }
        );
    }
  }

  export async function DELETE(request, {params}){
    try {
      await requireRole("HRD");
      const { id } = await params;//grab query parameter(/:id)
      await ShiftService.hardDelete({id: id});
      return Response.json({
         success: true, 
         message: "Shift deleted successfully"
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { 
          success: error.success,
          code: error.status || 500,
          message: error.issues || error.message || "Internal Server Error",
        },
        { status: error.status || 500 }
        );
    }
  }