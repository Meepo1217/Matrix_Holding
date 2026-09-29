"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type EcosystemNode = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  color: string;
};

const NODES: Record<string, EcosystemNode> = {
  holding: {
    id: "holding",
    title: "Matrix Holding",
    subtitle: "Định hướng · Điều phối\nKết nối nguồn lực",
    description: "Kiến tạo chiến lược, kết nối nguồn lực và thúc đẩy sự phát triển của toàn hệ sinh thái.",
    color: "#ffffff"
  },
  network: {
    id: "network",
    title: "Matrix Network",
    subtitle: "Giải pháp doanh nghiệp",
    description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
    color: "#0ea5e9" // sky-500
  },
  community: {
    id: "community",
    title: "Matrix Community",
    subtitle: "Cộng đồng kết nối",
    description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.",
    color: "#8b5cf6" // violet-500
  },
  capital: {
    id: "capital",
    title: "Matrix Capital",
    subtitle: "Kết nối đầu tư",
    description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.",
    color: "#f59e0b" // amber-500
  }
};

export default function EcosystemDiagram() {
  const [activeNode, setActiveNode] = useState<string>("holding");
  const reduce = useReducedMotion();

  return (
    <section className="relative z-20 -mt-24 md:-mt-32 mh-container px-4">
      <motion.div 
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/10 border border-slate-100/50"
      >
        
        {/* Left Side: Diagram (Light Blue) */}
        <div className="w-full lg:w-3/5 bg-sky-50/50 backdrop-blur-xl p-8 lg:p-16 xl:p-20 relative flex items-center justify-center min-h-[500px] border-b lg:border-b-0 lg:border-r border-slate-200/60">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/50 px-4 py-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
            Tương tác để tìm hiểu vai trò
          </div>
          
          {/* SVG Diagram Base */}
          <div className="relative w-full max-w-[400px] aspect-square">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-slate-300">
              {/* Central connecting lines */}
              <line x1="200" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="96" y2="260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="304" y2="260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              {/* Outer circle */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="animate-[spin_60s_linear_infinite]" style={{ transformOrigin: 'center' }} />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0">
              {/* Top Node: Network */}
              <button
                onClick={() => setActiveNode("network")}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-110
                  ${activeNode === "network" ? "ring-4 ring-sky-400 ring-offset-4 ring-offset-sky-50 shadow-[0_0_30px_rgba(14,165,233,0.3)] z-20 scale-105" : "shadow-xl z-10"}
                `}
                style={{ backgroundColor: NODES.network.color }}
              >
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] opacity-80 mb-1">Matrix</div>
                <div className="font-black text-[15px] uppercase leading-tight tracking-wide">Network</div>
                <div className="text-[9px] mt-2 opacity-90 px-2 text-center leading-tight">Giải pháp doanh nghiệp</div>
              </button>

              {/* Bottom Left Node: Capital */}
              <button
                onClick={() => setActiveNode("capital")}
                className={`absolute bottom-8 left-0 -translate-x-4 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-110
                  ${activeNode === "capital" ? "ring-4 ring-amber-400 ring-offset-4 ring-offset-sky-50 shadow-[0_0_30px_rgba(245,158,11,0.3)] z-20 scale-105" : "shadow-xl z-10"}
                `}
                style={{ backgroundColor: NODES.capital.color }}
              >
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] opacity-80 mb-1">Matrix</div>
                <div className="font-black text-[15px] uppercase leading-tight tracking-wide">Capital</div>
                <div className="text-[9px] mt-2 opacity-90 px-2 text-center leading-tight">Kết nối đầu tư</div>
              </button>

              {/* Bottom Right Node: Community */}
              <button
                onClick={() => setActiveNode("community")}
                className={`absolute bottom-8 right-0 translate-x-4 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-110
                  ${activeNode === "community" ? "ring-4 ring-violet-400 ring-offset-4 ring-offset-sky-50 shadow-[0_0_30px_rgba(139,92,246,0.3)] z-20 scale-105" : "shadow-xl z-10"}
                `}
                style={{ backgroundColor: NODES.community.color }}
              >
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] opacity-80 mb-1">Matrix</div>
                <div className="font-black text-[15px] uppercase leading-tight tracking-wide">Community</div>
                <div className="text-[9px] mt-2 opacity-90 px-2 text-center leading-tight">Cộng đồng kết nối</div>
              </button>

              {/* Center Node: Holding */}
              <button
                onClick={() => setActiveNode("holding")}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110
                  ${activeNode === "holding" ? "ring-4 ring-[var(--mh-navy)] ring-offset-4 ring-offset-sky-50 shadow-[0_0_40px_rgba(9,46,86,0.3)] z-30 scale-105" : "shadow-2xl z-20"}
                `}
                style={{ backgroundColor: NODES.holding.color }}
              >
                <div className="text-4xl font-black text-[var(--mh-navy)] mb-1 opacity-10">M</div>
                <div className="font-black text-[13px] text-[var(--mh-navy)] uppercase tracking-wider absolute">MATRIX HOLDING</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Info Card (Dark Navy) */}
        <div className="w-full lg:w-2/5 p-10 lg:p-16 bg-[var(--mh-navy)] flex flex-col text-white">
          <div className="mb-10">
            <span className="text-amber-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block border border-amber-500/20 bg-amber-500/10 w-fit px-3 py-1 rounded-full">
              Mô hình liên kết
            </span>
            <h2 className="font-extrabold text-3xl lg:text-4xl xl:text-5xl leading-[1.15] mb-6">
              Một hệ sinh thái,<br />kết nối đa chiều.
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-10 font-medium">
              Matrix Holding giữ vai trò trung tâm định hướng và điều phối. Các thương hiệu thành viên đồng thời kết nối với nhau, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.
            </p>

            {/* Legend */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-4 text-sm text-white/70 font-medium">
                <div className="w-8 h-[2px] bg-white/40 border-y border-dashed border-white/40" />
                <span>Đường nối: liên kết với Holding</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70 font-medium">
                <div className="w-8 h-8 rounded-full border-[1.5px] border-white/40 border-dashed shrink-0" />
                <span>Vòng tròn: liên kết giữa các thành viên</span>
              </div>
            </div>
          </div>

          {/* Dynamic Content Card */}
          <div className="mt-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeNode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[1.5rem] p-8 text-[var(--mh-navy)] min-h-[160px] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] opacity-5" style={{ backgroundColor: NODES[activeNode].color }} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: NODES[activeNode].color }} />
                  <h3 className="font-extrabold text-2xl">
                    {NODES[activeNode].title}
                  </h3>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                  {NODES[activeNode].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
