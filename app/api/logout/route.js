import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("session");
  return Response.json({ 
    message: "User logged out",
    status: 200 
});
}