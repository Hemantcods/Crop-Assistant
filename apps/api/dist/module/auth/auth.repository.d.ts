export declare class AuthRepository {
    findUserByEmail(email: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        language: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findUserById(userId: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        language: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findUserByGoogleId(googleId: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        language: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(input: {
        name: string;
        email: string;
        phone?: string;
        passwordHash?: string;
        googleId?: string;
        language: string;
    }): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        language: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    linkGoogleAccount(userId: string, googleId: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        language: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=auth.repository.d.ts.map