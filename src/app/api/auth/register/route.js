import { requireRole } from "@/src/server/utils/auth";
import { UserService } from "@/src/server/modules/user/user-service.js";

export async function POST(request) {
    try {
        await requireRole("ADMIN");
        const data = await request.json();
        const result = await UserService.register(data);
        return Response.json({
           success: true, 
           message: "User registered successfully" ,
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