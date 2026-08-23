import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { FarmService } from "./farm.service";

export class FarmController {
  constructor(private readonly farmService: FarmService) {}
  create = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farm = await this.farmService.createFarm(userId, req.body);
    return res.status(201).json({
      success: true,
      data: farm,
      message: "Farm created successfully",
    });
  };
  getAll = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farms = await this.farmService.getFarms(userId);
    return res.status(200).json({
      success: true,
      data: farms,
    });
  };
  getById = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farmId = req.params.farmId as string;
    const farm = await this.farmService.GetFarm(userId, farmId);
    res.status(200).json({
      success: true,
      data: farm,
    });
  };
  update = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farmId = req.params.id as string;
    const farm = await this.farmService.UpdateFarm(userId, farmId, req.body);
    res.status(200).json({
      success: true,
      data: farm,
      message: "Farm updated successfully",
    });
  };
  delete = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farmId = req.params.farmId as string;
    await this.farmService.deleteFarm(userId, farmId);
    res.status(204).send()
  };
}
