import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { useAlerts } from '../../context/AlertsContext';

export const MobileBottomNav = () => {
  const { t } = useSettings();
  const { unreadCount } = useAlerts();

  const navItems = [
    { to: '/', label: t('nav.home'), icon: 'home', exact: true },
    { to: '/crops', label: t('nav.crops'), icon: 'potted_plant' },
    { to: '/diagnose', label: t('nav.diagnose'), icon: 'biotech' },
    { to: '/alerts', label: t('nav.alerts'), icon: 'notifications', badge: unreadCount },
    { to: '/profile', label: t('nav.profile'), icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 bg-surface border-t border-outline-variant shadow-[0_-4px_16px_rgba(45,106,79,0.06)] lg:hidden flex justify-around items-center px-2 py-1.5 pb-safe select-none">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.exact}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center rounded-2xl py-1 px-3 min-w-[56px] transition-all duration-150 active:scale-90 relative ${
              isActive
                ? 'bg-primary-container text-on-primary-container font-bold shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[24px] ${
                    isActive ? 'fill' : ''
                  }`}
                >
                  {item.icon}
                </span>
                {item.badge > 0 && !isActive && (
                  <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-error rounded-full" />
                )}
              </div>
              <span className="text-[11px] leading-tight mt-0.5 font-label-sm">
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
