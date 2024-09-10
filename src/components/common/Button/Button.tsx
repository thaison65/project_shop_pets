import React, { memo } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon?: string;
  rounded?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = memo(
  ({ children, onClick, variant = 'primary', size = 'medium', disabled = false, icon, rounded = 'rounded-full', width }) => {
    const baseClasses = `font-semibold ${rounded} active:outline-none active:ring-2 active:ring-offset-2`;

    const variantClasses = {
      primary:
        'bg-primary-dark-blue text-white hover:bg-transparent hover:border hover:border-primary-dark-blue hover:text-primary-dark-blue active:ring-primary-dark-blue-40',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:ring-gray-500',
      outline:
        'bg-transparent border border-primary-dark-blue text-primary-dark-blue hover:bg-primary-dark-blue hover:text-white active:ring-blue-500',
    };

    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    };

    const disabledClasses = 'opacity-50 cursor-not-allowed';

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? disabledClasses : ''}
        ${width ? width : ''}
        flex items-center justify-center // Thêm classes này
      `}>
        {children}
        {icon && <img src={icon} alt='icon' className='ml-2' loading='lazy' />}
      </button>
    );
  }
);

export default Button;
