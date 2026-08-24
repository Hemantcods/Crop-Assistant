import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSettings } from '../../context/SettingsContext';
import { useAlerts } from '../../context/AlertsContext';
import { Sparkles } from 'lucide-react';

export const DesktopSidebar = () => {
  const { user } = useAuth();
  const { t, setIsUpgradeModalOpen } = useSettings();
  const { unreadCount } = useAlerts();

  const navItems = [
    { to: '/', label: t('nav.home'), icon: 'home', exact: true },
    { to: '/crops', label: t('nav.crops'), icon: 'potted_plant' },
    { to: '/diagnose', label: t('nav.diagnose'), icon: 'biotech' },
    { to: '/notification', label: t('nav.alerts'), icon: 'notifications', badge: unreadCount },
    { to: '/profile', label: t('nav.profile'), icon: 'person' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col bg-surface-container-low border-r border-outline-variant z-40 select-none">
      {/* Brand & Profile Header */}
      <div className="p-6 border-b border-outline-variant flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary-container shrink-0 shadow-xs">
          <img
            src={user?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuCpFGsOlRQM1mKOtoTaCilGoFWn3k7-k3_NOTTmz0PLjC8mGi8P0ZrW5X0JkfGzo5UX48cpogxFFs-q4tlkldSV23ccraOBj-Mf_jbB-BT-_MVdi9CqBj2rOBSa_Hgtl3IppsyIp_-FcNzzG4HunL4YHcWC3Ln3I8lRal3s6Ia7P4OLHIgjNvHaumObV059qlS4rW29UZ95_KxWD16T3SNbzFdfsTLfvWijrsXEGopzaXKK1VRGrBuXRQ"}
            alt={user?.name || "Farmer avatar"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <h2 className="font-headline-md text-headline-md text-primary font-bold text-lg leading-tight truncate">
            {t('appName')}
          </h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-xs truncate">
            {user?.name ? `${user.name} • ${t('tagline')}` : t('tagline')}
          </p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex flex-col gap-1.5 p-4 flex-grow font-label-md text-label-md">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-150 active:translate-x-1 ${
                isActive
                  ? 'bg-secondary-container text-on-secondary-container font-bold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3.5">
                  <span
                    className={`material-symbols-outlined text-[22px] ${
                      isActive ? 'fill text-on-secondary-container' : ''
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.badge > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-error text-on-error rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Upgrade CTA Footer */}
      <div className="p-4 mt-auto border-t border-outline-variant/60">
        <button
          onClick={() => setIsUpgradeModalOpen(true)}
          className="w-full py-3.5 px-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-[#FFD54F] group-hover:rotate-12 transition-transform" />
          <span>{t('nav.upgrade')}</span>
        </button>
      </div>
    </aside>
  );
};
