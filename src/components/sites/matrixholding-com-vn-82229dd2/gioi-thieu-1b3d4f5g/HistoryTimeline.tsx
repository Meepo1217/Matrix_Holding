"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type TimelineEvent = {
  year: string;
  subtitle: string;
  title: string;
  description: string;
};

const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2016",
    subtitle: "Khởi nguồn sáng tạo",
    title: "Khởi nguồn sáng tạo",
    description: "Matrix Holding được thành lập, hoạt động theo định hướng phát triển nghệ thuật với các dự án phim ngắn, phim dài tập và phim điện ảnh.",
  },
  {
    year: "2020",
    subtitle: "Bước vào hoạt động kinh doanh",
    title: "Bước vào hoạt động kinh doanh",
    description: "Mở rộng hệ sinh thái và bắt đầu xây dựng các dự án hỗ trợ kinh doanh chiến lược cho các đối tác trong nước.",
  },
  {
    year: "2023",
    subtitle: "Chuẩn hóa nền tảng pháp lý",
    title: "Chuẩn hóa nền tảng pháp lý",
    description: "Tập trung nâng cao năng lực cốt lõi, chuẩn hóa quy trình pháp lý để đáp ứng nhu cầu ngày càng cao của doanh nghiệp.",
  },
  {
    year: "2026",
    subtitle: "Tái cấu trúc nguồn lực",
    title: "Tái cấu trúc nguồn lực",
    description: "Thực hiện tái cấu trúc quy mô lớn, tối ưu hóa các đơn vị thành viên để tạo ra sức mạnh cộng hưởng cho hệ sinh thái.",
  },
  {
    year: "2026 +",
    subtitle: "Mở rộng hệ sinh thái",
    title: "Mở rộng hệ sinh thái",
    description: "Tiếp tục vươn xa và mở rộng mạng lưới, đưa Matrix Holding trở thành hệ sinh thái kinh doanh hàng đầu tại Việt Nam và khu vực.",
  }
];

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-[var(--mh-navy)] text-white overflow-hidden">
      <div className="mh-container">
        
        {/* Header */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300">
            Lịch sử hình thành
          </div>
          <h2 className="font-extrabold mb-6 text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
            Hành trình của Matrix Holding
          </h2>
          <p className="text-white/70 mx-auto max-w-2xl text-base md:text-lg leading-relaxed font-medium">
            Chọn từng cột mốc để xem những dấu ấn quan trọng trên hành trình phát triển.
          </p>
        </motion.div>

        {/* Timeline Interaction */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative mb-16 md:mb-24 mx-auto max-w-5xl px-4"
        >
          {/* Horizontal Line */}
          <div className="absolute top-[24px] left-[5%] right-[5%] h-[2px] bg-white/10 hidden sm:block" />
          <div className="absolute top-0 bottom-0 left-[24px] w-[2px] bg-white/10 sm:hidden" />

          {/* Timeline Points */}
          <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            {TIMELINE_DATA.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={item.year}
                  className="flex sm:flex-col items-center sm:items-center sm:w-32 group cursor-pointer relative z-10 gap-6 sm:gap-0"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Circle */}
                  <div 
                    className={`relative w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-300 bg-[var(--mh-navy)] sm:mb-5
                      ${isActive 
                        ? 'border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)] scale-110' 
                        : 'border-white/20 group-hover:border-white/60 group-hover:scale-105'
                      }
                    `}
                  >
                    <span 
                      className={`text-sm font-bold transition-colors ${isActive ? 'text-blue-400' : 'text-white/60 group-hover:text-white'}`}
                    >
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Subtitle below circle */}
                  <span 
                    className={`text-left sm:text-center text-[13px] font-bold leading-relaxed transition-colors flex-1 sm:flex-none
                      ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'}
                    `}
                  >
                    {item.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Content Display Area */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          className="mx-auto max-w-5xl"
        >
          <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl backdrop-blur-sm">
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-auto">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/images/skyscraper.jpg"
                alt="Corporate building"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--mh-navy)]/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--mh-navy)]/90" />
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-6">
                    <span className="text-blue-400 font-bold tracking-widest text-[11px] uppercase border border-blue-400/30 px-3 py-1 rounded-full">
                      CỘT MỐC - {TIMELINE_DATA[activeIndex].year.replace('+', '')}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-2xl md:text-3xl leading-[1.3] mb-6">
                    {TIMELINE_DATA[activeIndex].title}
                  </h3>
                  <p className="text-white/70 text-[15px] md:text-base leading-relaxed mb-8 font-medium">
                    {TIMELINE_DATA[activeIndex].description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-white/30 font-bold tracking-[0.2em] text-[10px] uppercase">
                      MATRIX HOLDING
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
