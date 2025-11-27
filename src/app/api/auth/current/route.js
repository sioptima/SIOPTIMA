import { getUser } from "@/src/server/utils/auth";

export async function GET() {
    try {
      const session = await getUser();
      return Response.json(
        {
         success: true, 
         message: "User retrieved" ,
         data: {
          userId: session?.userId,
          role: session?.role
         }
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