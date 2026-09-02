import { AppError } from "../../errors/AppError";
import { MLClient } from "../../integrations/ml/ml-client";
import { StorageService } from "../../integrations/storage/storage.service";
import { FarmRepository } from "../farm/farm.repository";
import { CropRepository } from "../crop/crop.repository";
import { DiagnosisRepository } from "./diagnosis.repository";
import { scanStore, TemporaryScan } from "./scan.store";
import type { DiagnosisStatus } from "db";

export class DiagnosisService {
  constructor(
    private readonly mlClient: MLClient,
    private readonly storageService: StorageService,
    private readonly farmRepository: FarmRepository,
    private readonly cropRepository: CropRepository,
    private readonly diagnosisRepository: DiagnosisRepository,
  ) {}

  async scanCrop(
    userId: string,
    cropId: string,
    file: Express.Multer.File,
  ): Promise<{ scanId: string; prediction: { disease: string; confidence: number; modelVersion: string } }> {
    const farm = await this.farmRepository.findBycropId(cropId, userId);
    if (!farm) {
      throw new AppError("Crop not found", 404);
    }
    const crop = await this.cropRepository.findCropById(cropId);

    if (!crop) {
      throw new AppError("Crop not found", 404);
    }

    const farmCheck = await this.farmRepository.findById(crop.farmId, userId);

    if (!farmCheck) {
      throw new AppError("Crop not found", 404);
    }

    // const prediction = await this.mlClient.predictDisease(file);
    const prediction = await this.mlClient.predictDisease(file);

    const scan = scanStore.store(
      userId,
      cropId,
      file.buffer,
      file.mimetype,
      file.originalname,
      prediction,
    );

    return {
      scanId: scan.id,
      prediction: scan.prediction,
    };
  }

  async saveDiagnosis(
    userId: string,
    cropId: string,
    scanId: string,
  ): Promise<{ diagnosisId: string }> {
    const scan = scanStore.get(scanId);

    if (!scan) {
      throw new AppError("Temporary scan not found or expired", 404);
    }

    if (scan.userId !== userId) {
      throw new AppError("Crop not found", 404);
    }

    if (scan.cropId !== cropId) {
      throw new AppError("Crop not found", 404);
    }

    const crop = await this.cropRepository.findCropById(cropId);

    if (!crop) {
      throw new AppError("Crop not found", 404);
    }

    const farmCheck = await this.farmRepository.findById(crop.farmId, userId);

    if (!farmCheck) {
      throw new AppError("Crop not found", 404);
    }

    const uploadResult = await this.storageService.upload({
      buffer: scan.imageBuffer,
      mimetype: scan.mimetype,
      originalname: scan.originalname,
      fieldname: "image",
      encoding: "7bit",
      size: scan.imageBuffer.length,
      destination: "",
      filename: "",
      path: "",
      stream: null as any,
    });

    const cropImage = await this.diagnosisRepository.createCropImage(cropId, uploadResult.url);

    const diagnosis = await this.diagnosisRepository.createDiagnosis({
      cropId,
      imageId: cropImage.id,
      disease: scan.prediction.disease,
      confidence: scan.prediction.confidence,
      modelVersion: scan.prediction.modelVersion,
      status: "COMPLETED" as DiagnosisStatus,
    });

    scanStore.remove(scanId);

    return { diagnosisId: diagnosis.id };
  }

  async getDiagnoses(userId: string, cropId: string): Promise<any[]> {
    const crop = await this.cropRepository.findCropById(cropId);

    if (!crop) {
      throw new AppError("Crop not found", 404);
    }

    const farm = await this.farmRepository.findById(crop.farmId, userId);

    if (!farm) {
      throw new AppError("Crop not found", 404);
    }

    return this.diagnosisRepository.findDiagnosesByCropId(cropId);
  }

  async getDiagnosisById(userId: string, diagnosisId: string): Promise<any> {
    const diagnosis = await this.diagnosisRepository.findDiagnosisById(diagnosisId);

    if (!diagnosis) {
      throw new AppError("Diagnosis not found", 404);
    }

    const crop = await this.cropRepository.findCropById(diagnosis.cropId);

    if (!crop) {
      throw new AppError("Diagnosis not found", 404);
    }

    const farm = await this.farmRepository.findById(crop.farmId, userId);

    if (!farm) {
      throw new AppError("Diagnosis not found", 404);
    }

    return diagnosis;
  }
}