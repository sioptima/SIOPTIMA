export async function POST(request) {
    try {
      const checkRole = await requireRole("OPERATOR");
      if (!checkRole){
        throw new ResponseError(403, "Unauthorized")
      };
      const data = await request.json();
      const sites = await ReportService.create(data);
      return Response.json({
         success: true, 
         message: "Report created" ,
         result: sites
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