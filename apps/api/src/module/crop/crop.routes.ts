import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createCropSchema, cropIdParamsSchema, updateCropSchema } from "shared";
import { cropController } from "./crop.container";

const router = Router({ mergeParams: true });

router.use(requireAuth);

router.post(
  "/",
  validate(createCropSchema, "body"),
  cropController.create,
);
router.get("/", cropController.getAll);
router.get(
  "/:cropId",
  validate(cropIdParamsSchema, "params"),
  cropController.getById,
);
router.patch(
  "/:cropId",
  validate(updateCropSchema, "body"),
  cropController.update,
);
router.delete(
  "/:cropId",
  validate(cropIdParamsSchema, "params"),
  cropController.delete,
);

export default router;