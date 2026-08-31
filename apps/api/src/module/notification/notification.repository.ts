import { prisma } from "db";
<<<<<<< HEAD
import type { Alert, NotificationPreference, AlertType, AlertSeverity } from "db";

export class NotificationRepository {
  async findAlertsByUserId(userId: string): Promise<Alert[]> {
=======
import type { Alert, NotificationPreference } from "db";
import type { CreateNotificationInput } from "shared";

type NotificationPreferencesData = Partial<
  Pick<
    NotificationPreference,
    "whatsappEnabled" | "diseaseAlerts" | "weatherAlerts" | "cropHealthAlerts"
  >
>;

export class NotificationRepository {
  create(userId: string, data: CreateNotificationInput): Promise<Alert> {
    return prisma.alert.create({ data: { userId, ...data } });
  }

  findAllByUserId(userId: string): Promise<Alert[]> {
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
    return prisma.alert.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

<<<<<<< HEAD
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
=======
  findById(id: string, userId: string): Promise<Alert | null> {
    return prisma.alert.findFirst({ where: { id, userId } });
  }

  markAsRead(id: string): Promise<Alert> {
    return prisma.alert.update({
      where: { id },
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
      data: { readAt: new Date() },
    });
  }

<<<<<<< HEAD
  async markAllAlertsAsRead(userId: string): Promise<{ count: number }> {
=======
  markAllAsRead(userId: string) {
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
    return prisma.alert.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });
  }

<<<<<<< HEAD
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
=======
  delete(id: string): Promise<Alert> {
    return prisma.alert.delete({ where: { id } });
  }

  getPreferences(userId: string): Promise<NotificationPreference | null> {
    return prisma.notificationPreference.findUnique({ where: { userId } });
  }

  upsertPreferences(
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
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
