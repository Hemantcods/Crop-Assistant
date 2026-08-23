import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { AuthRequest } from "../../middleware/auth.middleware";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    signIn: (req: Request, res: Response) => Promise<void>;
    me: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    googleRedirect: (_req: Request, res: Response) => Promise<void>;
    googleCallback: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map