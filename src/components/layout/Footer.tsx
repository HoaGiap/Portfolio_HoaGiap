import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalProfile } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isCobalt = theme === 'cobalt';
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative border-t transition-colors duration-300 overflow-hidden ${
        isCobalt
          ? 'bg-[#000091] border-white/30 text-white'
          : isLight
          ? 'bg-[#F4F6FB] border-[#0000F2]/20 text-[#111827]'
          : 'bg-[#101010] border-[#0000F2]/30 text-[#F2F2F2]'
      }`}
    >
      {/* Ambient Cobalt Glow */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 blur-3xl pointer-events-none ${
          isCobalt
            ? 'bg-gradient-to-b from-white/10 to-transparent'
            : 'bg-gradient-to-b from-[#0000F2]/10 via-[#000091]/5 to-transparent'
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b ${
            isCobalt ? 'border-white/20' : 'border-[#0000F2]/20'
          }`}
        >
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-none flex items-center justify-center font-mono font-black text-sm ${
                  isCobalt
                    ? 'bg-white text-[#0000F2] shadow-[0_0_12px_#ffffff]'
                    : 'bg-[#0000F2] text-white shadow-[0_0_12px_#0000F2]'
                }`}
              >
                TH
              </div>
              <span
                className={`text-2xl font-display uppercase tracking-wider font-bold ${
                  isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
                }`}
              >
                {personalProfile.name}
              </span>
            </div>
            <p className={`text-xs font-mono max-w-sm ${isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'}`}>
              [ {personalProfile.roleSubtitle.toUpperCase()} ]
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalProfile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`w-10 h-10 rounded-none flex items-center justify-center border transition-all duration-200 shadow-sm ${
                isCobalt
                  ? 'bg-[#0000bd] border-white/40 text-white hover:bg-white hover:text-[#0000F2] hover:border-white'
                  : isLight
                  ? 'bg-white border-[#0000F2]/30 text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                  : 'bg-[#141414] border-[#0000F2]/40 text-slate-300 hover:text-white hover:bg-[#0000F2] hover:border-[#0000F2]'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalProfile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`w-10 h-10 rounded-none flex items-center justify-center border transition-all duration-200 shadow-sm ${
                isCobalt
                  ? 'bg-[#0000bd] border-white/40 text-white hover:bg-white hover:text-[#0000F2] hover:border-white'
                  : isLight
                  ? 'bg-white border-[#0000F2]/30 text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                  : 'bg-[#141414] border-[#0000F2]/40 text-slate-300 hover:text-white hover:bg-[#0000F2] hover:border-[#0000F2]'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalProfile.contact.email}`}
              aria-label="Send Email"
              className={`w-10 h-10 rounded-none flex items-center justify-center border transition-all duration-200 shadow-sm ${
                isCobalt
                  ? 'bg-[#0000bd] border-white/40 text-white hover:bg-white hover:text-[#0000F2] hover:border-white'
                  : isLight
                  ? 'bg-white border-[#0000F2]/30 text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                  : 'bg-[#141414] border-[#0000F2]/40 text-slate-300 hover:text-white hover:bg-[#0000F2] hover:border-[#0000F2]'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
            {personalProfile.contact.twitter && (
              <a
                href={personalProfile.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className={`w-10 h-10 rounded-none flex items-center justify-center border transition-all duration-200 shadow-sm ${
                  isCobalt
                    ? 'bg-[#0000bd] border-white/40 text-white hover:bg-white hover:text-[#0000F2]'
                    : isLight
                    ? 'bg-white border-[#0000F2]/30 text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                    : 'bg-[#141414] border-[#0000F2]/40 text-slate-300 hover:text-white hover:bg-[#0000F2] hover:border-[#0000F2]'
                }`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 px-4 py-2.5 rounded-none border text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              isCobalt
                ? 'bg-white text-[#0000F2] border-white hover:bg-[#000091] hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                : isLight
                ? 'bg-[#0000F2] text-white border-[#0000F2] hover:bg-white hover:text-[#0000F2] shadow-[0_0_15px_rgba(0,0,242,0.2)]'
                : 'bg-[#141414] border-[#0000F2] text-white hover:bg-[#0000F2] shadow-[0_0_15px_rgba(0,0,242,0.25)]'
            }`}
          >
            <span>[ LÊN ĐẦU TRANG ]</span>
            <span className="w-5 h-5 rounded-none bg-black/10 dark:bg-white/10 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Bottom Credits */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isCobalt ? 'text-white/80' : 'text-[#808080]'
          }`}
        >
          <p>© {new Date().getFullYear()} {personalProfile.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className={isCobalt ? 'text-white font-bold' : 'text-[#0000F2]'}>[ HERMES SPEC ]</span>
            <span>NOUS RESEARCH AESTHETICS • REACT 19 + THREE.JS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
