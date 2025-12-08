import { ProfileService } from "@/src/server/modules/profile/profile-service";
import { getUser, requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
    try {
      await requireRole("OPERATOR");
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

export async function PATCH(request) {
  try {
    await requireRole("OPERATOR");
    const user = await getUser()
    const data = await request.json();
    const result = await ProfileService.updatePartial({id: user.userId, data:data});
    return Response.json({
       success: true, 
       message: "Profile updated successfully" ,
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