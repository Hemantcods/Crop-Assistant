import { prisma } from "db";
import type { Diagnosis, CropImage, DiagnosisStatus } from "db";

export class DiagnosisRepository {
  async createCropImage(cropId: string, url: string): Promise<CropImage> {
    return prisma.cropImage.create({
      data: {
        cropId,
        url,
      },
    });
  }

  async createDiagnosis(data: {
    cropId: string;
    imageId: string;
    disease: string;
    confidence: number;
    modelVersion: string;
    status: DiagnosisStatus;
  }): Promise<Diagnosis> {
    return prisma.diagnosis.create({
      data: {
        cropId: data.cropId,
        imageId: data.imageId,
        disease: data.disease,
        confidence: data.confidence,
        modelVersion: data.modelVersion,
        status: data.status,
      },
    });
  }

  async findDiagnosesByCropId(cropId: string): Promise<Diagnosis[]> {
    return prisma.diagnosis.findMany({
      where: { cropId },
      orderBy: { createdAt: "desc" },
    });
  }

  async findDiagnosisById(diagnosisId: string): Promise<Diagnosis | null> {
    return prisma.diagnosis.findUnique({
      where: { id: diagnosisId },
    });
  }

  async findCropImageById(imageId: string): Promise<CropImage | null> {
    return prisma.cropImage.findUnique({
      where: { id: imageId },
    });
  }
}