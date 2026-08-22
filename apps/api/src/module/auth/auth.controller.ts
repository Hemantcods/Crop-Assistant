import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { setAuthCookies } from "../../utils/cookie";
import { AuthRequest } from "../../middleware/auth.middleware";
import { env } from "../../config/env";

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  signUp = async (req: Request, res: Response) => {
    const { user, accessToken, refreshToken } = await this.authService.signup(
      req.body,
    );
    setAuthCookies(res, accessToken, refreshToken);
    return res.status(201).json({
      success: true,
      data: user,
    });
  };
  signIn = async (req: Request, res: Response) => {
    const { user, accessToken, refreshToken } = await this.authService.signin(
      req.body,
    );
    setAuthCookies(res, accessToken, refreshToken);
    res.status(201).json({
      success: true,
      data: user,
    });
  };
  me = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const user = await this.authService.getMe(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  };
  googleRedirect = async (_req: Request, res: Response) => {
    const url = await this.authService.getAuthorizationUrl();
    return res.redirect(url);
  };
  googleCallback = async (req: Request, res: Response) => {
    const code = req.query.code as string;
    const { accessToken, refreshToken } =
    await this.authService.gooleSignin(code);
    setAuthCookies(res, accessToken, refreshToken);
    return res.redirect(`${env.FRONTEND_URL}/dashboard`);
  };
}
