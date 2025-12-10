import { cookies } from "next/headers";
import { decrypt } from "@/src/server/utils/sessions";
import { ResponseError } from "@/src/lib/response-error";

export async function requireRole(role) {
    const cookie = (await cookies()).get('session')?.value;
    if(!cookie){
      throw new ResponseError(403, "Unauthorized")
    }
  
    const session = await decrypt(cookie);
    if(session.role !== "ADMIN"){
      if (session.role !== role){
        throw new ResponseError(403, "Unauthorized")
      }
    }
  }

  export async function getUser() {
    const cookie = (await cookies()).get('session')?.value;
    if(!cookie){
      throw new ResponseError(401, "Not logged in")
    }
    
    const session = await decrypt(cookie);
    if(!session){
      throw new ResponseError(403, "Invalid Credential")
    }
    return session;
    //session = {
    // userId: int
    // role: string; contain user's role name(admin/operator/hrd)
    //} see session.js for more information
  }