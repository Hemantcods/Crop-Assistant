import apiClient from "./apiClient";
import { MOCK_SAMPLE_DIAGNOSES } from "../data/mockData";

export const diagnosisService = {
  async getPresetSamples() {
    return MOCK_SAMPLE_DIAGNOSES;
  },

  async getDiagnosisById() {
    const response = await apiClient.get("");
    return response.data;
  },

  async runAiInference(cropId, imageFile) {
    const formData = new FormData();
    formData.append("image", imageFile);
    const response = await apiClient.post(
      `/diagnosis/scan?cropId=${encodeURIComponent(cropId)}`,
      formData,
    );
    const data = response.data.data;
    const scanId = data.scanId;
    const prediction = data.prediction;
    console.log(prediction.disease)
    return {
      scanId,
      title: prediction.disease.replaceAll("__", "-").replaceAll("_", " "),
      severity:prediction.disease.split('___').at(-1),
      disease: prediction.disease,
      confidence: prediction.confidence,
      status: prediction.status,
      message: prediction.message,
      modelVersion: prediction.modelVersion,
      image: URL.createObjectURL(imageFile),
      findings: prediction.message,
      actions: [
        {
          id: "treatment",
          title: "Treatment",
          desc: prediction.advisory?.treatment,
          icon: "medical_services",
        },
        {
          id: "prevention",
          title: "Prevention",
          desc: prediction.advisory?.prevention,
          icon: "shield",
        },
      ],
      advisory: prediction.advisory,
    };
  },
};
