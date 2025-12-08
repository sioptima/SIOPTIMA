import { ProfileService } from "@/src/server/modules/profile/profile-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
    try {
      await requireRole("HRD");
      const result = await ProfileService.getCurrent();
      return Response.json({
         success: true, 
         message: "Profile retrieved successfully" ,
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