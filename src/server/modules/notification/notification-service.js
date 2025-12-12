import { ResponseError } from "@/src/lib/response-error";
import { getUser } from "../../utils/auth";
import { NotificationRepository } from "./notification-repository";
import { NotificationValidation } from "./notification-validation";

export class NotificationService {

    static async getMy(){
        const user = await getUser();
        
        const notifications = await NotificationRepository.getMy({userId: user.userId});
        if(notifications.count.length === 0){throw new ResponseError(200, "No notifications!", true)}

        return notifications;
    }

    static async readOne(request){
        const user = await getUser();

        const validateParam = NotificationValidation.READ.parse(request)

        const notification = await NotificationRepository.getOne({notificationId: validateParam.id})
        if (user.userId !== notification.userId){throw new ResponseError(403, "This resource belong to someone else")}

        await NotificationRepository.read({userId: user.userId, notificationId: validateParam.id})
        return;
    }

    static async readAll(){
        const user = await getUser();

        await NotificationRepository.readAll({userId: user.userId})
        return;
    }
}