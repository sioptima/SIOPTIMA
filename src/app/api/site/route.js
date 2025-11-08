import { SiteService } from "@/src/server/modules/site/site-service";
import { requireRole } from "@/src/server/utils/auth";

export async function POST(request) {
    try {
      const checkRole = await requireRole("ADMIN");
      if (!checkRole){
        throw new ResponseError(403, "Unauthorized")
      };
      const data = await request.json();
      const sites = await SiteService.create(data);
      return Response.json({ 
         message: "Site created" ,
         result: sites
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { message: error.message || "Internal Server Error" },
        { status: error.status || 500 }
      );
    }
  }

export async function GET(request) {
    try {
      const checkRole = await requireRole("ADMIN");
      if (!checkRole){
        throw new ResponseError(403, "Unauthorized")
      };

      const searchParams = request.nextUrl.searchParams;
      const page = searchParams.get("page") || 1;
      const size = searchParams.get("size") || 5;

      const sites = await SiteService.getAll(parseInt(page), parseInt(size));
      return Response.json({ 
         message: "Sites retrieved" ,
         result: sites
        },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { message: error.errors || error.message || "Internal Server Error" },
        { status: error.status || 500 }
      );
    }
  }