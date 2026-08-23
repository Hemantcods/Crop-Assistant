import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-lg',
  showClose = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-inverse-surface/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidth} bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-6 sm:p-8 z-10 my-auto transform transition-all flex flex-col max-h-[90vh] overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-outline-variant shrink-0">
          <div>
            {title && (
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {showClose && (
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high p-1.5 rounded-full transition-colors active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="overflow-y-auto pt-4 flex-grow custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
