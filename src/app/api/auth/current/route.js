import { UserService } from "@/src/server/modules/user/user-service";

export async function GET() {
    try {
      const result = await UserService.whoAmI()
      return Response.json(
        {
         success: true, 
         message: "User retrieved" ,
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