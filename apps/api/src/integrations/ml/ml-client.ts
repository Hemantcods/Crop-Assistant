export type DiseasePrediction = {
  disease: string;
  confidence: number;
  modelVersion: string;
};

export class MLClient {
  constructor(private readonly baseUrl: string) {}
  async predictDisease(file: Express.Multer.File): Promise<DiseasePrediction> {
    const formData = new FormData();
    const blob = new Blob([new Uint8Array(file.buffer)], {
      type: file.mimetype,
    });
    formData.append("image", blob, file.originalname);

    const response = await fetch(`${this.baseUrl}/predict`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ML service failed:${response.status} ${errorText}`);
    }
    const data = (await response.json()) as DiseasePrediction;
    return this.validatePrediction(data);
  }
  private validatePrediction(data: DiseasePrediction): DiseasePrediction {
    if (
      typeof data.disease !== "string" ||
      typeof data.confidence !== "number" ||
      typeof data.modelVersion !== "string"
    ) {
      throw new Error("Invalid response received from ML service");
    }

    if (data.confidence < 0 || data.confidence > 1) {
      throw new Error("ML service returned invalid confidence");
    }

    return data;
  }
}
