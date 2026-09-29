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
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden bg-[var(--mh-navy)] text-white">
      {/* Background gradients/overlay */}
      <div 
        className="absolute top-0 right-0 w-full md:w-3/4 h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 50%, rgba(56, 189, 248, 0.15), transparent 70%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(9, 46, 86, 1) 0%, transparent 100%)"
        }}
      />

      <div className="mh-container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[800px]"
        >
          <motion.div variants={itemAnim}>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 mb-6 backdrop-blur-sm text-[11px] font-bold uppercase tracking-[0.15em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              Hệ sinh thái Matrix Holding
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemAnim}
            className="font-extrabold mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05]"
          >
            Kết nối nguồn lực.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">
              Cùng nhau phát triển.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemAnim}
            className="text-white/80 leading-relaxed text-lg md:text-xl max-w-[600px] font-medium"
          >
            Một trung tâm định hướng, ba thương hiệu thành viên cùng kết nối dịch vụ, cộng đồng và cơ hội đầu tư.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
