import { Rocket, Target, Lightbulb } from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      id: "mission",
      number: "01",
      title: "SỨ MỆNH DOANH NGHIỆP",
      heading: "Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội.",
      text: "Matrix Holding mang trong mình sứ mệnh dẫn dắt, định hướng và đồng hành cùng thế hệ trẻ trên hành trình khởi nghiệp, giúp họ mở ra cơ hội để trở thành những kỳ lân trong tương lai.",
      icon: <Rocket size={24} className="text-blue-500" />,
      iconBg: "bg-blue-50",
    },
    {
      id: "vision",
      number: "02",
      title: "TẦM NHÌN CHIẾN LƯỢC",
      heading: "Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam.",
      text: "Matrix Holding hướng đến việc xây dựng hệ sinh thái kinh doanh đa ngành có khả năng tạo ra giá trị thiết thực, nơi các ý tưởng kinh doanh được ươm mầm, nuôi dưỡng và phát triển.",
      icon: <Target size={24} className="text-amber-500" />,
      iconBg: "bg-amber-50",
    },
    {
      id: "core",
      number: "03",
      title: "GIÁ TRỊ CỐT LÕI",
      heading: "Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ khởi nghiệp.",
      text: "Matrix Holding tạo điều kiện để các ý tưởng kinh doanh được định hình, thử nghiệm và phát triển thành những mô hình thực tế thông qua hệ sinh thái kinh doanh đa ngành.",
      icon: <Lightbulb size={24} className="text-blue-500" />,
      iconBg: "bg-blue-50",
    },
  ];

  return (
    <section className="mh-section bg-[var(--mh-navy)] text-white">
      <div className="mh-container">
        
        {/* Header */}
        <div className="mb-14">
          <span className="mh-eyebrow !text-blue-300">NỀN TẢNG PHÁT TRIỂN</span>
          <h2 
            className="font-extrabold mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Sứ mệnh, tầm nhìn<br />và giá trị cốt lõi.
          </h2>
          <p className="text-white/70 max-w-2xl text-[15px] leading-relaxed">
            Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div className="font-bold text-[var(--mh-navy)] flex items-center gap-2 text-sm tracking-wide">
                  <span className="text-[10px] text-slate-400 font-black">{card.number}</span>
                  · {card.title}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-grow">
                <h3 className="font-bold text-slate-900 text-lg leading-snug mb-4">
                  {card.heading}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
