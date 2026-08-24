export class CropController {
    cropService;
    constructor(cropService) {
        this.cropService = cropService;
    }
    create = async (req, res) => {
        const userId = req.user?.id;
        const farmId = req.params.farmId;
        const crop = await this.cropService.createCrop(userId, farmId, req.body);
        return res.status(201).json({
            success: true,
            data: crop,
            message: "Crop created successfully",
        });
    };
    getAll = async (req, res) => {
        const userId = req.user?.id;
        const farmId = req.params.farmId;
        const crops = await this.cropService.getFarmCrops(userId, farmId);
        return res.status(200).json({
            success: true,
            data: crops,
        });
    };
    getById = async (req, res) => {
        const userId = req.user?.id;
        const cropId = req.params.cropId;
        const crop = await this.cropService.getCrop(userId, cropId);
        return res.status(200).json({
            success: true,
            data: crop,
        });
    };
    update = async (req, res) => {
        const userId = req.user?.id;
        const cropId = req.params.cropId;
        const crop = await this.cropService.updateCrop(userId, cropId, req.body);
        return res.status(200).json({
            success: true,
            data: crop,
            message: "Crop updated successfully",
        });
    };
    delete = async (req, res) => {
        const userId = req.user?.id;
        const cropId = req.params.cropId;
        await this.cropService.deleteCrop(userId, cropId);
        return res.status(204).send();
    };
}
//# sourceMappingURL=crop.controller.js.map