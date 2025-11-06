import swaggerSpec from "@/src/swagger/swagger.js";

export async function GET() {
  return new Response(JSON.stringify(swaggerSpec), {
    headers: { "Content-Type": "application/json" },
  });
}
