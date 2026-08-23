import React from 'react';
import { Outlet } from 'react-router-dom';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileTopBar } from './MobileTopBar';
import { MobileBottomNav } from './MobileBottomNav';
import { UpgradeModal } from './UpgradeModal';
import { WeatherModal } from './WeatherModal';

export const AppLayout = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      {/* Mobile Top App Bar */}
      <MobileTopBar />

      {/* Desktop Side Navigation */}
      <DesktopSidebar />

      {/* Main Content Viewport */}
      <main className="flex-grow pt-[60px] lg:pt-0 lg:ml-64 pb-[84px] lg:pb-8 min-h-screen flex flex-col">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 flex-grow">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Global Modals */}
      <UpgradeModal />
      <WeatherModal />
    </div>
  );
};
