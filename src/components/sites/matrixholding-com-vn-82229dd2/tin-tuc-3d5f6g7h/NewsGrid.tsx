import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsGrid() {
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
    <section className="mh-section bg-[var(--mh-slate-50)]">
      <div className="mh-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="mh-eyebrow !text-blue-500">TIN ĐỌC TIẾP</span>
            <h2 className="font-extrabold text-[var(--mh-navy)] text-3xl">
              Câu chuyện từ Matrix
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            20 BÀI VIẾT
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="group flex flex-col h-full">
              {/* Image */}
              <Link href="#" className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              
              {/* Meta */}
              <div className="flex items-center gap-3 mb-3 text-[10px] font-bold tracking-widest uppercase">
                <span className="text-[var(--mh-navy)]">{article.category}</span>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1 text-slate-500">
                  <Calendar size={11} />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="font-bold text-[18px] leading-snug text-[var(--mh-navy)] mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href="#">{article.title}</Link>
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {article.excerpt}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-[var(--mh-navy)] font-bold text-sm hover:text-blue-600 transition-colors mt-auto">
                  Xem chi tiết <ArrowRight size={14} />
                </Link>
              </div>
            </article>
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
          <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-slate-600 hover:bg-white transition-colors border border-transparent hover:border-slate-200">
            3
          </button>
          
          <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white transition-colors border border-transparent hover:border-slate-200">
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
