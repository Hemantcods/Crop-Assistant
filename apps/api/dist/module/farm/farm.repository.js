import { prisma } from "db";
export class FarmRepository {
    async create(userId, data) {
        return prisma.farm.create({
            data: {
                userId,
                name: data.name,
                latitide: data.latitude,
                longitude: data.latitude,
                area: data.area,
                areaUnit: data.areaUnit,
            },
        });
    }
    async findAllByUserId(userId) {
        return prisma.farm.findMany({
            where: {
                userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async findById(farmId, userId) {
        return prisma.farm.findFirst({
            where: {
                id: farmId,
                userId,
            },
        });
    }
    async update(farmId, userId, input) {
        return prisma.farm.updateMany({
            where: {
                id: farmId,
                userId,
            },
            data: input,
        });
    }
    async delete(farmId, userId) {
        return prisma.farm.deleteMany({
            where: {
                id: farmId,
                userId,
            },
        });
    }
}
//# sourceMappingURL=farm.repository.js.map