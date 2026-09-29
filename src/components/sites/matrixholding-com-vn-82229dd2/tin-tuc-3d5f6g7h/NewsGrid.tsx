"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function NewsGrid() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const articles = [
    {
      id: 1,
      category: "CONNECT",
      date: "28/08/2026",
      title: "Cộng hưởng nguồn lực để kiến tạo những cơ hội đa dạng",
      excerpt: "Khi đúng người, đúng chuyên môn và đúng thời điểm gặp nhau, cộng đồng có thể tạo ra các giá trị vượt ngoài kỳ...",
      image: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-1.jpg"
    },
    {
      id: 2,
      category: "VENTURES",
      date: "21/08/2026",
      title: "Tư duy đầu tư hiệu quả bắt đầu từ sự thấu hiểu doanh nghiệp",
      excerpt: "Một quyết định đầu tư chất lượng cần được xây dựng trên nền tảng thẩm định kỹ lưỡng và tầm nhìn chung dài hạn.",
      image: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-2.jpg"
    },
    {
      id: 3,
      category: "NETWORK",
      date: "15/08/2026",
      title: "Xây dựng quy trình linh hoạt cho doanh nghiệp đang mở rộng",
      excerpt: "Một nền tảng vận hành rõ ràng giúp đội ngũ tăng tốc mà vẫn giữ được sự chủ động.",
      image: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-3.jpg"
    },
    {
      id: 4,
      category: "CONNECT",
      date: "09/08/2026",
      title: "Những kết nối chất lượng tạo nên một cộng đồng bền vững",
      excerpt: "Cộng đồng phát triển khi mỗi thành viên cùng tìm thấy giá trị thiết thực trong các kết nối.",
      image: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-2.jpg"
    },
    {
      id: 5,
      category: "VENTURES",
      date: "02/08/2026",
      title: "Thẩm định chuyên sâu: bước đầu tiên của một hợp tác đầu tư hiệu quả",
      excerpt: "Đánh giá đúng tiềm năng và rủi ro tạo nền tảng cho những quyết định đầu tư bền vững.",
      image: "/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-thumb-3.jpg"
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
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-slate-200 pb-8 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
              Tin đọc tiếp
            </div>
            <h2 className="font-extrabold text-[var(--mh-navy)] text-4xl lg:text-5xl tracking-tight">
              Câu chuyện từ Matrix
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase bg-white px-4 py-2 rounded-full border border-slate-200">
            20 Bài viết
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-20"
        >
          {articles.map((article) => (
            <motion.article variants={itemAnim} key={article.id} className="group flex flex-col h-full bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <Link href="#" className="block relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              
              {/* Content Wrapper */}
              <div className="flex-grow flex flex-col px-4 pb-4">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="text-[var(--mh-navy)] bg-slate-100 px-3 py-1 rounded-full">{article.category}</span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-extrabold text-xl leading-snug text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href="#">{article.title}</Link>
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 line-clamp-2 font-medium flex-grow">
                  {article.excerpt}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-[var(--mh-navy)] font-bold text-sm tracking-wide uppercase hover:text-blue-600 transition-colors mt-auto w-fit">
                  Xem chi tiết <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
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
          
          <button className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm bg-[var(--mh-navy)] text-white shadow-lg">
            1
          </button>
          <button className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-slate-600 bg-white hover:bg-slate-100 transition-colors border border-slate-200">
            2
          </button>
          <button className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-slate-600 bg-white hover:bg-slate-100 transition-colors border border-slate-200">
            3
          </button>
          
          <button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-600 bg-white hover:bg-slate-100 transition-colors border border-slate-200">
            <ChevronRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
