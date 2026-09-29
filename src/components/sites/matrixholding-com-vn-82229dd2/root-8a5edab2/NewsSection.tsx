"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


const FEATURED_ARTICLE = {
  id: "5",
  title: "MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH",
  date: "26/09/2026",
  category: "SỰ KIỆN",
  imageSrc: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-featured.jpg",
  imageAlt: "MATRIX HOLDING: TỪ KHÁT VỌNG KHỞI NGHIỆP ĐẾN HỆ SINH THÁI KINH DOANH ĐA NGÀNH",
  href: "/tin-tuc/5",
};

const SIDE_ARTICLES = [
  {
    id: "4",
    title: "MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN DÀNH CHO DOANH NGHIỆP TẠI VIỆT NAM",
    date: "26/09/2026",
    category: "TIN TỨC",
    imageSrc: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-1.jpg",
    imageAlt: "MATRIX NETWORK: HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN",
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
  return (
    <section
      className="mh-section"
      style={{ backgroundColor: "rgb(248,250,252)" }}
    >
      <div className="mh-container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="mh-eyebrow">TIN TỨC VÀ SỰ KIỆN</span>
            <h2
              className="font-extrabold tracking-tight text-slate-900"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              TIN TỨC MỚI NHẤT TỪ MATRIX HOLDING
            </h2>
          </div>
          <Link
            href="/tin-tuc"
            className="hidden sm:inline-flex items-center gap-2 mh-btn-navy shrink-0"
            id="news-view-all-btn"
          >
            Xem tất cả
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
          {/* Featured Article (Left, Large) */}
          <Link
            href={FEATURED_ARTICLE.href}
            className="group relative block overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgb(226,232,240)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              minHeight: 460,
              transition: "all 0.3s ease",
            }}
            id="news-featured-article"
          >
            {/* Background Image */}
            <Image
              src={FEATURED_ARTICLE.imageSrc}
              alt={FEATURED_ARTICLE.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, rgba(9,46,86,0.95) 0%, rgba(9,46,86,0.5) 50%, transparent 100%)",
              }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <span
                className="inline-block rounded-full px-3 py-1 mb-4 font-semibold uppercase"
                style={{
                  fontSize: 11,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.08em",
                }}
              >
                {FEATURED_ARTICLE.category}
              </span>
              <h3
                className="font-bold leading-snug mb-3"
                style={{ fontSize: 20, lineHeight: 1.4 }}
              >
                {FEATURED_ARTICLE.title}
              </h3>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: 13, opacity: 0.75 }}>
                  {FEATURED_ARTICLE.date}
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: 13 }}>
                  XEM BÀI VIẾT <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </Link>

          {/* Side Articles Column */}
          <div className="flex flex-col gap-4">
            {SIDE_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group flex gap-4 rounded-xl p-4 transition-all duration-200"
                style={{
                  border: "1px solid rgb(226,232,240)",
                  backgroundColor: "white",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgb(120,169,205)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(9,46,86,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgb(226,232,240)";
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative shrink-0 overflow-hidden rounded-lg"
                  style={{ width: 100, height: 80 }}
                >
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center gap-1.5 min-w-0">
                  <span
                    className="font-semibold uppercase"
                    style={{ fontSize: 11, color: "rgb(9,46,86)", letterSpacing: "0.08em" }}
                  >
                    {article.category}
                  </span>
                  <h3
                    className="font-semibold text-slate-900 leading-snug line-clamp-2"
                    style={{ fontSize: 14 }}
                  >
                    {article.title}
                  </h3>
                  <span style={{ fontSize: 12, color: "rgb(100,116,139)" }}>
                    {article.date}
                  </span>
                </div>
              </Link>
            ))}

            {/* Mobile "see all" */}
            <Link
              href="/tin-tuc"
              className="sm:hidden mh-btn-navy w-full justify-center mt-2"
            >
              Xem tất cả tin tức
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
