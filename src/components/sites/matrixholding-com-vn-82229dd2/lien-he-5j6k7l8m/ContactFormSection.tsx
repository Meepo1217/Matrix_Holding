"use client";

import { Building2, ArrowUpRight, ShieldCheck, Send } from "lucide-react";
import Link from "next/link";

export default function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normal clone behavior is to prevent default
    alert("Yêu cầu liên hệ đã được gửi (Mock)");
  };

  return (
    <section className="bg-slate-50 pt-16 pb-24 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      <div className="mh-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="mh-eyebrow !text-blue-600 mb-2 block">THÔNG TIN LIÊN HỆ</span>
              <h2 className="font-extrabold text-[var(--mh-navy)] text-3xl md:text-4xl leading-tight mb-4">
                Gặp gỡ và kết nối cùng chúng tôi.
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Thông tin được tiếp nhận để phục vụ việc trao đổi hợp tác. Chúng tôi tôn trọng và bảo mật thông tin của bạn.
              </p>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Building2 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--mh-navy)] text-lg mb-1">Văn phòng Matrix Holding</h3>
                    <p className="text-slate-500 text-sm">KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder Block (mimicking screenshot white space) */}
              <div className="h-[200px] w-full bg-slate-50 border-b border-slate-100" />
              
              <Link 
                href="https://maps.google.com/?q=KDT+Bac+Linh+Dam+Phuong+Hoang+Liet+Ha+Noi" 
                target="_blank"
                className="flex items-center justify-between p-5 text-[var(--mh-navy)] hover:text-blue-600 transition-colors group"
              >
                <span className="font-bold text-[14px]">Mở Google Maps để chỉ đường</span>
                <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Privacy Alert */}
            <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-5 flex items-start gap-4">
              <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <p className="text-slate-600 text-sm leading-relaxed">
                Thông tin bạn gửi chỉ được sử dụng để phản hồi yêu cầu liên hệ và xây dựng phương án hợp tác.
              </p>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 h-full">
              
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-2">
                    TRAO ĐỔI HỢP TÁC
                  </h4>
                  <h3 className="font-extrabold text-[var(--mh-navy)] text-2xl">
                    Gửi thông tin cho Matrix Holding
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#e5b344] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Send size={20} className="-ml-0.5 mt-0.5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[var(--mh-navy)]">Họ và tên *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nguyễn Văn A" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-700"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[var(--mh-navy)]">Doanh nghiệp</label>
                    <input 
                      type="text" 
                      placeholder="Tên doanh nghiệp của bạn" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-700"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[var(--mh-navy)]">Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@company.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-700"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[var(--mh-navy)]">Số điện thoại</label>
                    <input 
                      type="tel" 
                      placeholder="09xx xxx xxx" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-700"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[var(--mh-navy)]">Nội dung cần trao đổi *</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Chia sẻ ngắn về nhu cầu đề xuất hợp tác của bạn." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-700 resize-none"
                  />
                </div>

                {/* Footer Note & Button */}
                <div className="pt-4 space-y-6">
                  <p className="text-[13px] text-slate-500">
                    Sau khi bấm gửi, ứng dụng email của bạn sẽ mở sẵn với thông tin liên hệ đã điền.
                  </p>
                  
                  <button 
                    type="submit" 
                    className="bg-[var(--mh-navy)] hover:bg-[#0a3866] text-white font-bold text-[14px] px-8 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <Send size={16} /> Gửi yêu cầu liên hệ
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
