import { SiteService } from "@/src/server/modules/site/site-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
      await requireRole("ADMIN");
      const data = await request.json();
      const result = await SiteService.create(data);
      return Response.json({
         success: true, 
         message: "Site created" ,
         data: result
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { 
          success: error.success,
          message: error.message || "Internal Server Error" },
        { status: error.status || 500 }
      );
    }
  }

export async function GET(request) {
    try {
      await requireRole("ADMIN");
      const searchParams = request.nextUrl.searchParams;
      const parameter = {
        page: searchParams.get("page") || 1,
        size: searchParams.get("limit") || 5,
      }

      const result = await SiteService.getAll(parameter);
      return Response.json({
         success: true, 
         message: "Sites retrieved" ,
         data: {
          result: result.data.sites,
          paging: {
            page: result.paging.current_page,
            limit: result.paging.size,
            total: result.paging.total_page,
            totalPages: result.data.count,
          }
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