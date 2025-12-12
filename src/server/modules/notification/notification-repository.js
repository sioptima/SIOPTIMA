import PrismaClient from "../../db/db.js"
import { ResponseError } from "@/src/lib/response-error.js";

export class NotificationRepository {

    static async getMy(data){
        try {
            const [notification, count] = await PrismaClient.$transaction([
                PrismaClient.notification.findMany({
                    where: {
                        userId: data.userId,
                        read: false,
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }),
                PrismaClient.notification.groupBy({
                    by: ["type"],
                    where: {
                      userId: data.userId,
                      read: false,
                    },
                    _count: {
                      type: true,
                    },
                  }),
            ])

            return {notification, count}
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to retrieve user's notification")
        }
    }

    static async create(data){
        try {
            const DAYS = 7
  
            await PrismaClient.$transaction([
              //Delete old notification that has been read and is older than x DAYS
              PrismaClient.notification.deleteMany({
                where: {
                  userId: data.userId,
                  read: true,
                  createdAt: {
                    lt: new Date(Date.now() - DAYS * 24 * 60 * 60 * 1000)
                  }
                }
              }),
              //create new notification
              PrismaClient.notification.create({
                data: {
                  userId: data.userId,
                  type: data.type,
                  title: data.title,
                }
              })
            ])
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to create notification for related user")
        }
    }
    
    static async bulkCreate(data){
        try {
            const DAYS = 7
            
            const createPromises = data.users.flatMap((user) => [
                //Delete old notification that has been read and is older than x DAYS
                PrismaClient.notification.deleteMany({
                  where: {
                    userId: user.id,
                    read: true,
                    createdAt: {
                      lt: new Date(Date.now() - DAYS * 24 * 60 * 60 * 1000)
                    }
                  }
                }),
                //create new notification
                PrismaClient.notification.create({
                   data: {
                     userId: user.id,
                     type: data.type,
                     title: data.title,
                   }
                 })
              ]);
              
            await PrismaClient.$transaction(createPromises);
        } catch (error) {
            throw new ResponseError(500, "Failed when creating notification for related user")
        }
    }

    static async getOne(data){
        try {
            return await PrismaClient.notification.findUnique({
                where: {
                    id: data.notificationId
                },
                select: {
                    userId: true
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to fetch a notification")
        }
    }

    static async read(data){
        try {
            await PrismaClient.notification.update({
                where: {
                    id: data.notificationId
                },
                data: {
                    read: true,
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to mark a notification has been read")
        }
    }

    static async readAll(data){
        try {
            await PrismaClient.notification.updateMany({
                where: {
                    userId: data.userId
                },
                data: {
                    read: true,
                }
            })
        } catch (error) {
            throw new ResponseError(500, "Failed when trying to mark a notification has been read")
        }
    }
}