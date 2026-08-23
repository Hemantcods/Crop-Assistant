import { FarmController } from "./farm.controller";
import { FarmRepository } from "./farm.repository";
import { FarmService } from "./farm.service";
const farmRepository = new FarmRepository();
const farmService = new FarmService(farmRepository);
export const farmController = new FarmController(farmService);
//# sourceMappingURL=farm.container.js.map