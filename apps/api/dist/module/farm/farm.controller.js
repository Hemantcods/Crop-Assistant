export class FarmController {
    farmService;
    constructor(farmService) {
        this.farmService = farmService;
    }
    create = async (req, res) => {
        const userId = req.user?.id;
        const farm = await this.farmService.createFarm(userId, req.body);
        return res.status(201).json({
            success: true,
            data: farm,
            message: "Farm created successfully",
        });
    };
    getAll = async (req, res) => {
        const userId = req.user?.id;
        const farms = await this.farmService.getFarms(userId);
        return res.status(200).json({
            success: true,
            data: farms,
        });
    };
    getById = async (req, res) => {
        const userId = req.user?.id;
        const farmId = req.params.farmId;
        const farm = await this.farmService.GetFarm(userId, farmId);
        res.status(200).json({
            success: true,
            data: farm,
        });
    };
    update = async (req, res) => {
        const userId = req.user?.id;
        const farmId = req.params.id;
        const farm = await this.farmService.UpdateFarm(userId, farmId, req.body);
        res.status(200).json({
            success: true,
            data: farm,
            message: "Farm updated successfully",
        });
    };
    delete = async (req, res) => {
        const userId = req.user?.id;
        const farmId = req.params.farmId;
        await this.farmService.deleteFarm(userId, farmId);
        res.status(204).send();
    };
}
//# sourceMappingURL=farm.controller.js.map