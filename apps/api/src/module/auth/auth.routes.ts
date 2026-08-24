import { Router } from "express";
import { validate } from "../../middleware/validate.middleware";
import { signInSchema, signUpSchema } from "shared";
import { authController } from "./auth.container";
import { requireAuth } from "../../middleware/auth.middleware";

const router = Router()

router.post("/signup", validate(signUpSchema, "body"), authController.signUp)
router.post("/signin", validate(signInSchema, "body"), authController.signIn)
router.post("/refresh", authController.refresh)
router.post("/logout", authController.logout)
router.get("/me", requireAuth, authController.me)
router.get("/google", authController.googleRedirect)
router.get("/google/callback", authController.googleCallback)
export default router
