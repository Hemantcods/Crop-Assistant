import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCrops } from '../../context/CropContext';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { weatherService } from '../../services/weatherService';
import { farmService } from '../../services/farmService';
import { AddCropModal } from '../../components/common/AddCropModal';
import {
  ArrowLeft,
  MapPin,
  Sparkles,
  PlusCircle,
  Search,
  Scan,
  CloudRain,
  Droplets,
  Thermometer,
  ArrowRight,
  Sprout,
  Trash2,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Loader2,
} from 'lucide-react';

export const FarmDetailPage = () => {
  const { farmId } = useParams();
  const navigate = useNavigate();
  const { getFarmById, getCropsByFarmId, deleteFarm, isLoading: isContextLoading } = useCrops();
  const { addToast } = useToast();

  const contextFarm = getFarmById(farmId);
  const [farm, setFarm] = useState(contextFarm);
  const [isLoadingFarm, setIsLoadingFarm] = useState(!contextFarm);
  const farmCrops = getCropsByFarmId(farmId);

  // Weather state for this farm
  const [farmWeather, setFarmWeather] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Add Crop Modal state
  const [isAddCropModalOpen, setIsAddCropModalOpen] = useState(false);

  // Delete Farm Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Fetch live farm from backend
  useEffect(() => {
    let isMounted = true;
    const loadFarm = async () => {
      try {
        const liveFarm = await farmService.getFarmById(farmId);
        if (isMounted && liveFarm) {
          setFarm(liveFarm);
        }
      } catch (err) {
        console.warn('Could not fetch farm by id:', err.message);
      } finally {
        if (isMounted) {
          setIsLoadingFarm(false);
        }
      }
    };

    loadFarm();
    return () => {
      isMounted = false;
    };
  }, [farmId]);

  // Fetch weather for this farm's specific coordinates
  useEffect(() => {
    let isMounted = true;
    const fetchWeather = async () => {
      if (!farm) return;
      setIsLoadingWeather(true);
      try {
        const lat = farm.latitude ?? 18.5204;
        const lng = farm.longitude ?? 73.8567;
        const data = await weatherService.getWeatherByCoords(lat, lng);
        if (isMounted) {
          setFarmWeather(data);
        }
      } catch (err) {
        console.warn('Could not fetch farm weather:', err.message);
      } finally {
        if (isMounted) {
          setIsLoadingWeather(false);
        }
      }
    };

    fetchWeather();
    return () => {
      isMounted = false;
    };
  }, [farm?.id, farm?.latitude, farm?.longitude]);

  if (isLoadingFarm || (isContextLoading && !farm)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-surface rounded-2xl border border-outline-variant">
        <Loader2 className="w-8 h-8 text-primary animate-spin mb-3" />
        <p className="text-sm font-semibold text-on-surface">Loading Farm Details...</p>
      </div>
    );
  }

  if (!farm) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-surface rounded-2xl border border-outline-variant">
        <div className="p-4 bg-error-container text-on-error-container rounded-full mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-on-surface mb-2">Farm Not Found</h2>
        <p className="text-sm text-on-surface-variant max-w-md mb-6">
          The farm you are looking for may have been removed or does not exist on the server.
        </p>
        <Button onClick={() => navigate('/')} icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Farms Overview
        </Button>
      </div>
    );
  }

  // Filtered crops
  const filteredCrops = farmCrops.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.variety?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.field?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'Healthy' && crop.status === 'Healthy') ||
      (statusFilter === 'Attention' && crop.status !== 'Healthy');

    return matchesSearch && matchesStatus;
  });

  const handleDeleteFarm = async () => {
    await deleteFarm(farm.id);
    addToast({
      title: 'Farm Deleted',
      message: `"${farm.name}" has been removed.`,
      type: 'info',
    });
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Farms</span>
        </Link>

        <div className="flex items-center gap-2.5">
          {/* Dominant Scan / Diagnose Crops CTA */}
          <Button
            onClick={() =>
              navigate('/diagnose', {
                state: { farmId: farm.id, farmName: farm.name },
              })
            }
            className="bg-primary text-on-primary shadow-[0_4px_14px_rgba(15,82,56,0.25)] hover:bg-on-primary-fixed-variant"
            icon={<Scan className="w-4 h-4" />}
          >
            Scan & Diagnose Crops
          </Button>

          <Button
            onClick={() => setIsAddCropModalOpen(true)}
            variant="outline"
            icon={<PlusCircle className="w-4 h-4" />}
          >
            Add Crop
          </Button>

          <button
            onClick={() => setIsDeleteModalOpen(true)}
            title="Delete Farm"
            className="p-2.5 text-on-surface-variant hover:text-error hover:bg-error-container/30 rounded-xl transition-colors cursor-pointer border border-outline-variant"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Farm Hero Card */}
      <section className="bg-surface border border-outline-variant rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(45,106,79,0.06)] relative overflow-hidden">
        {/* Background gradient blur */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Sprout className="w-3.5 h-3.5" />
                <span>Active Farm Holding</span>
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface rounded-full text-xs font-semibold">
                {farm.area} {farm.areaUnit || 'Acres'}
              </span>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">
                {farmCrops.length} {farmCrops.length === 1 ? 'Crop' : 'Crops'} Registered
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface font-headline-lg">
              {farm.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-on-surface-variant mt-3">
              <div className="flex items-center gap-1.5 font-mono bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant/60">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>
                  {farm.latitude?.toFixed(4)}° N, {farm.longitude?.toFixed(4)}° E
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-on-surface-variant" />
                <span>Registered: {new Date(farm.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {/* Quick AI Diagnostics Banner in Hero */}
          <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-4.5 flex flex-col gap-3 min-w-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-primary flex items-center gap-1.5 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-secondary" /> AI Crop Health
              </span>
              <span className="text-xs font-bold text-on-surface-variant">
                {farmCrops.length > 0
                  ? `${Math.round(farmCrops.reduce((acc, c) => acc + (c.healthPercent || 85), 0) / farmCrops.length)}% Avg Vitality`
                  : 'Ready to Scan'}
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Take leaf photos in this farm to immediately diagnose fungal, bacterial, or pest conditions.
            </p>
            <button
              onClick={() =>
                navigate('/diagnose', {
                  state: { farmId: farm.id, farmName: farm.name },
                })
              }
              className="w-full py-2.5 px-4 bg-primary hover:bg-on-primary-fixed-variant text-on-primary rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Scan className="w-4 h-4" />
              <span>Launch Leaf Scanner</span>
            </button>
          </div>
        </div>
      </section>

      {/* Farm Weather Telemetry */}
      {farmWeather && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Today's Temperature */}
          <div className="bg-surface-container-lowest p-4.5 rounded-2xl border border-outline-variant shadow-xs flex items-center gap-4">
            <div className="p-3 bg-[#fff8e1] rounded-2xl text-[#f57f17] shrink-0">
              <Thermometer className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-on-surface-variant font-medium">Today's Temperature</p>
              <h3 className="text-xl font-bold text-on-surface mt-0.5">
                {farmWeather.temp}°C
              </h3>
              <p className="text-[11px] text-on-surface-variant capitalize">
                {farmWeather.condition}
              </p>
            </div>
          </div>

          {/* Air Humidity */}
          <div className="bg-surface-container-lowest p-4.5 rounded-2xl border border-outline-variant shadow-xs flex items-center gap-4">
            <div className="p-3 bg-[#e1f5fe] rounded-2xl text-[#0288d1] shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-on-surface-variant font-medium">Air Humidity</p>
              <h3 className="text-xl font-bold text-on-surface mt-0.5">
                {farmWeather.humidity}
              </h3>
              <p className="text-[11px] text-on-surface-variant">
                {farmWeather.humidityStatus || 'Optimal Range'}
              </p>
            </div>
          </div>

          {/* Tomorrow's Predictive Weather */}
          <div className={`p-4.5 rounded-2xl border shadow-xs flex items-center gap-4 ${
            farmWeather.tomorrow?.hasRainAlert || (farmWeather.tomorrow?.rainPercent >= 50)
              ? 'bg-[#FFF8E1] border-[#FFD54F]'
              : 'bg-surface-container-lowest border-outline-variant'
          }`}>
            <div className={`p-3 rounded-2xl shrink-0 ${
              farmWeather.tomorrow?.hasRainAlert || (farmWeather.tomorrow?.rainPercent >= 50)
                ? 'bg-[#FFECB3] text-[#E65100]'
                : 'bg-[#e8f5e9] text-[#006c48]'
            }`}>
              <CloudRain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-xs text-on-surface-variant font-medium">Tomorrow's Forecast</p>
                {(farmWeather.tomorrow?.hasRainAlert || (farmWeather.tomorrow?.rainPercent >= 50)) && (
                  <span className="px-1.5 py-0.2 bg-[#FFECB3] text-[#E65100] rounded text-[9px] font-bold">
                    Rain Alert
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-on-surface mt-0.5">
                {farmWeather.tomorrow?.temp ? farmWeather.tomorrow.temp.split(' / ')[0] : '25°C'}
              </h3>
              <p className="text-[11px] text-on-surface-variant">
                Rain: {farmWeather.tomorrow?.rain || '20%'} • {farmWeather.tomorrow?.condition || 'Partly cloudy'}
              </p>
            </div>
          </div>

          {/* Microclimate Advisory */}
          <div className="bg-surface-container-lowest p-4.5 rounded-2xl border border-outline-variant shadow-xs flex items-center gap-3">
            <div className="p-3 bg-secondary-container text-on-secondary-container rounded-2xl shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-primary font-bold uppercase tracking-wider">
                Agronomy Insight
              </p>
              <p className="text-[11px] text-on-surface-variant line-clamp-2 mt-0.5 leading-snug">
                {farmWeather.recommendation || 'Conditions optimal for standard crop inspection and nutrient spray.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Crops In This Farm Header & Search */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-on-surface font-headline-md flex items-center gap-2">
              <span>Crops in this Farm</span>
              <span className="text-xs bg-surface-container-high px-2.5 py-0.5 rounded-full font-semibold text-on-surface-variant">
                {farmCrops.length}
              </span>
            </h2>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Registered crop plots, growth stages, and health scores under {farm.name}.
            </p>
          </div>

          <Button
            onClick={() => setIsAddCropModalOpen(true)}
            icon={<PlusCircle className="w-4 h-4" />}
            className="w-full sm:w-auto text-xs"
          >
            Add Crop to Farm
          </Button>
        </div>

        {/* Filter and Search Bar */}
        {farmCrops.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3 bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant shadow-xs">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search crops by name, variety, or plot..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-surface-container-low pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm text-on-surface outline-none border border-transparent focus:border-primary focus:bg-surface-container-lowest transition-all"
              />
            </div>

            <div className="flex gap-2">
              {['ALL', 'Healthy', 'Attention'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setStatusFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    statusFilter === filter
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
                  }`}
                >
                  {filter === 'ALL' ? 'All Crops' : filter}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Crops Grid or Empty State */}
        {farmCrops.length === 0 ? (
          /* Empty Crops State */
          <div className="bg-surface border-2 border-dashed border-outline-variant rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-container/60 text-primary flex items-center justify-center shadow-xs">
              <Sprout className="w-8 h-8" />
            </div>
            <div className="max-w-md">
              <h3 className="text-lg font-bold text-on-surface mb-1">
                No Crops Registered in this Farm Yet
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Add your crop varieties (e.g. Wheat, Rice, Cotton) to begin tracking vegetative progress, soil health, and run AI disease diagnostics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-xs">
              <Button
                onClick={() => setIsAddCropModalOpen(true)}
                className="flex-1 text-xs font-semibold"
                icon={<PlusCircle className="w-4 h-4" />}
              >
                Add First Crop
              </Button>
              <Button
                onClick={() =>
                  navigate('/diagnose', {
                    state: { farmId: farm.id, farmName: farm.name },
                  })
                }
                variant="outlinePrimary"
                className="flex-1 text-xs font-semibold"
                icon={<Scan className="w-4 h-4" />}
              >
                Scan Leaf
              </Button>
            </div>
          </div>
        ) : (
          /* Crops Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCrops.map((crop) => (
              <div
                key={crop.id}
                className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(45,106,79,0.05)] hover:shadow-[0_8px_24px_rgba(45,106,79,0.12)] transition-all flex flex-col group"
              >
                {/* Crop Image Banner */}
                <div className="h-44 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  <img
                    src={crop.imageUrl}
                    alt={crop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <Badge variant={crop.status === 'Healthy' ? 'success' : 'warning'}>
                      {crop.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2.5 right-3 z-20 bg-inverse-surface/85 text-inverse-on-surface px-2.5 py-0.5 rounded-lg text-xs font-bold">
                    {crop.acres} Acres
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4.5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                        {crop.name}
                      </h3>
                      <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                        {crop.variety || 'Hybrid Variety'} • {crop.field}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-primary">
                        {crop.growthPercent}%
                      </span>
                      <p className="text-[10px] text-on-surface-variant">Growth</p>
                    </div>
                  </div>

                  {/* Growth Progress */}
                  <div className="w-full bg-surface-container-high rounded-full h-2 mt-1 mb-4 overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${
                        crop.status === 'Healthy' ? 'bg-primary' : 'bg-[#FFB300]'
                      }`}
                      style={{ width: `${crop.growthPercent}%` }}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-outline-variant/60">
                    <Button
                      onClick={() =>
                        navigate('/diagnose', {
                          state: { cropId: crop.id, cropName: crop.name, farmId: farm.id },
                        })
                      }
                      variant="outlinePrimary"
                      className="text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                    >
                      <Scan className="w-3.5 h-3.5" />
                      <span>Diagnose</span>
                    </Button>

                    <Button
                      onClick={() => navigate(`/crops/${crop.id}`)}
                      className="text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Add Crop Modal */}
      <AddCropModal
        isOpen={isAddCropModalOpen}
        onClose={() => setIsAddCropModalOpen(false)}
        farmId={farm.id}
        farmName={farm.name}
      />

      {/* Delete Farm Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Farm Plot"
        subtitle="Are you sure you want to remove this farm?"
      >
        <div className="flex flex-col gap-4 py-2">
          <p className="text-sm text-on-surface-variant">
            This will remove <strong className="text-on-surface">{farm.name}</strong> ({farm.area} {farm.areaUnit}) from your registered farm holdings.
          </p>

          <div className="flex gap-3 pt-3 border-t border-outline-variant">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <button
              type="button"
              onClick={handleDeleteFarm}
              className="flex-1 py-2.5 px-4 bg-error text-on-error rounded-xl text-xs font-semibold hover:bg-error/90 transition-colors cursor-pointer"
            >
              Delete Farm
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
