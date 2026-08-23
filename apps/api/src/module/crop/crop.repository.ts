import { prisma } from "db";
import { CreateCropInput, UpdateCropInput } from "shared";
import type { Crop } from "db";

export class CropRepository {
  async create(farmId: string, data: CreateCropInput): Promise<Crop> {
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
  async fincAllByFarmId(farmId: string): Promise<Crop[]> {
    return prisma.crop.findMany({
      where: {
        farmId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async findCropById(cropId: string): Promise<Crop | null> {
    return prisma.crop.findUnique({
      where: {
        id: cropId,
      },
    });
  }
  async updateCrop(cropId: string, data: UpdateCropInput): Promise<Crop> {
    return prisma.crop.update({
      where: {
        id: cropId,
      },
      data,
    });
  }
  async deleteCrop(cropId: string): Promise<Crop> {
    return prisma.crop.delete({
      where: {
        id: cropId,
      },
    });
  }
}
