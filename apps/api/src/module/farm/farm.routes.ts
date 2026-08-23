import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createFarmSchema, farmIdParamSchema, updateFarmSchema } from "shared";
import { farmController } from "./farm.container";

const router = Router();

router.use(requireAuth);

router.post(
  "/create",
  validate(createFarmSchema, "body"),
  farmController.create,
);
router.get("/", farmController.getAll);
router.get(
  "/:farmId",
  validate(farmIdParamSchema, "params"),
  farmController.getById,
);
router.patch(
  "/:farmId",
  validate(updateFarmSchema, "body"),
  farmController.update,
);
router.delete(
  "/:farmId",
  validate(farmIdParamSchema, "params"),
  farmController.delete,
);

export default router;
