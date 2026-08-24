import { env } from "../../config/env";
import { googleOAuthClient } from "../../config/google";
export class GoogleOAuthService {
    getAuthorizationUrl() {
        return googleOAuthClient.generateAuthUrl({
            access_type: "offline",
            scope: ["openid", "email", "profile"],
            prompt: "select_account",
        });
    }
    async getProfile(code) {
        const { tokens } = await googleOAuthClient.getToken(code);
        googleOAuthClient.setCredentials(tokens);
        const ticket = await googleOAuthClient.verifyIdToken({
            idToken: tokens.id_token,
            audience: env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.sub || !payload.email || !payload.name) {
            throw new Error("Invalid Google Account Information");
        }
        return {
            googleId: payload.sub,
            email: payload.email,
            name: payload.name,
        };
    }
}
//# sourceMappingURL=google-oauth.service.js.map