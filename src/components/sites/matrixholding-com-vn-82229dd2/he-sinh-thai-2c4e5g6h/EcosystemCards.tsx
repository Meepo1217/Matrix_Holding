"use client";

import { motion, useReducedMotion } from "motion/react";

export default function EcosystemCards() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const cards = [
    {
      id: "network",
      eyebrow: "GIẢI PHÁP DOANH NGHIỆP",
      title: "Matrix Network",
      subtitle: "Thành viên của Matrix Holding",
      description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
      bgClass: "bg-sky-50 border border-sky-100",
      eyebrowColor: "text-sky-700 bg-sky-200/50",
      accentCircle: "bg-sky-200"
    },
    {
      id: "community",
      eyebrow: "CỘNG ĐỒNG KẾT NỐI",
      title: "Matrix Community",
      subtitle: "Thành viên của Matrix Holding",
      description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.",
      bgClass: "bg-purple-50 border border-purple-100",
      eyebrowColor: "text-purple-700 bg-purple-200/50",
      accentCircle: "bg-purple-200"
    },
    {
      id: "capital",
      eyebrow: "KẾT NỐI ĐẦU TƯ",
      title: "Matrix Capital",
      subtitle: "Thành viên của Matrix Holding",
      description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.",
      bgClass: "bg-amber-50 border border-amber-100",
      eyebrowColor: "text-amber-700 bg-amber-200/50",
      accentCircle: "bg-amber-200"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white pb-32">
      <div className="mh-container">
        <motion.div 
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 md:pt-16 items-stretch"
        >
          {cards.map((card) => (
            <motion.div 
              variants={itemAnim}
              key={card.id}
              className={`relative overflow-hidden rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 ${card.bgClass}`}
            >
              {/* Decorative Circle top right */}
              <div 
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-40 mix-blend-multiply transition-transform duration-500 group-hover:scale-110 ${card.accentCircle}`}
                aria-hidden="true"
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase ${card.eyebrowColor}`}>
                    {card.eyebrow}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-[var(--mh-navy)] text-2xl md:text-3xl mb-2 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-slate-500 text-[13px] font-bold uppercase tracking-wider mb-6">
                  {card.subtitle}
                </p>
                
                <p className="text-slate-700 text-[15px] font-medium leading-relaxed mt-auto">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
