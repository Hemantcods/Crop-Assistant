import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { upladImage } from "../../middleware/upload.middleware";
import { scanIdParamsSchema, diagnosisIdParamsSchema } from "shared";
import { diagnosisController } from "./diagnosis.container";

const router = Router({ mergeParams: true });

router.use(requireAuth);

router.post(
  "/scan",
  upladImage.single("image"),
  diagnosisController.scanCrop,
);

router.post(
  "/diagnoses/:scanId/save",
  validate(scanIdParamsSchema, "params"),
  diagnosisController.saveDiagnosis,
);

router.get("/diagnoses", diagnosisController.getDiagnoses);

router.get(
  "/diagnoses/:diagnosisId",
  validate(diagnosisIdParamsSchema, "params"),
  diagnosisController.getDiagnosisById,
);

export default router;