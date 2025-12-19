import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request) {
  try {
    await requireRole("ADMIN");
    const result = await UserService.getCount();
    return Response.json({
       success: true, 
       message: "User overview count retrieved" ,
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