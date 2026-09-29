import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function FeaturedNews() {
  const latestNews = [
    {
      category: "CONNECT",
      date: "12/09/2026",
      title: "Kết nối cộng đồng doanh nghiệp: từ cuộc gặp gỡ đến giá trị hợp tác",
      excerpt: "Matrix Connect mở rộng không gian kết nối để các doanh nghiệp, chuyên gia và đối tác cùng chia sẻ cơ..."
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
    <section className="bg-white pt-8 pb-20">
      <div className="mh-container">
        
        {/* Notice Banner */}
        <div className="flex items-center gap-3 mb-10 text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <p>Đang hiển thị nội dung minh họa, bài viết thật từ quản trị sẽ thay thế tự động.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Feature */}
          <div className="w-full lg:w-[65%] group">
            <Link href="#" className="block relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-featured.jpg"
                alt="Featured News"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092e56]/90 via-[#092e56]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold tracking-widest text-white uppercase">
                  <span className="text-blue-400">NETWORK</span>
                  <div className="flex items-center gap-1.5 opacity-80 font-medium">
                    <Calendar size={12} />
                    <span>18/09/2026</span>
                  </div>
                </div>
                
                <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-4">
                  Matrix Network: Chuẩn hóa nguồn lực để doanh nghiệp tăng tốc
                </h2>
                
                <p className="text-white/80 text-base md:text-lg max-w-2xl mb-8 line-clamp-2">
                  Từ dịch vụ vận hành đến các giải pháp đồng bộ, Matrix Network giúp doanh nghiệp xây dựng nền tảng tăng trưởng bền vững.
                </p>
                
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide group-hover:text-amber-400 transition-colors">
                  Đọc bài viết <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          {/* Latest News Sidebar */}
          <div className="w-full lg:w-[35%] flex flex-col h-full">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-[var(--mh-navy)]">
              <h3 className="font-extrabold text-[var(--mh-navy)] text-2xl">Mới nhất</h3>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Cập nhật</span>
            </div>
            
            <div className="flex flex-col flex-grow justify-between">
              {latestNews.map((news, index) => (
                <div key={index} className="group cursor-pointer py-5 first:pt-0 last:pb-0 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-3 mb-3 text-[10px] font-bold tracking-widest uppercase">
                    <span className="text-blue-600">{news.category}</span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Calendar size={11} />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-[17px] leading-snug text-[var(--mh-navy)] mb-2 group-hover:text-blue-600 transition-colors">
                    <Link href="#">{news.title}</Link>
                  </h4>
                  
                  <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
