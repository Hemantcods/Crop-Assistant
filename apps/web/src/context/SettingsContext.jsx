import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants/translations';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('cropcare_lang') || 'en');
  const [units, setUnits] = useState(() => localStorage.getItem('cropcare_units') || 'Acres / Celsius');
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [whatsappSettings, setWhatsappSettings] = useState(() => {
    const saved = localStorage.getItem('cropcare_whatsapp');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return {
      diseasePests: true,
      weatherForecasts: true,
      cropStageTips: false,
    };
  });

  useEffect(() => {
    localStorage.setItem('cropcare_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('cropcare_units', units);
  }, [units]);

  useEffect(() => {
    localStorage.setItem('cropcare_whatsapp', JSON.stringify(whatsappSettings));
  }, [whatsappSettings]);

  const toggleWhatsappSetting = (key) => {
    setWhatsappSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = TRANSLATIONS[language] || TRANSLATIONS.en;
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to english
        let fallback = TRANSLATIONS.en;
        for (const fb of keys) {
          fallback = fallback?.[fb];
        }
        return fallback || path;
      }
    }
    return current;
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        units,
        setUnits,
        whatsappSettings,
        toggleWhatsappSetting,
        isUpgradeModalOpen,
        setIsUpgradeModalOpen,
        t,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
