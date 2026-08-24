import { GoogleOAuthService } from "../../integrations/google/google-oauth.service";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";
import { AuthTokenService } from "./auth.token";
const authRepository = new AuthRepository();
const authTokenService = new AuthTokenService();
const gooleOAuthService = new GoogleOAuthService();
const authService = new AuthService(authRepository, authTokenService, gooleOAuthService);
export const authController = new AuthController(authService);
//# sourceMappingURL=auth.container.js.map