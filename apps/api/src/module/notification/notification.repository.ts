import { prisma } from "db";
import type { Alert, NotificationPreference } from "db";
import type { CreateNotificationInput } from "shared";

type NotificationPreferencesData = Partial<
  Pick<
    NotificationPreference,
    "whatsappEnabled" | "diseaseAlerts" | "weatherAlerts" | "cropHealthAlerts"
  >
>;

export class NotificationRepository {
  async create(userId: string, data: CreateNotificationInput): Promise<Alert> {
    return prisma.alert.create({ data: { userId, ...data } });
  }

  async findAllByUserId(userId: string): Promise<Alert[]> {
    return prisma.alert.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async findUnreadByUserId(userId: string): Promise<Alert[]> {
    return prisma.alert.findMany({
      where: { userId, readAt: null },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string, userId: string): Promise<Alert | null> {
    return prisma.alert.findFirst({ where: { id, userId } });
  }

  async markAsRead(id: string): Promise<Alert> {
    return prisma.alert.update({
      where: { id },
      data: { readAt: new Date() },
    });
  }

  async markAllAsRead(userId: string) {
    return prisma.alert.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });
  }

  async delete(id: string): Promise<Alert> {
    return prisma.alert.delete({ where: { id } });
  }

  async getPreferences(userId: string): Promise<NotificationPreference | null> {
    return prisma.notificationPreference.findUnique({ where: { userId } });
  }

  async upsertPreferences(
    userId: string,
    data: NotificationPreferencesData,
  ): Promise<NotificationPreference> {
    return prisma.notificationPreference.upsert({
      where: { userId },
      create: { userId, ...data },
      update: data,
    });
  }
}
