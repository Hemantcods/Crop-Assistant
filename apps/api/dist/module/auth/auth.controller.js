import { setAuthCookies } from "../../utils/cookie";
import { env } from "../../config/env";
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signUp = async (req, res) => {
        const { user, accessToken, refreshToken } = await this.authService.signup(req.body);
        setAuthCookies(res, accessToken, refreshToken);
        return res.status(201).json({
            success: true,
            data: user,
        });
    };
    signIn = async (req, res) => {
        const { user, accessToken, refreshToken } = await this.authService.signin(req.body);
        setAuthCookies(res, accessToken, refreshToken);
        res.status(201).json({
            success: true,
            data: user,
        });
    };
    me = async (req, res) => {
        const userId = req.user?.id;
        const user = await this.authService.getMe(userId);
        return res.status(200).json({
            success: true,
            data: user,
        });
    };
    googleRedirect = async (_req, res) => {
        const url = await this.authService.getAuthorizationUrl();
        return res.redirect(url);
    };
    googleCallback = async (req, res) => {
        const code = req.query.code;
        const { accessToken, refreshToken } = await this.authService.gooleSignin(code);
        setAuthCookies(res, accessToken, refreshToken);
        return res.redirect(`${env.FRONTEND_URL}/dashboard`);
    };
}
//# sourceMappingURL=auth.controller.js.map