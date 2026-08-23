import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { weatherService } from '../services/weatherService';
import { MOCK_ALERTS } from '../data/mockData';

const AlertsContext = createContext();

export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [weather, setWeather] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Preference for whether to use current live location or manual city
  const [isUsingCurrentLocation, setIsUsingCurrentLocation] = useState(() => {
    const savedPref = localStorage.getItem('cropcare_use_current_location');
    return savedPref === null ? true : savedPref === 'true';
  });

  const [weatherLocation, setWeatherLocation] = useState(() => {
    return localStorage.getItem('cropcare_weather_location') || 'Pune,IN';
  });

  const [isAlertsDrawerOpen, setIsAlertsDrawerOpen] = useState(false);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);

  // Fetch weather for a manual city name
  const fetchWeather = useCallback(async (location = weatherLocation) => {
    setIsLoadingWeather(true);
    setLocationError(null);
    try {
      const weatherData = await weatherService.getCurrentWeather(location);
      setWeather(weatherData);
      if (typeof location === 'string') {
        localStorage.setItem('cropcare_weather_location', location);
        setWeatherLocation(location);
      }
      return weatherData;
    } catch (err) {
      console.error('Error fetching live weather:', err);
    } finally {
      setIsLoadingWeather(false);
    }
  }, [weatherLocation]);

  // Detect current location (GPS or IP) and fetch live weather
  const detectLocationAndRefresh = useCallback(async (silent = false) => {
    if (!silent) setIsDetectingLocation(true);
    setIsLoadingWeather(true);
    setLocationError(null);
    try {
      const weatherData = await weatherService.getCurrentLocationWeather();
      setWeather(weatherData);
      setIsUsingCurrentLocation(true);
      localStorage.setItem('cropcare_use_current_location', 'true');
      if (weatherData.city) {
        setWeatherLocation(weatherData.city);
        localStorage.setItem('cropcare_weather_location', weatherData.city);
      }
      return weatherData;
    } catch (err) {
      console.warn('Location detection failed:', err);
      setLocationError('Could not detect exact location. Showing baseline weather.');
      // Fall back to stored city or Pune
      const fallbackCity = localStorage.getItem('cropcare_weather_location') || 'Pune,IN';
      const weatherData = await weatherService.getCurrentWeather(fallbackCity);
      setWeather(weatherData);
      return weatherData;
    } finally {
      setIsLoadingWeather(false);
      setIsDetectingLocation(false);
    }
  }, []);

  // Main initializer
  const fetchAlertsAndWeather = useCallback(async () => {
    try {
      const alertsData = await weatherService.getAlerts();
      setAlerts(alertsData);

      const useGps = localStorage.getItem('cropcare_use_current_location');
      if (useGps === null || useGps === 'true') {
        // Auto-detect current location
        await detectLocationAndRefresh(true);
      } else {
        const savedLoc = localStorage.getItem('cropcare_weather_location') || 'Pune,IN';
        await fetchWeather(savedLoc);
      }
    } catch (err) {
      console.error('Error initializing alerts or weather:', err);
      setAlerts(MOCK_ALERTS);
    }
  }, [detectLocationAndRefresh, fetchWeather]);

  useEffect(() => {
    fetchAlertsAndWeather();
  }, [fetchAlertsAndWeather]);

  // Set manual city and refresh
  const setLocationAndRefresh = async (loc) => {
    setIsUsingCurrentLocation(false);
    localStorage.setItem('cropcare_use_current_location', 'false');
    setWeatherLocation(loc);
    if (typeof loc === 'string') {
      localStorage.setItem('cropcare_weather_location', loc);
    }
    await fetchWeather(loc);
  };

  const markAsRead = async (id) => {
    const updated = await weatherService.markAlertAsRead(id);
    setAlerts(updated);
  };

  const dismissAlert = async (id) => {
    const updated = await weatherService.dismissAlert(id);
    setAlerts(updated);
  };

  const unreadCount = alerts.filter((a) => !a.isRead).length;

  return (
    <AlertsContext.Provider
      value={{
        alerts,
        weather,
        isLoadingWeather,
        isDetectingLocation,
        isUsingCurrentLocation,
        locationError,
        weatherLocation,
        unreadCount,
        isAlertsDrawerOpen,
        setIsAlertsDrawerOpen,
        isWeatherModalOpen,
        setIsWeatherModalOpen,
        markAsRead,
        dismissAlert,
        refreshAlerts: fetchAlertsAndWeather,
        refreshWeather: isUsingCurrentLocation ? () => detectLocationAndRefresh() : fetchWeather,
        setLocationAndRefresh,
        detectLocationAndRefresh,
      }}
    >
      {children}
    </AlertsContext.Provider>
  );
};

export const useAlerts = () => {
  const context = useContext(AlertsContext);
  if (!context) {
    throw new Error('useAlerts must be used within an AlertsProvider');
  }
  return context;
};

export default AlertsContext;
