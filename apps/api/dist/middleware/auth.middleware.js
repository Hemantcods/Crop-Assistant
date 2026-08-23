import { AppError } from "../errors/AppError";
import { AuthTokenService } from "../module/auth/auth.token";
const tokenService = new AuthTokenService();
export const requireAuth = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken;
        if (!token) {
            throw new AppError("Authentication required", 401);
        }
        const payload = tokenService.verifyAccessToken(token);
        req.user = {
            id: payload.userId,
        };
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=auth.middleware.js.map