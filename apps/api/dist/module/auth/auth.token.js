import jwt from "jsonwebtoken";
import { env } from "../../../../../apps/api/src/config/env";
export class AuthTokenService {
    generateAccessToken(userId) {
        return jwt.sign({ userId }, env.JWT_ACCESS_SECRET, {
            expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
        });
    }
    generateRefreshToken(userId) {
        return jwt.sign({ userId }, env.JWT_REFRESH_SECRET, {
            expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
        });
    }
    verifyAccessToken(token) {
        return jwt.verify(token, env.JWT_ACCESS_SECRET);
    }
    verifyRefreshToken(token) {
        return jwt.verify(token, env.JWT_REFRESH_SECRET);
    }
}
//# sourceMappingURL=auth.token.js.map