import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDiagnosis } from '../../context/DiagnosisContext';
import { useCrops } from '../../context/CropContext';
import { useToast } from '../../components/common/Toast';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  Layers,
  Volume2,
  VolumeX,
  PlusSquare,
  RotateCcw,
  Bot,
  CheckCircle2,
  AlertTriangle,
  Info,
  BookOpen,
  Search,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DiagnosisResultPage = () => {
  const navigate = useNavigate();
  const { currentDiagnosis } = useDiagnosis();
  const { addCrop, farms } = useCrops();
  const { addToast } = useToast();

  const [showHeatmap, setShowHeatmap] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const diag = currentDiagnosis;

  const handlePlayVoiceAdvice = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }

      const text = diag.audioScript || diag.findings;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      addToast({
        title: 'Audio Not Supported',
        message: 'Speech synthesis is not enabled in this browser.',
        type: 'info',
      });
    }
  };

  const handleAddToMonitoring = async () => {
    const targetFarmId = farms[0]?.id;
    if (!targetFarmId) {
      addToast({
        title: 'Farm Required',
        message: 'Please create a farm holding first from the Home page.',
        type: 'info',
      });
      return;
    }

    try {
      await addCrop({
        farmId: targetFarmId,
        name: `${diag.cropName?.split(' ')[0] || 'Target Crop'} - Monitored Plot`,
        variety: diag.scientificName || 'Standard Hybrid',
        platedAt: new Date().toISOString(),
        status: diag.severity === 'Healthy' ? 'ACTIVE' : 'FAILED',
        imageUrl: diag.image,
      });
      confetti({ particleCount: 60, spread: 60 });
      addToast({
        title: 'Added to Monitoring',
        message: `${diag.cropName || 'Crop'} is now tracked in your active farm dashboard.`,
        type: 'success',
      });
      navigate('/crops');
    } catch (err) {
      addToast({
        title: 'Could Not Add Crop',
        message: err.message || 'Failed to add crop to monitoring.',
        type: 'error',
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header Section */}
      <div>
        {/* Severity Banner */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3.5 text-xs font-bold uppercase tracking-wider ${
            diag.severity === 'Healthy'
              ? 'bg-[#E8F5E9] text-[#2E7D32]'
              : 'bg-error-container text-on-error-container'
          }`}
        >
          <span className="material-symbols-outlined text-[16px] fill">
            {diag.severity === 'Healthy' ? 'check_circle' : 'warning'}
          </span>
          <span>{diag.severityText || `Severity: ${diag.severity}`}</span>
          <span className="opacity-60">• Confidence: {diag.confidence}</span>
        </div>

        <h1 className="font-headline-lg-mobile text-2xl sm:text-3xl lg:text-4xl lg:font-headline-lg text-primary font-bold mb-1.5">
          {diag.title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
          Diagnosis completed based on your uploaded leaf specimen • {diag.cropName}
        </p>
      </div>

      {/* Bento Grid Layout (Image on Left, Findings on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Analyzed Leaf Image & Heatmap (Span 7 on desktop) */}
        <div className="lg:col-span-7 bg-surface rounded-2xl border border-outline-variant p-5 shadow-[0_4px_12px_rgba(45,106,79,0.05)] relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-headline-md text-headline-md text-primary font-bold text-base sm:text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                image_search
              </span>
              <span>Analyzed Area</span>
            </h2>

            {/* Heatmap Toggle & Audio Advisory Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlayVoiceAdvice}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-primary text-on-primary border-primary animate-pulse'
                    : 'bg-surface-container-low text-primary border-outline-variant hover:bg-surface-container-high'
                }`}
                title="Voice advisory read-out"
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-4 h-4 text-on-primary" />
                    <span className="hidden sm:inline">Mute Voice</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-primary" />
                    <span className="hidden sm:inline">Voice Advice</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowHeatmap(!showHeatmap)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  showHeatmap
                    ? 'bg-secondary-container text-on-secondary-container border-secondary/30'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showHeatmap ? 'Heatmap: ON' : 'Heatmap: OFF'}</span>
              </button>
            </div>
          </div>

          {/* Leaf Visualizer */}
          <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/60">
            <img
              src={diag.image}
              alt={diag.title}
              className="w-full h-full object-cover"
            />

            {/* AI Heatmap Overlay Effect matching Stitch */}
            {showHeatmap && diag.severity !== 'Healthy' && (
              <div className="absolute inset-0 bg-gradient-to-tr from-error/40 via-[#FF5722]/30 to-transparent mix-blend-multiply rounded-xl pointer-events-none transition-opacity duration-300">
                {/* Glowing lesion circles */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-24 h-24 bg-error/40 rounded-full blur-md animate-pulse" />
                <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-[#FF9800]/50 rounded-full blur-sm" />
              </div>
            )}

            {/* Heatmap Legend Pill */}
            {showHeatmap && (
              <div className="absolute bottom-3 left-3 bg-inverse-surface/85 backdrop-blur-xs text-inverse-on-surface px-3 py-1 rounded-lg text-xs flex items-center gap-2 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping" />
                <span>AI Thermal Detection Zone (Lesion Density)</span>
              </div>
            )}
          </div>
        </div>

        {/* Clinical Breakdown & Recommended Actions (Span 5 on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* What we found */}
          <div className="bg-surface rounded-2xl border border-outline-variant p-5 sm:p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)]">
            <h3 className="font-headline-md text-headline-md text-primary font-bold text-base sm:text-lg mb-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">info</span>
              <span>What we found</span>
            </h3>
            <p className="font-body-md text-body-md text-on-surface text-xs sm:text-sm leading-relaxed">
              {diag.findings}
            </p>
          </div>

          {/* What you should do */}
          <div className="bg-surface rounded-2xl border border-outline-variant p-5 sm:p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)] flex-grow">
            <h3 className="font-headline-md text-headline-md text-primary font-bold text-base sm:text-lg mb-3.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                task_alt
              </span>
              <span>What you should do</span>
            </h3>

            <div className="flex flex-col gap-3">
              {diag.actions?.map((act) => (
                <div
                  key={act.id}
                  className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/50 hover:bg-surface-container transition-colors"
                >
                  <div className="bg-primary-container text-on-primary-container p-2 rounded-full shrink-0 mt-0.5 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] fill">
                      {act.icon || 'search'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-background font-bold text-xs sm:text-sm mb-0.5">
                      {act.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-[11px] sm:text-xs leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action CTA Buttons (Matching Stitch) */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t border-outline-variant">
        <button
          type="button"
          onClick={handleAddToMonitoring}
          className="w-full sm:w-auto min-h-[56px] px-8 py-3.5 bg-primary text-on-primary font-label-md text-label-md rounded-xl hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">add_box</span>
          <span>Add to Crops Monitoring</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/diagnose')}
          className="w-full sm:w-auto min-h-[56px] px-8 py-3.5 bg-transparent border-2 border-primary text-primary font-label-md text-label-md rounded-xl hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">restart_alt</span>
          <span>Check other crops</span>
        </button>
      </div>

      {/* AI Medical Disclaimer matching Stitch */}
      <div className="text-center pb-2">
        <p className="font-label-sm text-label-sm text-on-surface-variant text-xs max-w-2xl mx-auto flex items-center justify-center gap-1.5 opacity-75">
          <Bot className="w-4 h-4 shrink-0 text-primary" />
          <span>
            AI analysis is preliminary. Always consult with a local agricultural extension officer for definitive diagnoses.
          </span>
        </p>
      </div>
    </div>
  );
};
