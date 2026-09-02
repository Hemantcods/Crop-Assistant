import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import {
  notificationIdParamsSchema,
  notificationPreferencesSchema,
  createNotificationSchema,
} from "shared";
import { notificationController } from "./notification.container";

const router = Router();

router.use(requireAuth);

router.get("/", notificationController.getAll);
router.get("/unread", notificationController.getUnread);
router.post("/", validate(createNotificationSchema, "body"), notificationController.create);
router.get("/preferences", notificationController.getPreferences);
router.patch(
  "/preferences",
  validate(notificationPreferencesSchema, "body"),
  notificationController.updatePreferences,
);
router.patch(
  "/:notificationId/read",
  validate(notificationIdParamsSchema, "params"),
  notificationController.markAsRead,
);
router.patch("/read-all", notificationController.markAllAsRead);
router.delete(
  "/:notificationId",
  validate(notificationIdParamsSchema, "params"),
  notificationController.delete,
);

export default router;
