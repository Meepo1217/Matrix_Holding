import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden text-white"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/hero-bg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(9,46,86,0.88) 0%, rgba(9,46,86,0.70) 50%, rgba(9,46,86,0.80) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-20 mh-container"
        style={{ paddingTop: 160, paddingBottom: 100 }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-blue-300"
              aria-hidden="true"
            />
            <span className="uppercase tracking-widest text-white/90">
              MATRIX HOLDING · VIỆT NAM
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-extrabold tracking-tight text-white leading-tight mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1 }}
          >
            KIẾN TẠO HỆ SINH THÁI
            <br />
            <span className="text-blue-200">KINH DOANH ĐA NGÀNH</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/85 mb-10 leading-relaxed"
            style={{ fontSize: 18, maxWidth: 620, lineHeight: 1.7 }}
          >
            Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả,
            nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra
            cơ hội tiếp cận thị trường bền vững.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#gioi-thieu"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              style={{ color: "rgb(9,46,86)", minWidth: 200 }}
              id="hero-cta-primary"
            >
              Khám phá Matrix Holding
            </Link>
            <Link
              href="/he-sinh-thai"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 bg-transparent px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
              id="hero-cta-secondary"
            >
              Xem hệ sinh thái
            </Link>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-20 flex flex-wrap items-center gap-8 border-t border-white/15 pt-8"
          style={{ maxWidth: 600 }}
        >
          {[
            { value: "10+", label: "Năm kinh nghiệm" },
            { value: "500+", label: "Doanh nghiệp đối tác" },
            { value: "50+", label: "Chuyên gia tư vấn" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="font-extrabold text-white"
                style={{ fontSize: 28, lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span
                className="text-white/65 mt-1"
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <div className="h-8 w-px bg-white/40" />
          <span className="text-white/50" style={{ fontSize: 10, letterSpacing: "0.08em" }}>
            CUỘN XUỐNG
          </span>
        </div>
      </div>
    </section>
  );
}
