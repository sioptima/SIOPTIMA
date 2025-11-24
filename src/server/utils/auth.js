import { cookies } from "next/headers";
import { decrypt } from "@/src/server/utils/sessions";

export async function requireRole(role) {
    const cookie = (await cookies()).get('session')?.value;
    if(!cookie){
      return false;
    }
  
    const session = await decrypt(cookie);
    if (session.role !== role){
      return false;
    }
  
    return true;
  }