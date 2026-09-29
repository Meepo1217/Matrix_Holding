"use client";

import { Building2, ArrowUpRight, ShieldCheck, Send } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function ContactFormSection() {
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Yêu cầu liên hệ đã được gửi (Mock)");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="bg-slate-50 pt-20 pb-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      
      <div className="mh-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-10 lg:pr-8">
            <motion.div 
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase mb-6 border border-blue-100">THÔNG TIN LIÊN HỆ</span>
              <h2 className="font-extrabold text-[var(--mh-navy)] text-4xl lg:text-5xl leading-[1.15] mb-6 tracking-tight">
                Gặp gỡ và kết nối <span className="text-blue-600">cùng chúng tôi.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                Thông tin được tiếp nhận để phục vụ việc trao đổi hợp tác. Chúng tôi tôn trọng và bảo mật thông tin của bạn.
              </p>
            </motion.div>

            {/* Office Card */}
            <motion.div 
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-slate-100 overflow-hidden group"
            >
              <div className="p-8 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 transition-colors">
                    <Building2 className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[var(--mh-navy)] text-xl mb-2">Văn phòng Matrix Holding</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder Block (mimicking screenshot white space) */}
              <div className="h-[240px] w-full bg-slate-50 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <Building2 size={64} className="opacity-20" />
                </div>
              </div>
              
              <Link 
                href="https://maps.google.com/?q=KDT+Bac+Linh+Dam+Phuong+Hoang+Liet+Ha+Noi" 
                target="_blank"
                className="flex items-center justify-between p-6 text-[var(--mh-navy)] hover:text-blue-600 transition-colors"
              >
                <span className="font-bold text-[15px] tracking-wide uppercase">Mở bản đồ chỉ đường</span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <ArrowUpRight size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Privacy Alert */}
            <motion.div 
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
              className="bg-blue-50/80 border border-blue-100 rounded-2xl p-6 flex items-start gap-4"
            >
              <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={24} />
              <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
                Thông tin bạn gửi chỉ được sử dụng để phản hồi yêu cầu liên hệ và xây dựng phương án hợp tác.
              </p>
            </motion.div>

          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 p-8 md:p-12 h-full">
              
              <div className="flex items-center justify-between mb-10 pb-8 border-b border-slate-100">
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    TRAO ĐỔI HỢP TÁC
                  </h4>
                  <h3 className="font-extrabold text-[var(--mh-navy)] text-3xl">
                    Gửi thông tin cho Matrix Holding
                  </h3>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#e5b344] text-[var(--mh-navy)] flex items-center justify-center shrink-0 shadow-lg hidden sm:flex">
                  <Send size={24} className="-ml-1 mt-1" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="block text-sm font-extrabold text-[var(--mh-navy)] tracking-wide uppercase">Họ và tên <span className="text-blue-600">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nhập họ và tên..." 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-3">
                    <label className="block text-sm font-extrabold text-[var(--mh-navy)] tracking-wide uppercase">Doanh nghiệp</label>
                    <input 
                      type="text" 
                      placeholder="Tên doanh nghiệp..." 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-3">
                    <label className="block text-sm font-extrabold text-[var(--mh-navy)] tracking-wide uppercase">Email <span className="text-blue-600">*</span></label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@doanhnghiep.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <label className="block text-sm font-extrabold text-[var(--mh-navy)] tracking-wide uppercase">Số điện thoại</label>
                    <input 
                      type="tel" 
                      placeholder="09xx xxx xxx" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="block text-sm font-extrabold text-[var(--mh-navy)] tracking-wide uppercase">Nội dung cần trao đổi <span className="text-blue-600">*</span></label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="Chia sẻ ngắn về nhu cầu đề xuất hợp tác của bạn..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 text-slate-800 font-medium resize-none"
                  />
                </div>

                {/* Footer Note & Button */}
                <div className="pt-6 space-y-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
                    Sau khi bấm gửi, ứng dụng email của bạn sẽ mở sẵn với thông tin liên hệ đã điền.
                  </p>
                  
                  <button 
                    type="submit" 
                    className="bg-[var(--mh-navy)] hover:bg-blue-900 text-white font-extrabold text-base px-10 py-4 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shrink-0 group"
                  >
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Gửi yêu cầu liên hệ
                  </button>
                </div>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
