"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function AboutSection() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section
      id="gioi-thieu"
      className="py-24 md:py-32 bg-slate-50 overflow-hidden"
    >
      <div className="mh-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <motion.div
            variants={container}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[600px]"
          >
            {/* Heading */}
            <motion.h2
              variants={item}
              className="font-extrabold tracking-tight text-slate-900 mb-8 text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
            >
              Phát triển hệ sinh thái <br />
              <span className="text-[var(--mh-navy)]">doanh nghiệp bền vững</span>
            </motion.h2>

            {/* Description */}
            <motion.div variants={item} className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư
                và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam.
                Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ
                lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực,
                phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu
                của từng doanh nghiệp.
              </p>
              <p>
                Với mạng lưới đối tác rộng khắp, Matrix Holding đồng hành cùng 
                hàng trăm doanh nghiệp Việt Nam trên con đường hội nhập quốc tế 
                và mở rộng quy mô hoạt động một cách vững chắc.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--mh-navy)] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-[2px] hover:bg-[var(--mh-navy-dark)] hover:shadow-lg active:translate-y-[1px]"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="#lien-he"
                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-200 bg-transparent px-7 py-3.5 text-[15px] font-bold text-slate-700 transition-all duration-200 hover:-translate-y-[2px] hover:border-slate-300 hover:bg-white active:translate-y-[1px]"
              >
                Xem Hồ sơ năng lực
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            className="relative"
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-200 aspect-[4/3] w-full">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/about-image.jpg"
                alt="Giới thiệu Matrix Holding"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating accent card */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--mh-navy)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div className="pr-2">
                    <p className="text-sm font-bold text-slate-900">Tăng trưởng</p>
                    <p className="text-sm font-bold text-emerald-600">+128% năm 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative shape */}
            <div
              className="absolute -top-12 -right-12 -z-10 h-64 w-64 rounded-full bg-slate-200/60 blur-3xl"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
