import z from "zod";
export const cropStatusSchema = z.enum(["ACTIVE", "HARVESTED", "FAILED"]);
export const createCropSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Crop name is required")
    .max(100, "Crop name is too long"),
  variety: z.string().trim().max(100, "Varity name is too long"),
  platedAt: z.coerce.date(),
  harvestedAt: z.coerce.date().optional(),
  status: cropStatusSchema.default("ACTIVE"),
});

export const updateCropSchema = z
  .object({
    name: z.string().trim().min(1).max(100).optional(),
    variety: z.string().trim().max(100).optional(),
    plantedAt: z.coerce.date().optional(),
    harvestedAt: z.coerce.date().nullable().optional(),
    status: cropStatusSchema.optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required",
  });

export const cropIdParamsSchema = z.object({
  cropId:z.uuid("Inavlid cropId")
})
export type CreateCropInput = z.infer<typeof createCropSchema>
export type UpdateCropInput = z.infer<typeof updateCropSchema>
