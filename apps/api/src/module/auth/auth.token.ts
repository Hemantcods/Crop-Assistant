import jwt from "jsonwebtoken";
import { env } from "../../../../../apps/api/src/config/env";
export type AccessTokenPayload = {
  userId: string;
};
export type RefreshTokenPayload = {
  userId: string;
};
export class AuthTokenService {
  generateAccessToken(userId: string) {
    return jwt.sign({ userId }, env.JWT_ACCESS_SECRET, {
      expiresIn: env.ACCESS_TOKEN_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    });
  }
  generateRefreshToken(userId: string) {
    return jwt.sign({ userId }, env.JWT_REFRESH_SECRET, {
      expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    });
  }
  verifyAccessToken(token: string) {
    return jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload;
  }
  verifyRefreshToken(token: string) {
    return jwt.verify(token, env.JWT_REFRESH_SECRET) as RefreshTokenPayload;
  }
}
