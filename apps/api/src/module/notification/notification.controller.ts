import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware";
import { NotificationService } from "./notification.service";

export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  getAll = async (req: AuthRequest, res: Response) => {
    const notifications = await this.notificationService.getNotifications(req.user!.id);
    return res.json({ success: true, data: notifications });
  };

  getUnread = async (req: AuthRequest, res: Response) => {
    const notifications = await this.notificationService.getUnreadNotifications(req.user!.id);
    return res.json({ success: true, data: notifications });
  };

  create = async (req: AuthRequest, res: Response) => {
    const notification = await this.notificationService.createNotification(
      req.user!.id,
      req.body,
    );
    return res.status(201).json({ success: true, data: notification });
  };

  markAsRead = async (req: AuthRequest, res: Response) => {
    const notification = await this.notificationService.markAsRead(
      req.user!.id,
      req.params.notificationId as string,
    );
    return res.json({ success: true, data: notification });
  };

  markAllAsRead = async (req: AuthRequest, res: Response) => {
    await this.notificationService.markAllAsRead(req.user!.id);
    return res.status(204).send();
  };

  delete = async (req: AuthRequest, res: Response) => {
    await this.notificationService.deleteNotification(
      req.user!.id,
      req.params.notificationId as string,
    );
    return res.status(204).send();
  };

  getPreferences = async (req: AuthRequest, res: Response) => {
    const preferences = await this.notificationService.getPreferences(req.user!.id);
    return res.json({ success: true, data: preferences });
  };

  updatePreferences = async (req: AuthRequest, res: Response) => {
    const preferences = await this.notificationService.updatePreferences(
      req.user!.id,
      req.body,
    );
    return res.json({ success: true, data: preferences });
  };
}
