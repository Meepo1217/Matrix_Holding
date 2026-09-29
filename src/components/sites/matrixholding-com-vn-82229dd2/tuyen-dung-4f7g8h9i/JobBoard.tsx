"use client";

import Link from "next/link";
import { ArrowRight, MapPin, DollarSign, Briefcase, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function JobBoard() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const categories = [
    "Tất cả", "Pháp lý", "Tài chính", "Vận hành", "Nhân sự", "Kinh doanh", "Truyền thông", "Công nghệ"
  ];

  const companies = [
    "Matrix Accounting", "Matrix Finance", "Matrix Legal", "Matrix Research", "Matrix Strategy"
  ];

  const jobs = [
    {
      id: 1,
      code: "MA",
      title: "Chuyên viên Kế toán Tổng hợp",
      company: "Matrix Accounting",
      location: "Hà Nội",
      salary: "12 - 20 triệu",
      category: "Tài chính",
      excerpt: "Thực hiện nghiệp vụ kế toán và hỗ trợ lập báo cáo tài chính định kỳ.",
      date: "27/09/2026",
      color: "border-blue-500",
      textCol: "text-blue-600",
      bgCol: "bg-blue-50 border-blue-100"
    },
    {
      id: 2,
      code: "MF",
      title: "Chuyên viên Phân tích Tài chính",
      company: "Matrix Finance",
      location: "Hà Nội",
      salary: "15 - 25 triệu",
      category: "Tài chính",
      excerpt: "Phân tích tài chính và hỗ trợ xây dựng kế hoạch nguồn vốn cho doanh nghiệp.",
      date: "27/09/2026",
      color: "border-indigo-500",
      textCol: "text-indigo-600",
      bgCol: "bg-indigo-50 border-indigo-100"
    },
    {
      id: 3,
      code: "ML",
      title: "Chuyên viên Pháp lý Doanh nghiệp",
      company: "Matrix Legal",
      location: "Hà Nội",
      salary: "14 - 24 triệu",
      category: "Pháp lý",
      excerpt: "Tư vấn pháp lý và kiểm soát hồ sơ, hợp đồng doanh nghiệp.",
      date: "27/09/2026",
      color: "border-purple-500",
      textCol: "text-purple-600",
      bgCol: "bg-purple-50 border-purple-100"
    },
    {
      id: 4,
      code: "MR",
      title: "Chuyên viên Nghiên cứu Thị trường",
      company: "Matrix Research",
      location: "Hà Nội",
      salary: "13 - 22 triệu",
      category: "Chiến lược",
      excerpt: "Thu thập và phân tích dữ liệu nhằm hỗ trợ các quyết định kinh doanh.",
      date: "27/09/2026",
      color: "border-emerald-500",
      textCol: "text-emerald-600",
      bgCol: "bg-emerald-50 border-emerald-100"
    },
    {
      id: 5,
      code: "MS",
      title: "Chuyên viên Chiến lược Doanh nghiệp",
      company: "Matrix Strategy",
      location: "Hà Nội",
      salary: "15 - 25 triệu",
      category: "Chiến lược",
      excerpt: "Tham gia nghiên cứu, xây dựng và triển khai chiến lược phát triển cho doanh nghiệp.",
      date: "27/09/2026",
      color: "border-sky-500",
      textCol: "text-sky-600",
      bgCol: "bg-sky-50 border-sky-100"
    }
  ];

  return (
    <section className="bg-slate-50 pt-8 pb-32">
      
      {/* Filters Overlay */}
      <div className="border-b border-slate-200 bg-white/70 backdrop-blur-xl sticky top-0 z-40 shadow-sm">
        <div className="mh-container py-5 flex items-center gap-3 md:gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${
                idx === 0 
                ? "bg-[var(--mh-navy)] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mh-container mt-16 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-10">
              
              {/* Smart Search Box */}
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-black/5 border border-slate-100">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Tìm việc thông minh
                </h3>
                <h4 className="text-[var(--mh-navy)] font-extrabold text-2xl leading-tight mb-5">
                  Kết nối với đúng cơ hội, đúng doanh nghiệp.
                </h4>
                <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                  Mỗi tin tuyển dụng được cập nhật trực tiếp bởi đội ngũ phụ trách tuyển dụng của Matrix Holding.
                </p>
              </div>

              {/* Companies List */}
              <div className="pl-2">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">
                  Doanh nghiệp đang hiển thị
                </h3>
                <ul className="space-y-4">
                  {companies.map((comp, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-700 text-[15px] font-bold hover:text-blue-600 cursor-pointer transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <Building2 size={16} className="text-[var(--mh-navy)] group-hover:text-blue-600 transition-colors" />
                      </div>
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Job List */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-5">
              <p className="text-slate-500 text-sm font-medium">
                Hiển thị <strong className="text-[var(--mh-navy)] text-base">8</strong> trong số <strong className="text-[var(--mh-navy)] text-base">13</strong> vị trí
              </p>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase bg-white px-3 py-1 rounded-full border border-slate-200">
                Mới nhất
              </span>
            </div>

            <motion.div 
              variants={container}
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-5 mb-16"
            >
              {jobs.map((job) => (
                <motion.div variants={itemAnim} key={job.id} className={`bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col md:flex-row group`}>
                  
                  {/* Left Accent */}
                  <div className={`w-2 shrink-0 bg-slate-100 border-l-[6px] ${job.color} transition-colors group-hover:border-l-[8px]`} />
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    
                    {/* Top Row: Avatar & Title */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-14 h-14 rounded-2xl border ${job.bgCol} ${job.textCol} font-black flex items-center justify-center shrink-0 text-xl`}>
                        {job.code}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                          <h3 className="font-extrabold text-[20px] text-[var(--mh-navy)] group-hover:text-blue-600 transition-colors">
                            <Link href="#">{job.title}</Link>
                          </h3>
                          <span className="inline-flex shrink-0 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold rounded-full uppercase tracking-widest">
                            Toàn thời gian
                          </span>
                        </div>
                        <p className="font-bold text-[15px] text-slate-500">{job.company}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[13px] font-bold border border-slate-100">
                        <MapPin size={16} className="text-slate-400" /> {job.location}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-[13px] font-bold border border-amber-100">
                        <DollarSign size={16} className="text-amber-500" /> {job.salary}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-[13px] font-bold border border-purple-100">
                        <Briefcase size={16} className="text-purple-500" /> {job.category}
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-[15px] font-medium leading-relaxed mb-6">
                      {job.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <span className="text-slate-400 font-medium text-[13px]">Đăng ngày {job.date}</span>
                      <Link href="#" className="flex items-center gap-2 text-[var(--mh-navy)] font-bold text-sm tracking-wide uppercase group-hover:text-blue-600 transition-colors">
                        Xem chi tiết <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2"
            >
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-400 bg-white hover:text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200">
                <ChevronLeft size={20} />
              </button>
              
              <button className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm bg-[var(--mh-navy)] text-white shadow-lg border border-[var(--mh-navy)]">
                1
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-slate-600 bg-white hover:bg-slate-100 transition-colors border border-slate-200">
                2
              </button>
              
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-600 bg-white hover:bg-slate-100 transition-colors border border-slate-200">
                <ChevronRight size={20} />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
