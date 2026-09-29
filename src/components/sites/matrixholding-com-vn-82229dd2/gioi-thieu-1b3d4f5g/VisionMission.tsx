"use client";

import { Rocket, Target, Lightbulb } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function VisionMission() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const cards = [
    {
      id: "mission",
      number: "01",
      title: "SỨ MỆNH DOANH NGHIỆP",
      heading: "Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội.",
      text: "Matrix Holding mang trong mình sứ mệnh dẫn dắt, định hướng và đồng hành cùng thế hệ trẻ trên hành trình khởi nghiệp, giúp họ mở ra cơ hội để trở thành những kỳ lân trong tương lai.",
      icon: <Rocket size={24} className="text-blue-500" />,
      iconBg: "bg-blue-50 border-blue-100",
      accent: "bg-blue-500"
    },
    {
      id: "vision",
      number: "02",
      title: "TẦM NHÌN CHIẾN LƯỢC",
      heading: "Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam.",
      text: "Matrix Holding hướng đến việc xây dựng hệ sinh thái kinh doanh đa ngành có khả năng tạo ra giá trị thiết thực, nơi các ý tưởng kinh doanh được ươm mầm, nuôi dưỡng và phát triển.",
      icon: <Target size={24} className="text-amber-500" />,
      iconBg: "bg-amber-50 border-amber-100",
      accent: "bg-amber-500"
    },
    {
      id: "core",
      number: "03",
      title: "GIÁ TRỊ CỐT LÕI",
      heading: "Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ khởi nghiệp.",
      text: "Matrix Holding tạo điều kiện để các ý tưởng kinh doanh được định hình, thử nghiệm và phát triển thành những mô hình thực tế thông qua hệ sinh thái kinh doanh đa ngành.",
      icon: <Lightbulb size={24} className="text-emerald-500" />,
      iconBg: "bg-emerald-50 border-emerald-100",
      accent: "bg-emerald-500"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--mh-navy)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="mh-container relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-16 md:mb-20 text-center md:text-left grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300">
              Nền tảng phát triển
            </div>
            <h2 className="font-extrabold mb-0 text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
              Sứ mệnh, tầm nhìn<br className="hidden md:block" /> và giá trị cốt lõi.
            </h2>
          </div>
          <p className="text-white/70 max-w-[400px] text-base md:text-lg leading-relaxed font-medium md:text-right md:pb-2 mx-auto md:mx-0">
            Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {cards.map((card) => (
            <motion.div 
              variants={itemAnim}
              key={card.id}
              className="bg-white rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${card.accent} transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500`} />

              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div className="font-bold text-[var(--mh-navy)] flex flex-col justify-center">
                  <span className="text-[10px] text-slate-400 tracking-[0.2em]">{card.number}</span>
                  <span className="text-[11px] tracking-widest">{card.title}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="font-extrabold text-slate-900 text-xl leading-[1.3] mb-4">
                  {card.heading}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mt-auto font-medium">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
