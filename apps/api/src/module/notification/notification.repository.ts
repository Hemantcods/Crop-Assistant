import { prisma } from "db";
import type { Alert, NotificationPreference, AlertType, AlertSeverity } from "db";

export class NotificationRepository {
  async findAlertsByUserId(userId: string): Promise<Alert[]> {
    return prisma.alert.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async findUnreadAlertsByUserId(userId: string): Promise<Alert[]> {
    return prisma.alert.findMany({
      where: { userId, readAt: null },
      orderBy: { createdAt: "desc" },
    });
  }

  async findAlertById(alertId: string): Promise<Alert | null> {
    return prisma.alert.findUnique({
      where: { id: alertId },
    });
  }

  async markAlertAsRead(alertId: string, userId: string): Promise<Alert | null> {
    return prisma.alert.update({
      where: { id: alertId, userId },
      data: { readAt: new Date() },
    });
  }

  async markAllAlertsAsRead(userId: string): Promise<{ count: number }> {
    return prisma.alert.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });
  }

  async getNotificationPreference(userId: string): Promise<NotificationPreference | null> {
    return prisma.notificationPreference.findUnique({
      where: { userId },
    });
  }

  async upsertNotificationPreference(
    userId: string,
    data: Partial<NotificationPreference>,
  ): Promise<NotificationPreference> {
    return prisma.notificationPreference.upsert({
      where: { userId },
      create: {
        userId,
        whatsappEnabled: data.whatsappEnabled ?? false,
        diseaseAlerts: data.diseaseAlerts ?? true,
        weatherAlerts: data.weatherAlerts ?? true,
        cropHealthAlerts: data.cropHealthAlerts ?? true,
      },
      update: data,
    });
  }

  async createAlert(data: {
    userId: string;
    cropId?: string;
    diagnosisId?: string;
    type: AlertType;
    severity: AlertSeverity;
    title: string;
    message: string;
  }): Promise<Alert> {
    return prisma.alert.create({
      data,
    });
  }
}