import { z } from "zod";

export const createSoilRecordSchema = z.object({
  nitrogen: z.number().min(0, "Nitrogen cannot be negative"),
  phosphorus: z.number().min(0, "Phosphorus cannot be negative"),
  potassium: z.number().min(0, "Potassium cannot be negative"),
  ph: z.number().min(0, "pH cannot be negative").max(14, "pH cannot exceed 14"),
  source: z.enum(["MANUAL", "SOIL_REPORT", "SENSOR","MANUAL","GEOLOCATION"]),
});
export type CreateSoilRecordInput = z.infer<
  typeof createSoilRecordSchema
>;