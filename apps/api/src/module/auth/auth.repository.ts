import { prisma } from "db";
export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async findUserById(userId: string) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
  async findUserByGoogleId(googleId: string) {
    return prisma.user.findUnique({
      where: {
        googleId,
      },
    });
  }
  async createUser(input: {
    name: string;
    email: string;
    phone?: string;
    passwordHash?: string;
    googleId?: string;
    language: string;
  }) {
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
  async linkGoogleAccount(userId: string, googleId: string) {
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
