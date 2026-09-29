"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


const ECOSYSTEM_CARDS = [
  {
    id: "matrix-network",
    name: "MATRIX NETWORK",
    subtitle: "— Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp. Mạng lưới dịch vụ toàn diện từ pháp lý, tài chính, nhân sự đến công nghệ.",
    imageSrc:
      "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/network-card.jpg",
    imageAlt: "Matrix Network",
    href: "/he-sinh-thai",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    subtitle: "— Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp. Nền tảng kết nối đối tác chiến lược và khách hàng tiềm năng.",
    imageSrc:
      "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/connect-card.jpg",
    imageAlt: "Matrix Connect",
    href: "/he-sinh-thai",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    subtitle: "— Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp. Quỹ đầu tư và ươm tạo startup với nguồn vốn và mentoring chuyên nghiệp.",
    imageSrc:
      "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/ventures-card.jpg",
    imageAlt: "Matrix Ventures",
    href: "/he-sinh-thai",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function EcosystemOverview() {
  return (
    <section
      id="he-sinh-thai"
      className="mh-section"
      style={{ backgroundColor: "rgb(241,245,249)" }}
    >
      <div className="mh-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="mh-eyebrow">HỆ SINH THÁI</span>
          <h2
            className="font-extrabold tracking-tight text-slate-900 mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            HỆ SINH THÁI CỦA MATRIX HOLDING
          </h2>
          <p
            className="text-slate-500 mx-auto"
            style={{ fontSize: 17, maxWidth: 560, lineHeight: 1.65 }}
          >
            Khám phá hệ sinh thái kinh doanh của Matrix Holding — ba trụ cột
            chuyên biệt hỗ trợ toàn diện cho mọi giai đoạn phát triển
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ECOSYSTEM_CARDS.map((card) => (
            <article
              key={card.id}
              className="group bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              style={{
                borderRadius: 20,
                border: "1px solid rgb(226,232,240)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 20px 48px rgba(9,46,86,0.14)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgb(120,169,205)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 4px rgba(0,0,0,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgb(226,232,240)";
              }}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-7">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: "rgb(9,46,86)" }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-slate-900 mb-1"
                  style={{ fontSize: 20, lineHeight: 1.3 }}
                >
                  {card.name}
                </h3>
                <p className="text-slate-400 mb-3" style={{ fontSize: 13, fontStyle: "italic" }}>
                  {card.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-slate-600 mb-6 leading-relaxed"
                  style={{ fontSize: 14, lineHeight: 1.65 }}
                >
                  {card.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group/link"
                  style={{ fontSize: 13, color: "rgb(9,46,86)" }}
                >
                  <span>KHÁM PHÁ NGAY</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
