import { NextFunction, Request, Response } from "express";
export interface AuthRequest extends Request {
    user?: {
        id: string;
    };
}
export declare const requireAuth: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.middleware.d.ts.map