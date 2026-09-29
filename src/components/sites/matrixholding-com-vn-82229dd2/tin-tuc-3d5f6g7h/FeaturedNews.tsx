"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Info } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function FeaturedNews() {
  const reduce = useReducedMotion();

  const latestNews = [
    {
      category: "CONNECT",
      date: "12/09/2026",
      title: "Kết nối cộng đồng doanh nghiệp: từ cuộc gặp gỡ đến giá trị hợp tác",
      excerpt: "Matrix Connect mở rộng không gian kết nối để các doanh nghiệp, chuyên gia và đối tác cùng chia sẻ cơ hội..."
    },
    {
      category: "VENTURES",
      date: "08/09/2026",
      title: "Matrix Ventures đồng hành cùng các dự án có định hướng dài hạn",
      excerpt: "Nguồn vốn phù hợp, thẩm định chuyên sâu và tư vấn phát triển là ba trụ cột trong hành trình kết nối đầu tư."
    },
    {
      category: "NETWORK",
      date: "03/09/2026",
      title: "Ba nền tảng giúp doanh nghiệp vận hành chủ động trong giai đoạn mới",
      excerpt: "Dữ liệu, quy trình và đội ngũ là ba yếu tố cần được đầu tư đồng bộ để tạo sức bật cho tổ chức."
    }
  ];

  return (
    <section className="bg-white pt-12 pb-24 border-b border-slate-100">
      <div className="mh-container">
        
        {/* Notice Banner */}
        <motion.div 
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12 text-sm text-slate-500 bg-slate-50/80 border border-slate-200/60 rounded-xl px-5 py-4 w-fit"
        >
          <Info size={16} className="text-amber-500 shrink-0" />
          <p className="font-medium">Nội dung minh họa. Bài viết thật sẽ được hiển thị khi kết nối CMS.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Feature */}
          <motion.div 
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="w-full lg:w-[65%] group"
          >
            <Link href="#" className="block relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-featured.jpg"
                alt="Featured News"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092e56] via-[#092e56]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-5 text-[11px] font-bold tracking-[0.2em] text-white uppercase">
                  <span className="text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">NETWORK</span>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <Calendar size={14} />
                    <span>18/09/2026</span>
                  </div>
                </div>
                
                <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.25] mb-5 group-hover:text-blue-100 transition-colors">
                  Matrix Network: Chuẩn hóa nguồn lực để doanh nghiệp tăng tốc
                </h2>
                
                <p className="text-white/80 text-base md:text-lg max-w-2xl mb-8 line-clamp-2 font-medium">
                  Từ dịch vụ vận hành đến các giải pháp đồng bộ, Matrix Network giúp doanh nghiệp xây dựng nền tảng tăng trưởng bền vững.
                </p>
                
                <div className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase group-hover:text-amber-400 transition-colors">
                  Đọc bài viết <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Latest News Sidebar */}
          <div className="w-full lg:w-[35%] flex flex-col h-full">
            <motion.div 
              initial={reduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="flex items-end justify-between mb-8 pb-4 border-b border-slate-200"
            >
              <h3 className="font-extrabold text-slate-900 text-2xl">Mới nhất</h3>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Cập nhật</span>
            </motion.div>
            
            <div className="flex flex-col flex-grow">
              {latestNews.map((news, index) => (
                <motion.div 
                  initial={reduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
                  key={index} 
                  className="group cursor-pointer py-6 first:pt-2 last:pb-0 border-b border-slate-100 last:border-0"
                >
                  <div className="flex items-center gap-3 mb-3 text-[10px] font-bold tracking-[0.2em] uppercase">
                    <span className="text-blue-600">{news.category}</span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar size={12} />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-extrabold text-lg leading-snug text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href="#">{news.title}</Link>
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 font-medium">
                    {news.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
