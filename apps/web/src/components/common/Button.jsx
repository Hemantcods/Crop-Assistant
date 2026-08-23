import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon,
  iconRight,
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer select-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 min-h-[36px]',
    md: 'px-4 py-2.5 text-sm gap-2 min-h-[44px]',
    lg: 'px-6 py-3.5 text-base gap-2.5 min-h-[56px]',
  };

  const variantStyles = {
    primary:
      'bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow active:bg-on-primary-fixed-variant',
    secondary:
      'bg-secondary-container text-on-secondary-container hover:bg-surface-container-high font-semibold',
    outline:
      'border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low active:bg-surface-container',
    outlinePrimary:
      'border-2 border-primary bg-transparent text-primary hover:bg-surface-container-low font-semibold',
    ghost:
      'bg-transparent text-on-surface-variant hover:bg-surface-container-high active:bg-surface-container-highest',
    danger:
      'bg-error text-on-error hover:bg-error/90 shadow-sm active:bg-error-container active:text-on-error-container',
    warning:
      'bg-[#FFD54F] hover:bg-[#FFC107] text-[#E65100] font-semibold active:scale-95 shadow-sm',
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : icon ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : null}
      {children}
      {!isLoading && iconRight && (
        <span className="flex items-center justify-center">{iconRight}</span>
      )}
    </button>
  );
};
