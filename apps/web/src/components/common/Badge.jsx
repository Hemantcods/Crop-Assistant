import React from 'react';

export const Badge = ({
  children,
  variant = 'default', // 'success' | 'warning' | 'error' | 'info' | 'primary' | 'default'
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    success: 'bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]',
    warning: 'bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2]',
    error: 'bg-error-container text-on-error-container border border-error/20',
    info: 'bg-[#E1F5FE] text-[#0288D1] border border-[#B3E5FC]',
    primary: 'bg-secondary-container text-on-secondary-container border border-secondary/20',
    default: 'bg-surface-container-high text-on-surface-variant border border-outline-variant',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-semibold gap-1',
    md: 'px-3 py-1 text-xs font-semibold gap-1.5',
    lg: 'px-3.5 py-1.5 text-sm font-semibold gap-2',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {icon && <span className="flex items-center justify-center text-[14px]">{icon}</span>}
      {children}
    </span>
  );
};
