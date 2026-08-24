import { Router } from "express";
import {
  notificationIdParamsSchema,
  notificationPreferencesSchema,
  createNotificationSchema,
} from "shared";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { notificationController } from "./notification.container";

const router = Router();

router.use(requireAuth);
router.get("/", notificationController.getAll);
router.post("/", validate(createNotificationSchema), notificationController.create);
router.patch("/read-all", notificationController.markAllAsRead);
router.get("/preferences", notificationController.getPreferences);
router.patch(
  "/preferences",
  validate(notificationPreferencesSchema),
  notificationController.updatePreferences,
);
router.patch(
  "/:notificationId/read",
  validate(notificationIdParamsSchema, "params"),
  notificationController.markAsRead,
);
router.delete(
  "/:notificationId",
  validate(notificationIdParamsSchema, "params"),
  notificationController.delete,
);

export default router;
