import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cobalt' | 'neutral';
  size?: 'sm' | 'md';
  pulseDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  size = 'md',
  pulseDot = false,
  className = '',
}) => {
  const { theme } = useTheme();

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px] tracking-widest',
    md: 'px-3 py-1 text-xs tracking-wider',
  };

  const themeStyles = {
    dark: 'bg-[#101010] text-[#F2F2F2] border border-[#0000F2]/50 shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.4)]',
    cobalt: 'bg-[#000091] text-white border border-white/50 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.4)]',
    light: 'bg-[#F0F4FF] text-[#0000F2] border border-[#0000F2] shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.3)]',
  };

  const dotColor = theme === 'cobalt' ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-[#0000F2] shadow-[0_0_8px_#0000F2]';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-none font-mono uppercase font-medium
        transition-all duration-200 select-none ${sizeStyles[size]} ${themeStyles[theme]} ${className}`}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
        </span>
      )}
      <span>[ {children} ]</span>
    </span>
  );
};
