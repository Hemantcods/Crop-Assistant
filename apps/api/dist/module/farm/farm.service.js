import { AppError } from "../../errors/AppError";
export class FarmService {
    farmRepository;
    constructor(farmRepository) {
        this.farmRepository = farmRepository;
    }
    async createFarm(userId, data) {
        return this.farmRepository.create(userId, data);
    }
    async getFarms(userId) {
        return this.farmRepository.findAllByUserId(userId);
    }
    async GetFarm(userId, farmId) {
        const farm = await this.farmRepository.findById(farmId, userId);
        if (!farm) {
            throw new AppError("Farm not found", 404);
        }
        return farm;
    }
    async UpdateFarm(userId, farmId, data) {
        const farm = await this.farmRepository.findById(farmId, userId);
        if (!farm) {
            throw new AppError("Farm not found", 404);
        }
        await this.farmRepository.update(farmId, userId, data);
        return this.farmRepository.findById(farmId, userId);
    }
    async deleteFarm(userId, farmId) {
        const farm = await this.farmRepository.findById(farmId, userId);
        if (!farm) {
            throw new AppError("Farm not found", 404);
        }
        await this.farmRepository.delete(farmId, userId);
    }
}
//# sourceMappingURL=farm.service.js.map