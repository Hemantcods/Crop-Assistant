import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { LoginPage } from '../features/auth/LoginPage';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { CropsListPage } from '../features/crops/CropsListPage';
import { CropDetailPage } from '../features/crops/CropDetailPage';
import { DiagnosePage } from '../features/diagnose/DiagnosePage';
import { DiagnosisResultPage } from '../features/diagnosis-result/DiagnosisResultPage';
import { ProfilePage } from '../features/profile/ProfilePage';
import { AlertsPage } from '../features/alerts/AlertsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Standalone Login Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Main App Layout */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="crops" element={<CropsListPage />} />
        <Route path="crops/:aq`wcropId" element={<CropDetailPage />} />
        <Route path="diagnose" element={<DiagnosePage />} />
        <Route path="diagnose/result" element={<DiagnosisResultPage />} />
        <Route path="diagnose/:id" element={<DiagnosisResultPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<ProfilePage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
