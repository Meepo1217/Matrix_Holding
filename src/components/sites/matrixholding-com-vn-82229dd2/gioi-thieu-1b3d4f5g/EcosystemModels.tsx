import { Network, Users, Building2 } from "lucide-react";

export default function EcosystemModels() {
  const models = [
    {
      id: "network",
      number: "01",
      title: "MATRIX NETWORK",
      heading: "Hệ sinh thái cung cấp giải pháp toàn diện",
      text: "Matrix Holding xây dựng Matrix Network theo mô hình hệ sinh thái khép kín, nơi các doanh nghiệp thành viên vừa là đối tác, vừa là khách hàng của nhau, cùng nhau chia sẻ nguồn lực, khai thác thế mạnh và phát triển.",
      icon: <Network size={20} className="text-[var(--mh-navy)]" />,
      bgClass: "bg-white",
      textClass: "text-slate-900",
      descClass: "text-slate-600",
      eyebrowClass: "text-[var(--mh-navy)]"
    },
    {
      id: "connect",
      number: "02",
      title: "MATRIX CONNECT",
      heading: "Hệ sinh thái cộng đồng kết nối kinh doanh",
      text: "Matrix Holding xây dựng Matrix Connect theo mô hình cộng đồng kết nối kinh doanh, nơi doanh nghiệp có cơ hội mở rộng quan hệ hợp tác và tăng trưởng doanh thu bền vững.",
      icon: <Users size={20} className="text-white" />,
      bgClass: "bg-[var(--mh-navy)]",
      textClass: "text-white",
      descClass: "text-white/70",
      eyebrowClass: "text-white"
    },
    {
      id: "ventures",
      number: "03",
      title: "MATRIX VENTURES",
      heading: "Hệ sinh thái cộng đồng kết nối đầu tư",
      text: "Matrix Holding xây dựng Matrix Ventures theo mô hình cộng đồng kết nối đầu tư, nơi doanh nghiệp có cơ hội tiếp cận nguồn vốn đầu tư và nâng cao giá trị của doanh nghiệp.",
      icon: <Building2 size={20} className="text-[var(--mh-navy)]" />,
      bgClass: "bg-white",
      textClass: "text-slate-900",
      descClass: "text-slate-600",
      eyebrowClass: "text-[var(--mh-navy)]"
    }
  ];

  return (
    <section className="mh-section bg-[var(--mh-slate-50)]">
      <div className="mh-container">
        
        {/* Header */}
        <div className="mb-14">
          <span className="mh-eyebrow">MÔ HÌNH HOẠT ĐỘNG</span>
          <h2 
            className="font-extrabold text-slate-900 mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Ba hệ sinh thái,<br />một mạng lưới nguồn lực.
          </h2>
          <p className="text-slate-500 max-w-2xl text-[15px] leading-relaxed">
            Mỗi hệ sinh thái đảm nhận một vai trò chuyên biệt, nhưng cùng chung mục tiêu tạo ra giá trị lâu dài cho doanh nghiệp.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div 
              key={model.id}
              className={`rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full shadow-sm border border-slate-200/60 ${model.bgClass}`}
            >
              {/* Card Header (Icon & Number) */}
              <div className="flex justify-between items-start mb-12">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${model.id === 'connect' ? 'bg-white/10' : 'bg-blue-50'}`}>
                  {model.icon}
                </div>
                <div className={`font-black text-sm ${model.id === 'connect' ? 'text-white' : 'text-[var(--mh-navy)]'}`}>
                  {model.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-grow">
                <div className={`font-bold text-[11px] tracking-widest mb-3 ${model.eyebrowClass}`}>
                  {model.title}
                </div>
                <h3 className={`font-bold text-[19px] leading-[1.4] mb-4 ${model.textClass}`}>
                  {model.heading}
                </h3>
                <p className={`text-[14px] leading-relaxed ${model.descClass}`}>
                  {model.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
