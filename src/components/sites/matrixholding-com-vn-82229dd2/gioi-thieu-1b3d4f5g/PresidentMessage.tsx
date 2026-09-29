"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function PresidentMessage() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="mh-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative mx-auto lg:mx-0 w-full max-w-[450px]"
          >
            {/* Dark background decorative block */}
            <div 
              className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-full h-[85%] rounded-[2rem] -z-10 bg-[var(--mh-navy)] opacity-90"
              aria-hidden="true"
            />
            
            {/* Image Wrapper */}
            <div className="relative rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl aspect-[3/4] bg-slate-100">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/images/president.jpg"
                alt="Chủ tịch Hội đồng Quản trị Matrix Holding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest shadow-sm">
                Minh họa AI
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quote */}
          <motion.div 
            variants={container}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="pt-8 lg:pt-0"
          >
            <motion.div variants={itemAnim} className="flex items-center gap-4 mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-[11px] font-bold uppercase tracking-widest">
                Lời chủ tịch
              </span>
              <div className="h-px flex-1 max-w-[100px] bg-slate-200" />
            </motion.div>
            
            {/* Quote Icon */}
            <motion.div variants={itemAnim} className="mb-6 opacity-30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11L8 15H5L7 11V7H10V11ZM18 11L16 15H13L15 11V7H18V11Z" fill="currentColor" className="text-amber-500" />
              </svg>
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote 
              variants={itemAnim}
              className="font-extrabold text-[var(--mh-navy)] leading-[1.3] mb-12 text-3xl md:text-4xl lg:text-4xl"
            >
              &ldquo;Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.&rdquo;
            </motion.blockquote>

            {/* Signature */}
            <motion.div variants={itemAnim} className="pl-6 border-l-[3px] border-amber-500">
              <div className="font-extrabold text-slate-900 text-lg md:text-xl mb-1">
                Chủ tịch Hội đồng Quản trị
              </div>
              <div className="text-slate-500 font-medium text-sm md:text-base">
                Matrix Holding
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
