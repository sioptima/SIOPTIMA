import { TicketService } from "@/src/server/modules/ticket/ticket-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
      await requireRole("OPERATOR");
      const data = await request.formData();
      const result = await TicketService.create(data);
      return Response.json({
         success: true, 
         message: "Ticket created successfully" ,
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

export async function GET(request) {
  try {
    await requireRole("OPERATOR");
    const searchParams = request.nextUrl.searchParams;
    const parameter = {
      page: searchParams.get("page") || 1,
      size: searchParams.get("limit") || 5,
      status: searchParams.get("status") || undefined,
      priority: searchParams.get("priority") || undefined,
      search: searchParams.get("search") || undefined,
    }

    const result = await TicketService.getMyTickets(parameter);
    return Response.json({
       success: true, 
       message: "Tickets retrieved successfully" ,
       data: result.result,
       pagination: {
        page: result.paging.current_page,
        limit: result.paging.size,
        total: result.paging.total,
        totalPage: result.paging.total_page
       }
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

