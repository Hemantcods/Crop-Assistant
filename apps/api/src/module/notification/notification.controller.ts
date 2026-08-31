import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { NotificationService } from "./notification.service";

export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  getAll = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const notifications = await this.notificationService.getNotifications(userId);

    return res.status(200).json({
      success: true,
      data: notifications,
    });
  };

  getUnread = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const notifications = await this.notificationService.getUnreadNotifications(userId);

    return res.status(200).json({
      success: true,
      data: notifications,
    });
  };

  markAsRead = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const notificationId = req.params.notificationId as string;
    const notification = await this.notificationService.markAsRead(userId, notificationId);

    return res.status(200).json({
      success: true,
      data: notification,
      message: "Notification marked as read",
    });
  };

  markAllAsRead = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const result = await this.notificationService.markAllAsRead(userId);

    return res.status(200).json({
      success: true,
      data: result,
      message: "All notifications marked as read",
    });
  };

  getPreferences = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const preferences = await this.notificationService.getPreferences(userId);

    return res.status(200).json({
      success: true,
      data: preferences,
    });
  };

  updatePreferences = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const preferences = await this.notificationService.updatePreferences(userId, req.body);

    return res.status(200).json({
      success: true,
      data: preferences,
      message: "Preferences updated successfully",
    });
  };
}