import { prisma } from "db";
export class CropRepository {
    async create(farmId, data) {
        return prisma.crop.create({
            data: {
                farmId,
                name: data.name,
                variety: data.variety,
                platedAt: data.platedAt,
                harvestedAt: data.platedAt,
                status: data.status,
            },
        });
    }
    async fincAllByFarmId(farmId) {
        return prisma.crop.findMany({
            where: {
                farmId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async findCropById(cropId) {
        return prisma.crop.findUnique({
            where: {
                id: cropId,
            },
        });
    }
    async updateCrop(cropId, data) {
        return prisma.crop.update({
            where: {
                id: cropId,
            },
            data,
        });
    }
    async deleteCrop(cropId) {
        return prisma.crop.delete({
            where: {
                id: cropId,
            },
        });
    }
}
//# sourceMappingURL=crop.repository.js.map