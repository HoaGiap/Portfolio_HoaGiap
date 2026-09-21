import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Maximize2,
  Sparkles,
  TrendingUp,
  Code2,
  Cpu,
  Layers,
  FolderGit2,
} from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types/portfolio';
import { DoubleBezelCard } from '../ui/DoubleBezelCard';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

export const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const isCobalt = theme === 'cobalt';
  const isLight = theme === 'light';

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'TẤT CẢ DỰ ÁN', value: 'all' },
    { label: 'HỌC SÂU & MEDICAL AI', value: 'ai' },
    { label: 'FULL-STACK WEB APP', value: 'web' },
    { label: 'DESKTOP & HỆ THỐNG', value: 'desktop' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>[ 03 // SẢN PHẨM ĐỘT PHÁ ]</span>
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
            Dự Án Tiêu Biểu & Độc Lập Thực Chiến
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
            Các giải pháp được xây dựng trọn gói từ khâu nghiên cứu thuật toán, thiết kế cơ sở dữ liệu đến giao diện người dùng tối ưu.
          </motion.p>
          <div
            className={`h-[2px] w-16 mt-4 ${
              isCobalt ? 'bg-white shadow-[0_0_12px_#ffffff]' : 'bg-[#0000F2] shadow-[0_0_12px_#0000F2]'
            }`}
          />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-none text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat.value
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
              [ {cat.label} ]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <DoubleBezelCard
                  className="h-full"
                  innerClassName="p-0 overflow-hidden flex flex-col justify-between h-full group/card"
                >
                  {/* Top Preview Canvas Mockup */}
                  <div
                    className={`relative h-48 sm:h-52 p-4 border-b flex flex-col justify-between overflow-hidden ${
                      isCobalt
                        ? 'bg-[#0000bd] border-white/30'
                        : isLight
                        ? 'bg-[#F4F6FB] border-[#0000F2]/20'
                        : 'bg-[#0d0d0d] border-[#0000F2]/30'
                    }`}
                  >
                    {/* Mockup Header Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className={`flex items-center gap-1.5 font-mono text-[10px] font-bold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                        <span>[ PROJ_0{idx + 1} ]</span>
                      </div>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded-none font-bold border ${
                          isCobalt
                            ? 'bg-white text-[#0000F2] border-white'
                            : isLight
                            ? 'bg-[#0000F2] text-white border-[#0000F2]'
                            : 'bg-[#0000F2]/20 text-white border-[#0000F2]/50'
                        }`}
                      >
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Mockup Central Visual Graphics */}
                    <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-none border flex items-center justify-center mb-2 group-hover/card:scale-110 transition-transform duration-300 ${
                          isCobalt
                            ? 'bg-[#000091] border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                            : isLight
                            ? 'bg-white border-[#0000F2] text-[#0000F2] shadow-[0_0_15px_rgba(0,0,242,0.2)]'
                            : 'bg-[#0000F2]/15 border-[#0000F2] text-[#0000F2] shadow-[0_0_15px_rgba(0,0,242,0.3)]'
                        }`}
                      >
                        {project.category === 'ai' ? (
                          <Cpu className="w-6 h-6" />
                        ) : project.category === 'web' ? (
                          <Layers className="w-6 h-6" />
                        ) : (
                          <Code2 className="w-6 h-6" />
                        )}
                      </div>
                      <span
                        className={`text-base font-display uppercase font-bold tracking-wider px-2 text-center line-clamp-1 ${
                          isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
                        }`}
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Result / Metric Overlay Pill */}
                    <div className="relative z-10 flex items-center justify-between pt-2">
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none border text-xs font-mono font-bold ${
                          isCobalt
                            ? 'bg-[#000091] border-white text-white'
                            : isLight
                            ? 'bg-white border-[#0000F2] text-[#0000F2]'
                            : 'bg-[#101010] border-[#0000F2] text-[#0000F2]'
                        }`}
                      >
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.metrics.value}</span>
                      </div>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        aria-label="Xem chi tiết dự án"
                        className={`w-7 h-7 rounded-none border flex items-center justify-center transition-colors ${
                          isCobalt
                            ? 'bg-[#000091] border-white/40 text-white hover:bg-white hover:text-[#0000F2]'
                            : isLight
                            ? 'bg-white border-[#0000F2]/40 text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                            : 'bg-[#101010] border-[#0000F2]/40 text-slate-300 hover:bg-[#0000F2] hover:text-white'
                        }`}
                        title="Xem chi tiết kiến trúc"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content Information */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={`text-lg font-display uppercase tracking-wide font-bold transition-colors ${
                            isCobalt
                              ? 'text-white'
                              : isLight
                              ? 'text-[#111827] group-hover/card:text-[#0000F2]'
                              : 'text-white group-hover/card:text-[#0000F2]'
                          }`}
                        >
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span
                            className={`flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-none border ${
                              isCobalt
                                ? 'text-white bg-white/20 border-white'
                                : 'text-[#0000F2] bg-[#0000F2]/10 border-[#0000F2]/40'
                            }`}
                          >
                            <Sparkles className="w-3 h-3" /> NỔI BẬT
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed font-sans ${
                          isCobalt ? 'text-white/85' : isLight ? 'text-slate-600' : 'text-[#A0A0A0]'
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 text-[11px] font-mono rounded-none border ${
                              isCobalt
                                ? 'bg-[#0000bd] text-white border-white/30'
                                : isLight
                                ? 'bg-[#F0F4FF] text-[#0000F2] border-[#0000F2]/20'
                                : 'bg-[#141414] text-[#D0D0D0] border-[#0000F2]/20'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div
                      className={`pt-4 border-t flex items-center gap-2 ${
                        isCobalt ? 'border-white/20' : 'border-[#0000F2]/20'
                      }`}
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ExternalLink}
                        asAnchor={true}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        Live Demo
                      </Button>

                      <Button
                        variant="secondary"
                        size="sm"
                        icon={Github}
                        asAnchor={true}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        Mã Nguồn
                      </Button>
                    </div>
                  </div>
                </DoubleBezelCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Deep-Dive Architecture Modal */}
      <Modal
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        title={activeModalProject ? activeModalProject.title : ''}
      >
        {activeModalProject && (
          <div className="space-y-6 font-sans">
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                [ 01 // TỔNG QUAN & BÀI TOÁN THỰC TẾ ]
              </span>
              <p className={`text-sm sm:text-base leading-relaxed mt-2 font-sans ${isCobalt ? 'text-white/90' : isLight ? 'text-slate-700' : 'text-[#D0D0D0]'}`}>
                {activeModalProject.longDescription}
              </p>
            </div>

            <div
              className={`p-4 rounded-none border flex items-center justify-between ${
                isCobalt
                  ? 'bg-[#0000bd] border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : isLight
                  ? 'bg-[#F0F4FF] border-[#0000F2] shadow-[0_0_20px_rgba(0,0,242,0.15)]'
                  : 'bg-[#141414] border-[#0000F2] shadow-[0_0_20px_rgba(0,0,242,0.2)]'
              }`}
            >
              <div>
                <span className={`text-xs font-mono uppercase ${isCobalt ? 'text-white/80' : isLight ? 'text-slate-600' : 'text-[#A0A0A0]'}`}>
                  [ CHỈ SỐ NỔI BẬT ]
                </span>
                <div className={`text-xl font-display uppercase tracking-wide font-bold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                  {activeModalProject.metrics.label}: {activeModalProject.metrics.value}
                </div>
              </div>
              <div
                className={`w-10 h-10 rounded-none border flex items-center justify-center ${
                  isCobalt ? 'bg-[#000091] border-white text-white' : 'bg-[#0000F2]/10 border-[#0000F2] text-[#0000F2]'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                [ 02 // ĐIỂM NHẤN KỸ THUẬT & KIẾN TRÚC ]
              </span>
              <ul className="mt-3 space-y-2.5">
                {activeModalProject.architectureHighlights.map((point, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${isCobalt ? 'text-white/90' : isLight ? 'text-slate-700' : 'text-[#CCCCCC]'}`}>
                    <span className={`font-mono text-xs font-bold mt-0.5 shrink-0 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>[+]</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                [ 03 // CÔNG NGHỆ ÁP DỤNG ]
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {activeModalProject.tags.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 text-xs font-mono rounded-none border ${
                      isCobalt
                        ? 'bg-[#0000bd] text-white border-white/40'
                        : isLight
                        ? 'bg-[#F0F4FF] text-[#0000F2] border-[#0000F2]/40'
                        : 'bg-[#141414] text-white border-[#0000F2]/40'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={`pt-4 border-t flex items-center gap-3 ${isCobalt ? 'border-white/20' : 'border-[#0000F2]/20'}`}>
              <Button
                variant="primary"
                size="md"
                icon={ExternalLink}
                asAnchor={true}
                href={activeModalProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Trải nghiệm Trực tiếp
              </Button>
              <Button
                variant="secondary"
                size="md"
                icon={Github}
                asAnchor={true}
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mã nguồn GitHub
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
