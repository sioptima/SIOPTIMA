import { requireRole } from "@/server/utils/auth";

export async function POST(request) {
    try {
      const checkRole = await requireRole("ADMIN");
      if (!checkRole){
        throw new ResponseError(403, "Unauthorized")
      };
      const data = await request.json();
      const site = await SiteService.create(data);
      return Response.json({ 
         message: "Site created" ,
         result: site
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