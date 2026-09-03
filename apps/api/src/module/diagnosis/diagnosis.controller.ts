import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { DiagnosisService } from "./diagnosis.service";
import { AppError } from "../../errors/AppError";

export class DiagnosisController {
  constructor(private readonly diagnosisService: DiagnosisService) {}

  scanCrop = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const cropId = req.query.cropId as string;
    const file = req.file!;
    if (!file) {
      throw new AppError("Image of crop is required")
    }
    const result = await this.diagnosisService.scanCrop(userId, cropId, file);

    return res.status(200).json({
      success: true,
      data: result,
    });
  };

  saveDiagnosis = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const cropId = req.params.cropId as string;
    const scanId = req.params.scanId as string;

    const result = await this.diagnosisService.saveDiagnosis(
      userId,
      cropId,
      scanId,
    );

    return res.status(201).json({
      success: true,
      data: result,
      message: "Diagnosis saved successfully",
    });
  };

  getDiagnoses = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const cropId = req.params.cropId as string;

    const diagnoses = await this.diagnosisService.getDiagnoses(userId, cropId);

    return res.status(200).json({
      success: true,
      data: diagnoses,
    });
  };

  getDiagnosisById = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id!;
    const diagnosisId = req.params.diagnosisId as string;

    const diagnosis = await this.diagnosisService.getDiagnosisById(
      userId,
      diagnosisId,
    );

    return res.status(200).json({
      success: true,
      data: diagnosis,
    });
  };
}
