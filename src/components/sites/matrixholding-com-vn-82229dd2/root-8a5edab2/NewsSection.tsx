"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const FEATURED_ARTICLE = {
  id: "5",
  title: "MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH",
  date: "26/09/2026",
  category: "SỰ KIỆN",
  imageSrc: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-featured.jpg",
  imageAlt: "MATRIX HOLDING",
  href: "/tin-tuc/5",
};

const SIDE_ARTICLES = [
  {
    id: "4",
    title: "MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM",
    date: "26/09/2026",
    category: "TIN TỨC",
    imageSrc: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-1.jpg",
    imageAlt: "MATRIX NETWORK",
    href: "/tin-tuc/4",
  },
  {
    id: "3",
    title: "MATRIX CAPITAL HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI ĐẦU TƯ VIỆT NAM",
    date: "19/09/2026",
    category: "ĐẦU TƯ",
    imageSrc: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-2.jpg",
    imageAlt: "MATRIX CAPITAL",
    href: "/tin-tuc/3",
  },
  {
    id: "2",
    title: "MATRIX COMMUNITY HỆ SINH THÁI CỘNG ĐỒNG KẾT NỐI KINH DOANH VIỆT NAM",
    date: "19/09/2026",
    category: "CỘNG ĐỒNG",
    imageSrc: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-3.jpg",
    imageAlt: "MATRIX COMMUNITY",
    href: "/tin-tuc/2",
  },
];

export default function NewsSection() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="mh-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl md:text-4xl lg:text-5xl max-w-[20ch] leading-[1.1]">
              Tin tức mới nhất từ Matrix Holding
            </h2>
          </motion.div>
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="shrink-0"
          >
            <Link
              href="/tin-tuc"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[var(--mh-navy)] px-6 py-3 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-[2px] hover:bg-[var(--mh-navy-dark)] hover:shadow-lg active:translate-y-[1px] gap-2"
            >
              Xem tất cả
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start"
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Featured Article (Left, Large) */}
          <motion.div variants={item} className="h-full">
            <Link
              href={FEATURED_ARTICLE.href}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-200 shadow-sm h-full min-h-[460px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Image */}
              <Image
                src={FEATURED_ARTICLE.imageSrc}
                alt={FEATURED_ARTICLE.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--mh-navy)] via-[var(--mh-navy)]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10 text-white">
                <span className="inline-block rounded-full px-4 py-1.5 mb-5 font-bold text-[11px] uppercase tracking-widest bg-white/20 backdrop-blur-md">
                  {FEATURED_ARTICLE.category}
                </span>
                <h3 className="font-extrabold leading-[1.3] mb-4 text-2xl sm:text-3xl max-w-[30ch]">
                  {FEATURED_ARTICLE.title}
                </h3>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/20">
                  <span className="text-sm font-semibold opacity-80">
                    {FEATURED_ARTICLE.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-transform duration-300 group-hover:translate-x-2 text-blue-200">
                    XEM BÀI VIẾT <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Articles Column */}
          <div className="flex flex-col gap-5 h-full">
            {SIDE_ARTICLES.map((article) => (
              <motion.div variants={item} key={article.id}>
                <Link
                  href={article.href}
                  className="group flex gap-5 rounded-2xl p-4 bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--mh-navy-highlight)] hover:shadow-[0_12px_24px_rgba(9,46,86,0.08)]"
                >
                  {/* Thumbnail */}
                  <div className="relative shrink-0 overflow-hidden rounded-xl w-[120px] h-[100px] sm:w-[140px] sm:h-[110px]">
                    <Image
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="140px"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center flex-1 min-w-0 pr-2">
                    <span className="font-bold text-[11px] text-[var(--mh-navy)] tracking-widest uppercase mb-1.5">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-slate-900 leading-snug text-[15px] sm:text-[16px] line-clamp-2 mb-2 group-hover:text-[var(--mh-navy)] transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-[13px] font-medium text-slate-500">
                      {article.date}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Mobile "see all" */}
            <motion.div variants={item}>
              <Link
                href="/tin-tuc"
                className="sm:hidden mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--mh-navy)] px-6 py-3.5 text-[14px] font-bold text-white transition-all active:translate-y-[1px]"
              >
                Xem tất cả tin tức
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
