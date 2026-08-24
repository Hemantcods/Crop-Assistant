import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { CropService } from "./crop.service";
export declare class CropController {
    private readonly cropService;
    constructor(cropService: CropService);
    create: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAll: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=crop.controller.d.ts.map