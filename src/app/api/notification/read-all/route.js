import { NotificationService } from "@/src/server/modules/notification/notification-service";

export async function PATCH(request) {
    try {
      await NotificationService.readAll();
      return Response.json({
         success: true, 
         message: "Notifications read" ,
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