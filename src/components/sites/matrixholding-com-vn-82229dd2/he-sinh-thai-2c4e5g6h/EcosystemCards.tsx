export default function EcosystemCards() {
  const cards = [
    {
      id: "network",
      eyebrow: "GIẢI PHÁP DOANH NGHIỆP",
      title: "Matrix Network",
      subtitle: "Thành viên của Matrix Holding",
      description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
      bgClass: "bg-[#e0f2fe]", // sky-100/sky-50 equivalent from screenshot
      eyebrowColor: "text-sky-700",
      accentCircle: "bg-sky-200"
    },
    {
      id: "community",
      eyebrow: "CỘNG ĐỒNG KẾT NỐI",
      title: "Matrix Community",
      subtitle: "Thành viên của Matrix Holding",
      description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.",
      bgClass: "bg-[#f3e8ff]", // purple-100 equivalent
      eyebrowColor: "text-purple-700",
      accentCircle: "bg-purple-200"
    },
    {
      id: "capital",
      eyebrow: "KẾT NỐI ĐẦU TƯ",
      title: "Matrix Capital",
      subtitle: "Thành viên của Matrix Holding",
      description: "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.",
      bgClass: "bg-[#fef3c7]", // amber-100/yellow-100 equivalent
      eyebrowColor: "text-amber-700",
      accentCircle: "bg-amber-200"
    }
  ];

  return (
    <section className="mh-section bg-[var(--mh-slate-50)] pb-32">
      <div className="mh-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`relative overflow-hidden rounded-[24px] p-8 md:p-10 transition-transform hover:-translate-y-1 ${card.bgClass}`}
            >
              {/* Decorative Circle top right */}
              <div 
                className={`absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-40 mix-blend-multiply ${card.accentCircle}`}
                aria-hidden="true"
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className={`font-bold text-[11px] tracking-widest uppercase mb-4 ${card.eyebrowColor}`}>
                  {card.eyebrow}
                </div>
                
                <h3 className="font-extrabold text-[var(--mh-navy)] text-2xl mb-2">
                  {card.title}
                </h3>
                
                <p className="text-slate-500 text-[13px] font-medium mb-6">
                  {card.subtitle}
                </p>
                
                <p className="text-slate-700 text-[15px] leading-relaxed mt-auto">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
