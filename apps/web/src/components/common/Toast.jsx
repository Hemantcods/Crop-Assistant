import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const toastIdRef = useRef(0);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(({ title, message, type = 'success', duration = 4000 }) => {
    toastIdRef.current += 1;
    const id = toastIdRef.current;
    setToasts((prev) => [...prev, { id, title, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);


  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-[0_8px_24px_rgba(0,0,0,0.12)] bg-surface-container-lowest transition-all animate-in fade-in slide-in-from-bottom-5 ${
              toast.type === 'success'
                ? 'border-[#C8E6C9] text-[#2E7D32]'
                : toast.type === 'error'
                ? 'border-error-container text-error'
                : toast.type === 'warning'
                ? 'border-[#FFE0B2] text-[#E65100]'
                : 'border-outline-variant text-primary'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-error" />}
              {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-[#E65100]" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-primary" />}
            </div>

            <div className="flex-1">
              {toast.title && (
                <p className="font-semibold text-sm text-on-surface">{toast.title}</p>
              )}
              {toast.message && (
                <p className="text-xs text-on-surface-variant mt-0.5">{toast.message}</p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-on-surface-variant hover:text-on-surface p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
