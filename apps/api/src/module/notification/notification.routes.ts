import { Router } from "express";
<<<<<<< HEAD
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { notificationIdParamsSchema, notificationPreferencesSchema } from "shared";
=======
import {
  notificationIdParamsSchema,
  notificationPreferencesSchema,
  createNotificationSchema,
} from "shared";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
import { notificationController } from "./notification.container";

const router = Router();

router.use(requireAuth);
<<<<<<< HEAD

router.get("/", notificationController.getAll);
router.get("/unread", notificationController.getUnread);
router.get("/preferences", notificationController.getPreferences);
router.patch("/preferences", validate(notificationPreferencesSchema, "body"), notificationController.updatePreferences);
router.patch("/:notificationId/read", validate(notificationIdParamsSchema, "params"), notificationController.markAsRead);
router.patch("/read-all", notificationController.markAllAsRead);

export default router;
=======
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
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
