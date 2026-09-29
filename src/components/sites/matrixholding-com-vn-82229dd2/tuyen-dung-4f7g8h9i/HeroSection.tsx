"use client";

import { Search, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function HeroSection() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="relative bg-[var(--mh-navy)] pt-32 md:pt-40 pb-24 lg:pb-32 overflow-hidden">
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="mh-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div variants={itemAnim} className="flex items-center gap-2 text-blue-300 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 w-fit bg-blue-900/40 px-4 py-2 rounded-full border border-blue-400/20 backdrop-blur-sm">
            <ArrowRight size={14} className="text-blue-400" />
            <span>MATRIX HOLDING CAREERS</span>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div variants={itemAnim} className="max-w-[900px] mb-12">
            <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 tracking-tight">
              Cơ hội phù hợp cho hành trình <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">tiếp theo của bạn.</span>
            </h1>
            <p className="text-blue-100/80 text-lg md:text-xl lg:text-2xl max-w-3xl font-medium leading-relaxed">
              Khám phá các vị trí từ Matrix Holding và những doanh nghiệp trong hệ sinh thái đối tác.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div variants={itemAnim} className="max-w-4xl bg-white p-2 rounded-[2rem] sm:rounded-full flex flex-col sm:flex-row items-center gap-2 shadow-2xl shadow-black/20 mb-10 border border-slate-100/10">
            <div className="flex-1 flex items-center gap-4 px-6 py-4 sm:py-3 w-full group">
              <Search className="text-slate-400 group-focus-within:text-blue-600 transition-colors shrink-0" size={24} />
              <input 
                type="text" 
                placeholder="Tìm vị trí, công ty hoặc phòng ban..."
                className="w-full bg-transparent border-none outline-none text-slate-800 text-lg placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#e5b344] hover:bg-[#d4a233] text-[var(--mh-navy)] font-extrabold text-base px-10 py-5 sm:py-4 rounded-[1.5rem] sm:rounded-full transition-transform duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shrink-0 group">
              Tìm việc <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemAnim} className="flex flex-wrap items-center gap-8 md:gap-12 text-white/90 text-sm">
            <div className="flex items-center gap-3">
              <span className="font-black text-2xl md:text-3xl text-white">13</span>
              <span className="text-blue-200 font-medium tracking-wide uppercase text-[11px] md:text-xs">vị trí đang tuyển</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-black text-2xl md:text-3xl text-white">5</span>
              <span className="text-blue-200 font-medium tracking-wide uppercase text-[11px] md:text-xs">doanh nghiệp trên trang</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
