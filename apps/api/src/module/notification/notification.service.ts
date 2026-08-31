import { AppError } from "../../errors/AppError";
import { NotificationRepository } from "./notification.repository";
import type { Alert, NotificationPreference, AlertType, AlertSeverity } from "db";

export class NotificationService {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async getNotifications(userId: string): Promise<Alert[]> {
    return this.notificationRepository.findAlertsByUserId(userId);
  }

  async getUnreadNotifications(userId: string): Promise<Alert[]> {
    return this.notificationRepository.findUnreadAlertsByUserId(userId);
  }

  async markAsRead(userId: string, notificationId: string): Promise<Alert> {
    const alert = await this.notificationRepository.findAlertById(notificationId);

    if (!alert) {
      throw new AppError("Notification not found", 404);
    }

    if (alert.userId !== userId) {
      throw new AppError("Notification not found", 404);
    }

    if (alert.readAt) {
      return alert;
    }

    const updated = await this.notificationRepository.markAlertAsRead(notificationId, userId);

    if (!updated) {
      throw new AppError("Notification not found", 404);
    }

    return updated;
  }

  async markAllAsRead(userId: string): Promise<{ count: number }> {
    return this.notificationRepository.markAllAlertsAsRead(userId);
  }

  async getPreferences(userId: string): Promise<NotificationPreference> {
    let preference = await this.notificationRepository.getNotificationPreference(userId);

    if (!preference) {
      preference = await this.notificationRepository.upsertNotificationPreference(userId, {});
    }

    return preference;
  }

  async updatePreferences(
    userId: string,
    input: { whatsappEnabled?: boolean; diseaseAlerts?: boolean; weatherAlerts?: boolean; cropHealthAlerts?: boolean },
  ): Promise<NotificationPreference> {
    return this.notificationRepository.upsertNotificationPreference(userId, input);
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
    return this.notificationRepository.createAlert(data);
  }
}