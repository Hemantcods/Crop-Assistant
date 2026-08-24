import { prisma } from "db";
export class AuthRepository {
    async findUserByEmail(email) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
    async findUserById(userId) {
        return prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    }
    async findUserByGoogleId(googleId) {
        return prisma.user.findUnique({
            where: {
                googleId,
            },
        });
    }
    async createUser(input) {
        return prisma.user.create({
            data: {
                name: input.name,
                email: input.email,
                phone: input.phone,
                passwordHash: input.passwordHash,
                googleId: input.googleId,
                language: input.language,
            },
        });
    }
    async linkGoogleAccount(userId, googleId) {
        return prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                googleId,
            },
        });
    }
}
//# sourceMappingURL=auth.repository.js.map