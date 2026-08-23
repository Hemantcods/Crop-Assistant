import React from 'react';

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  id,
  label,
  description,
  className = '',
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center justify-between gap-4 cursor-pointer select-none group ${
        disabled ? 'opacity-50 pointer-events-none' : ''
      } ${className}`}
    >
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <span className="font-label-md text-label-md text-on-surface text-sm font-semibold group-hover:text-primary transition-colors">
              {label}
            </span>
          )}
          {description && (
            <span className="font-label-sm text-label-sm text-on-surface-variant text-xs mt-0.5">
              {description}
            </span>
          )}
        </div>
      )}

      <div className="relative inline-flex items-center shrink-0">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-surface-container-highest border border-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-xs peer-checked:bg-primary peer-checked:border-primary"></div>
      </div>
    </label>
  );
};
