import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface DoubleBezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  glowOnHover?: boolean;
  withCorners?: boolean;
  onClick?: () => void;
}

export const DoubleBezelCard: React.FC<DoubleBezelCardProps> = ({
  children,
  className = '',
  innerClassName = '',
  glowOnHover = true,
  withCorners = true,
  onClick,
}) => {
  const { theme } = useTheme();

  const outerStyles = {
    dark: 'bg-[#141414] border border-[#0000F2]/30' + (glowOnHover ? ' hover:border-[#0000F2] hover:shadow-[0_0_30px_-5px_rgba(0,0,242,0.4)]' : ''),
    cobalt: 'bg-[#0000bd] border border-white/40' + (glowOnHover ? ' hover:border-white hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]' : ''),
    light: 'bg-[#F4F6FB] border border-[#0000F2]/30' + (glowOnHover ? ' hover:border-[#0000F2] hover:shadow-[0_0_25px_-5px_rgba(0,0,242,0.25)]' : ''),
  };

  const innerStyles = {
    dark: 'bg-[#101010] text-[#F2F2F2] border border-[#0000F2]/20 shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.3)]',
    cobalt: 'bg-[#000091] text-white border border-white/30 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.4)]',
    light: 'bg-[#FFFFFF] text-[#111827] border border-[#0000F2]/20 shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.25)]',
  };

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-none p-1 transition-all duration-300 ease-out
        ${outerStyles[theme]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}`}
    >
      {/* Technical Corner Registration Marks [ + ] */}
      {withCorners && (
        <>
          <span className="corner-tick-tl opacity-75 group-hover:opacity-100 transition-opacity" />
          <span className="corner-tick-tr opacity-75 group-hover:opacity-100 transition-opacity" />
          <span className="corner-tick-bl opacity-75 group-hover:opacity-100 transition-opacity" />
          <span className="corner-tick-br opacity-75 group-hover:opacity-100 transition-opacity" />
        </>
      )}

      {/* Inner Core Surface */}
      <div
        className={`relative h-full w-full rounded-none
          ${innerStyles[theme]}
          transition-all duration-300
          ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
