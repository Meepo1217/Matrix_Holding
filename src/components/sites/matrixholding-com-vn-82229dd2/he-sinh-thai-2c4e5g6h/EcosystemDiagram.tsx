"use client";

import { useState } from "react";

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
    color: "#0284c7" // sky-600
  },
  community: {
    id: "community",
    title: "Matrix Community",
    subtitle: "Cộng đồng kết nối",
    description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.",
    color: "#5b21b6" // violet-800
  },
  capital: {
    id: "capital",
    title: "Matrix Capital",
    subtitle: "Kết nối đầu tư",
    description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.",
    color: "#a16207" // yellow-700
  }
};

export default function EcosystemDiagram() {
  const [activeNode, setActiveNode] = useState<string>("holding");

  return (
    <section className="relative z-20 -mt-16 mh-container">
      <div className="rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        {/* Left Side: Diagram (Light Blue) */}
        <div className="w-full lg:w-3/5 bg-[#dbeafe] p-10 lg:p-20 relative flex items-center justify-center min-h-[500px]">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-slate-500 text-[11px] uppercase tracking-wider">
            Chọn một thương hiệu để tìm hiểu vai trò
          </div>
          
          {/* SVG Diagram Base */}
          <div className="relative w-full max-w-[400px] aspect-square">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-slate-300">
              {/* Central connecting lines */}
              <line x1="200" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="96" y2="260" stroke="currentColor" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="304" y2="260" stroke="currentColor" strokeWidth="1.5" />
              {/* Outer circle */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0">
              {/* Top Node: Network */}
              <button
                onClick={() => setActiveNode("network")}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white transition-transform hover:scale-105
                  ${activeNode === "network" ? "ring-4 ring-blue-400 ring-offset-4 ring-offset-[#dbeafe] shadow-xl" : "shadow-lg"}
                `}
                style={{ backgroundColor: NODES.network.color }}
              >
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Matrix</div>
                <div className="font-black text-sm uppercase leading-tight">Network</div>
                <div className="text-[9px] mt-2 opacity-90 px-2 text-center leading-tight">Giải pháp doanh nghiệp</div>
              </button>

              {/* Bottom Left Node: Capital */}
              <button
                onClick={() => setActiveNode("capital")}
                className={`absolute bottom-8 left-0 -translate-x-4 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white transition-transform hover:scale-105
                  ${activeNode === "capital" ? "ring-4 ring-yellow-400 ring-offset-4 ring-offset-[#dbeafe] shadow-xl" : "shadow-lg"}
                `}
                style={{ backgroundColor: NODES.capital.color }}
              >
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Matrix</div>
                <div className="font-black text-sm uppercase leading-tight">Capital</div>
                <div className="text-[9px] mt-2 opacity-90 px-2 text-center leading-tight">Kết nối đầu tư</div>
              </button>

              {/* Bottom Right Node: Community */}
              <button
                onClick={() => setActiveNode("community")}
                className={`absolute bottom-8 right-0 translate-x-4 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white transition-transform hover:scale-105
                  ${activeNode === "community" ? "ring-4 ring-purple-400 ring-offset-4 ring-offset-[#dbeafe] shadow-xl" : "shadow-lg"}
                `}
                style={{ backgroundColor: NODES.community.color }}
              >
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Matrix</div>
                <div className="font-black text-sm uppercase leading-tight">Community</div>
                <div className="text-[9px] mt-2 opacity-90 px-2 text-center leading-tight">Cộng đồng kết nối</div>
              </button>

              {/* Center Node: Holding */}
              <button
                onClick={() => setActiveNode("holding")}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full flex flex-col items-center justify-center transition-transform hover:scale-105 z-10
                  ${activeNode === "holding" ? "ring-4 ring-[var(--mh-navy)] ring-offset-4 ring-offset-[#dbeafe] shadow-2xl" : "shadow-xl"}
                `}
                style={{ backgroundColor: NODES.holding.color }}
              >
                <div className="text-3xl font-black text-[var(--mh-navy)] mb-1">M</div>
                <div className="font-black text-[13px] text-[var(--mh-navy)] uppercase tracking-wide">MATRIX HOLDING</div>
                <div className="text-[9px] mt-2 text-slate-500 px-4 text-center leading-tight whitespace-pre-line font-medium">
                  {NODES.holding.subtitle}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Info Card (Dark Navy) */}
        <div className="w-full lg:w-2/5 p-10 lg:p-14 bg-[var(--mh-navy)] flex flex-col text-white">
          <div className="mb-8">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-3 block">MÔ HÌNH LIÊN KẾT</span>
            <h2 className="font-bold text-3xl lg:text-4xl leading-[1.2] mb-6">
              Một hệ sinh thái,<br />kết nối đa chiều.
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-10">
              Matrix Holding giữ vai trò trung tâm định hướng và điều phối. Các thương hiệu thành viên đồng thời kết nối với nhau, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.
            </p>

            {/* Legend */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-4 text-sm text-white/90">
                <div className="w-8 h-[2px] bg-white/40" />
                <span>Đường nối tâm: liên kết với Holding</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/90">
                <div className="w-8 h-8 rounded-full border-[1.5px] border-white/40 border-dashed shrink-0" />
                <span>Vòng tròn: liên kết giữa các thành viên</span>
              </div>
            </div>
          </div>

          {/* Dynamic Content Card */}
          <div className="mt-auto pt-8">
            <div className="bg-white rounded-[20px] p-6 text-[var(--mh-navy)] min-h-[140px] shadow-xl transition-all duration-300">
              <h3 className="font-black text-xl mb-3">
                {NODES[activeNode].title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {NODES[activeNode].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
