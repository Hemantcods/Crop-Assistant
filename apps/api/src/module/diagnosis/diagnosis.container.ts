import { DiagnosisController } from "./diagnosis.controller";
import { DiagnosisRepository } from "./diagnosis.repository";
import { DiagnosisService } from "./diagnosis.service";
import { FarmRepository } from "../farm/farm.repository";
import { CropRepository } from "../crop/crop.repository";
import { MLClient } from "../../integrations/ml/ml-client";
import { StorageService } from "../../integrations/storage/storage.service";
import { env } from "../../config/env";

const diagnosisRepository = new DiagnosisRepository();
const farmRepository = new FarmRepository();
const cropRepository = new CropRepository();
const mlClient = new MLClient(env.ML_SERVICE_URL ?? "http://localhost:8000");
const storageService = new StorageService();
const diagnosisService = new DiagnosisService(mlClient, storageService, farmRepository, cropRepository, diagnosisRepository);
export const diagnosisController = new DiagnosisController(diagnosisService);