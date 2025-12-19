import { TicketService } from "@/src/server/modules/ticket/ticket-service";
import { requireRole } from "@/src/server/utils/auth";

export async function PATCH(request, {params}) {
    try {
      await requireRole("ADMIN");
      const { id } = await params;//grab query parameter(/:id)
      const req = await request.json()
      const result = await TicketService.respond({id: id, request: req});
      return Response.json({
         success: true, 
         message: "Ticket responded successfully" ,
         data: result
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