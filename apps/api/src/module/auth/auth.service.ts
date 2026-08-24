import { SignInInput, SignUpInput } from "shared";
import { AuthRepository } from "./auth.repository";
import { AuthTokenService } from "./auth.token";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcrypt";
import { GoogleOAuthService } from "../../integrations/google/google-oauth.service";
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly tokenService: AuthTokenService,
    private readonly googleOAuthService: GoogleOAuthService,
  ) {}

  async signup(data: SignUpInput) {
    const existingUser = await this.authRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new AppError("An account with this email already exists", 409);
    }
    const passwordHash = await bcrypt.hash(data.password, 12);
    const user = await this.authRepository.createUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      passwordHash,
      language: data.language,
    });
    const accessToken = this.tokenService.generateAccessToken(user.id);
    const refreshToken = this.tokenService.generateRefreshToken(user.id);
    return {
      user: this.sanitizeUser(user),
      accessToken,
      refreshToken,
    };
  }
  async signin(data: SignInInput) {
    const user = await this.authRepository.findUserByEmail(data.email);
    if (!user || !user.passwordHash) {
      throw new AppError("Invaild email or password", 401);
    }
    const PasswordMatches = await bcrypt.compare(
      data.password,
      user.passwordHash,
    );
    if (!PasswordMatches) {
      throw new AppError("Invaild email or password", 401);
    }
    const accessToken = this.tokenService.generateAccessToken(user.id);
    const refreshToken = this.tokenService.generateRefreshToken(user.id);
    return { user: this.sanitizeUser(user), accessToken, refreshToken };
  }
  async refreshTokens(refreshToken: string) {
    let payload;
    try {
      payload = this.tokenService.verifyRefreshToken(refreshToken);
    } catch {
      throw new AppError("Invalid or expired refresh token", 401);
    }
    const user = await this.authRepository.findUserById(payload.userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const accessToken = this.tokenService.generateAccessToken(user.id);
    const newRefreshToken = this.tokenService.generateRefreshToken(user.id);
    return { accessToken, refreshToken: newRefreshToken };
  }
  async getMe(userId: string) {
    const user = await this.authRepository.findUserById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return this.sanitizeUser(user);
  }
  async getAuthorizationUrl() {
    return this.googleOAuthService.getAuthorizationUrl();
  }
  async gooleSignin(code: string) {
    const googleUser = await this.googleOAuthService.getProfile(code);
    let user = await this.authRepository.findUserByGoogleId(
      googleUser.googleId,
    );
    if (!user) {
      user = await this.authRepository.findUserByEmail(googleUser.email);
      if (user) {
        if (user.googleId && user.googleId !== googleUser.googleId) {
          throw new AppError(
            "This email is already linked to another google account",
            409,
          );
        }
        user = await this.authRepository.linkGoogleAccount(
          user.id,
          googleUser.googleId,
          googleUser.profilePic,
        );
      } else {
        user = await this.authRepository.createUser({
          name: googleUser.name,
          email: googleUser.email,
          googleId: googleUser.googleId,
          language: "en",
          profilePic: googleUser.profilePic,
        });
      }
    }
    if (!user) {
      throw new AppError("Error in google Signup", 409);
    }
    const accessToken = this.tokenService.generateAccessToken(user.id);
    const refreshToken = this.tokenService.generateRefreshToken(user.id);
    return {
      user: this.sanitizeUser(user),
      accessToken,
      refreshToken,
    };
  }
  private sanitizeUser(user: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    language: string;
    profilePic?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      language: user.language,
      profilePic: user.profilePic ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
