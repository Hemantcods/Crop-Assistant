import { CreateFarmInput, UpdateFarmInput } from "shared";
import { FarmRepository } from "./farm.repository";
import { AppError } from "../../errors/AppError";

export class FarmService {
  constructor(private readonly farmRepository: FarmRepository) {}
  async createFarm(userId: string, data: CreateFarmInput) {
    return this.farmRepository.create(userId, data);
  }
  async getFarms(userId: string) {
    return this.farmRepository.findAllByUserId(userId);
  }
  async GetFarm(userId: string, farmId: string) {
    const farm = await this.farmRepository.findById(farmId, userId);
    if (!farm) {
      throw new AppError("Farm not found", 404);
    }
    return farm;
  }
  async UpdateFarm(userId: string, farmId: string, data: UpdateFarmInput) {
    const farm = await this.farmRepository.findById(farmId, userId);
    if (!farm) {
      throw new AppError("Farm not found", 404);
    }
    await this.farmRepository.update(farmId, userId, data);
    return this.farmRepository.findById(farmId, userId);
  }
  async deleteFarm(userId: string, farmId: string) {
    const farm = await this.farmRepository.findById(farmId, userId);
    if (!farm) {
      throw new AppError("Farm not found", 404);
    }
    await this.farmRepository.delete(farmId, userId)
  }
}
