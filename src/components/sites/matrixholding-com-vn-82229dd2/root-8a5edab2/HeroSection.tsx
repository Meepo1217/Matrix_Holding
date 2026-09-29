"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function HeroSection() {
  const reduce = useReducedMotion();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden text-white min-h-[100dvh]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/hero-bg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(9,46,86,0.92) 0%, rgba(9,46,86,0.65) 50%, rgba(9,46,86,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 mh-container pt-32 pb-24 md:pt-40 md:pb-32 w-full">
        <motion.div 
          className="max-w-[800px]"
          variants={container}
          initial={reduce ? "show" : "hidden"}
          animate="show"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
              Matrix Holding · Việt Nam
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="font-extrabold tracking-tighter text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
          >
            Kiến tạo hệ sinh thái <br className="hidden sm:block" />
            <span className="text-blue-300">kinh doanh đa ngành</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-white/80 mb-10 text-base md:text-lg lg:text-xl max-w-[65ch] leading-relaxed"
          >
            Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả,
            nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra
            cơ hội tiếp cận thị trường bền vững.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Link
              href="#gioi-thieu"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-[var(--mh-navy)] transition-all duration-200 hover:-translate-y-[2px] hover:bg-slate-50 hover:shadow-xl active:translate-y-[1px]"
            >
              Khám phá Matrix Holding
            </Link>
            <Link
              href="/he-sinh-thai"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-transparent px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-[2px] hover:bg-white/10 hover:border-white active:translate-y-[1px]"
            >
              Xem hệ sinh thái
            </Link>
          </motion.div>

          {/* Bottom stats bar */}
          <motion.div
            variants={item}
            className="mt-16 md:mt-24 flex flex-wrap items-center gap-x-12 gap-y-8 border-t border-white/20 pt-8"
          >
            {[
              { value: "10+", label: "Năm kinh nghiệm" },
              { value: "500+", label: "Doanh nghiệp đối tác" },
              { value: "50+", label: "Chuyên gia tư vấn" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator (Spring animated) */}
      <motion.div 
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          opacity: { duration: 1, delay: 1 },
        }}
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white" />
        <span className="text-white/50 text-[9px] font-bold uppercase tracking-[0.2em]">
          Cuộn xuống
        </span>
      </motion.div>
    </section>
  );
}
