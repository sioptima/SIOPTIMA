import "server-only";
import { SignJWT,  jwtVerify } from "jose"
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId, role) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, role, expiresAt }); // save userId and role in cookie

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function updateSessionExpiration(response, request){
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  response.cookies.set("session", session, {
    expires: expiresAt,
    path: "/"
  });
}