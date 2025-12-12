import { NotificationService } from "@/src/server/modules/notification/notification-service";

export async function GET(request) {
  try {
    const result = await NotificationService.getMy();
    return Response.json({
       success: true, 
       message: "Notifications retrieved" ,
       data: result,
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