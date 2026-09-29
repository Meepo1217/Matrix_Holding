"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function HeroSection() {
  const reduce = useReducedMotion();

  const categories = [
    { name: "Tất cả", active: true },
    { name: "MATRIX HOLDING", active: false },
    { name: "MATRIX NETWORK", active: false },
    { name: "MATRIX CONNECT", active: false },
    { name: "MATRIX VENTURES", active: false },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-32 md:pt-40 pb-12 border-b border-slate-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-[400px] bg-gradient-to-bl from-blue-50/50 to-transparent pointer-events-none rounded-bl-full" />
      
      <div className="mh-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Breadcrumb row */}
          <motion.div variants={itemAnim} className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-16 gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
              MATRIX HOLDING <span className="text-blue-400 mx-1">·</span> INSIGHTS
            </div>
            <div className="text-[12px] font-bold tracking-widest uppercase text-slate-400 flex items-center gap-3">
              <Link href="/" className="hover:text-[var(--mh-navy)] transition-colors">Trang chủ</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[var(--mh-navy)]">Tin tức</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemAnim} className="mb-16 md:mb-24">
            <h1 className="font-extrabold text-[var(--mh-navy)] mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Tin tức & <span className="text-blue-600">góc nhìn</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Những câu chuyện, hoạt động và góc nhìn phát triển từ hệ sinh thái Matrix Holding.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div variants={itemAnim} className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 pb-4 border-b border-slate-200">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {categories.map(cat => (
                <button 
                  key={cat.name}
                  className={`text-[12px] font-bold tracking-[0.15em] uppercase transition-colors relative pb-4 -mb-[17px] ${
                    cat.active ? 'text-[var(--mh-navy)]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {cat.name}
                  {cat.active && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--mh-navy)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72 shrink-0 group">
              <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Tìm trong chuyên mục..." 
                className="w-full bg-transparent border-none focus:outline-none pl-8 py-2 text-sm font-medium text-slate-700 placeholder:text-slate-400 placeholder:font-normal"
              />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200 group-focus-within:bg-blue-500 transition-colors" />
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
