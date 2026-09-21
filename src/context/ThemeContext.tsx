import React, { createContext, useContext, useState, useEffect } from 'react';

export type HermesTheme = 'dark' | 'cobalt' | 'light';

interface ThemeContextType {
  theme: HermesTheme;
  setTheme: (t: HermesTheme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  cycleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<HermesTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hermes-theme') as HermesTheme;
      if (saved && ['dark', 'cobalt', 'light'].includes(saved)) {
        return saved;
      }
    }
    return 'dark';
  });

  const setTheme = (newTheme: HermesTheme) => {
    setThemeState(newTheme);
  };

  const cycleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'dark') return 'cobalt';
      if (prev === 'cobalt') return 'light';
      return 'dark';
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('dark', 'light', 'theme-dark', 'theme-cobalt', 'theme-light');
    root.classList.add(`theme-${theme}`);
    if (theme === 'dark' || theme === 'cobalt') {
      root.classList.add('dark');
    }
    localStorage.setItem('hermes-theme', theme);
  }, [theme]);

  // Optional keyboard shortcut 'T' to cycle theme
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 't' || e.key === 'T') {
        cycleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
