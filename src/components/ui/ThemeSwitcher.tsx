import React from 'react';
import { useTheme, HermesTheme } from '../../context/ThemeContext';
import { Palette } from 'lucide-react';

interface ThemeSwitcherProps {
  variant?: 'navbar' | 'floating';
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { theme, setTheme } = useTheme();

  const themes: { id: HermesTheme; label: string; hex: string; bgClass: string; textClass: string }[] = [
    {
      id: 'dark',
      label: '#101010',
      hex: '#101010',
      bgClass: 'bg-[#101010]',
      textClass: 'text-white',
    },
    {
      id: 'cobalt',
      label: '#0000F2',
      hex: '#0000F2',
      bgClass: 'bg-[#0000F2]',
      textClass: 'text-white',
    },
    {
      id: 'light',
      label: '#FFFFFF',
      hex: '#FFFFFF',
      bgClass: 'bg-[#FFFFFF]',
      textClass: 'text-[#0000F2]',
    },
  ];

  if (variant === 'floating') {
    return (
      <div
        className={`fixed bottom-6 left-6 z-40 flex items-center p-1 rounded-none border font-mono text-xs shadow-2xl backdrop-blur-md transition-all ${
          theme === 'dark'
            ? 'bg-[#141414]/95 border-[#0000F2] shadow-[0_0_25px_rgba(0,0,242,0.3)] text-white'
            : theme === 'cobalt'
            ? 'bg-[#000091]/95 border-white shadow-[0_0_25px_rgba(255,255,255,0.4)] text-white'
            : 'bg-white/95 border-[#0000F2] shadow-[0_0_20px_rgba(0,0,242,0.2)] text-[#0000F2]'
        } ${className}`}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border-r border-current/25">
          <Palette className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">COLORWAY //</span>
        </div>

        <div className="flex items-center gap-1 p-0.5">
          {themes.map((t) => {
            const isActive = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={`Chuyển sang nền ${t.label}`}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-none uppercase transition-all ${
                  isActive
                    ? theme === 'cobalt'
                      ? 'bg-white text-[#0000F2] font-bold shadow-sm'
                      : theme === 'light'
                      ? 'bg-[#0000F2] text-white font-bold shadow-sm'
                      : 'bg-[#0000F2] text-white font-bold shadow-sm'
                    : 'opacity-70 hover:opacity-100 hover:bg-current/10'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-none border border-current shrink-0"
                  style={{ backgroundColor: t.hex }}
                />
                <span className="text-[11px] font-mono">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Navbar variant
  return (
    <div
      className={`inline-flex items-center border font-mono text-xs transition-all ${
        theme === 'dark'
          ? 'border-[#0000F2]/50 bg-[#141414] text-white'
          : theme === 'cobalt'
          ? 'border-white/50 bg-[#000091] text-white'
          : 'border-[#0000F2]/50 bg-[#F4F6FB] text-[#0000F2]'
      } ${className}`}
    >
      {themes.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 transition-all ${
              isActive
                ? theme === 'cobalt'
                  ? 'bg-white text-[#0000F2] font-bold shadow-sm'
                  : theme === 'light'
                  ? 'bg-[#0000F2] text-white font-bold shadow-sm'
                  : 'bg-[#0000F2] text-white font-bold shadow-sm'
                : 'text-current opacity-70 hover:opacity-100 hover:bg-current/10'
            }`}
            title={`Chuyển theme sang ${t.label}`}
          >
            <span
              className="w-2.5 h-2.5 rounded-none border border-current/50 shrink-0"
              style={{ backgroundColor: t.hex }}
            />
            <span className="text-[11px] uppercase tracking-wider">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};
