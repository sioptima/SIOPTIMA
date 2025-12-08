import PrismaClient from '../db/db.js'

export async function trackActivity(userId, action, type, title, metadata = {}) {
    // Create new activity
    await PrismaClient.activity.create({
      data: { userId, action, type, title, metadata },
    });
  
    // Keep only last 10 — delete older ones
    const activities = await PrismaClient.activity.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      skip: 10
    });
  
    if (activities.length > 0) {
      const idsToDelete = activities.map(a => a.id);
      await PrismaClient.activity.deleteMany({
        where: { id: { in: idsToDelete } },
      });
    }
  }