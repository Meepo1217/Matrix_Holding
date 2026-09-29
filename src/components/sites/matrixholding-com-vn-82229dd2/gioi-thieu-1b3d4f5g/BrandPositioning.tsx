"use client";

import { motion, useReducedMotion } from "motion/react";

export default function BrandPositioning() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="mh-container">
        <motion.div
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemAnim} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
              Định vị thương hiệu
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemAnim}
            className="font-extrabold text-[var(--mh-navy)] leading-[1.3] mb-8 text-3xl md:text-4xl lg:text-5xl"
          >
            &ldquo;Là thương hiệu tiên phong trong lĩnh vực tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh đa ngành.&rdquo;
          </motion.h2>
          
          <motion.p 
            variants={itemAnim}
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Matrix Holding định vị bản thân là đơn vị kiến tạo và phát triển hệ sinh thái kinh doanh trong nhiều lĩnh vực khác nhau thông qua các dự án, mô hình kinh doanh hiệu quả và tối ưu.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
