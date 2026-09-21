import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Wrench,
  Atom,
  Globe,
  FileCode2,
  Palette,
  Sparkles,
  Boxes,
  Terminal,
  Cpu,
  Share2,
  Wifi,
  ShieldCheck,
  FolderGit2,
  Flame,
  Container,
  Cloud,
  GitBranch,
  RefreshCw,
  CheckCircle2,
  TerminalSquare,
  Figma,
  LucideIcon,
} from 'lucide-react';
import { skillGroups } from '../../data/portfolioData';
import { DoubleBezelCard } from '../ui/DoubleBezelCard';
import { useTheme } from '../../context/ThemeContext';

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('all');
  const isCobalt = theme === 'cobalt';
  const isLight = theme === 'light';

  const iconRegistry: Record<string, LucideIcon> = {
    Layout,
    Server,
    Database,
    Wrench,
    Atom,
    Globe,
    FileCode2,
    Palette,
    Sparkles,
    Boxes,
    Terminal,
    Cpu,
    Share2,
    Wifi,
    ShieldCheck,
    FolderGit2,
    Flame,
    Container,
    Cloud,
    GitBranch,
    RefreshCw,
    CheckCircle2,
    TerminalSquare,
    Figma,
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconRegistry[iconName] || Boxes;
    return <IconComponent className="w-4 h-4" />;
  };

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeTab);

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-widest mb-3 border ${
              isCobalt
                ? 'bg-[#000091] border-white/50 text-white'
                : isLight
                ? 'bg-[#F0F4FF] border-[#0000F2]/40 text-[#0000F2]'
                : 'bg-[#0000F2]/10 border-[#0000F2]/30 text-[#0000F2]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>[ 02 // NĂNG LỰC CHUYÊN MÔN ]</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight ${
              isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
            }`}
          >
            Kỹ Năng & Hệ Sinh Thái Công Nghệ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`mt-3 max-w-xl text-sm sm:text-base font-sans ${
              isCobalt ? 'text-white/85' : isLight ? 'text-slate-600' : 'text-[#A0A0A0]'
            }`}
          >
            Tập trung sâu vào Trí tuệ nhân tạo y tế (Medical AI) kết hợp năng lực phát triển Full-Stack và hệ thống CSDL bền vững.
          </motion.p>
          <div
            className={`h-[2px] w-16 mt-4 ${
              isCobalt ? 'bg-white shadow-[0_0_12px_#ffffff]' : 'bg-[#0000F2] shadow-[0_0_12px_#0000F2]'
            }`}
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-none text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'all'
                ? isCobalt
                  ? 'bg-white text-[#0000F2] border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'bg-[#0000F2] text-white border-[#0000F2] shadow-[0_0_15px_rgba(0,0,242,0.4)] font-bold'
                : isCobalt
                ? 'bg-[#000091] text-white/80 border-white/30 hover:text-white hover:border-white'
                : isLight
                ? 'bg-[#F0F4FF] text-[#0000F2] border-[#0000F2]/30 hover:border-[#0000F2]'
                : 'bg-[#101010] text-[#A0A0A0] border-[#0000F2]/30 hover:text-white hover:border-[#0000F2]'
            }`}
          >
            [ TẤT CẢ KỸ NĂNG ]
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-4 py-2 rounded-none text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === group.id
                  ? isCobalt
                    ? 'bg-white text-[#0000F2] border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                    : 'bg-[#0000F2] text-white border-[#0000F2] shadow-[0_0_15px_rgba(0,0,242,0.4)] font-bold'
                  : isCobalt
                  ? 'bg-[#000091] text-white/80 border-white/30 hover:text-white hover:border-white'
                  : isLight
                  ? 'bg-[#F0F4FF] text-[#0000F2] border-[#0000F2]/30 hover:border-[#0000F2]'
                  : 'bg-[#101010] text-[#A0A0A0] border-[#0000F2]/30 hover:text-white hover:border-[#0000F2]'
              }`}
            >
              [ {group.title.toUpperCase()} ]
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * groupIdx, duration: 0.6 }}
            >
              <DoubleBezelCard
                className="h-full"
                innerClassName="p-6 sm:p-7 h-full flex flex-col justify-between"
              >
                <div>
                  {/* Group Title Header */}
                  <div className="flex items-center gap-3.5 mb-2">
                    <div
                      className={`w-10 h-10 rounded-none border flex items-center justify-center ${
                        isCobalt
                          ? 'bg-[#0000bd] border-white text-white'
                          : isLight
                          ? 'bg-[#F0F4FF] border-[#0000F2] text-[#0000F2]'
                          : 'bg-[#0000F2]/10 border-[#0000F2] text-[#0000F2]'
                      }`}
                    >
                      {getIcon(group.icon)}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-display uppercase tracking-wide font-bold ${
                          isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
                        }`}
                      >
                        {group.title}
                      </h3>
                      <p className={`text-xs font-mono ${isCobalt ? 'text-white/75' : isLight ? 'text-slate-600' : 'text-[#A0A0A0]'}`}>
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className={`h-px my-5 ${isCobalt ? 'bg-white/20' : 'bg-[#0000F2]/20'}`} />

                  {/* Skills List in Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/skill relative p-3 rounded-none border transition-all duration-200 ${
                          isCobalt
                            ? 'bg-[#0000bd] border-white/30 hover:border-white hover:bg-[#0000d6]'
                            : isLight
                            ? 'bg-[#F8FAFC] border-[#0000F2]/20 hover:border-[#0000F2] hover:bg-[#F0F4FF]'
                            : 'bg-[#141414] border-[#0000F2]/25 hover:border-[#0000F2] hover:bg-[#0000F2]/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className={isCobalt ? 'text-white' : 'text-[#0000F2]'}>
                              {getIcon(skill.icon)}
                            </span>
                            <span
                              className={`text-xs sm:text-sm font-mono font-semibold ${
                                isCobalt ? 'text-white' : isLight ? 'text-[#111827]' : 'text-white'
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                          {skill.isCore && (
                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none border font-bold ${
                                isCobalt
                                  ? 'bg-white text-[#0000F2] border-white'
                                  : isLight
                                  ? 'bg-[#0000F2] text-white border-[#0000F2]'
                                  : 'bg-[#0000F2]/20 text-[#0000F2] border-[#0000F2]/50'
                              }`}
                            >
                              CORE
                            </span>
                          )}
                        </div>

                        {/* Experience years & Level */}
                        <div
                          className={`flex items-center justify-between text-[11px] mb-2 font-mono ${
                            isCobalt ? 'text-white/75' : isLight ? 'text-slate-500' : 'text-[#A0A0A0]'
                          }`}
                        >
                          <span>{skill.proficiency}</span>
                          <span className={`font-semibold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                            {skill.experienceYears}
                          </span>
                        </div>

                        {/* Skill Progress Bar */}
                        <div
                          className={`w-full h-1 border rounded-none overflow-hidden ${
                            isCobalt
                              ? 'bg-[#000091] border-white/40'
                              : isLight
                              ? 'bg-[#E5EDFF] border-[#0000F2]/30'
                              : 'bg-[#101010] border-[#0000F2]/30'
                          }`}
                        >
                          <div
                            className={`h-full rounded-none transition-all duration-1000 ${
                              isCobalt
                                ? 'bg-white shadow-[0_0_8px_#ffffff]'
                                : 'bg-[#0000F2] shadow-[0_0_8px_#0000F2]'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DoubleBezelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
