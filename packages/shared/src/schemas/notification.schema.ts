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