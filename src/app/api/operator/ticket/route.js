import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
      await requireRole("OPERATOR");
      const data = await request.json();
      const result = await TicketService.create(data);
      return Response.json({
         success: true, 
         message: "Report created" ,
         data: result
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { 
          success: error.success || false,
          code: error.status || 500,
          message: error.issues || error.message || "Internal Server Error" },
        { status: error.status || 500 }
        );
      }
}
