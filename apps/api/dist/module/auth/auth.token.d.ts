export type AccessTokenPayload = {
    userId: string;
};
export type RefreshTokenPayload = {
    userId: string;
};
export declare class AuthTokenService {
    generateAccessToken(userId: string): string;
    generateRefreshToken(userId: string): string;
    verifyAccessToken(token: string): AccessTokenPayload;
    verifyRefreshToken(token: string): RefreshTokenPayload;
}
//# sourceMappingURL=auth.token.d.ts.map