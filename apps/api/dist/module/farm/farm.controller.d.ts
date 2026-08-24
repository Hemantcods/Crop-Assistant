import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { FarmService } from "./farm.service";
export declare class FarmController {
    private readonly farmService;
    constructor(farmService: FarmService);
    create: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAll: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getById: (req: AuthRequest, res: Response) => Promise<void>;
    update: (req: AuthRequest, res: Response) => Promise<void>;
    delete: (req: AuthRequest, res: Response) => Promise<void>;
}
//# sourceMappingURL=farm.controller.d.ts.map