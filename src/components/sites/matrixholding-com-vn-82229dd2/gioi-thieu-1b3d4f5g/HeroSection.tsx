"use client";

import { motion } from "motion/react";

export default function HeroSection() {
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
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-[var(--mh-navy)] text-white">
      {/* Background patterns */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 100% 0%, white 0%, transparent 50%)",
        }}
      />
      
      <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="mh-container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[800px]"
        >
          <motion.div variants={itemAnim}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm text-[11px] font-bold uppercase tracking-[0.15em] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
              Matrix Holding
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemAnim}
            className="font-extrabold mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05]"
          >
            Kiến tạo giá trị <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              bền vững
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemAnim}
            className="text-white/80 leading-relaxed text-lg md:text-xl max-w-[600px] font-medium"
          >
            Hành trình xây dựng hệ sinh thái, kết nối nguồn lực và phát triển vượt trội cùng cộng đồng doanh nghiệp Việt Nam.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
