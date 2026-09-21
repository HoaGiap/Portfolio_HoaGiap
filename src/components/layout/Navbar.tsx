import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { personalProfile } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

export const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: '01 // GIỚI THIỆU', href: '#about' },
    { name: '02 // KỸ NĂNG', href: '#skills' },
    { name: '03 // DỰ ÁN', href: '#projects' },
    { name: '04 // KINH NGHIỆM', href: '#experience' },
    { name: '05 // LIÊN HỆ', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerThemeClasses = {
    dark: isScrolled
      ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#0000F2]/40 shadow-[0_4px_20px_rgba(0,0,242,0.15)] text-[#F2F2F2]'
      : 'bg-[#101010]/80 backdrop-blur-sm border-b border-[#0000F2]/20 text-[#F2F2F2]',
    cobalt: isScrolled
      ? 'bg-[#0000F2]/95 backdrop-blur-md border-b border-white/40 shadow-[0_4px_25px_rgba(0,0,0,0.25)] text-white'
      : 'bg-[#0000F2]/80 backdrop-blur-sm border-b border-white/20 text-white',
    light: isScrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-[#0000F2]/30 shadow-[0_4px_20px_rgba(0,0,242,0.1)] text-[#111827]'
      : 'bg-white/80 backdrop-blur-sm border-b border-[#0000F2]/20 text-[#111827]',
  };

  const monogramClasses = {
    dark: 'bg-[#141414] border border-[#0000F2] text-[#0000F2] group-hover:bg-[#0000F2] group-hover:text-white',
    cobalt: 'bg-[#000091] border border-white text-white group-hover:bg-white group-hover:text-[#0000F2]',
    light: 'bg-[#F0F4FF] border border-[#0000F2] text-[#0000F2] group-hover:bg-[#0000F2] group-hover:text-white',
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 w-full z-40 transition-all duration-300 ${headerThemeClasses[theme]}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between relative">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div
              className={`px-2.5 py-1 font-mono font-bold text-xs tracking-widest transition-colors ${monogramClasses[theme]}`}
            >
              THHG
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg tracking-wide uppercase font-bold transition-colors leading-none ${
                  theme === 'cobalt'
                    ? 'text-white'
                    : theme === 'light'
                    ? 'text-[#0000F2]'
                    : 'text-[#F2F2F2] group-hover:text-[#0000F2]'
                }`}
              >
                {personalProfile.name}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-wider mt-0.5 ${
                  theme === 'cobalt' ? 'text-white/80' : 'text-[#8e8e8e]'
                }`}
              >
                [ AI & FULL-STACK ]
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1.5 transition-all duration-150 border ${
                    isActive
                      ? theme === 'cobalt'
                        ? 'border-white text-white bg-white/20 font-bold'
                        : 'border-[#0000F2] text-current bg-[#0000F2]/15 font-bold'
                      : theme === 'cobalt'
                      ? 'border-transparent text-white/75 hover:text-white hover:border-white/40'
                      : 'border-transparent text-[#8e8e8e] hover:text-current hover:border-[#0000F2]/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar: Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Colorway / Background Switcher */}
            <ThemeSwitcher variant="navbar" />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center p-2 border font-mono text-xs ${
                theme === 'cobalt'
                  ? 'border-white/50 text-white hover:bg-white/20'
                  : 'border-[#0000F2]/50 text-current hover:bg-[#0000F2]/10'
              }`}
              aria-label="Mở menu di động"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-30 md:hidden flex flex-col justify-center px-8 pt-16 border-b ${
              theme === 'cobalt'
                ? 'bg-[#0000F2] border-white text-white'
                : theme === 'light'
                ? 'bg-white border-[#0000F2] text-[#111827]'
                : 'bg-[#101010] border-[#0000F2] text-[#F2F2F2]'
            }`}
          >
            <div className="flex flex-col gap-4 max-w-sm mx-auto w-full font-mono">
              <span
                className={`text-xs uppercase tracking-widest border-b pb-2 ${
                  theme === 'cobalt' ? 'text-white border-white/30' : 'text-[#0000F2] border-[#0000F2]/30'
                }`}
              >
                [ NAVIGATION // INDEX ]
              </span>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg uppercase py-2 border-b border-current/10 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-current" />
                </a>
              ))}

              {/* Theme Picker in Mobile Drawer */}
              <div className="pt-4 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-wider text-[#8e8e8e]">CHỌN GIAO DIỆN // THEME:</span>
                <ThemeSwitcher variant="navbar" className="w-full justify-between" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
