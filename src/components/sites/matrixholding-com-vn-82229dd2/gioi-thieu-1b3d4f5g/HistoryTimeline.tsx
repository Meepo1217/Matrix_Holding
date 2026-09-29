"use client";

import { useState } from "react";
import Image from "next/image";

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

  return (
    <section className="mh-section bg-[var(--mh-navy)] text-white">
      <div className="mh-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="mh-eyebrow !text-blue-300">LỊCH SỬ HÌNH THÀNH</span>
          <h2 
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Hành trình của Matrix Holding
          </h2>
          <p className="text-white/70 mx-auto max-w-2xl text-[15px] leading-relaxed">
            Chọn từng cột mốc để xem những dấu ấn quan trọng trên hành trình phát triển.
          </p>
        </div>

        {/* Timeline Interaction */}
        <div className="relative mb-16 mx-auto max-w-5xl">
          {/* Horizontal Line */}
          <div className="absolute top-[22px] left-0 w-full h-[1px] bg-white/10" />

          {/* Timeline Points */}
          <div className="relative flex justify-between">
            {TIMELINE_DATA.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={item.year}
                  className="flex flex-col items-center group cursor-pointer w-32"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Circle */}
                  <div 
                    className={`relative w-12 h-12 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-300 z-10 mb-4 bg-[var(--mh-navy)]
                      ${isActive 
                        ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                        : 'border-white/20 group-hover:border-white/50'
                      }
                    `}
                  >
                    <span 
                      className={`text-sm font-bold transition-colors ${isActive ? 'text-amber-500' : 'text-white/60 group-hover:text-white'}`}
                    >
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Subtitle below circle */}
                  <span 
                    className={`text-center text-xs font-semibold leading-relaxed transition-colors
                      ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}
                    `}
                  >
                    {item.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Display Area */}
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/images/skyscraper.jpg"
                alt="Corporate building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[var(--mh-navy)]/30" />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center transition-opacity duration-300">
              <div className="mb-4">
                <span className="text-amber-500 font-black tracking-widest text-[11px] uppercase">
                  CỘT MỐC - {TIMELINE_DATA[activeIndex].year.replace('+', '')}
                </span>
              </div>
              <h3 className="font-bold text-2xl md:text-3xl leading-snug mb-5">
                {TIMELINE_DATA[activeIndex].title}
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                {TIMELINE_DATA[activeIndex].description}
              </p>
              <div className="mt-auto">
                <span className="text-white/40 font-bold tracking-widest text-[10px] uppercase">
                  MATRIX HOLDING
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
