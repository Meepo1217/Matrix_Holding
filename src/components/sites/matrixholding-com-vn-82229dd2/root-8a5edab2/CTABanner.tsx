"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function CTABanner() {
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
    <section
      id="lien-he"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/cta-bg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Navy overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(9,46,86,0.94) 0%, rgba(0,39,77,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-16 -right-16 rounded-full opacity-10 h-[320px] w-[320px] border-[60px] border-white"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 rounded-full opacity-10 h-[280px] w-[280px] border-[50px] border-white"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mh-container text-center text-white">
        <motion.div
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemAnim}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 mb-8 backdrop-blur-sm text-[11px] font-bold uppercase tracking-[0.12em] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" aria-hidden="true" />
              Bắt đầu hành trình của bạn
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemAnim}
            className="font-extrabold tracking-tight text-white mb-6 mx-auto text-3xl md:text-4xl lg:text-5xl max-w-[700px] leading-[1.1]"
          >
            Sẵn sàng đưa doanh nghiệp <br className="hidden md:block" /> lên tầm cao mới?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemAnim}
            className="text-white/80 mb-10 mx-auto leading-relaxed text-base md:text-lg max-w-[560px]"
          >
            Hãy để Matrix Holding đồng hành cùng bạn xây dựng nền tảng kinh doanh
            vững chắc và phát triển bền vững trong hệ sinh thái đa ngành của chúng tôi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemAnim} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dang-ky"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-[var(--mh-navy)] transition-all duration-200 hover:-translate-y-[2px] hover:bg-slate-50 hover:shadow-xl active:translate-y-[1px]"
            >
              Đăng ký miễn phí
            </Link>
            <Link
              href="#he-sinh-thai"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-transparent px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-[2px] hover:bg-white/10 hover:border-white active:translate-y-[1px]"
            >
              Xem cơ hội hợp tác
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div variants={itemAnim} className="mt-12 flex flex-wrap justify-center gap-8 opacity-70">
            {[
              "Miễn phí tư vấn ban đầu",
              "Không cam kết dài hạn",
              "Hỗ trợ 24/7",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-white text-[13px] font-medium tracking-wide">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-80"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
