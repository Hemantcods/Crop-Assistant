import { z } from "zod";
export const createFarmSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Farm name is required")
    .max(100, "Farm name is too long"),
  latitude: z.number().min(-90, "Invalid latitude").max(90, "Invalid latitude"),
  longitude: z
    .number()
    .min(-180, "Invalid longitude")
    .max(180, "Invalid longitude"),
  area: z.number().positive("Area must be greater than 0"),
  areaUnit: z.string().trim().min(1).max(20).default("acre"),
});

export const updateFarmSchema = createFarmSchema.partial();
export const farmIdParamSchema = z.object({
  farmId: z.uuid("Invalid farm ID"),
});

export type CreateFarmInput = z.infer<typeof createFarmSchema>;

export type UpdateFarmInput = z.infer<typeof updateFarmSchema>;
