import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { setAuthCookies, clearCookies } from "../../utils/cookie";
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
  refresh = async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required",
      });
    }
    const { accessToken, refreshToken: newRefreshToken } = await this.authService.refreshTokens(refreshToken);
    setAuthCookies(res, accessToken, newRefreshToken);
    return res.status(200).json({
      success: true,
      message: "Tokens refreshed successfully",
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
    return res.redirect(`${env.FRONTEND_URL}`);
  };
  logout = async (_req: Request, res: Response) => {
    clearCookies(res);
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  };
}
