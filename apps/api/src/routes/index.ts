import { Router } from "express";
import authRoutes from "../module/auth/auth.routes";
import farmRoutes from "../module/farm/farm.routes";
import cropRoutes from "../module/crop/crop.routes";
import diagnosisRoutes from "../module/diagnosis/diagnosis.routes";
const router = Router();

router.get("/health", (_res, res) => {
  res.json({
    success: true,
    message: "Crop BE is running",
  });
});

router.use("/auth", authRoutes);
router.use("/farm", farmRoutes);
router.use("/farm/:farmId/crops", cropRoutes);
router.use("/farm/:farmId/crops/:cropId", diagnosisRoutes);
export default router;
