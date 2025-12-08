import { ProfileService } from "@/src/server/modules/profile/profile-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request, {params}) {
    try {
      await requireRole("HRD");
      const { userId } = await params;//grab query parameter(/:id)
      const data = await request.formData();
      const result = await ProfileService.update({id: userId, data:data});
      return Response.json({
         success: true, 
         message: "User profile updated successfully" ,
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