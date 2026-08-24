import { CropController } from "./crop.controller";
import { CropRepository } from "./crop.repository";
import { CropService } from "./crop.service";
import { FarmRepository } from "../farm/farm.repository";
const cropRepository = new CropRepository();
const farmRepository = new FarmRepository();
const cropService = new CropService(cropRepository, farmRepository);
export const cropController = new CropController(cropService);
//# sourceMappingURL=crop.container.js.map