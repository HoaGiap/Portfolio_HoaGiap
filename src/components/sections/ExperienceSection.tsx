import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, History } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import { DoubleBezelCard } from '../ui/DoubleBezelCard';
import { Badge } from '../ui/Badge';
import { useTheme } from '../../context/ThemeContext';

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const isCobalt = theme === 'cobalt';
  const isLight = theme === 'light';

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
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
            <History className="w-3.5 h-3.5" />
            <span>[ 04 // HÀNH TRÌNH CHUYÊN MÔN ]</span>
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
            Học Vấn & Kinh Nghiệm Thực Chiến
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
            Nền tảng đào tạo chính quy kết hợp nghiên cứu khoa học và phát triển các sản phẩm phần mềm độc lập.
          </motion.p>
          <div
            className={`h-[2px] w-16 mt-4 ${
              isCobalt ? 'bg-white shadow-[0_0_12px_#ffffff]' : 'bg-[#0000F2] shadow-[0_0_12px_#0000F2]'
            }`}
          />
        </div>

        {/* Timeline Stream */}
        <div
          className={`relative pl-6 sm:pl-10 border-l-2 space-y-12 sm:space-y-14 ${
            isCobalt ? 'border-white/30' : 'border-[#0000F2]/30'
          }`}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="relative group"
            >
              {/* Glowing Node Dot on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 flex items-center justify-center">
                <div
                  className={`w-5 h-5 rounded-none border-2 group-hover:scale-125 transition-all duration-300 flex items-center justify-center ${
                    isCobalt
                      ? 'bg-[#0000bd] border-white shadow-[0_0_12px_#ffffff]'
                      : isLight
                      ? 'bg-white border-[#0000F2] shadow-[0_0_12px_#0000F2]'
                      : 'bg-[#101010] border-[#0000F2] shadow-[0_0_12px_rgba(0,0,242,0.8)]'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-none ${
                      isCobalt ? 'bg-white' : 'bg-[#0000F2]'
                    }`}
                  />
                </div>
              </div>

              {/* Timeline Card */}
              <DoubleBezelCard
                className="w-full"
                innerClassName="p-6 sm:p-8"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-display uppercase tracking-wide font-bold flex items-center gap-2.5 ${
                        isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
                      }`}
                    >
                      <Briefcase className={`w-5 h-5 shrink-0 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`} />
                      <span>{exp.role}</span>
                    </h3>
                    <div
                      className={`flex flex-wrap items-center gap-2 sm:gap-3 text-sm mt-1 font-mono ${
                        isCobalt ? 'text-white/80' : 'text-[#8e8e8e]'
                      }`}
                    >
                      <span className={`font-bold ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className={`w-3.5 h-3.5 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-start">
                    <Badge variant={idx === 0 ? 'cobalt' : 'neutral'} size="sm">
                      <Calendar className="w-3 h-3 mr-1 inline" />
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 my-5 font-sans">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${
                        isCobalt ? 'text-white/90' : isLight ? 'text-slate-700' : 'text-[#CCCCCC]'
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold mt-0.5 shrink-0 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`}>
                        [+]
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div
                  className={`pt-4 border-t flex flex-wrap items-center gap-2 ${
                    isCobalt ? 'border-white/20' : 'border-[#0000F2]/20'
                  }`}
                >
                  <span className={`text-xs font-mono mr-1 uppercase ${isCobalt ? 'text-white/75' : 'text-[#A0A0A0]'}`}>
                    [ STACK ]:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-xs font-mono rounded-none border ${
                        isCobalt
                          ? 'bg-[#0000bd] text-white border-white/30'
                          : isLight
                          ? 'bg-[#F0F4FF] text-[#0000F2] border-[#0000F2]/25'
                          : 'bg-[#141414] text-white border-[#0000F2]/25'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </DoubleBezelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
