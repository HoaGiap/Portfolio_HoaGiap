import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { ThreeBackground } from './components/three/ThreeBackground';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  const containerThemeClasses = {
    dark: 'bg-[#101010] text-[#F2F2F2] selection:bg-[#0000F2] selection:text-[#FFFFFF]',
    cobalt: 'bg-[#0000F2] text-white selection:bg-white selection:text-[#0000F2]',
    light: 'bg-[#FFFFFF] text-[#111827] selection:bg-[#0000F2] selection:text-[#FFFFFF]',
  };

  return (
    <div
      className={`relative min-h-[100dvh] transition-colors duration-300 bg-hermes-grid font-sans ${containerThemeClasses[theme]}`}
    >
      {/* Interactive 3D Coordinate Lattice Background (Three.js with theme reactive particles) */}
      <ThreeBackground />

      {/* Dynamic Ambient Background Highlights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] transition-all duration-300 ${
            theme === 'cobalt'
              ? 'bg-white/10'
              : theme === 'light'
              ? 'bg-[#0000F2]/5'
              : 'bg-[#0000F2]/10'
          }`}
        />
        <div
          className={`absolute top-1/3 left-10 w-[600px] h-[600px] rounded-full blur-[180px] transition-all duration-300 ${
            theme === 'cobalt'
              ? 'bg-[#000091]/25'
              : theme === 'light'
              ? 'bg-[#000091]/5'
              : 'bg-[#000091]/15'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full blur-[160px] transition-all duration-300 ${
            theme === 'cobalt'
              ? 'bg-white/10'
              : theme === 'light'
              ? 'bg-[#0000F2]/5'
              : 'bg-[#0000F2]/10'
          }`}
        />
      </div>

      {/* Hermes Top Bar Sticky Navbar with Theme Switcher */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Floating Theme Switcher Quick HUD (Bottom-Left) */}
      <ThemeSwitcher variant="floating" />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
