import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { CropService } from "./crop.service";

export class CropController {
  constructor(private readonly cropService: CropService) {}
  create = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farmId = req.params.farmId as string;
    const crop = await this.cropService.createCrop(userId, farmId, req.body);
    return res.status(201).json({
      success: true,
      data: crop,
      message: "Crop created successfully",
    });
  };
  getAll = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const farmId = req.params.farmId as string;
    const crops = await this.cropService.getFarmCrops(userId, farmId);
    return res.status(200).json({
      success: true,
      data: crops,
    });
  };
  getById = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const cropId = req.params.cropId as string;
    const crop = await this.cropService.getCrop(userId, cropId);
    return res.status(200).json({
      success: true,
      data: crop,
    });
  };
  update = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const cropId = req.params.cropId as string;
    const crop = await this.cropService.updateCrop(userId, cropId, req.body);
    return res.status(200).json({
      success: true,
      data: crop,
      message: "Crop updated successfully",
    });
  };
  delete = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const cropId = req.params.cropId as string;
    await this.cropService.deleteCrop(userId, cropId);
    return res.status(204).send();
  };
}