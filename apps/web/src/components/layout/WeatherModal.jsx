import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { useAlerts } from '../../context/AlertsContext';
import {
  CloudRain,
  Wind,
  Droplets,
  Sun,
  AlertTriangle,
  RotateCw,
  MapPin,
  Search,
  Check,
  Compass,
  Navigation,
  Radio,
} from 'lucide-react';

export const WeatherModal = () => {
  const {
    isWeatherModalOpen,
    setIsWeatherModalOpen,
    weather,
    isLoadingWeather,
    isDetectingLocation,
    isUsingCurrentLocation,
    locationError,
    refreshWeather,
    setLocationAndRefresh,
    detectLocationAndRefresh,
  } = useAlerts();

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [geoError, setGeoError] = useState(null);

  if (!weather) return null;

  const popularCities = ['Pune', 'Nashik', 'Nagpur', 'Kolhapur', 'Aurangabad', 'Solapur', 'Indore', 'Ludhiana'];

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setGeoError(null);
    await setLocationAndRefresh(searchQuery.trim());
    setIsSearching(false);
    setSearchQuery('');
  };

  const handleSelectCity = async (city) => {
    setGeoError(null);
    await setLocationAndRefresh(city);
    setIsSearching(false);
  };

  const handleUseCurrentLocation = async () => {
    setGeoError(null);
    try {
      await detectLocationAndRefresh();
      setIsSearching(false);
    } catch {
      setGeoError('Location permission denied or unavailable. Fallback weather loaded.');
    }
  };

  return (
    <Modal
      isOpen={isWeatherModalOpen}
      onClose={() => setIsWeatherModalOpen(false)}
      title="Live Weather & Farm Advisory"
      subtitle={`${weather.city} • OpenWeather Live`}
      maxWidth="max-w-md"
    >
      <div className="flex flex-col gap-4 py-2">
        {/* Controls Toolbar: Current Location Badge, Search & Refresh */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              disabled={isDetectingLocation || isLoadingWeather}
              title="Detect and use my exact current location"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                isUsingCurrentLocation
                  ? 'bg-primary/10 border-primary/40 text-primary shadow-xs'
                  : 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface border-outline-variant/60'
              }`}
            >
              <Navigation className={`w-3.5 h-3.5 ${isDetectingLocation ? 'animate-spin text-primary' : isUsingCurrentLocation ? 'text-primary fill-primary/30' : 'text-primary'}`} />
              <span>{isDetectingLocation ? 'Locating...' : isUsingCurrentLocation ? 'Current Location' : 'Use My Location'}</span>
              {isUsingCurrentLocation && (
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsSearching(!isSearching)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer border border-outline-variant/60"
            >
              <Search className="w-3.5 h-3.5 text-on-surface-variant" />
              <span>Search City</span>
            </button>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {weather.lastUpdated && (
              <span className="text-[11px] text-on-surface-variant hidden sm:inline">
                {weather.lastUpdated}
              </span>
            )}
            <button
              type="button"
              onClick={() => refreshWeather()}
              disabled={isLoadingWeather || isDetectingLocation}
              title="Refresh live weather"
              className="p-1.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-all cursor-pointer disabled:opacity-50 border border-outline-variant/60"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoadingWeather || isDetectingLocation ? 'animate-spin text-primary' : ''}`} />
            </button>
          </div>
        </div>

        {/* Location Search Bar Dropdown */}
        {isSearching && (
          <div className="p-3.5 bg-surface-container-low rounded-2xl border border-outline-variant flex flex-col gap-3 animate-fadeIn">
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              disabled={isDetectingLocation}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary text-on-primary rounded-xl text-xs font-semibold hover:opacity-95 transition-opacity cursor-pointer shadow-xs"
            >
              <Compass className={`w-4 h-4 ${isDetectingLocation ? 'animate-spin' : ''}`} />
              <span>{isDetectingLocation ? 'Detecting GPS Location...' : '📍 Detect & Use My Current Location (GPS / Network)'}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="h-[1px] flex-1 bg-outline-variant/60" />
              <span className="text-[10px] uppercase font-bold text-on-surface-variant">or search city</span>
              <span className="h-[1px] flex-1 bg-outline-variant/60" />
            </div>

            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter city, district or village (e.g. Pune, Nashik)..."
                  className="w-full pl-8.5 pr-3 py-1.5 text-xs bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary text-on-surface"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-surface-container-highest text-on-surface text-xs font-semibold rounded-xl hover:bg-surface-variant transition-colors cursor-pointer border border-outline-variant"
              >
                Search
              </button>
            </form>

            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant">Popular:</span>
              {popularCities.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleSelectCity(c)}
                  className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-surface-container hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>

            {(geoError || locationError) && (
              <p className="text-[11px] text-error font-medium">{geoError || locationError}</p>
            )}
          </div>
        )}

        {/* Current Weather Card */}
        <div className="bg-gradient-to-br from-[#E1F5FE] via-surface-container-low to-[#FFF8E1] border border-outline-variant rounded-2xl p-5 flex items-center justify-between shadow-xs relative overflow-hidden">
          {/* Subtle location source tag */}
          <div className="absolute top-2.5 right-3 flex items-center gap-1 text-[10px] font-semibold text-primary">
            {isUsingCurrentLocation ? (
              <span className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                <Radio className="w-2.5 h-2.5 text-primary animate-pulse" />
                Live Location
              </span>
            ) : (
              <span className="bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant border border-outline-variant/60">
                Custom City
              </span>
            )}
          </div>

          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-primary tracking-tight">
                {weather.temp}°C
              </span>
            </div>
            <p className="font-semibold text-sm text-on-surface mt-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-primary">
                {weather.icon || 'partly_cloudy_day'}
              </span>
              <span>{weather.condition}</span>
            </p>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Feels like {weather.feelsLike ?? weather.temp}°C • {weather.humidityStatus || 'Normal Humidity'}
            </p>
            {weather.coord && (
              <p className="text-[10px] text-on-surface-variant/80 font-mono mt-1">
                📍 {weather.coord.lat.toFixed(2)}°, {weather.coord.lon.toFixed(2)}°
              </p>
            )}
          </div>

          <div className="text-right flex flex-col gap-1.5 text-xs text-on-surface-variant mt-3">
            <div className="flex items-center gap-1.5 justify-end">
              <Droplets className="w-3.5 h-3.5 text-[#0288D1]" />
              <span className="font-medium">Humidity: {weather.humidity}</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <Wind className="w-3.5 h-3.5 text-secondary" />
              <span className="font-medium">Wind: {weather.wind}</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <Sun className="w-3.5 h-3.5 text-[#F57F17]" />
              <span className="font-medium">UV: {weather.uvIndex}</span>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="font-semibold text-sm text-on-surface">
              5-Day Micro-Climate Forecast
            </h4>
            <span className="text-[11px] text-on-surface-variant font-medium">OpenWeather Live</span>
          </div>

          <div className="flex flex-col gap-2">
            {weather.forecast && weather.forecast.length > 0 ? (
              weather.forecast.map((fc, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    fc.alert
                      ? 'bg-[#FFF8E1] border-[#FFD54F]'
                      : 'bg-surface-container-lowest border-outline-variant'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      {fc.icon || 'partly_cloudy_day'}
                    </span>
                    <div>
                      <span className="font-semibold text-sm text-on-surface">
                        {fc.day}
                      </span>
                      {fc.alert && (
                        <span className="ml-2 px-1.5 py-0.5 bg-[#FFECB3] text-[#E65100] rounded text-[10px] font-bold">
                          Rain Alert
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-on-surface-variant flex items-center gap-1">
                      <CloudRain className="w-3 h-3 text-[#0288D1]" /> {fc.rain || '0%'}
                    </span>
                    <span className="font-semibold text-on-surface">{fc.temp}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-on-surface-variant py-2">Loading forecast data...</p>
            )}
          </div>
        </div>

        {/* Farming Advice based on live weather */}
        <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#F57C00] shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface">Agri-Advisory:</strong>{' '}
            {weather.recommendation ||
              'Weather conditions are stable. Maintain regular scheduled irrigation cycles and weed scouting.'}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default WeatherModal;
