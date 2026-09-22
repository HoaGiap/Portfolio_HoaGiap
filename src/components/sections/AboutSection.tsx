import React from "react";
import { motion } from "framer-motion";
import { Zap, Code2, HeartHandshake, Award, Terminal, Cpu } from "lucide-react";
import { personalProfile } from "../../data/portfolioData";
import { DoubleBezelCard } from "../ui/DoubleBezelCard";
import { useTheme } from "../../context/ThemeContext";

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isCobalt = theme === "cobalt";
  const isLight = theme === "light";

  const iconMap: Record<string, React.ReactNode> = {
    Zap: (
      <Zap
        className={`w-5 h-5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
      />
    ),
    Code2: (
      <Code2
        className={`w-5 h-5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
      />
    ),
    HeartHandshake: (
      <HeartHandshake
        className={`w-5 h-5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
      />
    ),
  };

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-widest mb-3 border ${
              isCobalt
                ? "bg-[#000091] border-white/50 text-white"
                : isLight
                  ? "bg-[#F0F4FF] border-[#0000F2]/40 text-[#0000F2]"
                  : "bg-[#0000F2]/10 border-[#0000F2]/30 text-[#0000F2]"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>[ 01 // HỒ SƠ NĂNG LỰC ]</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight ${
              isCobalt
                ? "text-white"
                : isLight
                  ? "text-[#0000F2]"
                  : "text-white"
            }`}
          >
            Về Tôi & Triết Lý Kỹ Thuật
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`h-[2px] mt-4 ${
              isCobalt
                ? "bg-white shadow-[0_0_12px_#ffffff]"
                : "bg-[#0000F2] shadow-[0_0_12px_#0000F2]"
            }`}
          />
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Biography & Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex"
          >
            <DoubleBezelCard className="w-full h-full">
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className={`w-10 h-10 rounded-none border flex items-center justify-center ${
                        isCobalt
                          ? "bg-[#0000bd] border-white text-white"
                          : isLight
                            ? "bg-[#F0F4FF] border-[#0000F2] text-[#0000F2]"
                            : "bg-[#0000F2]/15 border-[#0000F2] text-[#0000F2]"
                      }`}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-display font-bold uppercase tracking-wide ${isCobalt ? "text-white" : isLight ? "text-[#0000F2]" : "text-white"}`}
                      >
                        Hành trình Kỹ thuật & Nghiên cứu AI
                      </h3>
                      <p
                        className={`text-xs font-mono tracking-wider ${isCobalt ? "text-white/80" : "text-[#0000F2]"}`}
                      >
                        {personalProfile.roleSubtitle}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`leading-relaxed text-sm sm:text-base font-sans ${isCobalt ? "text-white/90" : isLight ? "text-slate-700" : "text-[#D0D0D0]"}`}
                  >
                    {personalProfile.fullBio}
                  </p>

                  <div className="mt-6 space-y-3.5 font-sans">
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-mono text-xs font-bold shrink-0 mt-0.5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
                      >
                        [+]
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${isCobalt ? "text-white/90" : isLight ? "text-slate-700" : "text-[#CCCCCC]"}`}
                      >
                        Tốt nghiệp Kỹ sư CNTT tại Đại học Nam Cần Thơ (
                        <strong
                          className={`font-mono font-bold ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
                        >
                          GPA: 3.14/4.0
                        </strong>
                        ), Đồ án Tốt nghiệp Medical AI đạt độ chính xác{" "}
                        <strong
                          className={`font-mono ${isCobalt ? "text-white underline" : "text-[#0000F2]"}`}
                        >
                          99.42%
                        </strong>{" "}
                        (Hội đồng đánh giá Xuất sắc).
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-mono text-xs font-bold shrink-0 mt-0.5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
                      >
                        [+]
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${isCobalt ? "text-white/90" : isLight ? "text-slate-700" : "text-[#CCCCCC]"}`}
                      >
                        Năng lực phát triển Full-Stack độc lập, thực chiến:
                        React 19, Three.js, Node.js, Express v5, Python FastAPI,
                        C# WinForms / .NET Core.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-mono text-xs font-bold shrink-0 mt-0.5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
                      >
                        [+]
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${isCobalt ? "text-white/90" : isLight ? "text-slate-700" : "text-[#CCCCCC]"}`}
                      >
                        Chuẩn hóa CSDL quan hệ (SQL Server 3NF, SqlTransaction
                        ACID) và phi quan hệ (MongoDB), kiểm soát tranh chấp
                        đồng thời triệt để.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-mono text-xs font-bold shrink-0 mt-0.5 ${isCobalt ? "text-white" : "text-[#0000F2]"}`}
                      >
                        [+]
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${isCobalt ? "text-white/90" : isLight ? "text-slate-700" : "text-[#CCCCCC]"}`}
                      >
                        Tối ưu quy trình phát triển với Docker, Git, và ứng dụng
                        thành thạo các công cụ AI thế hệ mới (Claude Code,
                        Codex, Antigravity,....).
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex flex-wrap items-center gap-2 text-xs font-mono ${
                    isCobalt
                      ? "border-white/20 text-white/80"
                      : "border-[#0000F2]/20 text-[#A0A0A0]"
                  }`}
                >
                  <span
                    className={`px-2 py-0.5 border flex items-center gap-1.5 ${
                      isCobalt
                        ? "bg-[#0000bd] border-white/40 text-white"
                        : isLight
                          ? "bg-[#F0F4FF] border-[#0000F2]/40 text-[#0000F2]"
                          : "bg-[#0000F2]/10 border-[#0000F2]/30 text-[#0000F2]"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    DEEP LEARNING & XAI
                  </span>
                  <span
                    className={`px-2 py-0.5 border ${
                      isCobalt
                        ? "bg-[#0000bd] border-white/30 text-white"
                        : isLight
                          ? "bg-white border-[#0000F2]/20 text-[#111827]"
                          : "bg-white/5 border-white/10 text-white"
                    }`}
                  >
                    FULL-STACK WEB
                  </span>
                  <span
                    className={`px-2 py-0.5 border ${
                      isCobalt
                        ? "bg-[#0000bd] border-white/30 text-white"
                        : isLight
                          ? "bg-white border-[#0000F2]/20 text-[#111827]"
                          : "bg-white/5 border-white/10 text-white"
                    }`}
                  >
                    ACID CONCURRENCY
                  </span>
                  <span
                    className={`px-2 py-0.5 border ${
                      isCobalt
                        ? "bg-[#0000bd] border-white/30 text-white"
                        : isLight
                          ? "bg-white border-[#0000F2]/20 text-[#111827]"
                          : "bg-white/5 border-white/10 text-white"
                    }`}
                  >
                    THREE.JS 3D WEB
                  </span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Quantitative Metric Numbers (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalProfile.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="h-full"
              >
                <DoubleBezelCard
                  className="h-full"
                  innerClassName="p-4 sm:p-5 flex flex-col justify-center text-center sm:text-left h-full overflow-hidden"
                >
                  <div
                    className={`font-display font-black mb-1.5 tracking-tight flex items-baseline justify-center sm:justify-start ${
                      isCobalt
                        ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                        : "text-[#0000F2]"
                    }`}
                  >
                    {stat.value.includes("/") ? (
                      <span className="flex items-baseline truncate leading-none">
                        <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
                          {stat.value.split("/")[0]}
                        </span>
                        <span className="text-sm sm:text-base lg:text-lg font-mono font-bold opacity-75 ml-0.5">
                          /{stat.value.split("/")[1]}
                        </span>
                      </span>
                    ) : (
                      <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-none truncate">
                        {stat.value}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-mono uppercase tracking-wider font-bold ${
                      isCobalt
                        ? "text-white"
                        : isLight
                          ? "text-[#111827]"
                          : "text-white"
                    }`}
                  >
                    {stat.label}
                  </div>
                  <div
                    className={`text-[11px] font-mono mt-1.5 leading-snug ${
                      isCobalt
                        ? "text-white/75"
                        : isLight
                          ? "text-slate-600"
                          : "text-[#A0A0A0]"
                    }`}
                  >
                    {stat.description}
                  </div>
                </DoubleBezelCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Core Engineering Philosophies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalProfile.philosophies.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
            >
              <DoubleBezelCard
                className="h-full"
                innerClassName="p-6 h-full flex flex-col"
              >
                <div
                  className={`w-10 h-10 rounded-none border flex items-center justify-center mb-5 ${
                    isCobalt
                      ? "bg-[#0000bd] border-white text-white"
                      : isLight
                        ? "bg-[#F0F4FF] border-[#0000F2] text-[#0000F2]"
                        : "bg-[#0000F2]/10 border-[#0000F2]/40 text-[#0000F2]"
                  }`}
                >
                  {iconMap[item.icon] || <Code2 className="w-5 h-5" />}
                </div>
                <h4
                  className={`text-base sm:text-lg font-display uppercase tracking-wide font-bold mb-2 ${
                    isCobalt
                      ? "text-white"
                      : isLight
                        ? "text-[#0000F2]"
                        : "text-white"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-xs sm:text-sm leading-relaxed mt-auto font-sans ${
                    isCobalt
                      ? "text-white/80"
                      : isLight
                        ? "text-slate-600"
                        : "text-[#A0A0A0]"
                  }`}
                >
                  {item.description}
                </p>
              </DoubleBezelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
