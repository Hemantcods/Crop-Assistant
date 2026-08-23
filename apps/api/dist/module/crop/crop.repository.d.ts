import { CreateCropInput, UpdateCropInput } from "shared";
import type { Crop } from "db";
export declare class CropRepository {
    create(farmId: string, data: CreateCropInput): Promise<Crop>;
    fincAllByFarmId(farmId: string): Promise<Crop[]>;
    findCropById(cropId: string): Promise<Crop | null>;
    updateCrop(cropId: string, data: UpdateCropInput): Promise<Crop>;
    deleteCrop(cropId: string): Promise<Crop>;
}
//# sourceMappingURL=crop.repository.d.ts.map