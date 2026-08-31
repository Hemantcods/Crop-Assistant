<<<<<<< HEAD
import { AppError } from "../../errors/AppError";
import { NotificationRepository } from "./notification.repository";
import type { Alert, NotificationPreference, AlertType, AlertSeverity } from "db";
=======
import type { CreateNotificationInput, NotificationPreferencesInput } from "shared";
import { AppError } from "../../errors/AppError";
import { NotificationRepository } from "./notification.repository";
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a

export class NotificationService {
  constructor(private readonly notificationRepository: NotificationRepository) {}

<<<<<<< HEAD
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
=======
  getNotifications(userId: string) {
    return this.notificationRepository.findAllByUserId(userId);
  }

  async createNotification(userId: string, input: CreateNotificationInput) {
    const preferences = await this.getPreferences(userId);
    const preferenceByType = {
      DISEASE: preferences.diseaseAlerts,
      WEATHER: preferences.weatherAlerts,
      CROP_HEALTH: preferences.cropHealthAlerts,
      IRRIGATION: true,
      GENERAL: true,
    };

    if (!preferenceByType[input.type]) {
      return null;
    }

    return this.notificationRepository.create(userId, input);
  }

  async markAsRead(userId: string, notificationId: string) {
    await this.ensureNotificationOwnership(userId, notificationId);
    return this.notificationRepository.markAsRead(notificationId);
  }

  async markAllAsRead(userId: string) {
    await this.notificationRepository.markAllAsRead(userId);
  }

  async deleteNotification(userId: string, notificationId: string) {
    await this.ensureNotificationOwnership(userId, notificationId);
    await this.notificationRepository.delete(notificationId);
  }

  async getPreferences(userId: string) {
    return (
      (await this.notificationRepository.getPreferences(userId)) ??
      this.notificationRepository.upsertPreferences(userId, {})
    );
  }

  updatePreferences(userId: string, input: NotificationPreferencesInput) {
    return this.notificationRepository.upsertPreferences(userId, input);
  }

  private async ensureNotificationOwnership(userId: string, notificationId: string) {
    const notification = await this.notificationRepository.findById(
      notificationId,
      userId,
    );
    if (!notification) {
      throw new AppError("Notification not found", 404);
    }
  }
}
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
