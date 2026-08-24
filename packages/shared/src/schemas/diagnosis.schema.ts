import { z } from "zod";
export const diseasePredictionSchema = z.object({
  disease: z.string().min(1),
  confidence: z.number().min(0).max(1),
  modelVersion: z.string().min(1),
});
export type DiseasePrediction = z.infer<typeof diseasePredictionSchema>;

export const scanIdParamsSchema = z.object({
  scanId: z.uuid("Invalid scanId"),
});

export const diagnosisIdParamsSchema = z.object({
  diagnosisId: z.uuid("Invalid diagnosisId"),
});
