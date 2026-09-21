import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Code2,
  Database,
  Box,
  User,
} from 'lucide-react';
import { personalProfile } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { DoubleBezelCard } from '../ui/DoubleBezelCard';
import { Hero3DCanvas } from '../three/Hero3DCanvas';
import { useTheme } from '../../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const [activeVisualTab, setActiveVisualTab] = useState<'3d' | 'code' | 'avatar'>('3d');

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isCobalt = theme === 'cobalt';
  const isLight = theme === 'light';

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 md:py-36 overflow-hidden bg-hermes-grid"
    >
      {/* Ambient Light Flares */}
      <div
        className={`absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 ${
          isCobalt
            ? 'bg-white/10'
            : isLight
            ? 'bg-[#0000F2]/5'
            : 'bg-[#0000F2]/10'
        }`}
      />
      <div
        className={`absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none -z-10 ${
          isCobalt
            ? 'bg-[#000091]/30'
            : isLight
            ? 'bg-[#000091]/5'
            : 'bg-[#000091]/15'
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-5"
            >
              <Badge pulseDot={true}>
                STATUS: READY // OPEN_TO_WORK
              </Badge>
            </motion.div>

            {/* Giant Towering Title (Hermes Rules Gothic Compressed style) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-[0.88] ${
                isCobalt
                  ? 'text-white'
                  : isLight
                  ? 'text-[#0000F2]'
                  : 'text-[#F2F2F2]'
              }`}
            >
              TRẦN HUỲNH <br />
              <span
                className={
                  isCobalt
                    ? 'text-white'
                    : isLight
                    ? 'text-[#000091]'
                    : 'text-[#0000F2]'
                }
              >
                HOA GIÁP
              </span>
            </motion.h1>

            {/* Title / Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`mt-4 font-mono text-sm sm:text-base font-medium uppercase tracking-wider flex items-center gap-2 ${
                isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'
              }`}
            >
              <span className={isCobalt ? 'text-white font-bold' : 'text-[#0000F2] font-bold'}>//</span>
              <span className={isCobalt ? 'text-white font-bold' : isLight ? 'text-[#111827] font-bold' : 'text-[#F2F2F2] font-bold'}>
                {personalProfile.title}
              </span>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`mt-5 text-sm sm:text-base max-w-xl leading-relaxed ${
                isCobalt ? 'text-white/85' : isLight ? 'text-slate-600' : 'text-[#8e8e8e]'
              }`}
            >
              {personalProfile.shortBio}
            </motion.p>

            {/* Technical Stack Tags in Monospace */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-1.5 font-mono text-xs"
            >
              {[
                'PyTorch',
                'React 19',
                'Three.js',
                'FastAPI',
                'Node.js',
                'SQL Server (ACID)',
                'Swin Transformer',
                'Docker',
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 py-1 border transition-all ${
                    isCobalt
                      ? 'bg-[#000091] text-white border-white/40 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2)]'
                      : isLight
                      ? 'bg-[#F0F4FF] text-[#0000F2] border-[#0000F2]/30 shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.15)]'
                      : 'bg-[#141414] text-[#F2F2F2] border-[#0000F2]/30 shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.2)]'
                  }`}
                >
                  [{skill}]
                </span>
              ))}
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => handleScrollTo('projects')}
              >
                KHÁM PHÁ DỰ ÁN
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={Mail}
                onClick={() => handleScrollTo('contact')}
              >
                LIÊN HỆ NGAY
              </Button>
            </motion.div>

            {/* Technical Coordinates Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className={`mt-9 flex items-center gap-3 sm:gap-4 text-xs font-mono ${
                isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'
              }`}
            >
              <span className={`uppercase ${isCobalt ? 'text-white/60' : 'text-[#525252]'}`}>KẾT NỐI //</span>
              <a
                href={personalProfile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-1 border flex items-center gap-1.5 transition-colors ${
                  isCobalt
                    ? 'border-white/40 bg-[#000091] text-white hover:bg-white hover:text-[#0000F2]'
                    : isLight
                    ? 'border-[#0000F2]/40 bg-[#F4F6FB] text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                    : 'border-[#0000F2]/40 bg-[#141414] text-[#F2F2F2] hover:border-[#0000F2] hover:text-[#0000F2]'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
              <a
                href={personalProfile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-1 border flex items-center gap-1.5 transition-colors ${
                  isCobalt
                    ? 'border-white/40 bg-[#000091] text-white hover:bg-white hover:text-[#0000F2]'
                    : isLight
                    ? 'border-[#0000F2]/40 bg-[#F4F6FB] text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                    : 'border-[#0000F2]/40 bg-[#141414] text-[#F2F2F2] hover:border-[#0000F2] hover:text-[#0000F2]'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </a>
              <a
                href={`mailto:${personalProfile.contact.email}`}
                className={`px-2.5 py-1 border flex items-center gap-1.5 transition-colors ${
                  isCobalt
                    ? 'border-white/40 bg-[#000091] text-white hover:bg-white hover:text-[#0000F2]'
                    : isLight
                    ? 'border-[#0000F2]/40 bg-[#F4F6FB] text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                    : 'border-[#0000F2]/40 bg-[#141414] text-[#F2F2F2] hover:border-[#0000F2] hover:text-[#0000F2]'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Hermes 3D Wireframe / Terminal View (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 w-full max-w-md mx-auto"
          >
            {/* View Switcher Pills */}
            <div className="flex flex-wrap items-center justify-end gap-1.5 mb-2 font-mono text-xs">
              <button
                onClick={() => setActiveVisualTab('3d')}
                className={`px-3 py-1 uppercase border transition-all ${
                  activeVisualTab === '3d'
                    ? isCobalt
                      ? 'border-white bg-white text-[#0000F2] font-bold shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                      : 'border-[#0000F2] bg-[#0000F2] text-white shadow-[0_0_12px_rgba(0,0,242,0.6)]'
                    : isCobalt
                    ? 'border-white/40 bg-[#000091] text-white/80 hover:text-white'
                    : isLight
                    ? 'border-[#0000F2]/30 bg-white text-[#4B5563] hover:text-[#0000F2]'
                    : 'border-[#0000F2]/30 bg-[#101010] text-[#8e8e8e] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5" />
                  <span>3D_HYPER_MESH</span>
                </span>
              </button>

              <button
                onClick={() => setActiveVisualTab('code')}
                className={`px-3 py-1 uppercase border transition-all ${
                  activeVisualTab === 'code'
                    ? isCobalt
                      ? 'border-white bg-white text-[#0000F2] font-bold shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                      : 'border-[#0000F2] bg-[#0000F2] text-white shadow-[0_0_12px_rgba(0,0,242,0.6)]'
                    : isCobalt
                    ? 'border-white/40 bg-[#000091] text-white/80 hover:text-white'
                    : isLight
                    ? 'border-[#0000F2]/30 bg-white text-[#4B5563] hover:text-[#0000F2]'
                    : 'border-[#0000F2]/30 bg-[#101010] text-[#8e8e8e] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CONFIG_SRC</span>
                </span>
              </button>

              <button
                onClick={() => setActiveVisualTab('avatar')}
                className={`px-3 py-1 uppercase border transition-all ${
                  activeVisualTab === 'avatar'
                    ? isCobalt
                      ? 'border-white bg-white text-[#0000F2] font-bold shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                      : 'border-[#0000F2] bg-[#0000F2] text-white shadow-[0_0_12px_rgba(0,0,242,0.6)]'
                    : isCobalt
                    ? 'border-white/40 bg-[#000091] text-white/80 hover:text-white'
                    : isLight
                    ? 'border-[#0000F2]/30 bg-white text-[#4B5563] hover:text-[#0000F2]'
                    : 'border-[#0000F2]/30 bg-[#101010] text-[#8e8e8e] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>AVATAR_HOAGIAP</span>
                </span>
              </button>
            </div>

            <DoubleBezelCard
              className="shadow-2xl"
              innerClassName="p-0 overflow-hidden"
            >
              {activeVisualTab === '3d' ? (
                /* Three.js Interactive Wireframe */
                <Hero3DCanvas />
              ) : activeVisualTab === 'code' ? (
                /* Code Snippet Terminal View */
                <div>
                  <div
                    className={`flex items-center justify-between px-4 py-2.5 border-b ${
                      isCobalt
                        ? 'border-white/30 bg-[#0000bd] text-white'
                        : isLight
                        ? 'border-[#0000F2]/30 bg-[#F4F6FB] text-[#0000F2]'
                        : 'border-[#0000F2]/30 bg-[#141414] text-[#F2F2F2]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <Terminal className="w-3.5 h-3.5 text-[#0000F2]" />
                      <span>nous_hermes.config.ts</span>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 border ${
                        isCobalt
                          ? 'bg-white text-[#0000F2] border-white font-bold'
                          : 'bg-[#0000F2]/20 text-[#0000F2] border-[#0000F2]/40 font-bold'
                      }`}
                    >
                      [ READY ]
                    </span>
                  </div>

                  <div
                    className={`p-5 font-mono text-xs leading-relaxed overflow-x-auto space-y-1.5 ${
                      isCobalt ? 'text-white' : isLight ? 'text-[#111827]' : 'text-[#F2F2F2]'
                    }`}
                  >
                    <p>
                      <span className={isCobalt ? 'text-white font-bold underline' : 'text-[#0000F2] font-bold'}>
                        export const
                      </span>{' '}
                      <span className={isCobalt ? 'text-white' : 'text-current'}>engineerProfile</span> = {'{'}
                    </p>
                    <p className={`pl-4 ${isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'}`}>
                      candidate: <span className={isCobalt ? 'text-white font-semibold' : 'text-current'}>'{personalProfile.name}'</span>,
                    </p>
                    <p className={`pl-4 ${isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'}`}>
                      specialty: <span className={isCobalt ? 'text-white font-semibold' : 'text-current'}>'Medical AI (Grad-CAM++) & Full-Stack'</span>,
                    </p>
                    <p className={`pl-4 ${isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'}`}>
                      degree: <span className={isCobalt ? 'text-white font-semibold' : 'text-current'}>'B.Eng. Computer Science (GPA: 3.14/4.0)'</span>,
                    </p>
                    <p className={`pl-4 ${isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'}`}>
                      thesisAccuracy: <span className={isCobalt ? 'text-white font-black' : 'text-[#0000F2] font-bold'}>'99.42% (Excellent)'</span>,
                    </p>
                    <p className={`pl-4 ${isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'}`}>
                      status: <span className={isCobalt ? 'text-white font-semibold' : 'text-current'}>'[ AVAILABLE // IMMEDIATE ]'</span>,
                    </p>
                    <p>{'};'}</p>

                    <div
                      className={`pt-3 mt-3 border-t grid grid-cols-2 gap-2 text-xs ${
                        isCobalt ? 'border-white/20' : 'border-[#0000F2]/20'
                      }`}
                    >
                      <div
                        className={`p-2 border flex items-center gap-2 ${
                          isCobalt
                            ? 'bg-[#0000bd] border-white/40 text-white'
                            : isLight
                            ? 'bg-[#F4F6FB] border-[#0000F2]/30 text-[#111827]'
                            : 'bg-[#141414] border-[#0000F2]/30 text-white'
                        }`}
                      >
                        <Code2 className={`w-3.5 h-3.5 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`} />
                        <div>
                          <div className={`text-[9px] uppercase ${isCobalt ? 'text-white/70' : 'text-[#8e8e8e]'}`}>MÔ HÌNH AI</div>
                          <div className="font-bold">99.42% ACC</div>
                        </div>
                      </div>
                      <div
                        className={`p-2 border flex items-center gap-2 ${
                          isCobalt
                            ? 'bg-[#0000bd] border-white/40 text-white'
                            : isLight
                            ? 'bg-[#F4F6FB] border-[#0000F2]/30 text-[#111827]'
                            : 'bg-[#141414] border-[#0000F2]/30 text-white'
                        }`}
                      >
                        <Database className={`w-3.5 h-3.5 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`} />
                        <div>
                          <div className={`text-[9px] uppercase ${isCobalt ? 'text-white/70' : 'text-[#8e8e8e]'}`}>CSDL TRANSACTION</div>
                          <div className="font-bold">100% ACID</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Portrait Avatar View */
                <div
                  className={`relative w-full h-[360px] sm:h-[400px] flex items-center justify-center overflow-hidden select-none transition-all ${
                    isCobalt
                      ? 'bg-white text-[#0000F2]'
                      : isLight
                      ? 'bg-[#F4F6FB] text-[#0000F2]'
                      : 'bg-[#101010] text-[#F2F2F2]'
                  }`}
                >
                  {/* Subtle Blueprint Grid Pattern in Avatar Panel */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25"
                    style={{
                      backgroundImage: `linear-gradient(${isCobalt || isLight ? '#0000F2' : '#0000F2'} 1px, transparent 1px), linear-gradient(90deg, ${isCobalt || isLight ? '#0000F2' : '#0000F2'} 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Ambient backlight glow in dark mode for blue etching */}
                  {!isCobalt && !isLight && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-72 h-72 rounded-full bg-[#0000F2]/25 blur-3xl" />
                    </div>
                  )}

                  {/* Technical Crosshairs & Corner Registration Marks */}
                  <div className={`absolute top-2 left-2 text-[10px] font-mono pointer-events-none ${isCobalt || isLight ? 'text-[#0000F2]/50' : 'text-[#0000F2]/60'}`}>+</div>
                  <div className={`absolute top-2 right-2 text-[10px] font-mono pointer-events-none ${isCobalt || isLight ? 'text-[#0000F2]/50' : 'text-[#0000F2]/60'}`}>+</div>
                  <div className={`absolute bottom-2 left-2 text-[10px] font-mono pointer-events-none ${isCobalt || isLight ? 'text-[#0000F2]/50' : 'text-[#0000F2]/60'}`}>+</div>
                  <div className={`absolute bottom-2 right-2 text-[10px] font-mono pointer-events-none ${isCobalt || isLight ? 'text-[#0000F2]/50' : 'text-[#0000F2]/60'}`}>+</div>

                  {/* Technical Top-Left Badge */}
                  <div
                    className={`absolute top-3.5 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-none border text-[11px] font-mono z-10 ${
                      isCobalt
                        ? 'bg-white border-[#0000F2] text-[#0000F2] shadow-sm'
                        : isLight
                        ? 'bg-white border-[#0000F2]/50 text-[#0000F2] shadow-sm'
                        : 'bg-[#141414] border-[#0000F2]/60 text-[#F2F2F2]'
                    }`}
                  >
                    <User className="w-3.5 h-3.5 text-[#0000F2]" />
                    <span className="font-bold">[ PORTRAIT // HOA_GIAP ]</span>
                  </div>

                  {/* Technical Top-Right Spec Badge */}
                  <div
                    className={`hidden sm:flex absolute top-3.5 right-4 items-center gap-1 px-2 py-0.5 border text-[10px] font-mono z-10 ${
                      isCobalt
                        ? 'bg-white/90 border-[#0000F2]/40 text-[#0000F2]'
                        : isLight
                        ? 'bg-white/90 border-[#0000F2]/30 text-[#0000F2]'
                        : 'bg-[#141414]/90 border-[#0000F2]/40 text-[#8e8e8e]'
                    }`}
                  >
                    <span>[ ETCHED_CHROMA ]</span>
                  </div>

                  {/* Portrait Artwork Image */}
                  <div className="relative w-full h-full flex items-center justify-center pt-8 pb-4 px-6 z-0">
                    <img
                      src="/imgs/avata_hoagiap.png"
                      alt="Trần Huỳnh Hoa Giáp - Portrait"
                      className={`max-h-[290px] sm:max-h-[320px] w-auto object-contain transition-transform duration-500 hover:scale-105 ${
                        !isCobalt && !isLight
                          ? 'filter drop-shadow-[0_0_25px_rgba(0,0,242,0.8)] brightness-110 contrast-125'
                          : 'filter drop-shadow-[0_4px_16px_rgba(0,0,242,0.2)]'
                      }`}
                      loading="eager"
                    />
                  </div>

                  {/* Technical Bottom Registration Bar */}
                  <div
                    className={`absolute bottom-3 inset-x-5 flex items-center justify-between px-3 py-1 border text-[10px] font-mono z-10 ${
                      isCobalt
                        ? 'bg-white/95 border-[#0000F2]/40 text-[#0000F2]'
                        : isLight
                        ? 'bg-white/95 border-[#0000F2]/30 text-[#0000F2]'
                        : 'bg-[#141414]/95 border-[#0000F2]/40 text-[#8e8e8e]'
                    }`}
                  >
                    <span>ID: THHG_2026 // ENG_CS</span>
                    <span className="font-bold text-[#0000F2]">[ STATUS: VERIFIED ]</span>
                  </div>
                </div>
              )}
            </DoubleBezelCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
