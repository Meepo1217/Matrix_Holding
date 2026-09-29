"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, ChevronRight, Search } from "lucide-react";

type Category =
  | "Tất cả"
  | "Pháp lý"
  | "Tài chính"
  | "Vận hành"
  | "Nhân sự"
  | "Kinh doanh"
  | "Truyền thông"
  | "Công nghệ";

interface Company {
  id: string;
  name: string;
  category: Category;
  description: string;
  href: string;
  jobCount: number;
}

const CATEGORIES: Category[] = [
  "Tất cả",
  "Pháp lý",
  "Tài chính",
  "Vận hành",
  "Nhân sự",
  "Kinh doanh",
  "Truyền thông",
  "Công nghệ",
];

const COMPANIES: Company[] = [
  {
    id: "matrix-holding",
    name: "CÔNG TY TNHH MATRIX HOLDING",
    category: "Vận hành",
    description: "Tập đoàn mẹ — đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam",
    href: "/tuyen-dung/doanh-nghiep/matrix-holding",
    jobCount: 5,
  },
  {
    id: "matrix-network",
    name: "Matrix Network",
    category: "Vận hành",
    description: "Mạng lưới dịch vụ doanh nghiệp toàn diện — pháp lý, kế toán, nhân sự, công nghệ",
    href: "/tuyen-dung/doanh-nghiep/matrix-network",
    jobCount: 12,
  },
  {
    id: "matrix-connect",
    name: "Matrix Connect",
    category: "Kinh doanh",
    description: "Cộng đồng kết nối kinh doanh và mạng lưới đối tác chiến lược tại Việt Nam",
    href: "/tuyen-dung/doanh-nghiep/matrix-connect",
    jobCount: 8,
  },
  {
    id: "matrix-ventures",
    name: "Matrix Ventures",
    category: "Tài chính",
    description: "Quỹ đầu tư và ươm tạo startup — cầu nối giữa nhà đầu tư và doanh nghiệp tiềm năng",
    href: "/tuyen-dung/doanh-nghiep/matrix-ventures",
    jobCount: 6,
  },
  {
    id: "matrix-strategy",
    name: "Matrix Strategy",
    category: "Vận hành",
    description: "Tư vấn chiến lược kinh doanh, nghiên cứu thị trường và hoạch định phát triển",
    href: "/tuyen-dung/doanh-nghiep/matrix-strategy",
    jobCount: 4,
  },
  {
    id: "matrix-research",
    name: "Matrix Research",
    category: "Vận hành",
    description: "Nghiên cứu và phân tích thị trường, dữ liệu kinh doanh chuyên sâu",
    href: "/tuyen-dung/doanh-nghiep/matrix-research",
    jobCount: 3,
  },
  {
    id: "matrix-legal",
    name: "Matrix Legal",
    category: "Pháp lý",
    description: "Tư vấn pháp lý doanh nghiệp, thành lập công ty và quản lý tuân thủ pháp luật",
    href: "/tuyen-dung/doanh-nghiep/matrix-legal",
    jobCount: 7,
  },
  {
    id: "matrix-finance",
    name: "Matrix Finance",
    category: "Tài chính",
    description: "Quản lý tài chính doanh nghiệp, lập kế hoạch tài chính và tư vấn đầu tư",
    href: "/tuyen-dung/doanh-nghiep/matrix-finance",
    jobCount: 5,
  },
  {
    id: "matrix-accounting",
    name: "Matrix Accounting",
    category: "Tài chính",
    description: "Dịch vụ kế toán, kiểm toán và báo cáo tài chính cho doanh nghiệp",
    href: "/tuyen-dung/doanh-nghiep/matrix-accounting",
    jobCount: 9,
  },
];

function getInitials(name: string) {
  const words = name.replace("CÔNG TY TNHH ", "").split(" ");
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getAccentColor(id: string) {
  const colors: Record<string, string> = {
    "matrix-holding": "rgb(9,46,86)",
    "matrix-network": "rgb(0,59,115)",
    "matrix-connect": "rgb(6,95,70)",
    "matrix-ventures": "rgb(120,53,15)",
    "matrix-strategy": "rgb(62,89,117)",
    "matrix-research": "rgb(5,78,100)",
    "matrix-legal": "rgb(65,5,70)",
    "matrix-finance": "rgb(5,46,88)",
    "matrix-accounting": "rgb(48,7,89)",
  };
  return colors[id] || "rgb(9,46,86)";
}

export default function EcosystemDirectory() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tất cả");
  const [search, setSearch] = useState("");

  const filtered = COMPANIES.filter((c) => {
    const matchesCategory =
      activeCategory === "Tất cả" || c.category === activeCategory;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="tuyen-dung"
      className="mh-section"
      style={{ backgroundColor: "white" }}
    >
      <div className="mh-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="mh-eyebrow">HỆ SINH THÁI</span>
          <h2
            className="font-extrabold tracking-tight text-slate-900 mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            DOANH NGHIỆP THÀNH VIÊN
          </h2>
          <p className="text-slate-500 mx-auto" style={{ fontSize: 16, maxWidth: 500, lineHeight: 1.65 }}>
            Khám phá cơ hội nghề nghiệp tại các doanh nghiệp thành viên của hệ sinh thái Matrix Holding
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6 max-w-md mx-auto relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Tìm kiếm doanh nghiệp..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-900/30 transition-shadow"
          />
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Lọc theo danh mục"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor:
                  activeCategory === cat ? "rgb(9,46,86)" : "rgb(241,245,249)",
                color: activeCategory === cat ? "white" : "rgb(71,85,105)",
                border: `1.5px solid ${
                  activeCategory === cat ? "rgb(9,46,86)" : "rgb(226,232,240)"
                }`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Company Cards Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-16">
            Không tìm thấy doanh nghiệp nào.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((company) => {
              const accent = getAccentColor(company.id);
              return (
                <Link
                  key={company.id}
                  href={company.href}
                  className="group block rounded-2xl bg-white p-6 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: "1.5px solid rgb(226,232,240)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgb(120,169,205)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 28px rgba(9,46,86,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgb(226,232,240)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 1px 4px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Logo Avatar */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold shrink-0"
                      style={{ backgroundColor: accent, fontSize: 18 }}
                    >
                      {getInitials(company.name)}
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{
                        backgroundColor: `${accent}15`,
                        color: accent,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      {company.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className="font-bold text-slate-900 mb-2 leading-tight"
                    style={{ fontSize: 15 }}
                  >
                    {company.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-slate-500 mb-5 leading-relaxed line-clamp-2"
                    style={{ fontSize: 13 }}
                  >
                    {company.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-500" style={{ fontSize: 12 }}>
                      <Briefcase size={13} />
                      <span>{company.jobCount} vị trí</span>
                    </div>
                    <div
                      className="flex items-center gap-1 font-semibold transition-transform duration-200 group-hover:translate-x-1"
                      style={{ fontSize: 12, color: accent }}
                    >
                      Xem chi tiết
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
