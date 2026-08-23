import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCrops } from '../../context/CropContext';
import { useAlerts } from '../../context/AlertsContext';
import { useSettings } from '../../context/SettingsContext';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import {
  Search,
  PlusCircle,
  FileUp,
  CloudLightning,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { crops, addCrop } = useCrops();
  const { weather, setIsWeatherModalOpen } = useAlerts();
  const { t } = useSettings();
  const { addToast } = useToast();

  // Modals state
  const [isAddCropModalOpen, setIsAddCropModalOpen] = useState(false);
  const [isSoilModalOpen, setIsSoilModalOpen] = useState(false);
  const [isStormAlertModalOpen, setIsStormAlertModalOpen] = useState(false);
  const [isAnalyzingSoil, setIsAnalyzingSoil] = useState(false);
  const [soilResult, setSoilResult] = useState(null);

  // New crop form state
  const [newCropName, setNewCropName] = useState('');
  const [newCropVariety, setNewCropVariety] = useState('');
  const [newCropField, setNewCropField] = useState('');
  const [newCropAcres, setNewCropAcres] = useState('3.0');

  const handleAddCropSubmit = async (e) => {
    e.preventDefault();
    if (!newCropName) {
      addToast({ title: 'Crop Name Required', message: 'Please enter crop name.', type: 'error' });
      return;
    }
    const created = await addCrop({
      name: newCropName,
      variety: newCropVariety || 'High Yield Hybrid',
      field: newCropField || 'South Plot',
      acres: newCropAcres,
    });
    confetti({ particleCount: 50, spread: 60 });
    addToast({
      title: 'Crop Registered!',
      message: `${created.name} successfully added to your farm portfolio.`,
      type: 'success',
    });
    setIsAddCropModalOpen(false);
    setNewCropName('');
    setNewCropVariety('');
    setNewCropField('');
  };

  const handleSoilUploadSim = () => {
    setIsAnalyzingSoil(true);
    setTimeout(() => {
      setIsAnalyzingSoil(false);
      setSoilResult({
        ph: '6.8 (Neutral)',
        nitrogen: 'Medium (280 kg/ha)',
        phosphorus: 'High (24 kg/ha)',
        potassium: 'High (310 kg/ha)',
        recommendation: 'Soil is in prime condition. Optimal for vegetative growth.',
      });
      addToast({
        title: 'Soil Report Analyzed',
        message: 'NPK and pH parameters extracted successfully.',
        type: 'success',
      });
    }, 1400);
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header Section */}
      <section className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-background font-bold">
            Good morning, {user?.name || 'Sagar'}
          </h1>
          <div className="flex items-center gap-2 text-on-surface-variant mt-2 font-body-md text-sm sm:text-base flex-wrap">
            <button
              onClick={() => setIsWeatherModalOpen(true)}
              className="inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
              title="Click to view live weather & change location"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">
                location_on
              </span>
              <span className="font-semibold text-on-surface">
                {weather?.rawCity || user?.village?.split(',')[0] || 'Pune'}
              </span>
              {weather?.state && (
                <span className="text-xs text-on-surface-variant hidden sm:inline">
                  ({weather.state})
                </span>
              )}
            </button>
            <span className="mx-0.5 opacity-40">•</span>
            <button
              onClick={() => setIsWeatherModalOpen(true)}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer px-2 py-0.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs sm:text-sm font-medium text-on-surface"
              title="Open Live Weather & Microclimate Forecast"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">
                {weather?.icon || 'partly_cloudy_day'}
              </span>
              <span>
                {weather ? `${weather.temp}°C • ${weather.condition}` : '26°C • Live Weather'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Attention Section (Alert Banner matching Stitch) */}
      <section>
        <div className="bg-[#FFF8E1] border border-[#FFD54F] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-[0_4px_12px_rgba(255,213,79,0.15)] relative overflow-hidden">
          {/* Subtle Watermark Icon */}
          <div className="absolute -right-8 -top-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] text-[#FFB300]">
              warning
            </span>
          </div>

          <div className="flex items-start gap-4 z-10">
            <div className="bg-[#FFECB3] p-2.5 rounded-full text-[#F57C00] shrink-0 mt-0.5 md:mt-0">
              <span className="material-symbols-outlined text-[24px] fill">storm</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-[#E65100] text-base sm:text-lg font-bold">
                Heavy rain expected tomorrow
              </h3>
              <p className="font-body-md text-body-md text-[#F57C00] text-sm mt-0.5">
                Your wheat field may need attention. 35-50mm rainfall forecast with gusty winds.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsStormAlertModalOpen(true)}
            className="bg-[#FFD54F] hover:bg-[#FFC107] text-[#E65100] font-label-md text-label-md px-6 py-3 rounded-xl transition-colors whitespace-nowrap z-10 w-full md:w-auto mt-2 md:mt-0 active:scale-95 text-sm font-semibold cursor-pointer shadow-xs"
          >
            View details
          </button>
        </div>
      </section>

      {/* Quick Actions (Matching Stitch Layout) */}
      <section>
        <h2 className="font-headline-md text-headline-md text-on-background text-lg sm:text-xl font-bold mb-3.5">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Dominant Primary CTA */}
          <button
            onClick={() => navigate('/diagnose')}
            className="col-span-2 md:col-span-1 bg-primary text-on-primary rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_4px_12px_rgba(15,82,56,0.2)] hover:bg-on-primary-fixed-variant transition-all active:scale-[0.98] min-h-[56px] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[24px] fill group-hover:scale-110 transition-transform">
              search
            </span>
            <span className="font-label-md text-label-md font-semibold text-sm sm:text-base">
              Check Crops (AI Scan)
            </span>
          </button>

          {/* Secondary CTA: Add Crops */}
          <button
            onClick={() => setIsAddCropModalOpen(true)}
            className="bg-surface text-on-surface-variant border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-[0.98] shadow-[0_4px_12px_rgba(45,106,79,0.05)] min-h-[56px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-outline text-[24px]">
              add_circle
            </span>
            <span className="font-label-md text-label-md text-xs sm:text-sm font-semibold text-on-surface">
              Add Crops
            </span>
          </button>

          {/* Secondary CTA: Upload Soil Report */}
          <button
            onClick={() => setIsSoilModalOpen(true)}
            className="bg-surface text-on-surface-variant border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-[0.98] shadow-[0_4px_12px_rgba(45,106,79,0.05)] min-h-[56px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-outline text-[24px]">
              upload_file
            </span>
            <span className="font-label-md text-label-md text-xs sm:text-sm font-semibold text-center text-on-surface">
              Upload Soil Report
            </span>
          </button>
        </div>
      </section>

      {/* Crop Overview (Bento Grid Style matching Stitch) */}
      <section className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline-md text-headline-md text-on-background text-lg sm:text-xl font-bold">
            Crop Overview
          </h2>
          <Link
            to="/crops"
            className="text-primary font-label-md text-label-md text-sm font-semibold hover:underline flex items-center gap-1"
          >
            <span>View all ({crops.length})</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {crops.map((crop) => (
            <div
              key={crop.id}
              className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(45,106,79,0.05)] flex flex-col hover:shadow-[0_8px_24px_rgba(45,106,79,0.1)] transition-all duration-300"
            >
              {/* Card Banner Image */}
              <div className="h-44 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/25 z-10" />
                <img
                  src={crop.imageUrl}
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge
                    variant={crop.status === 'Healthy' ? 'success' : 'warning'}
                    icon={
                      <span
                        className="material-symbols-outlined text-[14px] fill"
                      >
                        {crop.status === 'Healthy' ? 'check_circle' : 'warning'}
                      </span>
                    }
                  >
                    {crop.status}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-4 z-20 bg-inverse-surface/75 backdrop-blur-xs text-inverse-on-surface px-2.5 py-1 rounded-lg text-xs font-semibold">
                  {crop.acres} Acres
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface text-lg font-bold">
                      {crop.name}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-xs sm:text-sm">
                      {crop.field}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-headline-md text-headline-md text-lg font-bold ${
                        crop.status === 'Healthy' ? 'text-primary' : 'text-[#E65100]'
                      }`}
                    >
                      {crop.growthPercent}%
                    </span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">
                      Growth
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-surface-container-high rounded-full h-2.5 mt-2 mb-5 overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full progress-bar-fill ${
                      crop.status === 'Healthy' ? 'bg-primary' : 'bg-[#FFB300]'
                    }`}
                    style={{ '--progress-width': `${crop.growthPercent}%` }}
                  />
                </div>

                <div className="mt-auto pt-2">
                  <Button
                    onClick={() => navigate(`/crops/${crop.id}`)}
                    variant={crop.status === 'Healthy' ? 'outlinePrimary' : 'warning'}
                    className="w-full text-sm font-semibold"
                  >
                    <span>View crops</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Crop Modal */}
      <Modal
        isOpen={isAddCropModalOpen}
        onClose={() => setIsAddCropModalOpen(false)}
        title="Add New Field Crop"
        subtitle="Register a new crop plot into CropCare monitoring"
      >
        <form onSubmit={handleAddCropSubmit} className="flex flex-col gap-4 py-2">
          <Input
            label="Crop Name"
            placeholder="e.g. Cotton, Mustard, Soybeans, Tomato"
            value={newCropName}
            onChange={(e) => setNewCropName(e.target.value)}
            required
          />

          <Input
            label="Variety / Hybrid Code"
            placeholder="e.g. BT Cotton - RCH 659"
            value={newCropVariety}
            onChange={(e) => setNewCropVariety(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Field / Zone"
              placeholder="e.g. West Plot 2"
              value={newCropField}
              onChange={(e) => setNewCropField(e.target.value)}
            />
            <Input
              label="Acreage (Acres)"
              type="number"
              step="0.5"
              value={newCropAcres}
              onChange={(e) => setNewCropAcres(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-3 border-t border-outline-variant">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddCropModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Add Crop
            </Button>
          </div>
        </form>
      </Modal>

      {/* Soil Report Modal */}
      <Modal
        isOpen={isSoilModalOpen}
        onClose={() => {
          setIsSoilModalOpen(false);
          setSoilResult(null);
        }}
        title="Upload Soil Health Report"
        subtitle="AI Optical Reader extracts N-P-K, pH and generates fertilization advice"
      >
        <div className="flex flex-col gap-4 py-2">
          {!soilResult ? (
            <div
              onClick={handleSoilUploadSim}
              className="border-2 border-dashed border-primary/40 hover:border-primary bg-surface-container-low hover:bg-surface-container rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3"
            >
              <div className="p-3 bg-primary-container text-on-primary-container rounded-full">
                <FileUp className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-on-surface">
                  {isAnalyzingSoil ? 'Scanning document...' : 'Click to Upload Soil Test PDF / Photo'}
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  Supports Krishi Vigyan Kendra & lab reports.
                </p>
              </div>
              {isAnalyzingSoil && (
                <div className="w-full max-w-xs bg-surface-container-high h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-primary h-full animate-pulse w-3/4 rounded-full" />
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-sm">
              <div className="p-4 bg-secondary-container/40 rounded-xl border border-secondary/20 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Soil pH:</span>
                  <strong className="text-primary">{soilResult.ph}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Available Nitrogen (N):</span>
                  <strong className="text-on-surface">{soilResult.nitrogen}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Phosphorus (P):</span>
                  <strong className="text-[#2E7D32]">{soilResult.phosphorus}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Potassium (K):</span>
                  <strong className="text-[#2E7D32]">{soilResult.potassium}</strong>
                </div>
              </div>

              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant">
                <p className="text-xs text-on-surface">
                  <strong>Agronomist Note:</strong> {soilResult.recommendation}
                </p>
              </div>

              <Button onClick={() => setIsSoilModalOpen(false)} className="w-full mt-2">
                Done
              </Button>
            </div>
          )}
        </div>
      </Modal>

      {/* Storm Alert Details Modal */}
      <Modal
        isOpen={isStormAlertModalOpen}
        onClose={() => setIsStormAlertModalOpen(false)}
        title="Severe Weather Warning"
        subtitle="Pune District Meteorological Dept. Bulletin"
      >
        <div className="flex flex-col gap-4 py-2 text-sm text-on-surface-variant">
          <div className="p-4 bg-[#FFF8E1] border border-[#FFD54F] rounded-2xl flex items-start gap-3">
            <CloudLightning className="w-6 h-6 text-[#E65100] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#E65100]">35-50mm Rainfall & Wind Gusts Tomorrow</h4>
              <p className="text-xs text-[#F57C00] mt-1">
                A western disturbance trough is causing heavy precipitation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-on-surface text-xs uppercase tracking-wider">
              Immediate Preventive Measures:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Inspect and clear North Field furrow outlets to prevent waterlogging.</li>
              <li>Postpone planned foliar spray or urea broadcast.</li>
              <li>Provide temporary physical staking if stem elongation is tall.</li>
            </ul>
          </div>

          <div className="flex gap-3 mt-2">
            <Button
              onClick={() => {
                setIsStormAlertModalOpen(false);
                navigate('/crops/wheat');
              }}
              className="flex-1"
            >
              Open Wheat Field
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
