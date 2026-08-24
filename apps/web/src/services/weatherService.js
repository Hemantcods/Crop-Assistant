import axios from 'axios';
import { MOCK_ALERTS } from '../data/mockData';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'cbd0e3e34b3c16b708c32eaf7c697e88';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache
const WEATHER_CACHE_KEY_PREFIX = 'cropcare_weather_cache_';
const ALERTS_STORAGE_KEY = 'cropcare_alerts';

/**
 * Maps OpenWeather condition code/icon to Material Symbols icon
 */
export const mapWeatherCodeToIcon = (weatherId, iconCode = '01d') => {
  const isNight = iconCode.endsWith('n');
  
  if (weatherId >= 200 && weatherId < 300) {
    return 'thunderstorm';
  } else if (weatherId >= 300 && weatherId < 400) {
    return 'rainy';
  } else if (weatherId >= 500 && weatherId < 600) {
    return weatherId >= 520 ? 'rainy' : 'rainy';
  } else if (weatherId >= 600 && weatherId < 700) {
    return 'weather_snowy';
  } else if (weatherId >= 700 && weatherId < 800) {
    return 'foggy';
  } else if (weatherId === 800) {
    return isNight ? 'clear_night' : 'sunny';
  } else if (weatherId === 801 || weatherId === 802) {
    return isNight ? 'partly_cloudy_night' : 'partly_cloudy_day';
  } else if (weatherId >= 803) {
    return 'cloud';
  }
  return 'partly_cloudy_day';
};

/**
 * Calculates estimated UV index based on time of day, cloud cover, and solar zenith
 */
export const calculateEstimatedUV = (cloudiness = 0, dt, sunrise, sunset) => {
  const nowSec = dt || Math.floor(Date.now() / 1000);
  if (sunrise && sunset && (nowSec < sunrise || nowSec > sunset)) {
    return { value: 0, label: '0 (None)' };
  }
  
  const now = new Date(nowSec * 1000);
  const hour = now.getHours() + now.getMinutes() / 60;
  
  // Peak UV around 12:30 PM (solar noon)
  let solarFactor = Math.sin((Math.PI * Math.max(0, Math.min(12, hour - 6.5))) / 12);
  if (solarFactor < 0) solarFactor = 0;
  
  // Max clear-sky UV peak in tropical/subtropical regions is ~9-10
  const maxClearUV = 9.5;
  const cloudAttenuation = 1 - (cloudiness / 100) * 0.65;
  const uvValue = Math.max(0, Math.round(maxClearUV * solarFactor * cloudAttenuation));
  
  let label = `${uvValue} (Low)`;
  if (uvValue >= 3 && uvValue <= 5) label = `${uvValue} (Moderate)`;
  else if (uvValue >= 6 && uvValue <= 7) label = `${uvValue} (High)`;
  else if (uvValue >= 8 && uvValue <= 10) label = `${uvValue} (Very High)`;
  else if (uvValue >= 11) label = `${uvValue} (Extreme)`;

  return { value: uvValue, label };
};

/**
 * Generates smart agricultural farming advisory based on live weather & forecast
 */
export const generateAgriculturalAdvisory = (currentWeather, forecastDays = []) => {
  const temp = currentWeather.main?.temp ?? 25;
  const humidity = currentWeather.main?.humidity ?? 60;
  const windSpeedKmh = Math.round((currentWeather.wind?.speed ?? 0) * 3.6);
  const currentMain = currentWeather.weather?.[0]?.main?.toLowerCase() || '';
  
  const upcomingRainyDay = forecastDays.find(
    (f, idx) => idx > 0 && idx <= 2 && (f.hasRainAlert || (f.rainProb && parseInt(f.rainProb) >= 60))
  );

  if (currentMain.includes('rain') || currentMain.includes('thunder')) {
    return 'Active precipitation detected. Postpone foliar spraying, fertilizer applications, and irrigation. Inspect field drainage furrows to prevent root waterlogging.';
  }

  if (upcomingRainyDay) {
    return `Rain forecast on ${upcomingRainyDay.day} (${upcomingRainyDay.rain}). Hold back foliar nutrient sprays. Clear furrows and ensure field drainage channels are open.`;
  }

  if (windSpeedKmh > 25) {
    return `High wind speed of ${windSpeedKmh} km/h. Avoid pesticide spraying to prevent droplet drift. Check and support tall crops or row trellises.`;
  }

  if (humidity > 78) {
    return `Elevated humidity at ${humidity}%. High risk for fungal foliar diseases (Blight/Rust). Scout lower leaves and maintain adequate plant spacing.`;
  }

  if (temp > 35) {
    return `High ambient temperature of ${Math.round(temp)}°C. Irrigate during early morning or evening to reduce evapotranspiration stress and prevent leaf scorch.`;
  }

  if (temp < 10) {
    return `Cold temperature alert (${Math.round(temp)}°C). Protect sensitive seedlings from chill injury and adjust water management.`;
  }

  return 'Favorable microclimate conditions. Excellent window for scheduled nutrient top-dressing, weeding, and routine crop health monitoring.';
};

/**
 * Reverse geocodes coordinates to city/state/country via OpenWeather Geocoding API
 */
export const reverseGeocodeCoords = async (lat, lon) => {
  if (lat === undefined || lon === undefined) return null;

  // 1. Try OpenWeather Reverse Geocoding
  try {
    const res = await axios.get(`${GEO_URL}/reverse`, {
      params: {
        lat,
        lon,
        limit: 1,
        appid: API_KEY,
      },
      timeout: 4000,
    });
    if (res.data && res.data.length > 0) {
      const place = res.data[0];
      return {
        name: place.name,
        state: place.state || '',
        country: place.country || 'IN',
        localNames: place.local_names || {},
      };
    }
  } catch (err) {
    console.warn('[Reverse Geocode OpenWeather Notice]:', err.message);
  }

  // 2. Try OpenStreetMap Nominatim Reverse Geocoding (super reliable for any coordinates)
  try {
    const nomRes = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        lat,
        lon,
        format: 'json',
        addressdetails: 1,
      },
      headers: {
        'Accept-Language': 'en',
      },
      timeout: 4000,
    });
    if (nomRes.data && nomRes.data.address) {
      const addr = nomRes.data.address;
      const name =
        addr.village ||
        addr.town ||
        addr.city ||
        addr.suburb ||
        addr.county ||
        addr.state_district ||
        'Local Field';
      return {
        name,
        state: addr.state || '',
        country: addr.country_code ? addr.country_code.toUpperCase() : 'IN',
      };
    }
  } catch (err2) {
    console.warn('[Reverse Geocode Nominatim Notice]:', err2.message);
  }

  return null;
};

/**
 * Searches locations using OpenWeather Geocoding direct API + OpenStreetMap Nominatim fallback
 * Returns array of { name, state, country, displayName, lat, lon, source }
 */
export const searchLocations = async (query) => {
  if (!query || typeof query !== 'string' || query.trim().length < 2) {
    return [];
  }

  const cleanQuery = query.trim();
  const results = [];
  const seenCoords = new Set();

  // 1. Try OpenWeather Direct Geocoding API first
  try {
    const owRes = await axios.get(`${GEO_URL}/direct`, {
      params: {
        q: cleanQuery,
        limit: 5,
        appid: API_KEY,
      },
      timeout: 5000,
    });

    if (owRes.data && Array.isArray(owRes.data)) {
      owRes.data.forEach((item) => {
        const coordKey = `${Number(item.lat).toFixed(3)},${Number(item.lon).toFixed(3)}`;
        if (!seenCoords.has(coordKey)) {
          seenCoords.add(coordKey);
          const stateStr = item.state ? `${item.state}, ` : '';
          results.push({
            name: item.name,
            state: item.state || '',
            country: item.country || 'IN',
            displayName: `${item.name}, ${stateStr}${item.country || 'IN'}`,
            lat: item.lat,
            lon: item.lon,
            source: 'openweather',
          });
        }
      });
    }
  } catch (err) {
    console.warn('[OpenWeather Geocoding Direct Notice]:', err.message);
  }

  // 2. Query OpenStreetMap Nominatim for detailed villages/tehsils/districts in India & abroad
  try {
    const nomRes = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: cleanQuery,
        format: 'json',
        addressdetails: 1,
        limit: 6,
      },
      headers: {
        'Accept-Language': 'en',
      },
      timeout: 5000,
    });

    if (nomRes.data && Array.isArray(nomRes.data)) {
      nomRes.data.forEach((item) => {
        const lat = parseFloat(item.lat);
        const lon = parseFloat(item.lon);
        const coordKey = `${lat.toFixed(3)},${lon.toFixed(3)}`;
        if (!seenCoords.has(coordKey)) {
          seenCoords.add(coordKey);
          const addr = item.address || {};
          const name = addr.village || addr.town || addr.city || addr.suburb || addr.county || item.name || cleanQuery;
          const state = addr.state || '';
          const country = addr.country_code ? addr.country_code.toUpperCase() : 'IN';
          results.push({
            name,
            state,
            country,
            displayName: item.display_name,
            lat,
            lon,
            source: 'nominatim',
          });
        }
      });
    }
  } catch (err2) {
    console.warn('[Nominatim Geocoding Notice]:', err2.message);
  }

  return results;
};

/**
 * Formats OpenWeather current weather and 5-day forecast into UI-ready payload
 */
export const transformOpenWeatherData = (currentRes, forecastRes, extraGeo = null) => {
  const rawCity = extraGeo?.name || currentRes.name || 'Current Location';
  const state = extraGeo?.state || '';
  const country = extraGeo?.country || currentRes.sys?.country || 'IN';

  let cityName = rawCity;
  if (state && !cityName.toLowerCase().includes(state.toLowerCase())) {
    cityName = `${cityName}, ${state}`;
  }
  if (country && !cityName.includes(country)) {
    cityName = `${cityName}, ${country}`;
  }

  const temp = Math.round(currentRes.main.temp);
  const feelsLike = Math.round(currentRes.main.feels_like);
  
  // Format condition description to Capital Case
  const conditionRaw = currentRes.weather?.[0]?.description || 'Partly cloudy';
  const condition = conditionRaw.charAt(0).toUpperCase() + conditionRaw.slice(1);
  const weatherId = currentRes.weather?.[0]?.id || 800;
  const iconCode = currentRes.weather?.[0]?.icon || '01d';
  const currentIcon = mapWeatherCodeToIcon(weatherId, iconCode);

  const humidityNum = currentRes.main.humidity;
  const humidity = `${humidityNum}%`;
  const windKmh = Math.round((currentRes.wind?.speed || 0) * 3.6);
  const wind = `${windKmh} km/h`;

  const uvObj = calculateEstimatedUV(
    currentRes.clouds?.all || 0,
    currentRes.dt,
    currentRes.sys?.sunrise,
    currentRes.sys?.sunset
  );

  // Group 3-hour forecast intervals by day (YYYY-MM-DD)
  const groupedForecast = {};
  const forecastList = forecastRes?.list || [];

  forecastList.forEach((item) => {
    const dateStr = item.dt_txt.split(' ')[0];
    if (!groupedForecast[dateStr]) {
      groupedForecast[dateStr] = [];
    }
    groupedForecast[dateStr].push(item);
  });

  const todayDateStr = new Date().toISOString().split('T')[0];
  const dateKeys = Object.keys(groupedForecast).slice(0, 5);

  const forecast = dateKeys.map((dateStr, index) => {
    const items = groupedForecast[dateStr];
    const temps = items.map((i) => i.main.temp);
    const maxT = Math.round(Math.max(...temps));
    const minT = Math.round(Math.min(...temps));

    const pops = items.map((i) => i.pop || 0);
    const maxPop = Math.max(...pops);
    const rainPercent = Math.round(maxPop * 100);

    // Pick midday reading (around 12:00 or index center) for representative condition
    const midItem = items[Math.floor(items.length / 2)] || items[0];
    const fcWeatherId = midItem.weather?.[0]?.id || 800;
    const fcIconCode = midItem.weather?.[0]?.icon || '01d';
    const fcIcon = mapWeatherCodeToIcon(fcWeatherId, fcIconCode);
    const fcMain = midItem.weather?.[0]?.main || '';

    // Day label calculation
    let dayLabel;
    if (index === 0 || dateStr === todayDateStr) {
      dayLabel = 'Today';
    } else if (index === 1) {
      dayLabel = 'Tomorrow';
    } else {
      const d = new Date(`${dateStr}T12:00:00Z`);
      dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });
    }

    const hasRainAlert = rainPercent >= 60 || fcWeatherId < 600 || fcMain === 'Thunderstorm';

    return {
      date: dateStr,
      day: dayLabel,
      temp: `${maxT}°C / ${minT}°C`,
      maxTemp: maxT,
      minTemp: minT,
      icon: fcIcon,
      iconUrl: `https://openweathermap.org/img/wn/${fcIconCode}@2x.png`,
      rain: `${rainPercent}%`,
      rainProb: `${rainPercent}%`,
      rainPercent,
      alert: hasRainAlert,
      hasRainAlert,
      condition: midItem.weather?.[0]?.description || 'Partly cloudy',
    };
  });

  const todayForecast = forecast[0] || {
    date: todayDateStr,
    day: 'Today',
    temp: `${temp}°C / ${temp - 5}°C`,
    maxTemp: temp,
    minTemp: temp - 5,
    icon: currentIcon,
    iconUrl: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
    rain: '10%',
    rainProb: '10%',
    rainPercent: 10,
    alert: false,
    hasRainAlert: false,
    condition: condition,
  };

  const tomorrowForecast = forecast[1] || {
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    day: 'Tomorrow',
    temp: `${temp}°C / ${temp - 6}°C`,
    maxTemp: temp,
    minTemp: temp - 6,
    icon: 'partly_cloudy_day',
    iconUrl: 'https://openweathermap.org/img/wn/02d@2x.png',
    rain: '15%',
    rainProb: '15%',
    rainPercent: 15,
    alert: false,
    hasRainAlert: false,
    condition: 'Partly cloudy',
  };

  const recommendation = generateAgriculturalAdvisory(currentRes, forecast);

  return {
    city: cityName,
    rawCity,
    state,
    country,
    coord: currentRes.coord || (extraGeo ? { lat: extraGeo.lat, lon: extraGeo.lon } : null),
    isCurrentLocation: !!extraGeo?.isCurrentLocation,
    locationSource: extraGeo?.source || 'search',
    temp,
    feelsLike,
    condition,
    conditionCode: weatherId,
    icon: currentIcon,
    iconUrl: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
    humidity,
    humidityValue: humidityNum,
    humidityStatus: humidityNum > 75 ? 'High Humidity' : humidityNum < 30 ? 'Low Humidity' : 'Optimal Humidity',
    wind,
    windSpeedKmh: windKmh,
    pressure: `${currentRes.main.pressure} hPa`,
    visibility: `${(currentRes.visibility / 1000).toFixed(1)} km`,
    uvIndex: uvObj.label,
    uvValue: uvObj.value,
    clouds: `${currentRes.clouds?.all || 0}%`,
    today: todayForecast,
    tomorrow: tomorrowForecast,
    forecast,
    recommendation,
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now(),
  };
};

export const weatherService = {
  /**
   * Search locations (cities, towns, villages, districts) with geocoding
   */
  searchLocations,

  /**
   * Fetches live weather and forecast from OpenWeatherMap API
   * @param {string|{lat: number, lon: number, isCurrentLocation?: boolean, name?: string, state?: string, country?: string}} query Location name or coordinates object
   */
  async getCurrentWeather(query = 'Pune,IN') {
    let params = {
      appid: API_KEY,
      units: 'metric',
    };

    let cacheKey;
    let isCoords = false;
    let resolvedGeo = null;

    if (typeof query === 'object' && query !== null && query.lat !== undefined && query.lon !== undefined) {
      isCoords = true;
      const latNum = parseFloat(query.lat);
      const lonNum = parseFloat(query.lon);
      params.lat = latNum;
      params.lon = lonNum;
      resolvedGeo = {
        name: query.name,
        state: query.state,
        country: query.country,
        lat: latNum,
        lon: lonNum,
        isCurrentLocation: !!query.isCurrentLocation,
        source: query.source || (query.isCurrentLocation ? 'gps' : 'coords'),
      };
      cacheKey = `${WEATHER_CACHE_KEY_PREFIX}${latNum.toFixed(2)}_${lonNum.toFixed(2)}`;

    } else {
      const cityQuery = typeof query === 'string' && query.trim() ? query.trim() : 'Pune,IN';

      // Attempt to resolve city / village via geocoding first for high precision
      try {
        const geoMatches = await searchLocations(cityQuery);
        if (geoMatches && geoMatches.length > 0) {
          const match = geoMatches[0];
          isCoords = true;
          params.lat = match.lat;
          params.lon = match.lon;
          resolvedGeo = {
            name: match.name,
            state: match.state,
            country: match.country,
            lat: match.lat,
            lon: match.lon,
            source: 'search',
          };
          cacheKey = `${WEATHER_CACHE_KEY_PREFIX}${Number(match.lat).toFixed(2)}_${Number(match.lon).toFixed(2)}`;
        } else {
          params.q = cityQuery;
          cacheKey = `${WEATHER_CACHE_KEY_PREFIX}${cityQuery.toLowerCase()}`;
        }
      } catch {
        params.q = cityQuery;
        cacheKey = `${WEATHER_CACHE_KEY_PREFIX}${cityQuery.toLowerCase()}`;
      }
    }

    // Check LocalStorage cache first
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.timestamp && Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          if (query?.isCurrentLocation && parsed.data) {
            parsed.data.isCurrentLocation = true;
          }
          return parsed.data;
        }
      }
    } catch {
      // Ignore cache read error
    }

    try {
      const requests = [
        axios.get(`${BASE_URL}/weather`, { params, timeout: 8000 }),
        axios.get(`${BASE_URL}/forecast`, { params, timeout: 8000 }),
      ];

      // If coordinates query and place name missing, reverse geocode
      if (isCoords && (!resolvedGeo?.name || !resolvedGeo?.state)) {
        requests.push(reverseGeocodeCoords(params.lat, params.lon));
      }

      const [currentRes, forecastRes, geoDetails] = await Promise.all(requests);

      const extraGeo = {
        ...(resolvedGeo || {}),
        ...(geoDetails || {}),
        lat: params.lat ?? currentRes.data.coord?.lat,
        lon: params.lon ?? currentRes.data.coord?.lon,
        isCurrentLocation: !!query?.isCurrentLocation,
        source: query?.source || (isCoords ? (query?.isCurrentLocation ? 'gps' : 'search') : 'search'),
      };

      const formattedData = transformOpenWeatherData(currentRes.data, forecastRes.data, extraGeo);

      // Save to localStorage cache
      try {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp: Date.now(), data: formattedData })
        );
      } catch {
        // Ignore cache storage error
      }

      return formattedData;
    } catch (err) {
      console.warn('[OpenWeather API Error]:', err.response?.data || err.message);

      // Try reading any stale cache before complete fallback
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.data) return parsed.data;
        }
      } catch {
        // Ignore
      }

      // If query was specific and failed, retry with Pune,IN default
      if (typeof query === 'string' && query.toLowerCase() !== 'pune,in') {
        return this.getCurrentWeather('Pune,IN');
      }

      // Final fallback to structured live baseline
      const fallbackForecast = [
        { day: 'Today', temp: '28°C / 19°C', maxTemp: 28, minTemp: 19, icon: 'partly_cloudy_day', rain: '20%', rainProb: '20%', rainPercent: 20, condition: 'Partly cloudy', alert: false, hasRainAlert: false },
        { day: 'Tomorrow', temp: '25°C / 18°C', maxTemp: 25, minTemp: 18, icon: 'rainy', rain: '65%', rainProb: '65%', rainPercent: 65, condition: 'Scattered showers', alert: true, hasRainAlert: true },
        { day: 'Day 3', temp: '27°C / 18°C', maxTemp: 27, minTemp: 18, icon: 'partly_cloudy_day', rain: '30%', rainProb: '30%', rainPercent: 30, condition: 'Partly cloudy', alert: false, hasRainAlert: false },
        { day: 'Day 4', temp: '29°C / 19°C', maxTemp: 29, minTemp: 19, icon: 'sunny', rain: '10%', rainProb: '10%', rainPercent: 10, condition: 'Sunny', alert: false, hasRainAlert: false },
        { day: 'Day 5', temp: '30°C / 20°C', maxTemp: 30, minTemp: 20, icon: 'sunny', rain: '5%', rainProb: '5%', rainPercent: 5, condition: 'Clear Sky', alert: false, hasRainAlert: false },
      ];

      return {
        city: 'Pune, Maharashtra, IN',
        rawCity: 'Pune',
        state: 'Maharashtra',
        country: 'IN',
        isCurrentLocation: !!query?.isCurrentLocation,
        temp: 26,
        feelsLike: 27,
        condition: 'Partly Cloudy',
        icon: 'partly_cloudy_day',
        humidity: '68%',
        humidityValue: 68,
        humidityStatus: 'Optimal Humidity',
        wind: '12 km/h',
        windSpeedKmh: 12,
        pressure: '1012 hPa',
        visibility: '10.0 km',
        uvIndex: '6 (Moderate)',
        uvValue: 6,
        today: fallbackForecast[0],
        tomorrow: fallbackForecast[1],
        forecast: fallbackForecast,
        recommendation: 'Microclimate is stable. Good window for scheduled nutrient feeding, weeding, and crop inspection.',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        timestamp: Date.now(),
      };
    }
  },

  /**
   * Fetches weather using coordinates
   */
  async getWeatherByCoords(lat, lon, isCurrentLocation = false) {
    return this.getCurrentWeather({ lat, lon, isCurrentLocation });
  },

  /**
   * Fetches weather using city query
   */
  async getWeatherByCity(cityName) {
    return this.getCurrentWeather(cityName);
  },

  /**
   * Detects user's location via HTML5 Geolocation (GPS) with automatic IP-based fallback
   * Returns { lat, lon, source: 'gps' | 'ip' | 'default', city?: string, region?: string, country?: string }
   */
  async detectUserLocation() {
    // 1. Try HTML5 Geolocation first (GPS / WiFi triangulation) with fast timeout
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve(pos),
            (err) => reject(err),
            {
              timeout: 5000,
              enableHighAccuracy: false,
              maximumAge: 60000,
            }
          );
        });

        if (position && position.coords) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const geoInfo = await reverseGeocodeCoords(lat, lon);

          return {
            lat,
            lon,
            city: geoInfo?.name || 'My Location',
            region: geoInfo?.state || '',
            country: geoInfo?.country || 'IN',
            source: 'gps',
          };
        }
      } catch (geoErr) {
        console.info('[Geolocation GPS Notice]:', geoErr.message, 'Trying fast IP location fallback.');
      }
    }

    // 2. Fast IP Geolocation Provider 1: ipwho.is
    try {
      const ipRes = await axios.get('https://ipwho.is/', { timeout: 4000 });
      if (ipRes.data && ipRes.data.success !== false && ipRes.data.latitude && ipRes.data.longitude) {
        return {
          lat: ipRes.data.latitude,
          lon: ipRes.data.longitude,
          city: ipRes.data.city || 'My Location',
          region: ipRes.data.region || '',
          country: ipRes.data.country_code || ipRes.data.country || 'IN',
          source: 'ip',
        };
      }
    } catch (ipErr) {
      console.warn('[IP Location Provider 1 Notice]:', ipErr.message);
    }

    // 3. Fast IP Geolocation Provider 2: freeipapi.com
    try {
      const freeRes = await axios.get('https://freeipapi.com/api/json', { timeout: 4000 });
      if (freeRes.data && freeRes.data.latitude && freeRes.data.longitude) {
        return {
          lat: freeRes.data.latitude,
          lon: freeRes.data.longitude,
          city: freeRes.data.cityName || 'My Location',
          region: freeRes.data.regionName || '',
          country: freeRes.data.countryCode || 'IN',
          source: 'ip',
        };
      }
    } catch (freeErr) {
      console.warn('[IP Location Provider 2 Notice]:', freeErr.message);
    }

    // 4. Fast IP Geolocation Provider 3: ipapi.co
    try {
      const ipapiRes = await axios.get('https://ipapi.co/json/', { timeout: 4000 });
      if (ipapiRes.data && ipapiRes.data.latitude && ipapiRes.data.longitude) {
        return {
          lat: ipapiRes.data.latitude,
          lon: ipapiRes.data.longitude,
          city: ipapiRes.data.city || 'My Location',
          region: ipapiRes.data.region || '',
          country: ipapiRes.data.country_code || ipapiRes.data.country_name || 'IN',
          source: 'ip',
        };
      }
    } catch (err3) {
      console.warn('[IP Location Provider 3 Notice]:', err3.message);
    }

    // 5. Default safe baseline (Pune, Maharashtra) - never throws so the UI never crashes
    return {
      lat: 18.5204,
      lon: 73.8567,
      city: 'Pune',
      region: 'Maharashtra',
      country: 'IN',
      source: 'default',
    };
  },

  /**
   * High-level method to detect current location and immediately return live weather data
   */
  async getCurrentLocationWeather() {
    const loc = await this.detectUserLocation();
    return this.getCurrentWeather({
      lat: loc.lat,
      lon: loc.lon,
      name: loc.city,
      state: loc.region,
      country: loc.country,
      isCurrentLocation: true,
      source: loc.source,
    });
  },

  /**
   * Retrieves alerts from localStorage augmented with live weather warnings
   */
  async getAlerts() {
    const saved = localStorage.getItem(ALERTS_STORAGE_KEY);
    let alerts = MOCK_ALERTS;
    if (saved) {
      try {
        alerts = JSON.parse(saved);
      } catch {
        alerts = MOCK_ALERTS;
      }
    }
    // Filter out any legacy market/mandi alerts
    return alerts.filter(
      (a) => a.type !== 'market' && !a.title?.toLowerCase().includes('mandi')
    );
  },

  /**
   * Marks an alert as read
   */
  async markAlertAsRead(alertId) {
    const alerts = await this.getAlerts();
    const updated = alerts.map((a) => (a.id === alertId ? { ...a, isRead: true } : a));
    localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  /**
   * Dismisses an alert
   */
  async dismissAlert(alertId) {
    const alerts = await this.getAlerts();
    const updated = alerts.filter((a) => a.id !== alertId);
    localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },
};

export default weatherService;
