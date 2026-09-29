"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const ECOSYSTEM_CARDS = [
  {
    id: "matrix-network",
    name: "MATRIX NETWORK",
    subtitle: "Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp. Mạng lưới dịch vụ toàn diện từ pháp lý, tài chính, nhân sự đến công nghệ.",
    imageSrc:
      "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/network-card.jpg",
    imageAlt: "Matrix Network",
    href: "/he-sinh-thai",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: "matrix-connect",
    name: "MATRIX CONNECT",
    subtitle: "Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh. Nền tảng kết nối đối tác chiến lược và khách hàng tiềm năng bền vững.",
    imageSrc:
      "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/connect-card.jpg",
    imageAlt: "Matrix Connect",
    href: "/he-sinh-thai",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "matrix-ventures",
    name: "MATRIX VENTURES",
    subtitle: "Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư. Quỹ đầu tư và ươm tạo startup với nguồn vốn và mentoring chuyên nghiệp.",
    imageSrc:
      "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/ventures-card.jpg",
    imageAlt: "Matrix Ventures",
    href: "/he-sinh-thai",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function EcosystemOverview() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section
      id="he-sinh-thai"
      className="py-24 md:py-32 bg-white"
    >
      <div className="mh-container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="font-extrabold tracking-tight text-slate-900 mb-5 text-3xl md:text-4xl lg:text-5xl"
          >
            Ba trụ cột vững chắc
          </motion.h2>
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="text-slate-500 mx-auto text-lg max-w-[65ch] leading-relaxed"
          >
            Hệ sinh thái kinh doanh của Matrix Holding hỗ trợ toàn diện cho doanh nghiệp từ 
            phát triển dịch vụ, kết nối mạng lưới đến gọi vốn đầu tư.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ECOSYSTEM_CARDS.map((card) => (
            <motion.article
              variants={item}
              key={card.id}
              className="group flex flex-col bg-slate-50 overflow-hidden rounded-3xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(9,46,86,0.08)] hover:border-[var(--mh-navy-highlight)]"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden aspect-[16/9] w-full">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[var(--mh-navy)]/0 group-hover:bg-[var(--mh-navy)]/5 transition-all duration-300" />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-8">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md bg-[var(--mh-navy)]"
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-xl tracking-tight mb-2">
                  {card.name}
                </h3>
                <p className="text-[var(--mh-navy-accent)] text-sm font-semibold tracking-wide uppercase mb-4">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-[15px] mb-8 flex-1">
                  {card.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 font-bold text-[14px] text-[var(--mh-navy)] transition-colors duration-200 group/link"
                >
                  <span>Khám phá chi tiết</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
