import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative pt-[140px] pb-24 overflow-hidden"
      style={{ backgroundColor: "var(--mh-navy)", color: "white" }}
    >
      {/* Subtle overlay texture (optional diagonal gradient like the design) */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.1) 50.1%)"
        }}
      />

      <div className="mh-container relative z-10">
        <div className="max-w-3xl">
          <p 
            className="text-white/70 font-semibold tracking-widest uppercase mb-4"
            style={{ fontSize: 13, letterSpacing: "0.15em" }}
          >
            MATRIX HOLDING
          </p>
          <h1 
            className="font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
          >
            Giới thiệu
          </h1>
          <p 
            className="text-white/80 leading-relaxed"
            style={{ fontSize: 18, maxWidth: 600 }}
          >
            Hành trình kiến tạo hệ sinh thái, kết nối nguồn lực và phát triển giá trị bền vững.
          </p>
        </div>
      </div>
    </section>
  );
}
