import { NotificationController } from "./notification.controller";
import { NotificationRepository } from "./notification.repository";
import { NotificationService } from "./notification.service";

const notificationRepository = new NotificationRepository();
const notificationService = new NotificationService(notificationRepository);
<<<<<<< HEAD
export const notificationController = new NotificationController(notificationService);
=======

export const notificationController = new NotificationController(notificationService);
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
