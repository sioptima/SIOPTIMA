import { UserService } from "@/src/server/modules/user/user-service.js";

// app/api/login/route.js
export async function POST(request) {
  try {
    const data = await request.json();
    const result = await UserService.login(data);
    return Response.json({
       success: true, 
       message: "User logged in successfully" ,
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


