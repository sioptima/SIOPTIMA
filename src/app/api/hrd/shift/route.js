import { ShiftService } from "@/src/server/modules/shift/shift-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
        await requireRole("HRD");
        const data = await request.json();
        const result = await ShiftService.create(data);
        return Response.json(
          {
           success: true,
           message: "Shift created" ,
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