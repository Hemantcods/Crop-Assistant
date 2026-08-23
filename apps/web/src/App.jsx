import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CropProvider } from './context/CropContext';
import { DiagnosisProvider } from './context/DiagnosisContext';
import { SettingsProvider } from './context/SettingsContext';
import { AlertsProvider } from './context/AlertsContext';
import { ToastProvider } from './components/common/Toast';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CropProvider>
          <DiagnosisProvider>
            <SettingsProvider>
              <AlertsProvider>
                <ToastProvider>
                  <AppRoutes />
                </ToastProvider>
              </AlertsProvider>
            </SettingsProvider>
          </DiagnosisProvider>
        </CropProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
