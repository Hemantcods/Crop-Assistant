import { AppError } from "../../errors/AppError";
export class CropService {
    cropRepository;
    farmRepository;
    constructor(cropRepository, farmRepository) {
        this.cropRepository = cropRepository;
        this.farmRepository = farmRepository;
    }
    async createCrop(userId, farmId, input) {
        const farm = await this.farmRepository.findById(farmId, userId);
        if (!farm) {
            throw new AppError("Farm not found", 404);
        }
        return this.cropRepository.create(farmId, input);
    }
    async getFarmCrops(userId, farmId) {
        const farm = await this.farmRepository.findById(farmId, userId);
        if (!farm) {
            throw new AppError("Farm not found", 404);
        }
        return this.cropRepository.fincAllByFarmId(farmId);
    }
    async getCrop(userId, cropId) {
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
    async updateCrop(userId, cropId, input) {
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
    async deleteCrop(userId, cropId) {
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
//# sourceMappingURL=crop.service.js.map