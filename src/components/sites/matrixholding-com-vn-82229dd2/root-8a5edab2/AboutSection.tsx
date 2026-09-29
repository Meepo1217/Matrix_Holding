import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="gioi-thieu"
      className="mh-section"
      style={{ backgroundColor: "rgb(248,250,252)" }}
    >
      <div className="mh-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            {/* Eyebrow */}
            <span className="mh-eyebrow">VỀ CHÚNG TÔI</span>

            {/* Heading */}
            <h2
              className="font-extrabold tracking-tight text-slate-900 mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", lineHeight: 1.2 }}
            >
              GIỚI THIỆU MATRIX HOLDING
            </h2>

            {/* Description */}
            <p
              className="text-slate-600 mb-6 leading-relaxed"
              style={{ fontSize: 16, lineHeight: 1.75 }}
            >
              Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư
              và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam.
              Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ
              lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực,
              phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu
              của từng doanh nghiệp.
            </p>

            <p
              className="text-slate-600 mb-8 leading-relaxed"
              style={{ fontSize: 16, lineHeight: 1.75 }}
            >
              Với hơn 10 năm kinh nghiệm và mạng lưới đối tác rộng khắp, Matrix
              Holding đồng hành cùng hàng trăm doanh nghiệp Việt Nam trên con
              đường phát triển bền vững và hội nhập quốc tế.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { value: "10+", label: "Năm kinh nghiệm" },
                { value: "500+", label: "Đối tác doanh nghiệp" },
                { value: "50+", label: "Chuyên gia" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-extrabold"
                    style={{ fontSize: 32, color: "rgb(9,46,86)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-slate-500 mt-1"
                    style={{ fontSize: 13, fontWeight: 500 }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/gioi-thieu"
                className="mh-btn-navy"
                id="about-learn-more-btn"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="#lien-he"
                className="mh-btn-outline"
                id="about-portfolio-btn"
              >
                Xem Hồ sơ năng lực
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: 24, boxShadow: "0 24px 60px rgba(9,46,86,0.15)" }}
            >
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/about-image.jpg"
                alt="Giới thiệu Matrix Holding"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                style={{ maxHeight: 520 }}
              />

              {/* Floating accent card */}
              <div
                className="absolute bottom-6 left-6 rounded-xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-xl"
                style={{ maxWidth: 200 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgb(9,46,86)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900" style={{ fontSize: 14 }}>Tăng trưởng</p>
                    <p className="text-green-600 font-semibold" style={{ fontSize: 13 }}>+128% năm 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative circle */}
            <div
              className="absolute -top-8 -right-8 -z-10 rounded-full opacity-10"
              style={{
                width: 200,
                height: 200,
                backgroundColor: "rgb(9,46,86)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
