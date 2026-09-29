import Link from "next/link";
import { Search } from "lucide-react";

export default function HeroSection() {
  const categories = [
    { name: "Tất cả", active: true },
    { name: "MATRIX HOLDING", active: false },
    { name: "MATRIX NETWORK", active: false },
    { name: "MATRIX CONNECT", active: false },
    { name: "MATRIX VENTURES", active: false },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-[140px]">
      <div className="mh-container">
        {/* Breadcrumb row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div className="text-[11px] font-bold tracking-widest text-[var(--mh-navy)] uppercase">
            MATRIX HOLDING <span className="text-blue-500 mx-2">·</span> INSIGHTS
          </div>
          <div className="text-[12px] font-semibold text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--mh-navy)] transition-colors">Trang chủ</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[var(--mh-navy)]">Tin tức</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-14">
          <h1 
            className="font-extrabold text-[var(--mh-navy)] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
          >
            Tin tức & góc nhìn
          </h1>
          <p className="text-slate-600 text-[16px] max-w-2xl">
            Những câu chuyện, hoạt động và góc nhìn phát triển từ hệ sinh thái Matrix Holding.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 pb-4 border-b border-slate-200">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map(cat => (
              <button 
                key={cat.name}
                className={`text-[12px] font-bold tracking-wider uppercase transition-colors relative pb-4 -mb-[17px] ${
                  cat.active ? 'text-[var(--mh-navy)]' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {cat.name}
                {cat.active && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--mh-navy)]" />
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-64 shrink-0">
            <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm trong chuyên mục" 
              className="w-full bg-transparent border-none focus:outline-none pl-8 py-2 text-sm text-slate-700 placeholder:text-slate-400"
            />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
