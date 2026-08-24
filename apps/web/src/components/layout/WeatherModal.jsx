import React, { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { useAlerts } from '../../context/AlertsContext';
import { useCrops } from '../../context/CropContext';
import { searchLocations } from '../../services/weatherService';
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
  LandPlot,
  Loader2,
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

  const { farms } = useCrops();

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isQueryingGeo, setIsQueryingGeo] = useState(false);
  const [geoError, setGeoError] = useState(null);

  // Debounced search for location autocompletion
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setSuggestions([]);
      setIsQueryingGeo(false);
      return;
    }

    let isMounted = true;
    setIsQueryingGeo(true);
    const timer = setTimeout(async () => {
      try {
        const matches = await searchLocations(searchQuery.trim());
        if (isMounted) {
          setSuggestions(matches);
          setIsQueryingGeo(false);
        }
      } catch {
        if (isMounted) {
          setSuggestions([]);
          setIsQueryingGeo(false);
        }
      }
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  if (!weather) return null;

  const popularCities = [
    'Pune',
    'Baramati',
    'Nashik',
    'Nagpur',
    'Kolhapur',
    'Solapur',
    'Aurangabad',
    'Indore',
    'Ludhiana',
    'Jaipur',
  ];

  const handleSelectSuggestion = async (item) => {
    setGeoError(null);
    setSearchQuery('');
    setSuggestions([]);
    setIsSearching(false);
    await setLocationAndRefresh({
      name: item.name,
      state: item.state,
      country: item.country,
      lat: item.lat,
      lon: item.lon,
    });
  };

  const handleSelectFarm = async (farm) => {
    setGeoError(null);
    setIsSearching(false);
    await setLocationAndRefresh({
      name: farm.name,
      lat: farm.latitude ?? 18.5204,
      lon: farm.longitude ?? 73.8567,
    });
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setGeoError(null);
    if (suggestions.length > 0) {
      await handleSelectSuggestion(suggestions[0]);
    } else {
      await setLocationAndRefresh(searchQuery.trim());
      setIsSearching(false);
      setSearchQuery('');
      setSuggestions([]);
    }
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
              <span>{isDetectingLocation ? 'Locating GPS...' : isUsingCurrentLocation ? 'GPS Location' : 'Use My GPS'}</span>
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
              <span>Select Location</span>
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

        {/* Location Search Bar & Autocomplete Panel */}
        {isSearching && (
          <div className="p-3.5 bg-surface-container-low rounded-2xl border border-outline-variant flex flex-col gap-3 animate-fadeIn">
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              disabled={isDetectingLocation}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary text-on-primary rounded-xl text-xs font-semibold hover:opacity-95 transition-opacity cursor-pointer shadow-xs"
            >
              <Compass className={`w-4 h-4 ${isDetectingLocation ? 'animate-spin' : ''}`} />
              <span>{isDetectingLocation ? 'Detecting GPS Coordinates...' : '📍 Use My Exact GPS Location'}</span>
            </button>

            {/* Farm Plots Quick Selection */}
            {farms && farms.length > 0 && (
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="text-[10px] uppercase font-bold text-on-surface-variant flex items-center gap-1">
                  <LandPlot className="w-3 h-3 text-primary" /> My Registered Farm Plots:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {farms.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => handleSelectFarm(f)}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-surface border border-outline-variant/70 hover:border-primary text-on-surface hover:text-primary transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="h-[1px] flex-1 bg-outline-variant/60" />
              <span className="text-[10px] uppercase font-bold text-on-surface-variant">or search town / village</span>
              <span className="h-[1px] flex-1 bg-outline-variant/60" />
            </div>

            <form onSubmit={handleSearchSubmit} className="flex gap-2 relative">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type city, village or district (e.g. Baramati, Nashik)..."
                  className="w-full pl-8.5 pr-8 py-2 text-xs bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary text-on-surface"
                  autoFocus
                />
                {isQueryingGeo && (
                  <Loader2 className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-primary animate-spin" />
                )}
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 bg-primary text-on-primary text-xs font-semibold rounded-xl hover:bg-on-primary-fixed-variant transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Live Autocomplete Suggestions List */}
            {suggestions.length > 0 && (
              <div className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col divide-y divide-outline-variant/40 max-h-48 overflow-y-auto">
                {suggestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSuggestion(item)}
                    className="p-2.5 text-left hover:bg-surface-container-high transition-colors flex items-center justify-between gap-2 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="truncate">
                        <p className="text-xs font-bold text-on-surface truncate">{item.name}</p>
                        <p className="text-[10px] text-on-surface-variant truncate">
                          {item.state ? `${item.state}, ` : ''}{item.country || 'IN'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-on-surface-variant/70 shrink-0">
                      {item.lat.toFixed(2)}°, {item.lon.toFixed(2)}°
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Popular Agricultural Regions */}
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

        {/* Today vs Tomorrow Quick Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* TODAY'S CARD */}
          <div className="bg-gradient-to-br from-[#E1F5FE] via-surface-container-low to-surface-container-lowest border border-[#0288D1]/30 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-[#0288D1] text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Today (Live)
                </span>
                {isUsingCurrentLocation && (
                  <span className="flex items-center gap-1 text-[10px] text-primary font-semibold">
                    <Radio className="w-2.5 h-2.5 animate-pulse" /> GPS
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">
                  {weather.temp}°C
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  ({weather.today?.temp || `${weather.temp}°C / ${weather.temp - 5}°C`})
                </span>
              </div>

              <p className="text-xs font-semibold text-on-surface mt-0.5 flex items-center gap-1.5 capitalize">
                <span className="material-symbols-outlined text-[18px] text-[#0288D1]">
                  {weather.icon || 'partly_cloudy_day'}
                </span>
                <span>{weather.condition}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-outline-variant/50 text-[11px]">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <Droplets className="w-3.5 h-3.5 text-[#0288D1]" />
                <span>{weather.humidity}</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <Wind className="w-3.5 h-3.5 text-secondary" />
                <span>{weather.wind}</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <Sun className="w-3.5 h-3.5 text-[#F57F17]" />
                <span>UV {weather.uvIndex?.split(' ')?.[0] || '6'}</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <CloudRain className="w-3.5 h-3.5 text-[#006C48]" />
                <span>Rain {weather.today?.rain || '10%'}</span>
              </div>
            </div>
          </div>

          {/* TOMORROW'S CARD */}
          <div className={`border rounded-2xl p-4 flex flex-col justify-between shadow-xs ${
            weather.tomorrow?.hasRainAlert || (weather.tomorrow?.rainPercent >= 50)
              ? 'bg-gradient-to-br from-[#FFF8E1] via-surface-container-low to-surface-container-lowest border-[#FFD54F]'
              : 'bg-gradient-to-br from-[#E8F5E9] via-surface-container-low to-surface-container-lowest border-[#A5D6A7]'
          }`}>
            <div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  weather.tomorrow?.hasRainAlert || (weather.tomorrow?.rainPercent >= 50)
                    ? 'bg-[#E65100] text-white'
                    : 'bg-primary text-on-primary'
                }`}>
                  Tomorrow
                </span>
                {(weather.tomorrow?.hasRainAlert || (weather.tomorrow?.rainPercent >= 50)) && (
                  <span className="px-1.5 py-0.5 bg-[#FFECB3] text-[#E65100] rounded text-[10px] font-bold animate-pulse">
                    Rain Alert
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-on-surface">
                  {weather.tomorrow?.temp ? weather.tomorrow.temp.split(' / ')[0] : '25°C'}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  (Min: {weather.tomorrow?.temp ? weather.tomorrow.temp.split(' / ')[1] : '18°C'})
                </span>
              </div>

              <p className="text-xs font-semibold text-on-surface mt-0.5 flex items-center gap-1.5 capitalize">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  {weather.tomorrow?.icon || 'partly_cloudy_day'}
                </span>
                <span>{weather.tomorrow?.condition || 'Partly cloudy'}</span>
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-outline-variant/50 flex flex-col gap-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant flex items-center gap-1">
                  <CloudRain className="w-3.5 h-3.5 text-[#0288D1]" /> Rain Chance:
                </span>
                <strong className={weather.tomorrow?.hasRainAlert ? 'text-[#E65100]' : 'text-primary'}>
                  {weather.tomorrow?.rain || '20%'}
                </strong>
              </div>
              <p className="text-[10px] text-on-surface-variant line-clamp-2 leading-tight mt-0.5">
                {weather.tomorrow?.hasRainAlert || (weather.tomorrow?.rainPercent >= 50)
                  ? 'Rain expected. Clear furrows and pause foliar spraying.'
                  : 'Favorable conditions. Excellent for scheduled field work.'}
              </p>
            </div>
          </div>
        </div>

        {/* 5-Day Extended Forecast */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="font-semibold text-sm text-on-surface">
              5-Day Detailed Weather Forecast
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
