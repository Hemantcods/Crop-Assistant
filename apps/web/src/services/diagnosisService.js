import { simulateNetworkDelay } from './apiClient';
import { MOCK_SAMPLE_DIAGNOSES } from '../data/mockData';

export const diagnosisService = {
  async getPresetSamples() {
    return MOCK_SAMPLE_DIAGNOSES;
  },

  async getDiagnosisById(id) {
    await simulateNetworkDelay(200);
    const diagnosis = MOCK_SAMPLE_DIAGNOSES.find((d) => d.id === id);
    return diagnosis || MOCK_SAMPLE_DIAGNOSES[0];
  },

  async runAiInference(imageDataOrPreset) {
    // Simulate real-time neural network inference latency
    await simulateNetworkDelay(1800);

    if (typeof imageDataOrPreset === 'string' && imageDataOrPreset.startsWith('sample-')) {
      const match = MOCK_SAMPLE_DIAGNOSES.find((d) => d.id === imageDataOrPreset);
      if (match) return match;
    }

    // Default to Late Blight scan result as matching the Stitch demo
    return MOCK_SAMPLE_DIAGNOSES[0];
  }
};
