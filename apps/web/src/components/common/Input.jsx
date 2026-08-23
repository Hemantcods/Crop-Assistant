import React from 'react';

export const Input = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  prefix,
  suffix,
  error,
  helperText,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="font-label-md text-label-md text-on-surface text-sm font-semibold flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        {prefix && (
          <div className="absolute left-0 inset-y-0 flex items-center pl-3.5 pr-2.5 pointer-events-none text-on-surface-variant">
            {prefix}
          </div>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-surface-container-lowest border rounded-xl py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 shadow-xs focus:ring-2 focus:ring-primary/20 ${
            prefix ? 'pl-12' : 'pl-4'
          } ${suffix ? 'pr-12' : 'pr-4'} ${
            error
              ? 'border-error focus:border-error'
              : 'border-outline-variant focus:border-primary'
          }`}
          {...props}
        />

        {suffix && (
          <div className="absolute right-0 inset-y-0 flex items-center pr-3.5 pointer-events-none text-on-surface-variant">
            {suffix}
          </div>
        )}
      </div>

      {error && <span className="text-xs text-error mt-0.5">{error}</span>}
      {!error && helperText && (
        <span className="text-xs text-on-surface-variant mt-0.5">{helperText}</span>
      )}
    </div>
  );
};
