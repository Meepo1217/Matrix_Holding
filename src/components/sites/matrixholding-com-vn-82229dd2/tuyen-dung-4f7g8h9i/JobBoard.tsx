import Link from "next/link";
import { ArrowRight, MapPin, DollarSign, Briefcase, Building2, ChevronLeft, ChevronRight } from "lucide-react";

export default function JobBoard() {
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
      bgCol: "bg-blue-50"
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
      bgCol: "bg-indigo-50"
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
      bgCol: "bg-purple-50"
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
      bgCol: "bg-emerald-50"
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
      bgCol: "bg-sky-50"
    }
  ];

  return (
    <section className="bg-slate-50 pt-8 pb-24">
      
      {/* Filters Overlay (Sticks to top conceptually, overlapping hero a bit if we used negative margin, but keeping it simple here) */}
      <div className="border-b border-slate-200 bg-white/50 backdrop-blur-md sticky top-0 z-40">
        <div className="mh-container py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[13px] font-bold transition-all ${
                idx === 0 
                ? "bg-[var(--mh-navy)] text-white shadow-md" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mh-container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-8">
              
              {/* Smart Search Box */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-[11px] font-bold tracking-widest text-blue-600 uppercase mb-4">
                  Tìm việc thông minh
                </h3>
                <h4 className="text-[var(--mh-navy)] font-extrabold text-xl leading-tight mb-4">
                  Kết nối với đúng cơ hội, đúng doanh nghiệp.
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Mỗi tin tuyển dụng được cập nhật trực tiếp bởi đội ngũ phụ trách tuyển dụng.
                </p>
              </div>

              {/* Companies List */}
              <div>
                <h3 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-4">
                  Doanh nghiệp đang hiển thị
                </h3>
                <ul className="space-y-3">
                  {companies.map((comp, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-[14px] font-bold hover:text-blue-600 cursor-pointer transition-colors">
                      <Building2 size={16} className="text-[var(--mh-navy)]" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Job List */}
          <div>
            <div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-4">
              <p className="text-slate-500 text-sm">
                Hiển thị <strong className="text-[var(--mh-navy)]">8</strong> trong số <strong className="text-[var(--mh-navy)]">13</strong> vị trí
              </p>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Mới nhất</span>
            </div>

            <div className="space-y-4 mb-12">
              {jobs.map((job) => (
                <div key={job.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden flex flex-col md:flex-row group`}>
                  
                  {/* Left Accent */}
                  <div className={`w-1.5 shrink-0 bg-slate-100 border-l-[6px] ${job.color} transition-colors group-hover:border-l-[8px]`} />
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    
                    {/* Top Row: Avatar & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-full ${job.bgCol} ${job.textCol} font-extrabold flex items-center justify-center shrink-0`}>
                        {job.code}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                          <h3 className="font-bold text-[19px] text-[var(--mh-navy)] group-hover:text-blue-600 transition-colors">
                            <Link href="#">{job.title}</Link>
                          </h3>
                          <span className="inline-flex shrink-0 px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-bold rounded-full">
                            Toàn thời gian
                          </span>
                        </div>
                        <p className="font-bold text-[14px] text-slate-500">{job.company}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 rounded text-[13px] font-medium">
                        <MapPin size={14} className="text-slate-400" /> {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50/50 text-amber-700 rounded text-[13px] font-medium">
                        <DollarSign size={14} className="text-amber-500" /> {job.salary}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded text-[13px] font-medium">
                        <Briefcase size={14} className="text-purple-500" /> {job.category}
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                      {job.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-slate-400 text-[12px]">Đăng ngày {job.date}</span>
                      <Link href="#" className="flex items-center gap-2 text-[var(--mh-navy)] font-bold text-sm group-hover:text-blue-600 transition-colors">
                        Xem chi tiết <ArrowRight size={16} />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-700 transition-colors border border-transparent hover:border-slate-200">
                <ChevronLeft size={18} />
              </button>
              
              <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-[var(--mh-navy)] text-white shadow-md">
                1
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-slate-600 hover:bg-white transition-colors border border-transparent hover:border-slate-200">
                2
              </button>
              
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white transition-colors border border-transparent hover:border-slate-200">
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
