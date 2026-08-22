import { Router } from "express";
import authRoutes from "../module/auth/auth.routes"
const router = Router();

router.get("/health", (_res, res) => {
  res.json({
    success: true,
    message: "Crop BE is running",
  });
});

router.use("/auth", authRoutes)

export default router;