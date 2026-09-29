import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="lien-he"
      className="relative overflow-hidden py-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/cta-bg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Navy overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(9,46,86,0.94) 0%, rgba(0,39,77,0.90) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-16 -right-16 rounded-full opacity-10"
        style={{ width: 320, height: 320, border: "60px solid white" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 rounded-full opacity-10"
        style={{ width: 280, height: 280, border: "50px solid white" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mh-container text-center text-white">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 mb-6"
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" aria-hidden="true" />
          <span className="uppercase tracking-widest text-white/90">BẮT ĐẦU HÀNH TRÌNH CỦA BẠN</span>
        </div>

        {/* Headline */}
        <h2
          className="font-extrabold tracking-tight text-white mb-5 mx-auto"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15, maxWidth: 700 }}
        >
          SẴN SÀNG ĐƯA DOANH NGHIỆP LÊN TẦM CAO MỚI?
        </h2>

        {/* Subtitle */}
        <p
          className="text-white/80 mb-10 mx-auto leading-relaxed"
          style={{ fontSize: 17, maxWidth: 560, lineHeight: 1.65 }}
        >
          Hãy để Matrix Holding đồng hành cùng bạn xây dựng nền tảng kinh doanh
          vững chắc và phát triển bền vững trong hệ sinh thái đa ngành của chúng tôi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dang-ky"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ color: "rgb(9,46,86)", fontSize: 15 }}
            id="cta-register-btn"
          >
            Đăng ký miễn phí
          </Link>
          <Link
            href="#he-sinh-thai"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
            style={{ fontSize: 15 }}
            id="cta-ecosystem-btn"
          >
            Xem cơ hội hợp tác
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-70">
          {[
            "Miễn phí tư vấn ban đầu",
            "Không cam kết dài hạn",
            "Hỗ trợ 24/7",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2 text-white" style={{ fontSize: 13 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
