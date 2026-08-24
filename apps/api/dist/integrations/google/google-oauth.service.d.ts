export type GoogleProfile = {
    googleId: string;
    email: string;
    name: string;
};
export declare class GoogleOAuthService {
    getAuthorizationUrl(): string;
    getProfile(code: string): Promise<GoogleProfile>;
}
//# sourceMappingURL=google-oauth.service.d.ts.map