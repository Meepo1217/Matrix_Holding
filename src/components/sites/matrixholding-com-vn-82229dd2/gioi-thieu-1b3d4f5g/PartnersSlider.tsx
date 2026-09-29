"use client";

import Image from "next/image";

// Placeholder partner logos (real ones would be SVG or PNG with transparent bg)
const PARTNERS = [
  { name: "Techcombank", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" }, // Reusing logo as placeholder
  { name: "Trioblade", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "Vuanem", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "Dreamfitness", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "JBL", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
];

export default function PartnersSlider() {
  return (
    <section className="mh-section bg-[var(--mh-slate-100)] overflow-hidden">
      <div className="mh-container">
        
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(auto,400px)] gap-8 items-end mb-12">
          <div>
            <span className="mh-eyebrow">ĐỐI TÁC</span>
            <h2 
              className="font-extrabold text-[var(--mh-navy)]"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.2 }}
            >
              Đồng hành cùng Matrix Holding
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-right pb-1">
            Sự tin tưởng của các thương hiệu là động lực để chúng tôi tiếp tục kiến tạo những giá trị kinh doanh bền vững.
          </p>
        </div>
        
        {/* Divider with instruction */}
        <div className="relative mb-10">
          <div className="h-px bg-slate-300 w-full absolute top-1/2 -translate-y-1/2" />
          <div className="relative inline-block bg-[var(--mh-slate-100)] pr-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              TỰ ĐỘNG TRƯỢT - RÊ CHUỘT ĐỂ DỪNG VÀ KÉO XEM THÊM
            </span>
          </div>
        </div>

        {/* Marquee slider */}
        <div className="relative w-full overflow-hidden group">
          <div 
            className="flex gap-6 items-center whitespace-nowrap animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused]"
            style={{ width: "fit-content" }}
          >
            {/* Double the list for infinite effect */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div 
                key={i}
                className="shrink-0 bg-white rounded-2xl p-6 flex items-center justify-center transition-shadow duration-300 hover:shadow-lg cursor-pointer"
                style={{ 
                  width: 240, 
                  height: 120,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
                }}
              >
                <div className="relative w-full h-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  {/* Using the Matrix Holding logo as a placeholder for partners since we couldn't download exact ones */}
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-300 opacity-50 bg-white">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 3)); }
          }
        `}} />
      </div>
    </section>
  );
}
