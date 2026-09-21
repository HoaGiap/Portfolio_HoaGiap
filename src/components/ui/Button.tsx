import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  asAnchor = false,
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: 'text-xs py-2 px-4 gap-2',
    md: 'text-sm py-2.5 px-5 gap-2.5',
    lg: 'text-base py-3 px-6 gap-3',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-4 h-4',
  };

  // Theme-adaptive Hermes button styles
  const variantClasses = {
    primary:
      theme === 'light'
        ? 'bg-[#0000F2] text-[#FFFFFF] border border-[#0000F2] hover:bg-[#FFFFFF] hover:text-[#0000F2] shadow-sm hover:shadow-[0_0_20px_rgba(0,0,242,0.4)] font-bold'
        : 'bg-[#FFFFFF] text-[#0000F2] border border-[#0000F2] hover:bg-[#0000F2] hover:text-[#FFFFFF] shadow-sm hover:shadow-[0_0_20px_rgba(0,0,242,0.6)] font-bold',
    secondary:
      theme === 'cobalt'
        ? 'bg-[#000091] text-[#FFFFFF] border border-white/60 hover:bg-[#FFFFFF] hover:text-[#0000F2] hover:border-white'
        : theme === 'light'
        ? 'bg-[#FFFFFF] text-[#0000F2] border border-[#0000F2] hover:bg-[#0000F2] hover:text-[#FFFFFF]'
        : 'bg-[#101010] text-[#F2F2F2] border border-[#0000F2]/60 hover:bg-[#0000F2] hover:text-[#FFFFFF] hover:border-[#0000F2]',
    outline:
      theme === 'cobalt'
        ? 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10'
        : theme === 'light'
        ? 'bg-transparent text-[#0000F2] border border-[#0000F2]/40 hover:border-[#0000F2] hover:bg-[#0000F2]/10'
        : 'bg-transparent text-[#F2F2F2] border border-white/20 hover:border-[#0000F2] hover:text-[#0000F2] hover:bg-[#0000F2]/10',
    ghost:
      theme === 'cobalt'
        ? 'bg-transparent text-white hover:bg-white/10 border border-transparent'
        : theme === 'light'
        ? 'bg-transparent text-[#0000F2] hover:bg-[#0000F2]/10 border border-transparent'
        : 'bg-transparent text-[#F2F2F2] hover:text-[#0000F2] hover:bg-[#0000F2]/10 border border-transparent',
  };

  const baseClasses = `group inline-flex items-center justify-center font-mono uppercase tracking-wider rounded-none
    transition-all duration-200 ease-out select-none active:scale-[0.98]
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          <Icon className={iconSizes[size]} />
        </span>
      )}

      <span>{children}</span>

      {Icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          <Icon className={iconSizes[size]} />
        </span>
      )}
    </>
  );

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};
