import { CreateFarmInput, UpdateFarmInput } from "shared";
import { prisma } from "db";
export class FarmRepository {
  async create(userId: string, data: CreateFarmInput) {
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
  async findAllByUserId(userId: string) {
    return prisma.farm.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async findById(farmId: string, userId: string) {
    return prisma.farm.findFirst({
      where: {
        id: farmId,
        userId,
      },
    });
  }
  async update(farmId: string, userId: string, input: UpdateFarmInput) {
    return prisma.farm.updateMany({
      where: {
        id: farmId,
        userId,
      },
      data: input,
    });
  }
  async delete(farmId: string, userId: string) {
    return prisma.farm.deleteMany({
      where: {
        id: farmId,
        userId,
      },
    });
  }
}
