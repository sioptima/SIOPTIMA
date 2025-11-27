import { decrypt } from "@/src/server/utils/sessions";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { updateSessionExpiration } from "@/src/server/utils/sessions";

const protectedRoutes = [
  "/admin",
  "/operator",
  "/hrd",
  "/docs",
];
const publicRoutes = [
  "/",
];
const adminRoutes = [
  "/admin",
];
const operatorRoutes = [
  "/operator"
];
const hrdRoutes = [
  "/hrd"
];

export default async function proxy(request) {
  const response = (await middlewareAuth(request)) ?? NextResponse.next();
  await updateSessionExpiration(response, request)
  return response;
};

async function middlewareAuth(request) {

  const path = request.nextUrl.pathname;
  console.log("path: ", path)
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const isAdminRoute = adminRoutes.includes(path);
  const isOperatorRoute = operatorRoutes.includes(path);
  const isHrdRoute = hrdRoutes.includes(path)
  const cookie = (await cookies()).get('session')?.value;

  // redirect to login if no cookie on protected route
  if(!cookie && isProtectedRoute){
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  const session = await decrypt(cookie)
  // redirect to login if accessing protected route without session
  if (isProtectedRoute && !session?.userId){
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (session?.userId) {
    const role = session.role.toLowerCase();
    // redirect to role-based dashboard if accessing public route with session
    if (isPublicRoute && session?.userId){
      return NextResponse.redirect(new URL(`/${role}`, request.nextUrl));
    }
    // redirect to appropriate dashboard if accessing role-based route with wrong role
    if (isAdminRoute && session?.role !== "ADMIN"){
      return NextResponse.redirect(new URL(`/${role}`, request.nextUrl));
    }
    if (isOperatorRoute && session?.role !== "OPERATOR"){
      return NextResponse.redirect(new URL(`/${role}`, request.nextUrl));
    }
    if (isHrdRoute && session?.role !== "HRD"){
      return NextResponse.redirect(new URL(`/${role}`, request.nextUrl));
    }
  }
}

//ignore internal route when redirecting
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon|api|hero|.well-known|marker-icon-2x|marker-shadow).*)',
  ],
};