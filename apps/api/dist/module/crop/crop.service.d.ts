import type { CreateCropInput, UpdateCropInput } from "shared";
import { FarmRepository } from "../farm/farm.repository";
import { CropRepository } from "./crop.repository";
import type { Crop } from "db";
export declare class CropService {
    private readonly cropRepository;
    private readonly farmRepository;
    constructor(cropRepository: CropRepository, farmRepository: FarmRepository);
    createCrop(userId: string, farmId: string, input: CreateCropInput): Promise<Crop>;
    getFarmCrops(userId: string, farmId: string): Promise<Crop[]>;
    getCrop(userId: string, cropId: string): Promise<Crop>;
    updateCrop(userId: string, cropId: string, input: UpdateCropInput): Promise<Crop>;
    deleteCrop(userId: string, cropId: string): Promise<void>;
}
//# sourceMappingURL=crop.service.d.ts.map