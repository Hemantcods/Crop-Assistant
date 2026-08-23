import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  variant = 'default', // 'default' | 'flat' | 'elevated'
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-surface border border-outline-variant rounded-2xl shadow-[0_4px_12px_rgba(45,106,79,0.05)]',
    flat: 'bg-surface-container-lowest border border-outline-variant rounded-xl',
    elevated:
      'bg-surface border border-outline-variant rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]',
  };

  const hoverClass =
    hoverEffect && onClick
      ? 'hover:shadow-[0_8px_24px_rgba(45,106,79,0.1)] transition-all duration-200 cursor-pointer active:scale-[0.99]'
      : 'transition-shadow duration-200';

  return (
    <div
      onClick={onClick}
      className={`${variantStyles[variant] || variantStyles.default} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
