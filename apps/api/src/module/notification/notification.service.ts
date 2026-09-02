import type { CreateNotificationInput, NotificationPreferencesInput } from "shared";
import { AppError } from "../../errors/AppError";
import { NotificationRepository } from "./notification.repository";

export class NotificationService {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async getNotifications(userId: string) {
    return this.notificationRepository.findAllByUserId(userId);
  }

  async getUnreadNotifications(userId: string) {
    return this.notificationRepository.findUnreadByUserId(userId);
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

  async updatePreferences(userId: string, input: NotificationPreferencesInput) {
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
