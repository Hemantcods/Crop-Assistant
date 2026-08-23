import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDiagnosis } from '../../context/DiagnosisContext';
import { useToast } from '../../components/common/Toast';
import { MOCK_SAMPLE_DIAGNOSES } from '../../data/mockData';
import {
  Camera,
  Image as ImageIcon,
  Sun,
  Focus,
  Crop,
  Sparkles,
  CheckCircle2,
  Scan,
  BrainCircuit,
  Info,
} from 'lucide-react';

export const DiagnosePage = () => {
  const navigate = useNavigate();
  const { startScan, isAnalyzing, analyzingStep } = useDiagnosis();
  const { addToast } = useToast();

  const fileInputRef = useRef(null);
  const [selectedPreset, setSelectedPreset] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUrl = event.target.result;
        runDiagnostic(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePresetSelect = (preset) => {
    setSelectedPreset(preset.id);
    runDiagnostic(preset.id);
  };

  const runDiagnostic = async (payload) => {
    try {
      const result = await startScan(payload);
      addToast({
        title: 'Diagnosis Complete',
        message: `Detected ${result.title} with ${result.confidence} confidence.`,
        type: 'success',
      });
      navigate('/diagnose/result');
    } catch (err) {
      addToast({
        title: 'Scan Failed',
        message: 'Could not process leaf image.',
        type: 'error',
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Page Header */}
      <div className="text-center lg:text-left">
        <h1 className="font-headline-lg-mobile lg:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mb-2">
          Check your crop
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base max-w-2xl">
          Take a photo of a leaf to check for diseases. Our AI will analyze the image and provide a diagnosis along with actionable treatment steps.
        </p>
      </div>

      {/* Bento Grid Layout (Upload on Left, Guidelines on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Upload Dropzone (Span 8 on desktop) */}
        <div className="lg:col-span-8 bg-surface border border-outline-variant rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[420px] shadow-[0_4px_12px_rgba(45,106,79,0.05)] relative overflow-hidden group">
          {isAnalyzing ? (
            /* Real-Time Neural Network Inference View */
            <div className="flex flex-col items-center justify-center text-center p-6 w-full max-w-md">
              <div className="relative w-36 h-36 rounded-2xl overflow-hidden mb-6 border-2 border-primary shadow-lg bg-surface-container-high flex items-center justify-center">
                <img
                  src={
                    selectedPreset
                      ? MOCK_SAMPLE_DIAGNOSES.find((d) => d.id === selectedPreset)?.image
                      : MOCK_SAMPLE_DIAGNOSES[0].image
                  }
                  alt="Scanning leaf"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Laser Scanning Line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent scanner-laser shadow-[0_0_12px_#25D366]" />
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              </div>

              <h3 className="font-headline-md text-headline-md text-primary text-lg font-bold mb-2 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 animate-pulse text-secondary" />
                <span>AI Vision Inference in Progress...</span>
              </h3>

              <p className="text-xs text-on-surface-variant mb-5 font-medium">
                {analyzingStep === 1 && 'Segmenting leaf geometry and necrotic lesions...'}
                {analyzingStep === 2 && 'Matching with 50,000+ pathogen profiles in dataset...'}
                {analyzingStep === 3 && 'Synthesizing precision agricultural recommendations...'}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500 rounded-full"
                  style={{ width: `${(analyzingStep / 3) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            /* Upload Dropzone matching Stitch */
            <div className="border-2 border-dashed border-primary-fixed-dim rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 text-center">
              <div className="bg-primary-container p-4 rounded-full mb-4 shadow-sm text-on-primary-container">
                <span className="material-symbols-outlined text-[44px]">add_a_photo</span>
              </div>

              <h3 className="font-headline-md text-headline-md text-primary text-lg sm:text-xl font-bold mb-2">
                Drag & Drop or Tap to Upload
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-xs sm:text-sm mb-6 max-w-md">
                For best results, place the affected leaf on a plain background and ensure it's well-lit.
              </p>

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto z-10">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-primary text-on-primary font-label-md text-label-md py-3.5 px-6 rounded-xl min-h-[52px] shadow-sm hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  <span>Take Photo</span>
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-surface-container text-primary border border-outline-variant font-label-md text-label-md py-3.5 px-6 rounded-xl min-h-[52px] hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">image</span>
                  <span>Upload from Gallery</span>
                </button>
              </div>

              {/* Instant Preset Sample Leaves */}
              <div className="mt-8 pt-6 border-t border-outline-variant/60 w-full max-w-md">
                <p className="text-xs font-semibold text-on-surface-variant mb-3 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  <span>Or test with sample diseased leaves:</span>
                </p>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  {MOCK_SAMPLE_DIAGNOSES.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handlePresetSelect(preset)}
                      className="p-2 bg-surface-container-lowest hover:bg-secondary-container hover:text-on-secondary-container border border-outline-variant rounded-xl transition-all text-center flex flex-col items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={preset.image}
                          alt={preset.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-semibold text-[11px] truncate w-full">
                        {preset.title.replace('Possible ', '')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Photo Guidelines Sidebar (Span 4 on desktop matching Stitch) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)] h-full flex flex-col justify-between">
            <div>
              <h3 className="font-label-md text-label-md text-primary font-bold text-base mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">info</span>
                <span>Photo Guidelines</span>
              </h3>

              <ul className="flex flex-col gap-5">
                {/* Guideline 1 */}
                <li className="flex items-start gap-3.5">
                  <div className="bg-secondary-container p-2.5 rounded-xl shrink-0 mt-0.5 text-on-secondary-container">
                    <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface font-bold text-sm mb-0.5">
                      Good Lighting
                    </h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Avoid harsh shadows or direct sunlight. Diffused, natural daylight is best.
                    </p>
                  </div>
                </li>

                {/* Guideline 2 */}
                <li className="flex items-start gap-3.5">
                  <div className="bg-secondary-container p-2.5 rounded-xl shrink-0 mt-0.5 text-on-secondary-container">
                    <span className="material-symbols-outlined text-[18px]">center_focus_strong</span>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface font-bold text-sm mb-0.5">
                      Stay Focused
                    </h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Ensure the image is sharp. Tap your screen to focus before capturing.
                    </p>
                  </div>
                </li>

                {/* Guideline 3 */}
                <li className="flex items-start gap-3.5">
                  <div className="bg-secondary-container p-2.5 rounded-xl shrink-0 mt-0.5 text-on-secondary-container">
                    <span className="material-symbols-outlined text-[18px]">crop_free</span>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface font-bold text-sm mb-0.5">
                      Entire Leaf
                    </h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Include the whole leaf in the frame, clearly showing both healthy and diseased parts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 text-xs text-on-surface-variant mt-6">
              <span className="font-bold text-primary">AI accuracy tip:</span> Clean excess dirt off the leaf blade for highest confidence scoring.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
