import { ResponseError } from "@/lib/response-error";
import { decrypt } from "@/server/auth/sessions";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookie = cookies().get('session')?.value;
        const session = await decrypt(cookie);
        if (!session){
            throw new ResponseError(401, "Unauthorized")
        }
        return Response.json({ 
           message: "User retrieved" ,
           result: {
            userId: session?.userId,
            role: session?.role
           }
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