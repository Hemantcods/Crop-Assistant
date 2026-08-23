import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAlerts } from '../../context/AlertsContext';
import { useSettings } from '../../context/SettingsContext';

export const MobileTopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { unreadCount, setIsWeatherModalOpen } = useAlerts();
  const { t } = useSettings();

  const isDetailPage =
    location.pathname.startsWith('/crops/') ||
    location.pathname.startsWith('/diagnose/result');

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-low border-b border-outline-variant shadow-xs flex justify-between items-center px-4 py-3 md:px-8 lg:hidden h-[60px] select-none">
      <div className="flex items-center gap-3">
        {isDetailPage ? (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="p-1.5 -ml-1.5 rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 text-primary flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        ) : null}

        <span className="text-xl font-bold font-headline-md text-primary tracking-tight">
          CropCare
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Weather Quick Icon */}
        <button
          onClick={() => setIsWeatherModalOpen(true)}
          aria-label="Weather Forecast"
          className="p-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant transition-colors active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">cloud</span>
        </button>

        {/* Notifications Icon with Badge */}
        <button
          onClick={() => navigate('/alerts')}
          aria-label="Alerts"
          className="p-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant transition-colors active:scale-95 relative flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface-container-low" />
          )}
        </button>

        {/* User Profile Avatar */}
        <button
          onClick={() => navigate('/profile')}
          className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-1 cursor-pointer active:scale-95 transition-transform"
        >
          <img
            src={
              user?.avatar ||
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCpFGsOlRQM1mKOtoTaCilGoFWn3k7-k3_NOTTmz0PLjC8mGi8P0ZrW5X0JkfGzo5UX48cpogxFFs-q4tlkldSV23ccraOBj-Mf_jbB-BT-_MVdi9CqBj2rOBSa_Hgtl3IppsyIp_-FcNzzG4HunL4YHcWC3Ln3I8lRal3s6Ia7P4OLHIgjNvHaumObV059qlS4rW29UZ95_KxWD16T3SNbzFdfsTLfvWijrsXEGopzaXKK1VRGrBuXRQ"
            }
            alt="Farmer Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};
