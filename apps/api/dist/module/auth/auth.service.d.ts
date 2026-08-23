import { SignInInput, SignUpInput } from "shared";
import { AuthRepository } from "./auth.repository";
import { AuthTokenService } from "./auth.token";
import { GoogleOAuthService } from "../../integrations/google/google-oauth.service";
export declare class AuthService {
    private readonly authRepository;
    private readonly tokenService;
    private readonly googleOAuthService;
    constructor(authRepository: AuthRepository, tokenService: AuthTokenService, googleOAuthService: GoogleOAuthService);
    signup(data: SignUpInput): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
            language: string;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    signin(data: SignInInput): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
            language: string;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    getMe(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        language: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAuthorizationUrl(): Promise<string>;
    gooleSignin(code: string): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
            language: string;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    private sanitizeUser;
}
//# sourceMappingURL=auth.service.d.ts.map