import Image from "next/image";

export default function PresidentMessage() {
  return (
    <section 
      className="relative mh-section"
      style={{
        background: "linear-gradient(to bottom, white 0%, rgb(241,245,249) 100%)"
      }}
    >
      <div className="mh-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-[450px]">
            {/* Dark background decorative block */}
            <div 
              className="absolute -top-8 -left-8 w-full h-[80%] rounded-[32px] -z-10"
              style={{ backgroundColor: "var(--mh-navy)" }}
              aria-hidden="true"
            />
            
            {/* Image Wrapper */}
            <div 
              className="relative rounded-[32px] overflow-hidden border-8 border-white shadow-2xl"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/images/president.jpg"
                alt="Chủ tịch Hội đồng Quản trị Matrix Holding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600">
                Minh họa AI
              </div>
            </div>
          </div>

          {/* Right Column: Quote */}
          <div className="pt-8 lg:pt-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[var(--mh-navy-light)] opacity-30" />
              <span className="mh-eyebrow !mb-0 !text-slate-500">LỜI CHỦ TỊCH</span>
            </div>
            
            {/* Quote Icon */}
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11L8 15H5L7 11V7H10V11ZM18 11L16 15H13L15 11V7H18V11Z" fill="#F59E0B" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote 
              className="font-extrabold text-[var(--mh-navy)] leading-[1.3] mb-10"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              “Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.”
            </blockquote>

            {/* Signature */}
            <div className="pl-5" style={{ borderLeft: "3px solid #F59E0B" }}>
              <div className="font-bold text-slate-900 text-lg mb-1">
                Chủ tịch Hội đồng Quản trị
              </div>
              <div className="text-slate-500 font-medium text-sm">
                Matrix Holding
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
