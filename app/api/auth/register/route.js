import { UserService } from "@/server/modules/user/user-service.js";

export async function POST(request) {
    try {
        const data = await request.json();
        const user = await UserService.register(data);
        return Response.json({ 
           message: "User registered successfully" ,
           result: user
          },
          { status: 200 }
        );
    } catch (error) {
      return Response.json( 
         {message: error.message || "Internal Server Error"},
         {status: error.status || 500} 
      );
    }
}