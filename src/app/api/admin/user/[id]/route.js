import { UserService } from "@/src/server/modules/user/user-service";
import { requireRole } from "@/src/server/utils/auth";

export async function GET(request, {params}) {
    try {
      await requireRole("ADMIN");
      const { id } = await params;//grab query parameter(/:id)
      const result = await UserService.getById({id: id});
      return Response.json({
         success: true, 
         message: "User retrieved" ,
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

export async function PATCH(request, {params}){
  try {
    await requireRole("ADMIN");
    const { id } = await params;//grab query parameter(/:id)
    const data = await request.json();
    const result = await UserService.update({id: id, data:data});
    return Response.json({
       success: true, 
       message: "User updated" ,
       data: result
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { 
        success: error.success,
        code: error.status || 500,
        message: error.issues || error.message || "Internal Server Error",
        data: error.data },
      { status: error.status || 500 }
      );
  }
}

export async function DELETE(request, {params}){
  try {
    await requireRole("ADMIN");
    const { id } = await params;//grab query parameter(/:id)
    await UserService.hardDelete({id: id});
    return Response.json({
       success: true, 
       message: "User deleted successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { 
        success: error.success,
        code: error.status || 500,
        message: error.issues || error.message || "Internal Server Error",
      },
      { status: error.status || 500 }
      );
  }
}