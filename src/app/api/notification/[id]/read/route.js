import { NotificationService } from "@/src/server/modules/notification/notification-service";

export async function PATCH(request, {params}) {
    try {
      const { id } = await params;//grab query parameter(/:id)
      await NotificationService.readOne({id: id});
      return Response.json({
         success: true, 
         message: "Notification read" ,
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