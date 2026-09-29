"use client";

import { Network, Users, Building2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function EcosystemModels() {
  const reduce = useReducedMotion();

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

  const models = [
    {
      id: "network",
      number: "01",
      title: "MATRIX NETWORK",
      heading: "Hệ sinh thái cung cấp giải pháp toàn diện",
      text: "Matrix Holding xây dựng Matrix Network theo mô hình hệ sinh thái khép kín, nơi các doanh nghiệp thành viên vừa là đối tác, vừa là khách hàng của nhau, cùng nhau chia sẻ nguồn lực, khai thác thế mạnh và phát triển.",
      icon: <Network size={24} className="text-[var(--mh-navy)]" />,
      bgClass: "bg-white border border-slate-200",
      textClass: "text-slate-900",
      descClass: "text-slate-600",
      eyebrowClass: "text-blue-600 bg-blue-50"
    },
    {
      id: "connect",
      number: "02",
      title: "MATRIX CONNECT",
      heading: "Hệ sinh thái cộng đồng kết nối kinh doanh",
      text: "Matrix Holding xây dựng Matrix Connect theo mô hình cộng đồng kết nối kinh doanh, nơi doanh nghiệp có cơ hội mở rộng quan hệ hợp tác và tăng trưởng doanh thu bền vững.",
      icon: <Users size={24} className="text-white" />,
      bgClass: "bg-[var(--mh-navy)] border border-transparent shadow-[0_16px_40px_rgba(9,46,86,0.2)] md:-mt-4 md:mb-4",
      textClass: "text-white",
      descClass: "text-white/80",
      eyebrowClass: "text-white bg-white/20"
    },
    {
      id: "ventures",
      number: "03",
      title: "MATRIX VENTURES",
      heading: "Hệ sinh thái cộng đồng kết nối đầu tư",
      text: "Matrix Holding xây dựng Matrix Ventures theo mô hình cộng đồng kết nối đầu tư, nơi doanh nghiệp có cơ hội tiếp cận nguồn vốn đầu tư và nâng cao giá trị của doanh nghiệp.",
      icon: <Building2 size={24} className="text-[var(--mh-navy)]" />,
      bgClass: "bg-white border border-slate-200",
      textClass: "text-slate-900",
      descClass: "text-slate-600",
      eyebrowClass: "text-blue-600 bg-blue-50"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="mh-container">
        
        {/* Header */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
            Mô hình hoạt động
          </div>
          <h2 className="font-extrabold text-slate-900 mb-6 text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
            Ba hệ sinh thái,<br className="hidden md:block" /> một mạng lưới nguồn lực.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Mỗi hệ sinh thái đảm nhận một vai trò chuyên biệt, nhưng cùng chung mục tiêu tạo ra giá trị lâu dài cho doanh nghiệp.
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
          {models.map((model) => (
            <motion.div 
              variants={itemAnim}
              key={model.id}
              className={`rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full hover:shadow-xl ${model.bgClass}`}
            >
              {/* Card Header (Icon & Number) */}
              <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${model.id === 'connect' ? 'bg-white/10 backdrop-blur-sm' : 'bg-slate-50 border border-slate-100'}`}>
                  {model.icon}
                </div>
                <div className={`font-black text-4xl opacity-20 tracking-tighter ${model.id === 'connect' ? 'text-white' : 'text-slate-900'}`}>
                  {model.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-grow flex flex-col">
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase ${model.eyebrowClass}`}>
                    {model.title}
                  </span>
                </div>
                <h3 className={`font-extrabold text-xl md:text-2xl leading-[1.3] mb-4 ${model.textClass}`}>
                  {model.heading}
                </h3>
                <p className={`text-[15px] leading-relaxed mt-auto ${model.descClass}`}>
                  {model.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
