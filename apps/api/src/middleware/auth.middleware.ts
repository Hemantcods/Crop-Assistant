import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { AuthTokenService } from "../module/auth/auth.token";

export interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}
const tokenService = new AuthTokenService();
export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      throw new AppError("Authentication required", 401);
    }
    const payload =tokenService.verifyAccessToken(token);
    req.user = {
      id: payload.userId,
    };
    next();
  } catch (error) {
    next(error);
  }
};
