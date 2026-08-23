import React, { createContext, useContext, useState } from 'react';
import { diagnosisService } from '../services/diagnosisService';
import { MOCK_SAMPLE_DIAGNOSES } from '../data/mockData';

const DiagnosisContext = createContext();

export const DiagnosisProvider = ({ children }) => {
  const [currentDiagnosis, setCurrentDiagnosis] = useState(MOCK_SAMPLE_DIAGNOSES[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingStep, setAnalyzingStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [scanHistory, setScanHistory] = useState(MOCK_SAMPLE_DIAGNOSES);

  const startScan = async (imageDataOrPreset) => {
    setIsAnalyzing(true);
    setAnalyzingStep(1);
    if (typeof imageDataOrPreset === 'string' && imageDataOrPreset.startsWith('data:image')) {
      setUploadedImage(imageDataOrPreset);
    } else if (typeof imageDataOrPreset === 'object' && imageDataOrPreset.image) {
      setUploadedImage(imageDataOrPreset.image);
    }

    // Step 1: Segmentation
    setTimeout(() => setAnalyzingStep(2), 600);
    // Step 2: Feature matching
    setTimeout(() => setAnalyzingStep(3), 1200);

    try {
      const result = await diagnosisService.runAiInference(imageDataOrPreset);
      setCurrentDiagnosis(result);
      setScanHistory((prev) => [result, ...prev.filter((d) => d.id !== result.id)]);
      return result;
    } finally {
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 1900);
    }
  };

  const getDiagnosisById = async (id) => {
    const diag = await diagnosisService.getDiagnosisById(id);
    setCurrentDiagnosis(diag);
    return diag;
  };

  return (
    <DiagnosisContext.Provider
      value={{
        currentDiagnosis,
        setCurrentDiagnosis,
        isAnalyzing,
        analyzingStep,
        uploadedImage,
        setUploadedImage,
        scanHistory,
        startScan,
        getDiagnosisById,
      }}
    >
      {children}
    </DiagnosisContext.Provider>
  );
};

export const useDiagnosis = () => {
  const context = useContext(DiagnosisContext);
  if (!context) {
    throw new Error('useDiagnosis must be used within a DiagnosisProvider');
  }
  return context;
};
