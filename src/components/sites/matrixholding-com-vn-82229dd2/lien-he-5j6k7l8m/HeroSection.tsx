"use client";

import { Mail, Phone } from "lucide-react";
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
    <section className="bg-gradient-to-br from-[#061a33] to-[var(--mh-navy)] pt-32 md:pt-40 pb-20 overflow-hidden relative">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="mh-container relative z-10">
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show"
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h4 variants={itemAnim} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-300 uppercase mb-8 bg-blue-900/40 px-4 py-2 rounded-full border border-blue-400/20 backdrop-blur-sm">
              LIÊN HỆ MATRIX HOLDING
            </motion.h4>
            <motion.h1 variants={itemAnim} className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] mb-8 tracking-tight">
              Cùng kiến tạo những cơ hội <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">hợp tác giá trị.</span>
            </motion.h1>
            <motion.p variants={itemAnim} className="text-blue-100/90 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Hãy để lại thông tin hoặc liên hệ trực tiếp. Đội ngũ Matrix Holding sẵn sàng trao đổi về nhu cầu, nguồn lực và phương án hợp tác phù hợp.
            </motion.p>
          </div>

          {/* Right Card */}
          <motion.div variants={itemAnim} className="w-full max-w-md lg:w-[420px] shrink-0">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-[4rem] blur-xl" />
              
              <h3 className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Kết nối nhanh
              </h3>
              
              <div className="space-y-6 relative z-10">
                <a href="mailto:matrixholding.support@gmail.com" className="flex items-center gap-5 group p-2 -m-2 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 rounded-[1rem] bg-white text-[var(--mh-navy)] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#e5b344] transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Email</span>
                    <span className="text-white font-bold text-base md:text-lg group-hover:text-blue-300 transition-colors break-all">
                      matrixholding.support@gmail.com
                    </span>
                  </div>
                </a>
                
                <a href="tel:+84964243026" className="flex items-center gap-5 group p-2 -m-2 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 rounded-[1rem] bg-white text-[var(--mh-navy)] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#e5b344] transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Hotline</span>
                    <span className="text-white font-bold text-base md:text-lg group-hover:text-blue-300 transition-colors">
                      (+84) 964 243 026
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
