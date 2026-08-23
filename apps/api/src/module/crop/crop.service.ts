import { AppError } from "../../errors/AppError";

import type { CreateCropInput, UpdateCropInput } from "shared";

import { FarmRepository } from "../farm/farm.repository";

import { CropRepository } from "./crop.repository";

export class CropService {
  constructor(
    private readonly cropRepository: CropRepository,
    private readonly farmRepository: FarmRepository,
  ) {}

  async createCrop(userId: string, farmId: string, input: CreateCropInput) {
    const farm = await this.farmRepository.findById(farmId, userId);

    if (!farm) {
      throw new AppError("Farm not found", 404);
    }

    return this.cropRepository.create(farmId, input);
  }
  async getFarmCrops(userId: string, farmId: string) {
    const farm = await this.farmRepository.findById(farmId, userId);

    if (!farm) {
      throw new AppError("Farm not found", 404);
    }

    return this.cropRepository.fincAllByFarmId(farmId);
  }
  async getCrop(userId: string, cropId: string) {
    const crop = await this.cropRepository.findCropById(cropId);

    if (!crop) {
      throw new AppError("Crop not found", 404);
    }

    const farm = await this.farmRepository.findById(crop.farmId, userId);

    if (!farm) {
      throw new AppError("Crop not found", 404);
    }

    return crop;
  }
  async updateCrop(userId: string, cropId: string, input: UpdateCropInput) {
    const crop = await this.cropRepository.findCropById(cropId);

    if (!crop) {
      throw new AppError("Crop not found", 404);
    }

    const farm = await this.farmRepository.findById(crop.farmId, userId);

    if (!farm) {
      throw new AppError("Crop not found", 404);
    }

    return this.cropRepository.updateCrop(cropId, input);
  }
  async deleteCrop(userId: string, cropId: string) {
    const crop = await this.cropRepository.findCropById(cropId);

    if (!crop) {
      throw new AppError("Crop not found", 404);
    }

    const farm = await this.farmRepository.findById(crop.farmId, userId);

    if (!farm) {
      throw new AppError("Crop not found", 404);
    }

    await this.cropRepository.deleteCrop(cropId);
  }
}
