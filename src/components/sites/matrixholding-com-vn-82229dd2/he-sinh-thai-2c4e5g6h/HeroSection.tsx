import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative pt-[140px] pb-24 overflow-hidden"
      style={{ backgroundColor: "var(--mh-navy)", color: "white" }}
    >
      {/* Background gradients/overlay */}
      <div 
        className="absolute top-0 right-0 w-3/4 h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 50%, rgba(56, 189, 248, 0.15), transparent 70%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(9, 46, 86, 1) 0%, transparent 100%)"
        }}
      />

      <div className="mh-container relative z-10">
        <div className="max-w-3xl">
          <p 
            className="text-blue-300 font-semibold tracking-widest uppercase mb-4"
            style={{ fontSize: 12, letterSpacing: "0.15em" }}
          >
            HỆ SINH THÁI MATRIX HOLDING
          </p>
          <h1 
            className="font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
          >
            Kết nối nguồn lực.<br />Cùng nhau phát triển.
          </h1>
          <p 
            className="text-white/80 leading-relaxed"
            style={{ fontSize: 18, maxWidth: 600 }}
          >
            Một trung tâm định hướng, ba thương hiệu thành viên cùng kết nối dịch vụ, cộng đồng và cơ hội đầu tư.
          </p>
        </div>
      </div>
    </section>
  );
}
