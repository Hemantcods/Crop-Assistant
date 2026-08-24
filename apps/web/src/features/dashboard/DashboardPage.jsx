import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCrops } from '../../context/CropContext';
import { useAlerts } from '../../context/AlertsContext';
import { useToast } from '../../components/common/Toast';

import { AddFarmModal } from '../../components/common/AddFarmModal';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Search,
  PlusCircle,
  FileUp,
  CloudLightning,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Calendar,
  Sparkles,
  Sprout,
  Scan,
  Compass,
  Layers,
} from 'lucide-react';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { farms, crops, getCropsByFarmId, isLoading } = useCrops();
  const { weather, setIsWeatherModalOpen } = useAlerts();
  const { addToast } = useToast();

  // Modals state
  const [isAddFarmModalOpen, setIsAddFarmModalOpen] = useState(false);
  const [isSoilModalOpen, setIsSoilModalOpen] = useState(false);
  const [isStormAlertModalOpen, setIsStormAlertModalOpen] = useState(false);
  const [isAnalyzingSoil, setIsAnalyzingSoil] = useState(false);
  const [soilResult, setSoilResult] = useState(null);

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

        <Button
          onClick={() => setIsAddFarmModalOpen(true)}
          icon={<PlusCircle className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Add New Farm
        </Button>
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
                35-50mm rainfall forecast with gusty winds. Ensure field furrow drainage is unobstructed.
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

      {/* Quick Actions */}
      <section>
        <h2 className="font-headline-md text-headline-md text-on-background text-lg sm:text-xl font-bold mb-3.5">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Dominant Primary CTA: AI Crop Scan */}
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

          {/* Secondary CTA: Add Farm */}
          <button
            onClick={() => setIsAddFarmModalOpen(true)}
            className="bg-surface text-on-surface-variant border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-[0.98] shadow-[0_4px_12px_rgba(45,106,79,0.05)] min-h-[56px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-outline text-[24px]">
              add_location_alt
            </span>
            <span className="font-label-md text-label-md text-xs sm:text-sm font-semibold text-on-surface">
              Add Farm Plot
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

      {/* Farms Portfolio Overview Section */}
      <section className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="font-headline-md text-headline-md text-on-background text-lg sm:text-xl font-bold">
              My Farm Plots
            </h2>
            {farms.length > 0 && (
              <span className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold">
                {farms.length} {farms.length === 1 ? 'Farm' : 'Farms'}
              </span>
            )}
          </div>

          {farms.length > 0 && (
            <Button
              variant="outlinePrimary"
              onClick={() => setIsAddFarmModalOpen(true)}
              icon={<PlusCircle className="w-3.5 h-3.5" />}
              className="text-xs py-1.5 px-3"
            >
              Add Farm
            </Button>
          )}
        </div>

        {/* Empty State when no farms exist from backend */}
        {farms.length === 0 ? (
          <div className="bg-surface border-2 border-dashed border-outline-variant rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-5 shadow-xs">
            <div className="w-20 h-20 rounded-full bg-primary-container text-primary flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-[40px]">agriculture</span>
            </div>

            <div className="max-w-md">
              <h3 className="text-xl font-bold text-on-surface mb-2 font-headline-md">
                No Farms Registered Yet
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Add your first farm plot using our interactive map coordinates picker to start monitoring crops, tracking microclimate weather, and running AI disease scans.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg my-2">
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/60 text-center flex flex-col items-center gap-1">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold text-on-surface">Map Pinpoint</span>
                <span className="text-[10px] text-on-surface-variant">GPS boundaries</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/60 text-center flex flex-col items-center gap-1">
                <CloudLightning className="w-5 h-5 text-[#F57C00]" />
                <span className="text-xs font-bold text-on-surface">Live Weather</span>
                <span className="text-[10px] text-on-surface-variant">Plot forecast</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/60 text-center flex flex-col items-center gap-1">
                <Scan className="w-5 h-5 text-[#2E7D32]" />
                <span className="text-xs font-bold text-on-surface">AI Crop Scan</span>
                <span className="text-[10px] text-on-surface-variant">Instant diagnosis</span>
              </div>
            </div>

            <Button
              onClick={() => setIsAddFarmModalOpen(true)}
              className="py-3.5 px-8 text-sm font-bold shadow-md active:scale-95"
              icon={<PlusCircle className="w-5 h-5" />}
            >
              Add Your First Farm
            </Button>
          </div>
        ) : (
          /* Farms Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {farms.map((farm) => {
              const farmCrops = getCropsByFarmId(farm.id);
              const avgHealth =
                farmCrops.length > 0
                  ? Math.round(
                      farmCrops.reduce((acc, c) => acc + (c.healthPercent || 85), 0) /
                        farmCrops.length
                    )
                  : 90;

              return (
                <div
                  key={farm.id}
                  onClick={() => navigate(`/farms/${farm.id}`)}
                  className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(45,106,79,0.05)] hover:shadow-[0_8px_24px_rgba(45,106,79,0.12)] transition-all duration-300 flex flex-col cursor-pointer group"
                >
                  {/* Farm Header Banner with Map Accent */}
                  <div className="h-32 w-full bg-gradient-to-br from-primary/90 via-primary to-primary-container relative overflow-hidden p-4 flex flex-col justify-between text-on-primary">
                    {/* Background Pattern */}
                    <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
                      <span className="material-symbols-outlined text-[90px]">map</span>
                    </div>

                    <div className="flex justify-between items-start z-10">
                      <span className="px-2.5 py-0.5 bg-black/30 backdrop-blur-xs rounded-lg text-xs font-semibold flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FFD54F]" />
                        <span>
                          {farm.latitude?.toFixed(4)}, {farm.longitude?.toFixed(4)}
                        </span>
                      </span>

                      <span className="px-2.5 py-0.5 bg-surface/90 text-primary font-bold rounded-lg text-xs shadow-xs">
                        {farm.area} {farm.areaUnit || 'Acres'}
                      </span>
                    </div>

                    <div className="z-10">
                      <h3 className="text-lg font-bold text-white group-hover:underline flex items-center gap-1.5">
                        <span>{farm.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4.5 flex flex-col flex-grow justify-between gap-4">
                    <div className="grid grid-cols-2 gap-3 bg-surface-container-low p-3 rounded-xl border border-outline-variant/60">
                      <div>
                        <p className="text-[11px] text-on-surface-variant font-medium">Crops Planted</p>
                        <p className="text-sm font-bold text-on-surface mt-0.5 flex items-center gap-1">
                          <Sprout className="w-3.5 h-3.5 text-primary" />
                          <span>{farmCrops.length} {farmCrops.length === 1 ? 'Crop' : 'Crops'}</span>
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] text-on-surface-variant font-medium">Avg Crop Health</p>
                        <p className="text-sm font-bold text-primary mt-0.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                          <span>{avgHealth}% Optimal</span>
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/diagnose', {
                            state: { farmId: farm.id, farmName: farm.name },
                          });
                        }}
                        variant="outlinePrimary"
                        className="text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                      >
                        <Scan className="w-3.5 h-3.5" />
                        <span>Scan Crops</span>
                      </Button>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/farms/${farm.id}`);
                        }}
                        className="text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                      >
                        <span>Open Farm</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Add Farm Dialog Modal with Map Picker */}
      <AddFarmModal
        isOpen={isAddFarmModalOpen}
        onClose={() => setIsAddFarmModalOpen(false)}
      />

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
              <li>Inspect and clear farm furrow outlets to prevent waterlogging.</li>
              <li>Postpone planned foliar spray or urea broadcast.</li>
              <li>Provide temporary physical staking if stem elongation is tall.</li>
            </ul>
          </div>

          <div className="flex gap-3 mt-2">
            <Button
              onClick={() => {
                setIsStormAlertModalOpen(false);
                if (farms[0]?.id) {
                  navigate(`/farms/${farms[0].id}`);
                } else {
                  navigate('/crops');
                }
              }}
              className="flex-1"
            >
              Open Farm Holdings
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

