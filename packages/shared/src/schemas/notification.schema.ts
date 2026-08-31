<<<<<<< HEAD
import z from "zod";

export const notificationIdParamsSchema = z.object({
  notificationId: z.uuid("Invalid notificationId"),
});

export const notificationPreferencesSchema = z.object({
  whatsappEnabled: z.boolean().optional(),
  diseaseAlerts: z.boolean().optional(),
  weatherAlerts: z.boolean().optional(),
  cropHealthAlerts: z.boolean().optional(),
});

export type NotificationPreferencesInput = z.infer<typeof notificationPreferencesSchema>;
=======
import { z } from "zod";

export const notificationIdParamsSchema = z.object({
  notificationId: z.uuid("Invalid notification id"),
});

export const notificationPreferencesSchema = z
  .object({
    whatsappEnabled: z.boolean().optional(),
    diseaseAlerts: z.boolean().optional(),
    weatherAlerts: z.boolean().optional(),
    cropHealthAlerts: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one preference is required",
  });

export type NotificationPreferencesInput = z.infer<
  typeof notificationPreferencesSchema
>;

export const createNotificationSchema = z.object({
  type: z.enum(["DISEASE", "WEATHER", "CROP_HEALTH", "IRRIGATION", "GENERAL"]),
  severity: z.enum(["INFO", "WARNING", "CRITICAL"]).default("INFO"),
  title: z.string().trim().min(1).max(160),
  message: z.string().trim().min(1).max(2000),
  cropId: z.uuid().optional(),
  diagnosisId: z.uuid().optional(),
});

export type CreateNotificationInput = z.infer<typeof createNotificationSchema>;
>>>>>>> 28a498e97972aca31686ea1730eb074392a00c8a
