"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

// Placeholder partner logos (real ones would be SVG or PNG with transparent bg)
const PARTNERS = [
  { name: "Techcombank", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "Trioblade", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "Vuanem", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "Dreamfitness", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
  { name: "JBL", src: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png" },
];

export default function PartnersSlider() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="mh-container">
        
        {/* Header */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="grid grid-cols-1 md:grid-cols-[1fr_minmax(auto,400px)] gap-6 md:gap-8 items-end mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
              Đối tác
            </div>
            <h2 className="font-extrabold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
              Đồng hành cùng <br className="hidden md:block" /> Matrix Holding
            </h2>
          </div>
          <p className="text-slate-600 text-base font-medium leading-relaxed md:text-right pb-1">
            Sự tin tưởng của các thương hiệu là động lực để chúng tôi tiếp tục kiến tạo những giá trị kinh doanh bền vững.
          </p>
        </motion.div>
        
        {/* Divider with instruction */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="h-px bg-slate-200 w-full absolute top-1/2 -translate-y-1/2" />
          <div className="relative inline-block bg-slate-50 pr-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
              TỰ ĐỘNG TRƯỢT - RÊ CHUỘT ĐỂ DỪNG
            </span>
          </div>
        </motion.div>

        {/* Marquee slider */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          className="relative w-full overflow-hidden group py-4"
        >
          <div 
            className="flex gap-6 items-center whitespace-nowrap animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] w-fit"
          >
            {/* Double the list for infinite effect */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div 
                key={i}
                className="shrink-0 bg-white rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer w-[240px] h-[120px] shadow-sm border border-slate-100"
              >
                <div className="relative w-full h-full opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-400 opacity-60 bg-white">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
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
